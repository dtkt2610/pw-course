# Tổng hợp kiến thức buổi 12

## API Testing  
**1. Tổng quan về API**
- API (Application Programming Interface) là bộ quy tắc giúp các phần mềm giao tiếp với nhau. Nó đóng vai trò như một "cầu nối" hay "hợp đồng" giúp các hệ thống làm việc cùng nhau mà không cần biết chi tiết bên trong của nhau
- Mục đích: Giúp phát hiện lỗi sớm (trước khi có giao diện người dùng), đảm bảo logic dữ liệu chính xác, kiểm tra bảo mật, hiệu năng và giúp quá trình phát triển không bị phụ thuộc vào frontend.

**2. Các thành phần của một API**
Một API thường bao gồm các yếu tố sau:
  - Có 3 loại phổ biến: 
    - Endpoint (URL): Địa chỉ để truy cập tài nguyên
    - HTTP Method (Phương thức):
      - GET: Lấy dữ liệu
      - POST: Tạo mới dữ liệu
      - PUT/PATCH: Cập nhật dữ liệu
      - DELETE: Xóa dữ liệu
  - Request (Yêu cầu gửi đi): Gồm Headers (thông tin bổ sung như token), Parameters (tham số trên URL) và Body (dữ liệu gửi lên, thường là JSON)
  - Response (Phản hồi trả về): Gồm Status Code (mã trạng thái như 200 OK, 404 Not Found), Headers và Body (dữ liệu trả về)
  - API Documentation: Tài liệu hướng dẫn sử dụng, phổ biến nhất là dùng Swagger

**3. Các công cụ gọi API**
Có 3 cách phổ biến để thực hiện gọi một API:
  - Command line: Sử dụng công cụ cURL
  - Giao diện đồ họa (UI): Sử dụng Postman để tổ chức các bộ sưu tập (Collections), quản lý môi trường (Environments) và kiểm tra kết quả trực quan
  - Automation: Sử dụng các framework như Playwright, RestAssured hoặc JMeter

**4. API Testing với Playwright**
Playwright cung cấp một công cụ mạnh mẽ để thực hiện automation test cho API mà không cần thông qua trình duyệt:
- Request Fixture: Sử dụng "request" để thực hiện các lệnh gọi API trực tiếp trong code
- Cú pháp cơ bản: const response = await request.get(URL);
- Xử lý dữ liệu: Kết quả trả về có thể lấy ở dạng văn bản (response.text()) hoặc đối tượng (response.json()) để thực hiện kiểm tra (assertion)
- Assertion: Kiểm tra mã trạng thái (expect(response.status()).toBe(200)) hoặc kiểm tra nội dung/độ dài dữ liệu trong body