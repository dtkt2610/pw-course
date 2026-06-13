# Tổng hợp kiến thức lesson 7

**1. DOM Relations**
- Cách các node giao tiếp với nhau trên cây cấu trúc: 
  - Self: Node hiện tại đang đứng 
  - Parent: Node cha, nằm ngay phía trên trực tiếp của node hiện tại
  - Child: Các node con, nằm ngay phía dưới trực tiếp của node hiện tại
  - Ancestor (Tổ tiên): Là các node cha, ông, cố,... của node hiện tại 
  - Descendant (Hậu duệ): Là các node con, cháu, chắt,... của node hiện tại 
  - sibling: Là những phần tử cùng cấp và cùng cha với node hiện tại 
  - following: Là các node ở phía bên tay phải của node hiện tại, và không bao gồm các node con của nó 
  - Preceding: Gồm các node ở phía bên tay trái node hiện tại ngoại trừ các node tổ tiên
  - Following-sibling: Là những node anh em phía sau 
  - Preceding-sibling: LÀ những node anh em phía trước

**2. Xpath Advance Methods**
- Xpath axes methods - Phương thức trục Xpath: Là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.
- Công dụng: 
  - Tìm kiếm elements dựa trên vị trí tương đối (parent, child,
sibling, ancestor...)
  - Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc
tương đối
 
- Cú pháp chung: //tag/relationship::tag_name[@attr='value']
- Các phương thức phổ biến: 
  - *child::* - Tìm con trực tiếp 
  - *descendant::* - Tìm tất cả con cháu 
  - *parent::* - Tìm node cha
  - *ancestor::* - Tìm node tổ tiên
  - *following-sibling::* - Tìm node anh em phía sau
  - *preceding-sibling::* - Tìm node anh em đứng trước
  - *following::* - Tìm tất cả các node sau trong document
  - *ancestor-or-self::* - Tìm node tổ tiên hoặc chính nó
  - *preceding::* - Tìm tất cả các node trước trong document
  - *ancestor-or-self::* - Tìm node con cháu hoặc chính nó

- Các hàm và toán tử bổ trợ:
  - Wildcard (*): Khớp tất cả các loại thẻ 
  - AND/OR: Tất cả điều kiện phải đúng / Một trong các điều điện đúng
  - text(): Lấy text của node trực tiếp của element
  - normalize-space(): Chuẩn hóa khoảng trắng, loại bỏ khoảng trắng thừa ở đầu, cuối và giữa text
  - contains(): Kiểm tra chứa chuỗi con, tìm element có chứa một phần text, không cần khớp chính xác 


