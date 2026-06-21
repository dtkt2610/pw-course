import { test, expect } from '@playwright/test';
import { MaterialBasePage, TodoPage } from './01-pom';

test('Bài học 3: Todo Page', async ({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const todoPage = new TodoPage(page);

    await test.step('Đi tới trang chủ material', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Vào trang Todo', async () => {
        await todoPage.gotoPage('todo');
    });

    await test.step('Thêm 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await todoPage.addTodo(`Todo ${i}`);
        }
    });

    await test.step('Xóa các todo số lẻ', async () => {
        await todoPage.handleConfirmDialog();

        for (let i = 1; i <= 100; i += 2) {
            await todoPage.deleteTodo(i);
        }
    });
    await test.step('Kiểm tra todo 90 nằm trong viewport', async () => {
        const todo90 = page.locator("//button[@id='todo-90-delete']");

        await todo90.scrollIntoViewIfNeeded();
        await expect(todo90).toBeInViewport();
    });
    await test.step('Kiểm tra todo 21 bị ẩn', async () => {
        await expect(page.locator("//button[@id='todo-21-delete']")).toBeHidden();
    });

});