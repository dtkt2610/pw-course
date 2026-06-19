import { test, expect } from '@playwright/test';

test.describe("ACCOUNT - Account", async () => {
    const username = 'k23-thoa';
    const email = 'thoadinhthikim000@gmail.com';
    const password = 'Thoa123@Strong';
    const firstname = 'K23';
    const lastname = 'Thoa';
    const admin = 'betterbytes.academy.admin';
    const passwordAdmin = 'StrongPass@BetterBytesAcademy';
    test.beforeEach("Login vào trang  admin với account admin", async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");

        await page.locator('//input[@id="user_login"]').fill(admin);
        await page.locator('//input[@id="user_pass"]').fill(passwordAdmin);
        await page.locator('//input[@id="wp-submit"]').click();
    });
    test("@ACC_001: Create account with editor permission", async ({ page }) => {
        await test.step("step 1: Đi tới màn quản lý user", async ({ }) => {
            await page.locator('//div[text()="Users"]').click();
            await page.waitForLoadState('networkidle');
            // heading 'Users' hiển thị
            await expect(page.locator('//h1[@class="wp-heading-inline"]')).toBeVisible();
            // button 'Add User' enabled
            await expect(page.locator('//a[@class="page-title-action"]')).toBeEnabled();
        });
        await test.step("step 2: Thực hiện thêm mới user", async ({ }) => {
            await page.locator('//a[@class="page-title-action"]').click();
            await page.locator('//input[@id="user_login"]').fill(username);
            await page.locator('//input[@id="email"]').fill(email);
            await page.locator('//input[@id="first_name"]').fill(firstname);
            await page.locator('//input[@id="last_name"]').fill(lastname);
            await page.locator('//input[@id="pass1"]').click();
            await page.locator('//input[@id="pass1"]').press('Control+A');
            await page.locator('//input[@id="pass1"]').fill(password);
            await page.locator('//select[@id="role"]').selectOption('Editor');
            await page.locator('//input[@id="createusersub"]').click();
            await expect(page.locator('//div[@id="message"]')).toContainText("New user created.");
        });

        await test.step("step 3: Đăng xuất admin account và đăng nhập vào bằng account vừa tạo", async ({ }) => {
            await page.locator('//*[@id="wp-admin-bar-my-account"]').hover();
            await page.locator('//*[@id="wp-admin-bar-logout"]/a').click();

            await page.locator('//input[@id="user_login"]').fill(username);
            await page.locator('//input[@id="user_pass"]').fill(password);
            await page.locator('//input[@id="wp-submit"]').click();

            // Hiển thị
            await expect(page.locator('//*[@id="menu-dashboard"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-posts"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-media"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-pages"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-comments"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-users"]')).toBeVisible();
            await expect(page.locator('//*[@id="menu-tools"]')).toBeVisible();

            // Không hiển thị
            await expect(page.locator('//div[text()="Appearance"]')).toHaveCount(0);
            await expect(page.locator('//div[text()="Users"]')).toHaveCount(0);
            await expect(page.locator('//div[text()="Plugins"]')).toHaveCount(0);
        });
    });

    test("@ACC_002: Create account with Subscriber permission", async ({ page }) => {

        await test.step("step 1: Đi tới màn quản lý user", async ({ }) => {
            await page.locator('//div[text()="Users"]').click();
            await page.waitForLoadState('networkidle');
            // heading 'Users' hiển thị
            await expect(page.locator('//h1[@class="wp-heading-inline"]')).toBeVisible();
            // button 'Add User' enabled
            await expect(page.locator('//a[@class="page-title-action"]')).toBeEnabled();
        });
        await test.step("step 2: Thực hiện thêm mới user", async ({ }) => {
            await page.locator('//a[@class="page-title-action"]').click();
            await page.locator('//input[@id="user_login"]').fill(username);
            await page.locator('//input[@id="email"]').fill(email);
            await page.locator('//input[@id="first_name"]').fill(firstname);
            await page.locator('//input[@id="last_name"]').fill(lastname);
            await page.locator('//input[@id="pass1"]').click();
            await page.locator('//input[@id="pass1"]').press('Control+A');
            await page.locator('//input[@id="pass1"]').fill(password);
            await page.locator('//select[@id="role"]').selectOption('Subscriber');
            await page.locator('//input[@id="createusersub"]').click();
            await expect(page.locator('//div[@id="message"]')).toContainText("New user created.");
        });

        await test.step("step 3: Đăng xuất admin account và đăng nhập vào bằng account vừa tạo", async ({ }) => {
            await page.locator('//*[@id="wp-admin-bar-my-account"]').hover();
            await page.locator('//*[@id="wp-admin-bar-logout"]/a').click();

            await page.locator('//input[@id="user_login"]').fill(username);
            await page.locator('//input[@id="user_pass"]').fill(password);
            await page.locator('//input[@id="wp-submit"]').click();

            // Hiển thị
            await expect(page.locator('//*[@id="menu-dashboard"]')).toBeVisible();


            await expect(page.locator('//*[@id="menu-users"]')).toBeVisible();


            // Không hiển thị
            await expect(page.locator('//div[@id="menu-posts"]')).toHaveCount(0);
            await expect(page.locator('//*[@id="menu-media"]')).toHaveCount(0);
            await expect(page.locator('//*[@id="menu-pages"]')).toHaveCount(0);
            await expect(page.locator('//*[@id="menu-comments"]')).toHaveCount(0);
            await expect(page.locator('//*[@id="menu-tools"]')).toHaveCount(0);
            await expect(page.locator('//div[text()="Appearance"]')).toHaveCount(0);
            await expect(page.locator('//div[text()="Users"]')).toHaveCount(0);
            await expect(page.locator('//div[text()="Plugins"]')).toHaveCount(0);
        });
    });

    await test.afterEach("Đăng xuất account vừa tạo - đăng nhập vào bằng account admin và xóa account vừa tạo", async ({ page }) => {
        await page.locator('//li[@id="wp-admin-bar-my-account"]').hover();
        await page.locator('//*[@id="wp-admin-bar-logout"]/a').click();

        await page.locator('//input[@id="user_login"]').fill('betterbytes.academy.admin');
        await page.locator('//input[@id="user_pass"]').fill('StrongPass@BetterBytesAcademy');
        await page.locator('//input[@id="wp-submit"]').click();

        await page.locator('//div[text()="Users"]').click();
        await page.waitForLoadState('networkidle');

        await page.locator('//input[@id="user-search-input"]').click();
        await page.locator('//input[@id="user-search-input"]').fill(username);
        await page.locator('//input[@id="search-submit"]').click();


        await page.locator('//td[@data-colname="Username"]').hover();
        await page.locator('//td[@data-colname= "Username"]/div/span[2]').click();

        if (await page.locator('//input[@id="delete_option0"]').isVisible()) {
            await page.locator('//input[@id="delete_option0"]').check();
        }
        await page.locator('//input[@id="submit"]').click();

        await page.locator('//input[@id="user-search-input"]').click();
        await page.locator('//input[@id="user-search-input"]').fill(username);
        await page.locator('//input[@id="search-submit"]').click();

        await expect(page.locator('//a[text()="k23-thoa"]')).toHaveCount(0);
    });
});