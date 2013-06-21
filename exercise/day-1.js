/*
https://github.com/SLyHuy/jquery-training
Bài 1:
DOM Traversal and Manipulation.
Không dùng Event Handling. 

Yêu cầu HTML:
+ Tạo một menu cơ bản (ul > li)
+ Menu có thể có nhiều cấp.
+ Text của mỗi menu (li) là một chuỗi bất kỳ.

Yêu cầu CSS:
+ Text màu đen.
+ Màu nền document: trắng.
+ Màu nền mỗi menu: xanh da trời.
+ Class hightlight: background màu đỏ.

Dùng JS làm những việc sau:
a/. Log ra số lượng tất cả menu (li).
b/. Add class hightlight cho những menu có thứ tự chẵn, để tạo nên những menu xen kẽ màu xanh - đỏ.
c/. Làm sao để khi người dùng click vào mỗi menu thì mở tab mới và search google với từ khóa là nội dung text của menu đó.
*Chú ý không dùng hàm lắng nghe sự kiện.
Gợi ý, để search google với từ khóa "jquery training" thì ta dùng link sau: https://www.google.com/search?q=jquery%20training
Cấu trúc: https://www.google.com/search?q= + [Từ khóa]

d/. Sắp xếp menu cấp đầu tiên theo thứ tự tăng dần của bảng chữ cái Alphabet.
Ví dụ: Menu lớn gồm "Trang chủ", "Sản phẩm", "Hỗ trợ", "Liên hệ". JS sẽ sắp lại thành: "Hỗ trợ", "Liên Hệ", "Sản phẩm", "Trang chủ".

e/. Làm bold tất cả những menu có chứa ký tự "B" không phân biệt hoa thường trong nội dung của nó, đồng thời gạch ngang tất cả các menu có chứa từ "không" hoặc từ "no" không phân biệt hoa thường.
*/

/*
Bài 2:
Event Handling & Animation

Yêu cầu HTML:
+ Tạo 3 cái div, có kích thước 50x50 px, absolute, nằm trong màn hình.

Yêu cầu CSS:
+ Màu sắc, boder cho 3 cái div tùy thích, ngoại trừ màu đen, màu trắng.
+ Background document màu trắng.

Dùng JS làm những việc sau:
a/. Hover vào từng hình thì đổi màu nó thành màu đen (active). Rê chuột ra ngoài thì màu trở lại bình thường.
b/. Khi hình nào có màu đen (active) thì nó phải nằm cao hơn những hình còn lại, hết màu đen thì trở lại bình thường.
c/. Click vào mỗi hình kích thước nó lớn thêm 20px.
d/. Click vào khoảng trắng ngoài các hình, thì tất cả các hình giảm đi 10px.
e/. Mới đầu vào, tất cả các hình sẽ animate từ phía trên màn hình xuống vị trí ban đầu mà css định.
f/. Khi kích thước mỗi hình lớn hơn 100px thì hình đó sẽ animate fade out mất đi, đồng thời move qua bên trái màn hình đến khi khuất dạng.
g/. Tạo thêm 1 nút button bằng Js vào màn hình. Khi click vào sẽ tạo thêm 1 div hình vuông có kích thước 50x50px vị trí ngẫu nhiên, màu ngẫu nhiên, ngoại trừ đen và trắng.
h/. Sử dụng lại kết quả câu e và g để khi click vào button, hình vuông đó sẽ xuất hiện và animate như là câu e.
i/. Làm cho mỗi hình có thể drag (kéo bằng chuột) đi được.
*/
