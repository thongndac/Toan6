# 🧮 🦄 Toán 6 - Kết nối tri thức | Ứng Dụng Học Tập Tương Tác Hiện Đại

Ứng dụng học Toán lớp 6 tương tác ngoại tuyến (Offline Interactive Web App) được thiết kế tinh tế, sinh động theo chương trình sách giáo khoa **Kết nối tri thức với cuộc sống** (Trọn bộ 2 Tập, 9 Chương, 43 Bài học). 

Dự án sở hữu cấu trúc mã nguồn **modular chuẩn hóa**, sẵn sàng đưa lên GitHub, kết hợp cùng các yếu tố **gamification** dễ thương giúp học sinh tiếp thu toán học một cách hào hứng, dễ nhớ nhất cùng bạn **Kỳ Lân Pi (Pi Unicorn)**.

---

## ✨ Điểm Nổi Bật Của Ứng Dụng

### 1. 🦄 Kỳ Lân Pi Mascot Đồng Hành Đáng Yêu
* **Thiết kế Vector độc quyền:** Kỳ Lân Pi được vẽ hoàn toàn bằng mã SVG nội tuyến tinh tế, nổi bật với chiếc sừng xoắn vàng lấp lánh, bờm và đuôi cầu vồng pastel nhẹ nhàng, tối ưu hiển thị sắc nét trên mọi độ phân giải.
* **Biểu cảm động tương tác:** Kỳ Lân Pi tự động đổi trạng thái cảm xúc (Idle, Success, Wrong). Sừng sẽ phát sáng lấp lánh, đuôi vẫy tinh nghịch, mắt chớp tự nhiên, và biểu cảm linh hoạt (chuyển mắt thành cung tròn hạnh phúc `^ _ ^` khi trả lời đúng, mắt băn khoăn lo lắng khi trả lời sai) cực kỳ sinh động!
* **Hộp thoại thông minh:** Gợi ý các thông điệp truyền cảm hứng học tập ngọt ngào và tự động ẩn đi sau 5 giây để không làm phiền trải nghiệm đọc bài.

### 2. 🍓 Hệ Thống Pastel Themes Ngọt Ngào
Tránh xa các gam màu nhạt nhẽo hay chói mắt, ứng dụng hỗ trợ chuyển đổi mượt mà giữa các bảng màu tuyển chọn (tự động lưu trạng thái):
* 🌑 **Theme Tối (Mặc định):** Giảm mỏi mắt khi học tập ban đêm.
* 🍓 **Theme Dâu Tây:** Gam hồng ngọt ngào, ấm áp khơi nguồn sáng tạo.
* 🌿 **Theme Bạc Hà:** Gam xanh mint dịu mát, tăng khả năng tập trung.

### 3. 🪄 Thần Chú Toán Học (Memory Mnemonics)
Các bài học khó nhớ (Quy tắc dấu ngoặc, Thứ tự thực hiện phép tính, Quy tắc nhân/chia phân số...) được lồng ghép các bài thơ vần điệu (thần chú) siêu dễ thương và dễ thuộc nằm trong ô ghi nhớ đặc biệt của Kỳ Lân Pi:
> *Ngoặc tròn làm trước tiên phong,*
> *Ngoặc vuông kế tiếp, ngoặc nhọn khóa đuôi!*
> *Luỹ thừa bá chủ đi đầu,*
> *Nhân chia tiếp bước, cộng trừ theo sau!*

### 4. 🔊 Code-Synthesized Web Audio API
Hoàn toàn **không dùng tệp âm thanh nhị phân bên ngoài**, ứng dụng tự động tổng hợp tần số âm thanh (sine, triangle, sawtooth oscillators) ngay trên trình duyệt để tạo ra các tiếng chíp chíp, âm báo đúng/sai, chùm hòa âm tinh nghịch của Kỳ Lân Pi và nhạc chúc mừng lên cấp cực kỳ ngộ nghĩnh.

