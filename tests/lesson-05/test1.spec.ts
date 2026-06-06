import { test, expect } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài học 1', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    });
    await test.step('Nhập thông tin vào các ô', async () => {
        await page.locator('//input[@id="username"]').fill("Kim Thỏa");
        await page.locator("//input[@id='email']").fill("thoadinhthikim000@gmail.com");
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption('music');
        await page.locator("//select[@id='country']").selectOption('usa');
        await page.locator("//input[@id='dob']").fill("2003-10-26");
        await page.locator("//input[@id='profile']").setInputFiles('image/5be1310ba987dc53debce515b13f9185.jpg');
        await page.locator("//textarea[@id='bio']").fill("xinchao");
    });
    await test.step('Click vào Register', async () => {
        await page.locator("//button[@type='submit']").click();
    });
});