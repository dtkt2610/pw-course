import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('Click vào bài học 2', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    await test.step('Sản phẩm 1: thêm 2 lần', async () => {
        await page.locator("(//button[text()='Add to Cart'])[1]").click();
        await page.locator("(//button[text()='Add to Cart'])[1]").click();
    });

    await test.step('Sản phẩm 2: thêm 3 lần', async () => {
        await page.locator("(//button[text()='Add to Cart'])[2]").click();
        await page.locator("(//button[text()='Add to Cart'])[2]").click();
        await page.locator("(//button[text()='Add to Cart'])[2]").click();
    });
    await test.step('Sản phẩm 3: thêm 1 lần', async () => {
        await page.locator("(//button[text()='Add to Cart'])[3]").click();
    });
});