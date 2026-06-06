import { test } from '@playwright/test';

test('Todo page', async ({ page }) => {

    await test.step('Đi tới trang chủ material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click vào bài học 3: Todo page', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });

    await test.step('Thêm mới 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);

            await page.locator("//button[text()='Add Task']").click();
        }
    });

    await test.step('Xóa các todo có số lẻ', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i += 2) {

            await page.locator(`//button[@id='todo-${i}-delete']`).click();

            await page.waitForTimeout(100);
        }
    });
});