### 5. 📊 Học Tập & Tiến hóa Rank
* **Hệ thống cấp bậc tiến hóa sinh động:**
  1. 🌱 Hạt Mầm Tò Mò
  2. 🌿 Mầm Non Ham Học
  3. 🔍 Thám Tử Số Học
  4. ⚔️ Chiến Binh Tính Nhẩm
  5. 🔮 Phù Thủy Hình Học
  6. 🦉 Nhà Thông Thái Nhỏ
  7. 👑 Trưởng Lão Số Học
  8. 🌌 Huyền Thoại Toán Học
* **Trình theo dõi tiến độ:** Thống kê XP tích lũy, Streak học tập liên tục hàng ngày, và biểu đồ phần trăm (%) hoàn thành chi tiết của từng chương.

---

## 📂 Cấu Trúc Dự Án Modular

Mã nguồn được phân rã thành các tệp chuyên biệt giúp dễ dàng bảo trì và đóng góp mã nguồn trên GitHub:

```text
toan6-web-app/
├── index.html            # Bộ khung giao diện HTML5 chuẩn SEO, nạp các tài nguyên
├── README.md             # Tài liệu hướng dẫn & giới thiệu dự án (File này)
├── .gitignore            # Khai báo các tệp cần bỏ qua khi đẩy lên git
├── css/
│   └── style.css         # Hệ thống Design Tokens, Pastel Themes & Hoạt ảnh CSS
└── js/
    ├── curriculum.js     # Cơ sở dữ liệu bài giảng 43 bài & Sơ đồ minh họa SVG trực quan
    └── app.js            # Engine điều khiển, Quiz, Mascot, Web Audio, LocalStorage state
```

---

## 🚀 Hướng Dẫn Sử Dụng

Vì ứng dụng được thiết kế tối ưu **không phụ thuộc vào bất kỳ thư viện hay tài nguyên bên ngoài nào (Zero External Dependencies)**, bạn có thể chạy ứng dụng theo nhiều cách cực kỳ đơn giản:

### Cách 1: Chạy trực tiếp (Không cần cài đặt)
Chỉ cần tải thư mục dự án về máy tính và **nhấp đúp chuột vào tệp `index.html`** để mở ngay trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari...).

### Cách 2: Chạy qua Live Server (Khuyên dùng cho phát triển)
Nếu bạn mở dự án bằng **VS Code**, bạn có thể cài đặt extension `Live Server` và nhấn **Go Live** để chạy ứng dụng trên cổng Localhost.

Hoặc sử dụng npm để khởi chạy máy chủ tĩnh nhanh:
```bash
# Cài đặt máy chủ tĩnh toàn cục
npm install -g serve

# Khởi chạy trong thư mục dự án
serve
```

---

## ⚙️ Thiết Kế Chi Tiết & Tương Thích
* **Font chữ:** Sử dụng font chữ hiện đại, bo góc mềm mại `Be Vietnam Pro` từ Google Fonts, hiển thị tiếng Việt cực kỳ rõ nét và cao cấp.
* **Giao diện Responsive:** Giao diện co giãn hoàn hảo trên Điện thoại di động (thanh sidebar sẽ tự động thu gọn thành menu Hamburger vuốt chạm) và hiển thị tối ưu trên Máy tính bảng, PC màn hình rộng.
* **Offline First:** Lưu trữ toàn bộ dữ liệu học tập thông qua `localStorage` của trình duyệt. Bạn có thể tắt trình duyệt, mất mạng Internet và quay lại học tập bất cứ lúc nào mà không sợ mất điểm XP hay chuỗi Streak.

---

## 📝 Giấy Phép & Bản Quyền

Dự án được xây dựng phục vụ mục đích giáo dục phi thương mại dành cho học sinh lớp 6 tại Việt Nam. Toàn bộ hình ảnh SVG và âm thanh được lập trình toán học thủ công bởi AI Assistant **Antigravity**.

*Chúc các bạn học sinh có những giờ học Toán thật vui vẻ và bổ ích cùng Kỳ Lân Pi!* 🦄🌈✨
