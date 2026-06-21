import { expect, test } from '@playwright/test';
import { MaterialBasePage, PersonalNotesPage } from './01-pom';
test('Bài học 4: Personal Notes', async ({ page }) => {
    const materialBasePage = new MaterialBasePage(page);
    const personalNote = new PersonalNotesPage(page);

    let data: [string, string][] = [];
    await test.step('Lấy data từ VnExpress', async () => {
        data = await personalNote.getVnExpressData(10);
    });
    await test.step('Đi tới trang chủ material', async () => {
        await materialBasePage.openMaterialPage();
    });
    await test.step('Đi tới Personal Notes', async () => {
        await materialBasePage.gotoPage('personal');
    });
    await test.step('Add notes', async () => {
        await personalNote.addMultipleNotes(data);
    });

    await test.step('Search keyword', async () => {
        await personalNote.search('Ý tưởng');
    });
    await test.step('Verify tất cả kết quả chứa keyword', async () => {
        await personalNote.expectAllSearchResultsContain('Ý tưởng');
    });
});