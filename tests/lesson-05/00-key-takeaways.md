# Tổng hợp kiến thức buổi 7

## DOM - Document Object Model 
**1. DOM - Document Object Model là gì ?**
- DOM là mô hình đối tượng tài liệu, giúp máy tính nhìn nhận một website dưới dạng một "cây có cấu trúc" thay vì chỉ là hình ảnh hay văn bản như mắt người nhìn thấy
- Cách truy cập: Có thể mở cây DOM bằng cách nhấn phím F12 hoặc click chuột phải chọn "Inspect" --> Chọn tab Element
- Cấu trúc của một phần tử (Element): Một element thường bao gồm thẻ mở, thuộc tính (attribute), giá trị của thuộc tính, nội dung văn bản (text) và thẻ đóng. Ngoài ra còn có các thẻ tự đóng như <img>, <br/>, <hr/>
- Các loại thẻ HTML thường gặp:
  - Thẻ khung trang: <html> (thẻ gốc), <head> (chứa metadata, tiêu đề tab), <body> (nội dung hiển thị).
  - Thẻ bố cục & Ngữ nghĩa: <div> (khối chung), <header>, <footer>, <nav>, <section>. 
  - Thẻ nội dung: <h1> đến <h6> (tiêu đề), <p> (đoạn văn), <ul>/<li> (danh sách), <a> (liên kết), <img> (hình ảnh). 
  - Thẻ Form (Quan trọng cho Testing): <input> (ô nhập liệu), <button> (nút bấm), <select>/<option> (danh sách thả xuống), <textarea> (văn bản nhiều dòng)
**2. Selector**
- Selector là công cụ giúp tìm đúng phần tử trên trang web để tương tác (như click, nhập liệu)
- Có 3 loại phổ biến: 
  - XPath: Dùng được trong hầu hết các trường hợp, đa dạng, có khả năng tìm các phần tử khó
    - Có 2 loại:
      - Tuyệt đối: đi dọc theo cây DOM và bắt đầu bởi 1 /
      - Tương đối: tìm dựa vào đặc tính và bắt đầu bởi 2 //
  - CSS selector: Ngắn gọn, performance cao, dùng cho các trường hợp dễ tìm, không linh hoạt bằng XPath
  - Playwright selector: chỉ dùng riêng cho Playwright, cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
**3. Cú pháp cơ bản của Playwright**
- Đơn vị khai báo: test là đơn vị cơ bản để viết một ca kiểm thử; bên trong có thể chia nhỏ thành các step (nên khớp 1-1 với các bước trong test case để dễ bảo trì).
- Điều hướng & Tìm kiếm: page.goto() để mở URL và page.locator() để tìm phần tử dựa trên selector.
- Tương tác chuột: Hỗ trợ .click() (click đơn), .dblclick() (click đúp), click chuột phải và kết hợp các phím bổ trợ như Shift.
- Nhập liệu (Input):
  - .fill(): Giống như dán nội dung vào ô nhập liệu.
  - .pressSequentially(): Mô phỏng việc gõ từng phím một, có thể thiết lập độ trễ (delay) giữa các phím.
- Các tương tác khác:
  - Radio/Checkbox: Sử dụng .check(), .setChecked() hoặc kiểm tra trạng thái với .isChecked().
  - Dropdown: Sử dụng .selectOption() với nhãn (label) tương ứng.
  - Tải tệp: Sử dụng .setInputFiles() để truyền đường dẫn tệp cần upload.