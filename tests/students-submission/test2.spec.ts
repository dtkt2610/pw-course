import { test, expect } from '@playwright/test';
import { MaterialBasePage, ProductPage } from './01-pom';

test('Bài học 2: Product Page', async ({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const productPage = new ProductPage(page);

    await test.step('Đi tới trang chủ material', async () => {
        await materialBasePage.openMaterialPage();
    });

    await test.step('Vào trang sản phẩm', async () => {
        await productPage.gotoPage('product');
    });

    await test.step('Thêm sản phẩm vào giỏ hàng', async () => {
        await productPage.addToCart(1, 2);
        await productPage.addToCart(2, 3);
        await productPage.addToCart(3, 1);
    });

    await test.step('Expected Result: Tổng số tiền đúng', async () => {
        await expect(page.locator("//td[@class='total-price']")).toHaveText('$110.00');
    });
});