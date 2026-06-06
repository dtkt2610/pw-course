import { test } from '@playwright/test';

test('Personal notes', async ({ page }) => {

    const notes = [
        ['click', 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'],
        ['fill', 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'],
        ['type', 'Hàm type dùng để nhập từng ký tự một vào phần tử'],
        ['hover', 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử'],
        ['check', 'Hàm check dùng để đánh dấu checkbox hoặc radio button'],
        ['uncheck', 'Hàm uncheck dùng để bỏ đánh dấu checkbox'],
        ['selectOption', 'Hàm selectOption dùng để chọn một hoặc nhiều option'],
        ['press', 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím'],
        ['dblclick', 'Hàm dblclick dùng để thực hiện double click vào phần tử'],
        ['dragAndDrop', 'Hàm dragAndDrop dùng để kéo và thả phần tử']
    ];

    await test.step('Đi tới trang chủ material', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click vào bài học 4', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });

    await test.step('Thêm 10 notes', async () => {
        for (const note of notes) {

            await page.locator("//input[@id='note-title']").fill(note[0]);

            await page.locator("//textarea[@id='note-content']").fill(note[1]);

            await page.locator("//button[text()='Add Note']").click();
        }
    });

    await test.step('Search keyword', async () => {
        await page.locator("//input[@id='search']").fill('một hoặc nhiều');
    });
});