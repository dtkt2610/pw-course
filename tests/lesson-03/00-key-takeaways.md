# Tổng hợp kiến thức buổi 3,4

## JavaScript basic
**1. Câu điều kiện - Conditional statements**
- Câu điều kiện được sử dụng để kiểm tra một đoạn logic trước khi thực thi mã nguồn. Nếu điều kiện đúng thì mã nguồn mới được chạy.
- Cú pháp: 
if (<điều kiện>){
    //code...
}
- Các loại câu điều kiện: 
  - if
  - if...else
  - if...else if...else 
  - switch...case

**2. Vòng lặp - Loop**
- Vòng lặp dùng để lặp lại một đoạn code logic nhiều lần dựa trên một điều kiện dừng nhất định. Có thể lặp một số lần nhất định, hoặc lặp vô hạn.
- Các loại vòng lặp: 
  - for (i)
  - for (of)
  - for (each)
  - for (in)
  - while
  - do...while
- Cú pháp vòng lặp for (i):
    for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
      //code
    }
  Trong đó:  
    - Điều kiện khởi tạo: chạy một lần duy nhất khi vòng lặp bắt đầu
    - Điều kiện lặp: Nếu điều kiện đúng thì vòng lặp tiếp tục chạy, nếu sai thì dừng
    - Cập nhật: Chạy vào mỗi cuối vòng lặp, và dùng để thay đổi giá trị của biến đếm

**3. Quy tắc - Convention**
- Convention là các quy tắc chung giúp mã nguồn có định dạng thống nhất, dễ nhìn và giúp các thành viên trong nhóm dễ dàng đọc hiểu code của nhau
- Các kiểu đặt tên phổ biến: 
  - snake_case
  - kebab-case
  - camelCase
  - PascalCase
  - UPPER_CASE

**4. Console log nâng cao**
- Console log là một công cụ quan trọng giúp debug và theo dõi code.
- Có nhiều cách để hiển thị dữ liệu: 
  - Sử dụng với nháy đơn, nháy kép
  - Sử dụng kèm với variable
  - Sử dụng cộng chuỗi


## Git
**1. Git - Undo**
- Thay đổi commit message của một commit gần nhất, sử dụng cú pháp: ***git commit --amend -m "<meassage mới>"***
- un-stage: đưa file từ Staging trở lại Working directory
  - un-stage một file cụ thể: ***git restore --staged <file>***
  - un-stage tất cả các file: ***git restore --staged .***
- Hủy bỏ commit đã thực hiện:
  - Đưa nội dung commit cuối về vùng Staging: ***git reset --soft HEAD~1***
  - Đưa nội dung commit cuối về vùng Working Directory: ***git reset HEAD~1***
- Commit đầu tiên của một repository không thể bị reset; nếu muốn thực hiện, phải xóa thư mục **.git** và khởi tạo lại.

**2. Git - Branching**
- Mục đích: Sử dụng nhánh giúp tạo ra các "dòng thời gian" song song để phát triển dự án, giúp phát triển tính năng mới mà không ảnh hưởng tới mã nguồn đang chạy ổn định và cho phép nhiều người làm việc độc lập, dễ dàng thử nghiệm các ý tưởng mới.

- Về bản chất: Tạo nhánh mới không phải copy mà chỉ là một con trỏ (pointer) trỏ tới một commit

- Các cấu lệnh cơ bản
  - *git branch*: Xem danh sách các nhánh hiện có
  - *git branch <tên_nhánh>*: Tạo nhánh mới
  - *git checkout <tên_nhánh>*: Di chuyển sang nhánh khác
  - *git checkout -b <tên_nhánh>*: vừa tạo vừa chuyển sang nhánh đó ngay lập tức
  - *git branch -D <tên_nhánh>*: Xóa nhánh ở máy cục bộ (cần đứng ở nhánh khác thực hiện)
  - *git push origin <tên_nhánh>*: Đẩy nhánh lên online (remote)
  - *git push -D origin <tên_nhánh>*: Xóa nhánh trên online (remote)

**3. Git - ignore**
- File *.gitignore* là một file cấu hình quan trọng trong Git, giúp chỉ định những file và thư mục nào sẽ không được theo dõi bởi Git
- Mục đích: Để loại bỏ các file nặng, các file build, file tạm thời của hệ thống, hoặc các thông tin nhạy cảm như API keys và mật khẩu
- Các cú pháp cơ bản trong file: 
  - **#**: Dùng để viết ghi chú
  - Bỏ qua file cụ thể. *Ví dụ: secret.txt* 
  - ***.log**: Bỏ qua tất cả các file có đuôi .log
  - Bỏ qua toàn bộ thư mục. *Ví dụ: build/; node_modules/;....*
  - **!important.log**: Quy định ngoại lệ, không bỏ qua file này cho dù nó khớp với quy tắc bên trên
  - ****/ *.tmp**: Bỏ qua tất cả file .tmp trong mọi thư mục con
  - Bỏ qua file chỉ ở thư mục gốc. *Ví dụ: /TODO*
  - doc/**/*.txt: Bỏ qua tất cả các file .txt trong thư mục doc/

