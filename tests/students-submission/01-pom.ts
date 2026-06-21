import { expect, Locator, Page } from '@playwright/test';
export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = "//a[@href='01-xpath-register-page.html']";
        this.xpathProductPage = '//a[@href="02-xpath-product-page.html"]';
        this.cssTodoPage = '//a[@href="03-xpath-todo-list.html"]';
        this.personalNote = this.page.locator("//a[@href='04-xpath-personal-notes.html']");
    }

    async openMaterialPage() {
        await this.page.goto('https://material.playwrightvn.com/');
    }

    async gotoPage(pageName: string) {
        if (pageName === 'register') {
            await this.page.locator(this.xpathRegisterPage).click();
        }
        else if (pageName === 'product') {
            await this.page.locator(this.xpathProductPage).click();
        }
        else if (pageName === 'todo') {
            await this.page.locator(this.cssTodoPage).click();
        }
        else if (pageName === 'personal') {
            await this.personalNote.click();
        }
        else {
            throw new Error(`Page không tồn tại: ${pageName}`);
        }
    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;
    xpathTraveling: string;
    xpathInterest: string;
    xpathCountry: string;
    xpathDob: string;
    xpathProfile: string;
    xpathBio: string;
    xpathRegister: string;
    constructor(page: Page) {
        super(page);
        this.xpathUsername = '//input[@id="username"]';
        this.xpathEmail = '//input[@id="email"]';
        this.xpathGenderFemale = '//input[@id="female"]';
        this.xpathGenderMale = '//input[@id="male"]';
        this.xpathTraveling = '//input[@id="traveling"]';
        this.xpathInterest = '//select[@id="interests"]';
        this.xpathCountry = '//select[@id="country"]';
        this.xpathDob = '//input[@id="dob"]';
        this.xpathProfile = '//input[@id="profile"]';
        this.xpathBio = '//textarea[@id="bio"]';
        this.xpathRegister = '//button[@type="submit"]';
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }
    async checkGender(gender: string) {
        if (gender.toLowerCase() === 'male') {
            await this.page.locator(this.xpathGenderMale).check();
        } else {
            await this.page.locator(this.xpathGenderFemale).check();
        }
    }
    async checkHobby(hobby: string) {
        await this.page.locator(`//input[@id='${hobby}']`).check();
    }
    async checkHobbies(hobbies: string[]) {
        for (const hobby of hobbies) {
            await this.checkHobby(hobby);
        }
    }
    async selectInterest(interest: string) {
        await this.page.locator(this.xpathInterest).selectOption(interest);
    }

    async selectCountry(country: string) {
        await this.page.locator(this.xpathCountry).selectOption(country);
    }

    async fillDob(dob: string) {
        await this.page.locator(this.xpathDob).fill(dob);
    }

    async uploadProfile(filePath: string) {
        await this.page.locator(this.xpathProfile).setInputFiles(filePath);
    }

    async fillBio(bio: string) {
        await this.page.locator(this.xpathBio).fill(bio);
    }

    async clickRegister() {
        await this.page.locator(this.xpathRegister).click();
    }
}

export class ProductPage extends MaterialBasePage {
    xpathAddToCartBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.xpathAddToCartBtn = page.locator('//button[text()="Add to Cart"]');
    }
    async addToCart(index: number, times: number = 1) {
        const button = this.xpathAddToCartBtn.nth(index - 1);

        for (let i = 0; i < times; i++) {
            await button.click();
        }
    }

}

export class TodoPage extends MaterialBasePage {
    xpathAddTaskBtn: Locator;
    xpathInputTask: Locator;
    constructor(page: Page) {
        super(page);
        this.xpathAddTaskBtn = page.locator('//button[text()="Add Task"]');
        this.xpathInputTask = page.locator('//input[@id="new-task"]');
    }
    async addTodo(text: string) {
        await this.xpathInputTask.fill(text);
        await this.xpathAddTaskBtn.click();
    }
    async handleConfirmDialog() {
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });
    }
    async deleteTodo(index: number) {
        await this.page.locator(`//button[@id='todo-${index}-delete']`).click();
    }
}

export class PersonalNotesPage extends MaterialBasePage {
    xpathInputNoteTitle: Locator;
    xpathInputNoteContent: Locator;
    xpathAddNoteBtn: Locator;
    xpathSearch: Locator;
    constructor(page: Page) {
        super(page);
        this.xpathInputNoteTitle = page.locator('//input[@id="note-title"]');
        this.xpathInputNoteContent = page.locator('//textarea[@id="note-content"]');
        this.xpathAddNoteBtn = page.locator('//button[text()="Add Note"]');
        this.xpathSearch = page.locator('//input[@id="search"]');
    }
    async getVnExpressData(limit = 10): Promise<[string, string][]> {
        await this.page.goto("https://vnexpress.net/khoa-hoc");

        const articles = this.page.locator("article");

        const results: [string, string][] = [];

        const count = await articles.count();
        console.log("articles count:", count);

        for (let i = 0; i < count && results.length < limit; i++) {
            const article = articles.nth(i);


            const titleLocator = article.locator("h4 a, h3 a, h2 a").first();

            if (await titleLocator.count() === 0) continue;

            const titleText = (await titleLocator.textContent())?.trim();
            if (!titleText) continue;


            const summaryLocator = article.locator("p");

            let summaryText = "";

            if (await summaryLocator.count() > 0) {
                summaryText = (await summaryLocator.first().textContent() ?? "").trim();
            }

            console.log("title:", titleText);
            console.log("summary:", summaryText);


            if (summaryText) {
                results.push([titleText, summaryText]);
            }

            if (results.length === limit) break;
        }

        console.log("VNExpress Data FINAL:", results);

        return results;
    }

    async addNote(title: string, content: string) {
        console.log("Adding note:", title);

        await this.xpathInputNoteTitle.fill(title);
        await this.xpathInputNoteContent.fill(content);

        console.log("Before click Add Note");
        await this.xpathAddNoteBtn.click();
        console.log("Clicked Add Note");
    }
    async addMultipleNotes(notes: [string, string][]) {
        for (const note of notes) {
            await this.addNote(note[0], note[1]);
        }
    }
    async search(keyword: string) {
        await this.xpathSearch.fill(keyword);
    }
    async expectAllSearchResultsContain(keyword: string) {
        const results = this.page.locator("div:has(> strong):has(> p)");

        const count = await results.count();

        for (let i = 0; i < count; i++) {
            const text = await results.nth(i).textContent();

            expect(text).toContain(keyword);
        }
    }

}
