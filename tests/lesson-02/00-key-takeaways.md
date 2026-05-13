# Tổng hợp kiến thức buổi 2,3
## Git
**1. Tổng quan về Git**
- Git: là một hệ thống quản lý phiên bản, phổ biến nhất hiện nay là Distributed Version Control System (DVCS).
- Lịch sử: Được tạo ra bởi Linux Torvalds vào tháng 4/2005 khi mối quan hệ giữa cộng đồng Linux và BitMover đổ vỡ

**2. Sự khác nhau giữa Git và GitHub**
| Git | GitHub |
|------|------|
| Là một phần mềm | Là một dịch vụ web |
| Cài trên máy của bạn | Host trên website |
| Là command line tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên |
| Có các tính năng của Version Control System | Có các tính năng của Version Control System và một số tính năng khác (GitHub Actions, GitHub Copilot) |

**3. Trạng thái của Git - Three states:**
- Working Directory (màu đỏ): Nơi chứa các file đang trực tiếp chỉnh sử hoặc các file mới tạo 
- Staging Area (màu xanh): Nơi các file được đưa vào vùng để chuẩn bị commit (tạo ra các phiên bản)
- Repository (màu nâu): Nơi lưu trữ các phiên bản (commit)

**4. Các câu lệnh và quy trình làm việc của git:**

***4.1 Quy trình làm việc của git:***
- *Không dùng global config:* init --> config --> add --> commit --> push
- *Dùng global config:* init --> config --> add --> commit --> push

***4.2 Các câu lệnh:***
- *git init*: Khởi tạo một repository mới
- *git config --global user.name "Tên"* & *git config --global user.email "email"*: Dùng để đặt mặc định username và email cho toàn bộ các repo trên máy tính. Cần config để Git biết được ai là người commit
- *git remote add origin <url>*: Tạo repo GitHub và liên kết với repo local
- *git add <tên file>*: Thêm một file cụ thể vào vùng Staging hoặc git add .: dùng để thêm toàn bộ file được tạo hoặc mới thay đổi vào vùng staging
- *git commit -m "<message>"*: Lưu các commit từ vùng staging vào repository
- *git push origin main*: Dùng để đẩy code lên GitHub
- *git status*: Dùng để xem trạng thái của file 
 - file màu xanh: vùng staging 
 - file màu đỏ: vùng working directory
- *git log*: Dùng để kiểm tra danh sách commit

**5. Quy tắc commit (Commit Convention):**
- Giúp code gọn gàng, sạch đẹp hơn, chuyên nghiệp hơn
- Cấu trúc: <type>:<short_description>
 - type: loại commit
  - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
  - feat: thêm tính năng mới, test case mới
  - fix: sửa lỗi 1 test trước đó
 - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

## JavaScript basic
**1. Tổng quan về JavaScript**
- JavaScript: là một ngôn ngữ lập trình được ra đời vào năm 1995 bởi Brendan Eich. 
- Môi trường chạy: JavaScript chạy trên trình duyệt nhờ các Engine (như V8 của Chrome SpiderMonkey của Firefox), nhưng để chạy trực tiếp trên máy tính, ta cần cài đặt NodeJS

**2. Cú pháp cơ bản và Comment**
- Cú pháp cơ bản: console.log("nội dung"); - có thể dùng nháy đơn ('') hoặc dùng nháy kép ("").
- Để thực thi file, sử dụng lệnh: node <tên file> trong terminal
- Comment: Dùng để vô hiệu hóa tạm thời một đoạn code và dòng code được comment sẽ bị bỏ qua, không được thực thi. Có 2 cách để comment: 
 - Comment 1 dòng: //
 - Comment nhiều dòng: /**/

**3. Biến (Variables) và Hằng (Constants)**
- Biến (Variables):  Dùng để lưu trữ giá trị có thể thay đổi được, khai báo bằng từ khóa *let* hoặc *var*
- Khai báo biến: <từ khóa><tên biến> = <giá trị>
- Sự khác biệt giữa *let* và *var*:

| let | var |
|------|------|
| Cú pháp hiện đại | cú pháp cũ |
| Không cho phép khai báo lại | Cho phép khai báo lại |
| Phạm vi theo block | Phạm vi global |
| Không gây nhầm lẫn khi quên rằng đã khai báo trước đó | Có thể gây nhầm lẫn |

- Hằng (Constants): Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần, khai báo bằng từ khóa *const*
- Khai báo hằng: <từ khóa><tên hằng> = <giá trị>
- Mặc định dùng const - giúp code an toàn hơn, dễ đọc hơn và chỉ dùng let khi cần gán lại giá trị, không dùng var 

**4. Kiểu dữ liệu (Data Type)**

Có 8 kiểu dữ liệu và được chia thành 2 nhóm chính: 
- Kiểu nguyên thủy (Primitive):
 - Number: số thực và số nguyên
 - String: chuỗi ký tự
 - Boolean: true/false
 - Undefined
 - Null
 - Symbol
 - BigInt

- Kiểu tham chiếu (Reference): Object
- Sử dụng hàm *typeof <tên biến>* đê kiểm tra biến đó thuộc kiểu dữ liệu nào.

**5. Toán tử so sánh**
- Toán tử so sánh: Dùng để so sánh hai toán hạng và trả kết quả về dạng boolean (true or false)
- Toán tử so sánh được chia làm 3 nhóm: 
 - So sánh bằng: Ưu tiên dùng so sánh 3 bằng (===) vì nó so sánh cả giá trị và kiểu dữ liệu, chỉ dùng so sánh 2 bằng (==) khi muốn so sánh mà không quan tâm đến kiểu dữ liệu
  - == và ===
 - So sánh không bằng
  - !
 - So sánh lớn hơn, nhỏ hơn
  - > 
  - < 
  - <=
  - >=

**5. Toán tử logic**
- Toán tử logic: Dùng để kết hợp nhiều điều kiện và trả về boolean
 - && (AND): Trả về true nếu tất cả các vế của mệnh đề đều là true
 - || (OR): Trả về true nếu ít nhất một trong các vế của mệnh đề là true

**6. Toán tử một ngôi**
- Toán tử một ngôi: là toán tử chỉ cần một toán hạng để thực hiện
- Phân loại: Có hai loại chính:
 - Prefix: toán tử nằm ở phía trước - tăng hoặc giảm giá trị trước, sau đó mới trả về kết quả
  - ++x;
  - --x:
 - Postfix: toán tử nằm ở phía sau - thực hiện trả về giá trị trước, sau đó mới thực hiện tăng hoặc giảm giá trị của biến
  - x++;
  - x--;






