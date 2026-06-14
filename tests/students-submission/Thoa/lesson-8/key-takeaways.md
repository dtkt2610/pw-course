# Tổng hợp kiến thức lesson 8

**1. Test group/ suite (Test describe)**
- Test suite: là một tập hợp các test cases có liên quan đến nhau 
- Test suite giúp nhóm các test lại để dễ quản lý và theo dõi
- Cú pháp: 
    test.describe('<tên suite>', async() => { 
        test ('test1',async({page}) => {
            //code
        });
    });

**2. Test Hooks**
- Hooks: là các hàm được thiết lập để chạy vào những thời điểm cụ thể trong chu kỳ chạy test hoặc suite
- Playwright có 4 loại hooks chính: 
  - beforeALl: Chạy duy nhất một lần trước tất cả các bài test trong suite
  - beforeEach: Chạy trước mỗi test riêng lẻ
  - afterEach: Chạy sau mỗi test riêng lẻ
  - afterAll: Chạy duy nhất một lần sau tất cả các bài test trong suite

**2. Assertion**
- Assertion: Là câu lệnh dùng để kiểm tra kết quả thực tế có đúng như mong đợi hay không. Nếu không có assertion, sẽ không biết được bài test đó thành công hay thất bại.
- Cú pháp: Sử dụng hàm expect được import từ thư viện @playwright/test
- Các loại assertion: 
  - Generic Assertions: Dùng để so sánh các giá trị cơ bản: expect (giá_trị) = (giá_trị)
  - Web-first Assertions (auto-waiting): Dùng cho các elements trên web, tự động chờ đến khi điều kiện được thỏa mãn: expect(phần_tử) có giá_trị. Ưu điểm: Web-first assertion sẽ chờ linh hoạt (tối đa 5s mặc định), nếu điều kiện thỏa mãn sớm hơn, nó sẽ thoát ra ngay lập tức để tiếp tục bài test, thay vì chờ cứng một khoảng thời gian cố định.

- Một số Web-first Assertions phổ biến: 
  - Element State: 
    - .toBeVisible(): hiển thị
    - .toBeHidden(): ẩn
    - .toBeEnabled(): kích hoạt
    - .toBeChecked(): Đã chọn
    - .toBeFocused(): Được tập trung
  - Text & Content:
    - .toContainText(): Có chứa text
    - .toHaveText(): Có chứa text chính xác, text khớp regex, kiểm tra nhiều elements
  - Attributes & Properties: 
    - .toHaveAttribute(): Kiểm tra thuộc tính
    - .toHaveClass(): Kiểm tra class
    - .toHaveValue(): Kiểm tra giá trị ô input
    - .toHaveCount(): kiểm tra số lượng phần tử
  - Page Assertions:
    - .toHaveURL(): Kiểm tra URL
    - .toHaveTitle(): Kiểm tra title
