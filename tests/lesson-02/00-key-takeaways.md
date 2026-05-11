**Bài tập buổi 2**
1. Tổng quan về Git
- Git: là một hệ thống quản lý phiên bản, phổ biến nhất hiện nay là Distributed Version Control System (DVCS).
- Lịch sử: Được tạo ra bởi Linux Torvalds vào tháng 4/2005 khi mối quan hệ giữa cộng đồng Linux và BitMover đổ vỡ
2. Sự khác nhau giữa Git và GitHub
|   Git   |   GitHub |
|---------|-----------|
|   Là một phần mềm   |   Là một dịch vụ web |
|   Cài trên máy của bạn   |   Host trên website |
|   Là một command line tool   |   Là công cụ có giao diện |
|   Là công cụ quản lý phiên bản, đưa file vào Git
repository   |  Là nơi để upload Git repository lên  |
|   Có các tính năng của Version Control System   |   Có các tính năng của Version Control System và
một số tính năng khác (GitHub Actions, GitHub
Co-pilot) |
|---------|-----------|

3. Trạng thái của Git - Three states:
- Working Directory (màu đỏ): Nơi chứa các file đang trực tiếp chỉnh sử hoặc các file mới tạo 
- Staging Area (màu xanh): Nơi các file được đưa vào vùng để chuẩn bị commit (tạo ra các phiên bản)
- Repository (màu nâu): Nơi lưu trữ các phiên bản (commit)
4. Các câu lệnh và quy trình làm việc của git:
4.1 Quy trình làm việc của git:
***Không dùng global config***
init --> config --> add --> commit --> push
***Dùng global config***
init --> config --> add --> commit --> push
4.2 Các câu lệnh:
- git init: Khởi tạo 
- 