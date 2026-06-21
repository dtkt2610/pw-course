import { expect, test } from '@playwright/test';
import { MaterialBasePage, RegisterPage } from './01-pom';

test('Bài học 1: Register Page', async ({ page }) => {

    const materialBasePage = new MaterialBasePage(page);
    const registerPage = new RegisterPage(page);

    await test.step('Đi tới trang chủ material', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Vào trang Register', async () => {
        await materialBasePage.gotoPage('register');
    });
    await test.step('Nhập thông tin', async () => {
        await registerPage.fillUsername('Kim Thỏa');
        await registerPage.fillEmail('thoadinhthikim000@gmail.com');

        await registerPage.checkGender('female');

        await registerPage.checkHobbies([
            'traveling'
        ]);

        await registerPage.selectInterest('music');

        await registerPage.selectCountry('usa');

        await registerPage.fillDob('2003-10-26');

        await registerPage.uploadProfile('image/5be1310ba987dc53debce515b13f9185.jpg');

        await registerPage.fillBio('xinchao');

        await registerPage.clickRegister();
    });

    await test.step('Verify thông tin nhập vào', async () => {
        const row = page.locator('//table[@id="userTable"]//tbody/tr[1]');
        await expect(row.locator('td').nth(1)).toHaveText('Kim Thỏa');
        await expect(row.locator('td').nth(2)).toHaveText('thoadinhthikim000@gmail.com');

        const infoText = await row.locator('td').nth(3).textContent() ?? '';

        expect(infoText).toContain('Gender: female');
        expect(infoText).toContain('Hobbies: traveling');
        expect(infoText).toContain('Country: usa');
        expect(infoText).toContain('Date of Birth: 2003-10-26');
        expect(infoText).toContain('Biography: xinchao');
    });

});