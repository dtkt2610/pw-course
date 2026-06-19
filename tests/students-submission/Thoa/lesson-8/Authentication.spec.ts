import { test, expect } from '@playwright/test';

test.describe("AUTH - Authentication", async () => {
    test.beforeEach("Đi tới trang login", async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
    test("@AUTH_001: Login fail", async ({ page }) => {
        const username = 'Thoafail';
        const password = '1882734';
        await test.step("step 1: Nhập vào thông tin username, password bị sai", async ({ }) => {
            await page.locator('//input[@id="user_login"]').fill(username);
            await expect(page.locator('//input[@id="user_login"]')).toHaveValue(username);
            await page.locator('//input[@id="user_pass"]').fill(password);
            await expect(page.locator('//input[@id="user_pass"]')).toHaveValue(password);
        });
        await test.step("step 2: Click button login", async ({ }) => {
            await page.locator('//input[@id="wp-submit"]').click();
            await expect(page.locator('//div[@id ="login_error"]')).toHaveText(`Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`);
        });
    });
    test("@AUTH_002: Login success", async ({ page }) => {
        const username = 'betterbytes.academy.admin';
        const password = 'StrongPass@BetterBytesAcademy';
        await test.step("step 1: Nhập vào thông tin username, password đúng", async ({ }) => {
            await page.locator('//input[@id="user_login"]').fill(username);
            await expect(page.locator('//input[@id="user_login"]')).toHaveValue(username);
            await page.locator('//input[@id="user_pass"]').fill(password);
            await expect(page.locator('//input[@id="user_pass"]')).toHaveValue(password);
        });
        await test.step("step 2: Click button login", async ({ }) => {
            await page.locator('//input[@id="wp-submit"]').click();
            await expect(page).toHaveURL('https://pw-practice-dev.playwrightvn.com/wp-admin/');
            await expect(page.locator('//*[@id="wpbody-content"]/div[4]/h1')).toHaveText('Dashboard');
        });
    });
});