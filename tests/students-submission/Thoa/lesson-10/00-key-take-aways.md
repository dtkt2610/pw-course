# Tổng hợp kiến thức buổi 10

**1. Javascript & Typescript**
- TypeScript là một superset (tập hợp mẹ) của JavaScript, giúp mở rộng các tính năng của JS
- Lý do ra đời của Typescript: JS được coi là quá "dễ dãi" dẫn đến nhiều lỗi tiềm ẩn; TS ra đời để "khó tính" hơn nhằm giảm bớt lỗi trong quá trình phát triển.
- Đặc điểm nổi bật: 
  - Hệ thống kiểu dữ liệu
  - Phát hiện lỗi sớm 
  - Interface & type alias
  - OOP features
  - Generic
- Định nghĩa kiểu: Có thể sử dụng type hoặc interface để định nghĩa cấu trúc dữ liệu, giúp mã nguồn sạch và rõ ràng hơn
  - Cú pháp: 
    - type: 
        type <type_name> = {
            prop1: dataType1;
            prop2: dataType2;
            ...
        }
    - interface:
        interface User {
            name: string;
            age: number;
        }
**2. Class & extends**
- Class: Dùng để mô hình hóa một đối tượng: có các thuộc tính (property - đặc tính) và hành vi (methods - các hành động mà đối tượng có thể có)
- Kế thừa (extends): Là cơ chế cho phép một class "thừa hưởng" toàn bộ thuộc tính và phương thức từ một class cha khác

**3. Page Object Model**
- Khái niệm:  POM là một design pattern (mô hình thiết kế) giúp tổ chức cấu trúc code automation test "sạch đẹp" và dễ bảo trì hơn.
- Cấu trúc: Mỗi trang web được đại diện bởi một Class duy nhất
  - Properties: các thành phần của trang web
  - Methods: Các hành động có thể thực hiện trên trang đó, thường bắt đầu bằng một động từ
- Lợi ích của việc dùng POM:
  - Dễ bảo trì (Maintainability): Khi giao diện (UI) thay đổi, bạn chỉ cần cập nhật locator ở một nơi duy nhất thay vì sửa đổi ở tất cả các bài test
  - Tái sử dụng (Reusability): Các phương thức đã viết có thể được dùng lại cho nhiều ca kiểm thử khác nhau
  - Code rõ ràng: Tách biệt giữa logic kiểm thử và thông tin về các thành phần trên trang web, giúp bài test dễ đọc hơn
- Tiêu chuẩn: Không có một chuẩn chung duy nhất cho POM; nó phụ thuộc vào ngôn ngữ, framework, kinh nghiệm và sở thích của người viết