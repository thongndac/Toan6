const CURRICULUM = [
  // ================================================================
  // TẬP 1 - CHƯƠNG I: TẬP HỢP CÁC SỐ TỰ NHIÊN (Bài 1-7)
  // ================================================================
  {
    id: 'c1', volume: 1,
    title: 'Tập hợp các số tự nhiên',
    subtitle: 'Số học · Tập 1',
    emoji: '🔢',
    color: '#6366f1',
    pages: '5-27',
    lessons: [
      {
        id: 'c1-l1', num: 1, title: 'Tập hợp', pages: '5-8', xp: 30,
        tags: ['Tập hợp', 'Phần tử', 'Ký hiệu ∈ ∉'],
        skills: ['Nhận biết tập hợp và các phần tử', 'Mô tả tập hợp bằng hai cách', 'Dùng ký hiệu ∈, ∉, {}'],
        theory: [
          { title: '1. Tập hợp và phần tử', svg: `<svg viewBox='0 0 400 200' width='100%' height='120' style='max-width: 300px;'><circle cx='150' cy='100' r='70' fill='rgba(99, 102, 241, 0.15)' stroke='#6366f1' stroke-width='2' /><circle cx='250' cy='100' r='70' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='2' stroke-dasharray='4' /><text x='120' y='105' fill='#e2e8f0' font-size='16' font-family='sans-serif' font-weight='bold'>A</text><text x='270' y='105' fill='#e2e8f0' font-size='16' font-family='sans-serif' font-weight='bold'>B</text><text x='145' y='80' fill='#f59e0b' font-size='13' font-family='sans-serif'>1</text><text x='155' y='125' fill='#f59e0b' font-size='13' font-family='sans-serif'>3</text><text x='240' y='80' fill='#0ea5e9' font-size='13' font-family='sans-serif'>2</text><text x='245' y='125' fill='#0ea5e9' font-size='13' font-family='sans-serif'>4</text><text x='196' y='105' fill='#f43f5e' font-size='14' font-family='sans-serif' font-weight='bold'>5</text></svg>`, content: 'Một <strong>tập hợp</strong> bao gồm những đối tượng nhất định. Các đối tượng đó là <strong>phần tử</strong> của tập hợp. Tên tập hợp dùng chữ cái IN HOA.', formulas: ['x ∈ A → x thuộc A', 'y ∉ A → y không thuộc A'], notes: ['ℕ = {0;1;2;3;...} - tập số tự nhiên', 'ℕ* = {1;2;3;...} - tập số tự nhiên khác 0'] },
          { title: '2. Hai cách mô tả tập hợp', content: '<strong>Cách 1 - Liệt kê:</strong> P = {0; 1; 2; 3; 4; 5}<br><strong>Cách 2 - Đặc trưng:</strong> P = {n | n ∈ ℕ, n < 6}', formulas: [], notes: ['Mỗi phần tử chỉ liệt kê một lần', 'Thứ tự liệt kê tùy ý'] }
        ],
        examples: [
          { title: 'Ví dụ 1', question: 'Cho tập M = {4; 1; 9; 8}. Xét 4, 1, 7 thuộc hay không thuộc M?', solution: '4 ∈ M (có trong M)\n1 ∈ M (có trong M)\n7 ∉ M (không có trong M)' },
          { title: 'Ví dụ 2', question: 'Viết tập A = {x ∈ ℕ | x < 5} bằng cách liệt kê.', solution: 'A = {0; 1; 2; 3; 4}' }
        ],
        quiz: [
          { q: 'Cho A = {1; 3; 5; 7; 9}. Chọn khẳng định ĐÚNG?', opts: ['3 ∈ A', '2 ∈ A', '4 ∈ A', '6 ∈ A'], ans: 0, exp: '3 có trong tập A = {1;3;5;7;9} nên 3 ∈ A.' },
          { q: 'Tập B = {x ∈ ℕ | x < 5} có bao nhiêu phần tử?', opts: ['5 phần tử', '4 phần tử', '6 phần tử', 'Vô số'], ans: 0, exp: 'B = {0;1;2;3;4} - có 5 phần tử (bao gồm cả số 0).' },
          { q: 'ℕ* là tập hợp nào?', opts: ['Số tự nhiên khác 0', 'Tất cả số tự nhiên', 'Số nguyên dương', 'Số chẵn'], ans: 0, exp: 'ℕ* = {1;2;3;...} là tập số tự nhiên khác 0.' }
        ],
        exercises: [
          {
            id: '1.1',
            title: 'Bài 1.1 (Trang 7)',
            desc: 'Cho hai tập hợp: A = {a; b; c; x; y} và B = {b; d; y; t; u; v}.<br>Dùng kí hiệu ∈ hoặc ∉ để trả lời câu hỏi mỗi phần tử thuộc tập hợp nào:',
            parts: [
              { id: 'a_A', q: 'a ... A', type: 'text_input', ans: ['∈', 'in', 'thuộc', 'thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử a có mặt trong tập hợp A hay không?' },
              { id: 'a_B', q: 'a ... B', type: 'text_input', ans: ['∉', 'notin', 'không thuộc', 'khong thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử a có mặt trong tập hợp B hay không?' },
              { id: 'b_A', q: 'b ... A', type: 'text_input', ans: ['∈', 'in', 'thuộc', 'thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử b có mặt trong tập hợp A hay không?' },
              { id: 'b_B', q: 'b ... B', type: 'text_input', ans: ['∈', 'in', 'thuộc', 'thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử b có mặt trong tập hợp B hay không?' },
              { id: 'x_A', q: 'x ... A', type: 'text_input', ans: ['∈', 'in', 'thuộc', 'thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử x có mặt trong tập hợp A hay không?' },
              { id: 'x_B', q: 'x ... B', type: 'text_input', ans: ['∉', 'notin', 'không thuộc', 'khong thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử x có mặt trong tập hợp B hay không?' },
              { id: 'u_A', q: 'u ... A', type: 'text_input', ans: ['∉', 'notin', 'không thuộc', 'khong thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử u có mặt trong tập hợp A hay không?' },
              { id: 'u_B', q: 'u ... B', type: 'text_input', ans: ['∈', 'in', 'thuộc', 'thuoc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Phần tử u có mặt trong tập hợp B hay không?' }
            ],
            solution: 'Đối chiếu các phần tử trong ngoặc nhọn ta được:<br>• <b>a ∈ A</b> (có trong A), <b>a ∉ B</b> (không có trong B)<br>• <b>b ∈ A</b>, <b>b ∈ B</b> (b thuộc cả hai tập)<br>• <b>x ∈ A</b>, <b>x ∉ B</b><br>• <b>u ∉ A</b>, <b>u ∈ B</b>'
          },
          {
            id: '1.2',
            title: 'Bài 1.2 (Trang 7)',
            desc: 'Cho tập hợp U = {x ∈ ℕ | x chia hết cho 3}. Trong các số 3; 5; 6; 0; 7, số nào thuộc và số nào không thuộc tập hợp U?',
            parts: [
              { id: 'thuoc', q: 'Các số thuộc tập U (nhập các số cách nhau bởi dấu chấm phẩy hoặc dấu phẩy):', type: 'text_input', ans: ['0;3;6', '3;6;0', '0,3,6', '3,0,6', '0; 3; 6', '3; 6; 0', '3; 0; 6', '0, 3, 6', '3, 6, 0'], placeholder: 'Ví dụ: 0; 3; 6', hint: 'Các số chia hết cho 3 trong dãy số trên là?' },
              { id: 'khong_thuoc', q: 'Các số không thuộc tập U:', type: 'text_input', ans: ['5;7', '7;5', '5,7', '7,5', '5; 7', '7; 5', '5, 7', '7, 5'], placeholder: 'Ví dụ: 5; 7', hint: 'Các số không chia hết cho 3 trong dãy số trên là?' }
            ],
            solution: 'Tập hợp U gồm các số tự nhiên chia hết cho 3.<br>• Số 3 chia hết cho 3 nên <b>3 ∈ U</b>.<br>• Số 5 không chia hết cho 3 nên <b>5 ∉ U</b>.<br>• Số 6 chia hết cho 3 nên <b>6 ∈ U</b>.<br>• Số 0 chia hết cho 3 (0 : 3 = 0) nên <b>0 ∈ U</b>.<br>• Số 7 không chia hết cho 3 nên <b>7 ∉ U</b>.<br>→ Các số thuộc U là: <b>0; 3; 6</b>. Các số không thuộc U là: <b>5; 7</b>.'
          },
          {
            id: '1.3',
            title: 'Bài 1.3 (Trang 7)',
            desc: 'Bằng cách liệt kê các phần tử, hãy viết các tập hợp sau:',
            parts: [
              { id: 'K', q: 'a) Tập K các số tự nhiên nhỏ hơn 7: K = ', type: 'text_input', ans: ['{0;1;2;3;4;5;6}', '{0,1,2,3,4,5,6}', '0;1;2;3;4;5;6', '0,1,2,3,4,5,6', '{0; 1; 2; 3; 4; 5; 6}', '{0, 1, 2, 3, 4, 5, 6}'], placeholder: 'Nhập dạng {0; 1; ...}', hint: 'Các số tự nhiên nhỏ hơn 7 gồm từ 0 đến 6.' },
              { id: 'D', q: 'b) Tập D tên các tháng dương lịch có 30 ngày: D = ', type: 'text_input', ans: ['{tháng4;tháng6;tháng9;tháng11}', '{thang4;thang6;thang9;thang11}', 'tháng4;tháng6;tháng9;tháng11', '{Tháng4;Tháng6;Tháng9;Tháng11}', 'Tháng4;Tháng6;Tháng9;Tháng11', '{tháng4,tháng6,tháng9,tháng11}', '{tháng4; tháng6; tháng9; tháng11}', '{tháng 4; tháng 6; tháng 9; tháng 11}', '{Tháng 4; Tháng 6; Tháng 9; Tháng 11}'], placeholder: 'Ví dụ: {tháng 4; tháng 6; tháng 9; tháng 11}', hint: 'Các tháng dương lịch có 30 ngày là tháng 4, tháng 6, tháng 9 và tháng 11.' },
              { id: 'M', q: 'c) Tập M các chữ cái tiếng Việt trong từ “ĐIỆN BIÊN PHỦ”: M = ', type: 'text_input', ans: ['{Đ;I;Ê;N;B;P;H;U}', 'Đ;I;Ê;N;B;P;H;U', 'đ;i;ê;n;b;p;h;u', '{đ;i;ê;n;b;p;h;u}', '{Đ,I,Ê,N,B,P,H,U}', '{đ,i,ê,n,b,p,h,u}', '{đ; i; ê; n; b; p; h; u}', '{Đ; I; Ê; N; B; P; H; U}'], placeholder: 'Ví dụ: {Đ; I; Ê; N; B; P; H; U}', hint: 'Mỗi chữ cái tiếng Việt xuất hiện trong từ chỉ liệt kê một lần. Các chữ cái lặp lại như Ê, N, I, Đ chỉ viết một lần.' }
            ],
            solution: 'a) <b>K = {0; 1; 2; 3; 4; 5; 6}</b>.<br>b) <b>D = {tháng 4; tháng 6; tháng 9; tháng 11}</b>.<br>c) Các chữ cái trong từ “ĐIỆN BIÊN PHỦ” gồm: Đ, I, Ê, N, B, I, Ê, N, P, H, U. Loại bỏ các chữ lặp lại (I, Ê, N), ta được:<br><b>M = {Đ; I; Ê; N; B; P; H; U}</b>.'
          },
          {
            id: '1.4',
            title: 'Bài 1.4 (Trang 8)',
            desc: 'Bằng cách nêu dấu hiệu đặc trưng, hãy viết tập hợp A các số tự nhiên nhỏ hơn 10.',
            parts: [
              { id: 'A', q: 'A = ', type: 'text_input', ans: ['{x∈ℕ|x<10}', '{x∈N|x<10}', '{n∈ℕ|n<10}', '{n∈N|n<10}', 'x∈ℕ|x<10', 'n∈ℕ|n<10', '{x|x∈ℕ,x<10}', '{x|x∈N,x<10}'], placeholder: 'Ví dụ: {x ∈ ℕ | x < 10}', hint: 'Sử dụng kí hiệu ∈ ℕ và điều kiện nhỏ hơn 10.' }
            ],
            solution: 'Tập hợp A gồm các số tự nhiên n sao cho n < 10.<br>Viết bằng kí hiệu đặc trưng:<br><b>A = {x ∈ ℕ | x < 10}</b> hoặc <b>A = {n ∈ ℕ | n < 10}</b>.'
          },
          {
            id: '1.5',
            title: 'Bài 1.5 (Trang 8)',
            desc: 'Hệ Mặt Trời gồm có Mặt Trời ở trung tâm và 8 thiên thể quay quanh Mặt Trời là: Thủy Tinh, Kim Tinh, Trái Đất, Hỏa Tinh, Mộc Tinh, Thổ Tinh, Thiên Vương Tinh, Hải Vương Tinh. Hãy viết tập hợp S gồm các thiên thể này.',
            illustration: 'solar_system_svg',
            parts: [
              { id: 'S', q: 'S = ', type: 'text_input', ans: ['{ThủyTinh;KimTinh;TráiĐất;HỏaTinh;MộcTinh;ThổTinh;ThiênVươngTinh;HảiVươngTinh}', '{thủytinh;kimtinh;tráiđất;hỏatinh;mộctinh;thổtinh;thiênvươngtinh;hảivươngtinh}', 'ThủyTinh;KimTinh;TráiĐất;HỏaTinh;MộcTinh;ThổTinh;ThiênVươngTinh;HảiVươngTinh', '{ThủyTinh,KimTinh,TráiĐất,HỏaTinh,MộcTinh,ThổTinh,ThiênVươngTinh,HảiVươngTinh}', '{Thủy Tinh; Kim Tinh; Trái Đất; Hỏa Tinh; Mộc Tinh; Thổ Tinh; Thiên Vương Tinh; Hải Vương Tinh}'], placeholder: 'Nhập danh sách hành tinh trong {}', hint: 'Liệt kê đủ 8 hành tinh quay quanh Mặt Trời.' }
            ],
            solution: 'Liệt kê 8 thiên thể trong dấu ngoặc nhọn và ngăn cách bởi dấu chấm phẩy hoặc dấu phẩy:<br><b>S = {Thủy Tinh; Kim Tinh; Trái Đất; Hỏa Tinh; Mộc Tinh; Thổ Tinh; Thiên Vương Tinh; Hải Vương Tinh}</b>.'
          }
        ]
      },
      {
        id: 'c1-l2', num: 2, title: 'Tập hợp các số tự nhiên', pages: '9-11', xp: 35,
        tags: ['Số tự nhiên', 'Trục số', 'So sánh'],
        skills: ['Biểu diễn số tự nhiên trên trục số', 'So sánh hai số tự nhiên', 'Nhận biết số liền trước, liền sau'],
        theory: [
          { title: '1. Số tự nhiên và trục số', svg: `<svg viewBox='0 0 500 80' width='100%' height='60' style='max-width: 450px;'><line x1='20' y1='40' x2='460' y2='40' stroke='#94a3b8' stroke-width='2' /><polygon points='460,35 470,40 460,45' fill='#94a3b8' /><circle cx='40' cy='40' r='4' fill='#6366f1' /><text x='36' y='25' fill='#6366f1' font-size='12' font-weight='bold' font-family='sans-serif'>O</text><text x='36' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>0</text><circle cx='120' cy='40' r='3' fill='#e2e8f0' /><text x='117' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>1</text><circle cx='200' cy='40' r='3' fill='#e2e8f0' /><text x='197' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>2</text><circle cx='280' cy='40' r='3' fill='#e2e8f0' /><text x='277' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>3</text><circle cx='360' cy='40' r='3' fill='#e2e8f0' /><text x='357' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>4</text><circle cx='440' cy='40' r='3' fill='#e2e8f0' /><text x='437' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>5</text></svg>`, content: 'Các số 0, 1, 2, 3, ... là các <strong>số tự nhiên</strong>. Biểu diễn trên tia số: điểm gốc O (số 0), mỗi đơn vị cách nhau bằng nhau về phía phải.', formulas: ['a < b ↔ a ở bên trái b trên tia số', 'a > b ↔ a ở bên phải b trên tia số'], notes: ['0 là số tự nhiên nhỏ nhất', 'Không có số tự nhiên lớn nhất'] },
          { title: '2. Số liền trước - liền sau', content: 'a là <strong>liền trước</strong> của b nếu a + 1 = b.<br>b là <strong>liền sau</strong> của a nếu b = a + 1.', formulas: ['Số liền sau = số đó + 1', 'Số liền trước = số đó - 1'], notes: ['Số 0 không có số liền trước trong ℕ'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tìm số liền trước và liền sau của 99?', solution: 'Số liền trước 99 là: 99 - 1 = 98\nSố liền sau 99 là: 99 + 1 = 100' }
        ],
        quiz: [
          { q: 'Số liền sau của 999 là?', opts: ['1 000', '998', '1 001', '990'], ans: 0, exp: 'Số liền sau = 999 + 1 = 1 000.' },
          { q: 'Trên tia số, điểm A(5) nằm ở đâu so với điểm B(3)?', opts: ['Bên phải B', 'Bên trái B', 'Trùng với B', 'Không xác định'], ans: 0, exp: '5 > 3 nên điểm 5 nằm bên phải điểm 3 trên tia số.' }
        ],
        exercises: [
          {
            id: '1.13',
            title: 'Bài 1.13 (Trang 14)',
            desc: 'Viết thêm các số liền trước và liền sau của hai số 3 532 và 3 529 để được sáu số tự nhiên rồi sắp xếp sáu số tự nhiên đó theo thứ tự từ bé đến lớn.',
            parts: [
              { id: 'ans', q: 'Sắp xếp sáu số từ bé đến lớn (cách nhau bởi dấu chấm phẩy hoặc dấu phẩy):', type: 'text_input', ans: ['3528;3529;3530;3531;3532;3533', '3528,3529,3530,3531,3532,3533', '3528; 3529; 3530; 3531; 3532; 3533', '3528, 3529, 3530, 3531, 3532, 3533'], placeholder: 'Ví dụ: 3528; 3529; ...', hint: 'Tìm số liền trước (trừ 1) và liền sau (cộng 1) của mỗi số rồi xếp thứ tự tăng dần.' }
            ],
            solution: '• Số liền trước của 3 532 là: 3 531. Số liền sau là: 3 533.<br>• Số liền trước của 3 529 là: 3 528. Số liền sau là: 3 530.<br>Sáu số tự nhiên thu được là: 3 528; 3 529; 3 530; 3 531; 3 532; 3 533.<br>Sắp xếp sáu số theo thứ tự từ bé đến lớn:<br><b>3 528; 3 529; 3 530; 3 531; 3 532; 3 533</b>.'
          },
          {
            id: '1.14',
            title: 'Bài 1.14 (Trang 14)',
            desc: 'Cho ba số tự nhiên a, b, c, trong đó a là số nhỏ nhất. Biết rằng trên tia số, điểm b nằm giữa hai điểm a và c. Hãy dùng kí hiệu “<” để mô tả thứ tự của ba số a, b, c.',
            parts: [
              { id: 'order', q: 'Kí hiệu mô tả thứ tự của ba số:', type: 'text_input', ans: ['a<b<c', 'a < b < c'], placeholder: 'Nhập kí hiệu (ví dụ: a < b < c)', hint: 'Điểm b nằm giữa a và c, mà a nhỏ nhất nên a ở bên trái nhất, c ở bên phải nhất.' }
            ],
            solution: 'Vì a là số nhỏ nhất nên trên tia số điểm a nằm bên trái hai điểm b và c.<br>Vì điểm b nằm giữa hai điểm a và c nên điểm b nằm bên trái điểm c.<br>Do đó, thứ tự từ trái sang phải trên tia số là a, b, c.<br>Kí hiệu mô tả thứ tự là: <b>a < b < c</b>.<br><i>Ví dụ số cụ thể: 5 < 7 < 8 (với a = 5, b = 7, c = 8).</i>'
          },
          {
            id: '1.15',
            title: 'Bài 1.15 (Trang 14)',
            desc: 'Liệt kê các phần tử của mỗi tập hợp sau:',
            parts: [
              { id: 'M', q: 'a) M = {x ∈ ℕ | 10 ≤ x < 15}: M = ', type: 'text_input', ans: ['{10;11;12;13;14}', '{10,11,12,13,14}', '10;11;12;13;14', '10,11,12,13,14', '{10; 11; 12; 13; 14}', '{10, 11, 12, 13, 14}'], placeholder: 'Ví dụ: {10; 11; 12; 13; 14}', hint: 'Lấy các số tự nhiên từ 10 đến 14 (nhỏ hơn 15).' },
              { id: 'K', q: 'b) K = {x ∈ ℕ* | x ≤ 3}: K = ', type: 'text_input', ans: ['{1;2;3}', '{1,2,3}', '1;2;3', '1,2,3', '{1; 2; 3}', '{1, 2, 3}'], placeholder: 'Ví dụ: {1; 2; 3}', hint: 'ℕ* là tập số tự nhiên khác 0. Lấy các số 1, 2, 3.' },
              { id: 'L', q: 'c) L = {x ∈ ℕ | x ≤ 3}: L = ', type: 'text_input', ans: ['{0;1;2;3}', '{0,1,2,3}', '0;1;2;3', '0,1,2,3', '{0; 1; 2; 3}', '{0, 1, 2, 3}'], placeholder: 'Ví dụ: {0; 1; 2; 3}', hint: 'ℕ lấy cả số 0. Lấy các số 0, 1, 2, 3.' }
            ],
            solution: 'a) M gồm các số tự nhiên từ 10 đến nhỏ hơn 15:<br><b>M = {10; 11; 12; 13; 14}</b>.<br>b) K gồm các số tự nhiên khác 0 nhỏ hơn hoặc bằng 3:<br><b>K = {1; 2; 3}</b>.<br>c) L gồm các số tự nhiên nhỏ hơn hoặc bằng 3:<br><b>L = {0; 1; 2; 3}</b>.'
          },
          {
            id: '1.16',
            title: 'Bài 1.16 (Trang 15)',
            desc: 'Ba bạn An, Bắc, Cường đánh dấu chiều cao trên một cây sào thẳng đứng. Cường đặt tên các điểm từ dưới lên là A, B, C và giải thích điểm A ứng với An, B ứng với Bắc, C ứng với Cường. Sắp xếp chiều cao của ba bạn theo thứ tự tăng dần.',
            parts: [
              { id: 'ans', q: 'Sắp xếp chiều cao tăng dần (dùng tên hoặc kí hiệu <):', type: 'text_input', ans: ['an<bắc<cường', 'an < bắc < cường', 'an,bắc,cường', 'an;bắc;cường', 'an; bắc; cường', 'an, bắc, cường'], placeholder: 'Ví dụ: An < Bắc < Cường', hint: 'Thứ tự điểm từ dưới lên tương ứng từ thấp đến cao.' }
            ],
            solution: 'Cây sào dựng thẳng đứng, các điểm A, B, C theo thứ tự từ dưới lên trên tương ứng với chiều cao tăng dần.<br>Vì A ứng với An, B ứng với Bắc, C ứng với Cường nên thứ tự chiều cao tăng dần là:<br><b>An < Bắc < Cường</b>.'
          }
        ]
      },
      {
        id: 'c1-l3', num: 3, title: 'Ghi số tự nhiên', pages: '12-14', xp: 30,
        tags: ['Hệ thập phân', 'Chữ số', 'Giá trị chữ số'],
        skills: ['Đọc và viết số tự nhiên trong hệ thập phân', 'Phân tích giá trị từng chữ số', 'Chuyển số La Mã'],
        theory: [
          { title: '1. Hệ thập phân', content: 'Dùng 10 chữ số: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Giá trị mỗi chữ số phụ thuộc vào <strong>vị trí</strong> trong số.', formulas: ['Hàng đơn vị × 1', 'Hàng chục × 10', 'Hàng trăm × 100', 'Hàng nghìn × 1 000'], notes: ['Mỗi hàng = 10 lần hàng liền sau', 'Số La Mã: I=1, V=5, X=10, L=50, C=100, D=500, M=1000'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Phân tích giá trị từng chữ số trong số 2 025.', solution: '2 025 = 2×1000 + 0×100 + 2×10 + 5×1\n= 2 000 + 0 + 20 + 5' }
        ],
        quiz: [
          { q: 'Chữ số 7 trong số 3 745 có giá trị là?', opts: ['700', '7', '70', '7 000'], ans: 0, exp: '7 ở hàng trăm → giá trị = 7 × 100 = 700.' },
          { q: 'Số La Mã XIV có giá trị là?', opts: ['14', '16', '9', '11'], ans: 0, exp: 'XIV = X + IV = 10 + 4 = 14.' }
        ],
        exercises: [
          {
            id: '1.6',
            title: 'Bài 1.6 (Trang 12)',
            desc: 'Cho các số: 27 501; 106 712; 7 110 385; 2 915 400 267.<br>Tìm giá trị của chữ số 7 trong mỗi số đã cho:',
            parts: [
              { id: 'a', q: 'Chữ số 7 trong số 27 501 có giá trị là:', type: 'text_input', ans: ['7000', '7.000', '7 000'], placeholder: 'Nhập giá trị', hint: 'Chữ số 7 nằm ở hàng nghìn.' },
              { id: 'b', q: 'Chữ số 7 trong số 106 712 có giá trị là:', type: 'text_input', ans: ['700'], placeholder: 'Nhập giá trị', hint: 'Chữ số 7 nằm ở hàng trăm.' },
              { id: 'c', q: 'Chữ số 7 trong số 7 110 385 có giá trị là:', type: 'text_input', ans: ['7000000', '7.000.000', '7 000 000'], placeholder: 'Nhập giá trị', hint: 'Chữ số 7 nằm ở hàng triệu.' },
              { id: 'd', q: 'Chữ số 7 trong số 2 915 400 267 có giá trị là:', type: 'text_input', ans: ['7'], placeholder: 'Nhập giá trị', hint: 'Chữ số 7 nằm ở hàng đơn vị.' }
            ],
            solution: '• Trong số 27 501, chữ số 7 nằm ở hàng nghìn nên có giá trị là: <b>7 000</b>.<br>• Trong số 106 712, chữ số 7 nằm ở hàng trăm nên có giá trị là: <b>700</b>.<br>• Trong số 7 110 385, chữ số 7 nằm ở hàng triệu nên có giá trị là: <b>7 000 000</b>.<br>• Trong số 2 915 400 267, chữ số 7 nằm ở hàng đơn vị nên có giá trị là: <b>7</b>.'
          },
          {
            id: '1.7',
            title: 'Bài 1.7 (Trang 12)',
            desc: 'Chữ số 4 đứng ở hàng nào trong một số tự nhiên nếu nó có giá trị bằng:',
            parts: [
              { id: 'a', q: 'a) Có giá trị bằng 400:', type: 'text_input', ans: ['hàng trăm', 'hang tram', 'hangtram', 'trăm', 'tram'], placeholder: 'Nhập tên hàng (ví dụ: hàng trăm)', hint: 'Nhân 100 để có giá trị 400.' },
              { id: 'b', q: 'b) Có giá trị bằng 40:', type: 'text_input', ans: ['hàng chục', 'hang chuc', 'hangchuc', 'chục', 'chuc'], placeholder: 'Nhập tên hàng', hint: 'Nhân 10 để có giá trị 40.' },
              { id: 'c', q: 'c) Có giá trị bằng 4:', type: 'text_input', ans: ['hàng đơn vị', 'hang don vi', 'hangdonvi', 'đơn vị', 'don vi', 'donvi'], placeholder: 'Nhập tên hàng', hint: 'Nhân 1 để có giá trị 4.' }
            ],
            solution: '• a) Có giá trị bằng 400: Chữ số 4 đứng ở <b>hàng trăm</b>.<br>• b) Có giá trị bằng 40: Chữ số 4 đứng ở <b>hàng chục</b>.<br>• c) Có giá trị bằng 4: Chữ số 4 đứng ở <b>hàng đơn vị</b>.'
          },
          {
            id: '1.8',
            title: 'Bài 1.8 (Trang 12)',
            desc: 'Đọc các số La Mã sau:',
            parts: [
              { id: 'XIV', q: 'XIV đọc là:', type: 'text_input', ans: ['14', 'mười bốn', 'muoi bon'], placeholder: 'Nhập giá trị hoặc chữ', hint: 'XIV = X (10) + IV (4).' },
              { id: 'XVI', q: 'XVI đọc là:', type: 'text_input', ans: ['16', 'mười sáu', 'muoi sau'], placeholder: 'Nhập giá trị hoặc chữ', hint: 'XVI = X (10) + VI (6).' },
              { id: 'XXIII', q: 'XXIII đọc là:', type: 'text_input', ans: ['23', 'hai mươi ba', 'hai muoi ba'], placeholder: 'Nhập giá trị hoặc chữ', hint: 'XXIII = XX (20) + III (3).' }
            ],
            solution: '• <b>XIV</b> = 10 + 4 = <b>14</b> (Mười bốn).<br>• <b>XVI</b> = 10 + 6 = <b>16</b> (Mười sáu).<br>• <b>XXIII</b> = 20 + 3 = <b>23</b> (Hai mươi ba).'
          },
          {
            id: '1.9',
            title: 'Bài 1.9 (Trang 12)',
            desc: 'Viết các số sau bằng số La Mã: 18 và 25.',
            parts: [
              { id: '18', q: 'Số 18 viết bằng số La Mã:', type: 'text_input', ans: ['XVIII', 'xviii'], placeholder: 'Ví dụ: XIV', hint: '18 = 10 (X) + 8 (VIII).' },
              { id: '25', q: 'Số 25 viết bằng số La Mã:', type: 'text_input', ans: ['XXV', 'xxv'], placeholder: 'Ví dụ: XXV', hint: '25 = 20 (XX) + 5 (V).' }
            ],
            solution: '• Số 18 = 10 + 8 → viết thành <b>XVIII</b>.<br>• Số 25 = 20 + 5 → viết thành <b>XXV</b>.'
          },
          {
            id: '1.10',
            title: 'Bài 1.10 (Trang 12)',
            desc: 'Một số tự nhiên được viết bởi ba chữ số 0 và ba chữ số 9 xen kẽ nhau. Đó là số nào?',
            parts: [
              { id: 'num', q: 'Số tự nhiên đó là:', type: 'text_input', ans: ['909090', '909 090', '909.090'], placeholder: 'Nhập số', hint: 'Số tự nhiên không thể bắt đầu bằng chữ số 0. Do đó chữ số đầu tiên phải là 9.' }
            ],
            solution: 'Vì chữ số hàng cao nhất không thể là 0 nên chữ số đầu tiên bắt buộc phải là 9.<br>Các chữ số 0 và 9 viết xen kẽ nhau là: 9, 0, 9, 0, 9, 0.<br>Số đó là: <b>909 090</b>.'
          },
          {
            id: '1.11',
            title: 'Bài 1.11 (Trang 12)',
            desc: 'Dùng các chữ số 0, 3, 5 viết một số tự nhiên có ba chữ số khác nhau sao cho chữ số 5 có giá trị bằng 50.',
            parts: [
              { id: 'ans', q: 'Số đó là:', type: 'text_input', ans: ['350'], placeholder: 'Nhập số', hint: 'Để chữ số 5 có giá trị bằng 50, chữ số 5 phải đứng ở hàng chục. Chữ số hàng trăm không thể là 0.' }
            ],
            solution: 'Để chữ số 5 có giá trị bằng 50, nó phải đứng ở hàng chục.<br>Hai chữ số còn lại là 0 và 3.<br>Chữ số hàng trăm không thể là 0, do đó chữ số hàng trăm bắt buộc phải là 3.<br>Suy ra chữ số hàng đơn vị phải là 0.<br>Vậy số cần tìm là: <b>350</b>.'
          },
          {
            id: '1.12',
            title: 'Bài 1.12 (Trang 12)',
            desc: 'Trong một cửa hàng bánh kẹo, người ta đóng gói kẹo thành các loại: mỗi gói có 10 cái kẹo; mỗi hộp có 10 gói; mỗi thùng có 10 hộp. Một người mua 9 thùng, 9 hộp và 9 gói kẹo. Hỏi người đó mua tất cả bao nhiêu cái kẹo?',
            parts: [
              { id: 'ans', q: 'Tổng số cái kẹo mua được:', type: 'text_input', ans: ['9990', '9 990', '9.990'], placeholder: 'Nhập số', hint: '1 gói = 10 cái; 1 hộp = 10 gói = 100 cái; 1 thùng = 10 hộp = 1000 cái.' }
            ],
            solution: 'Đổi ra đơn vị cái kẹo:<br>• 1 gói kẹo = 10 cái kẹo.<br>• 1 hộp kẹo = 10 gói = 10 · 10 = 100 cái kẹo.<br>• 1 thùng kẹo = 10 hộp = 10 · 100 = 1 000 cái kẹo.<br>Số kẹo người đó mua là:<br>9 thùng + 9 hộp + 9 gói = 9 · 1000 + 9 · 100 + 9 · 10 = 9 000 + 900 + 90 = <b>9 990</b> cái kẹo.'
          }
        ]
      },
      {
        id: 'c1-l4', num: 4, title: 'Các phép tính với số tự nhiên', pages: '15-17', xp: 40,
        tags: ['Cộng', 'Trừ', 'Tính chất'],
        skills: ['Thực hiện phép cộng, trừ số tự nhiên', 'Áp dụng tính chất giao hoán và kết hợp', 'Tính nhẩm bằng cách nhóm'],
        theory: [
          { title: '1. Phép cộng số tự nhiên', content: 'Tổng a + b = b + a (giao hoán). (a+b)+c = a+(b+c) (kết hợp).', formulas: ['Giao hoán: a + b = b + a', 'Kết hợp: (a + b) + c = a + (b + c)', 'a + 0 = a'], notes: ['Mẹo tính nhanh: nhóm các số có tổng tròn (10, 100, 1000)'] },
          { title: '2. Phép trừ số tự nhiên', content: 'a - b = c ↔ c + b = a. Phép trừ chỉ thực hiện được khi a ≥ b trong ℕ.', formulas: ['a - 0 = a', 'a - a = 0'], notes: ['Không có tính chất giao hoán trong phép trừ'] }
        ],
        examples: [
          { title: 'Ví dụ - Tính nhanh', question: 'Tính hợp lí: 285 + 470 + 115 + 230', solution: '= (285 + 115) + (470 + 230)\n= 400 + 700 = 1 100' }
        ],
        quiz: [
          { q: 'Tính hợp lí: 285 + 470 + 115 + 230', opts: ['1 100', '1 000', '1 200', '900'], ans: 0, exp: '(285+115) + (470+230) = 400 + 700 = 1 100.' },
          { q: 'Tìm x biết: 7 + x = 362', opts: ['355', '369', '354', '370'], ans: 0, exp: 'x = 362 - 7 = 355.' },
          { q: 'Tính chất nào giúp nhóm số để tính nhanh?', opts: ['Cả giao hoán và kết hợp', 'Chỉ giao hoán', 'Chỉ kết hợp', 'Không có'], ans: 0, exp: 'Dùng cả hai: GIAO HOÁN để đổi chỗ, KẾT HỢP để nhóm số có tổng đẹp.' }
        ],
        exercises: [
          {
            id: '1.17',
            title: 'Bài 1.17 (Trang 16)',
            desc: 'Tính:',
            parts: [
              { id: 'a', q: 'a) 63 548 + 19 256 =', type: 'text_input', ans: ['82804', '82 804', '82.804'], placeholder: 'Nhập kết quả', hint: 'Thực hiện phép cộng đặt tính rồi tính thông thường.' },
              { id: 'b', q: 'b) 129 107 - 34 693 =', type: 'text_input', ans: ['94414', '94 414', '94.414'], placeholder: 'Nhập kết quả', hint: 'Thực hiện phép trừ đặt tính rồi tính.' }
            ],
            solution: 'Đặt tính và thực hiện tính toán ta được:<br>a) 63 548 + 19 256 = <b>82 804</b><br>b) 129 107 - 34 693 = <b>94 414</b>'
          },
          {
            id: '1.18',
            title: 'Bài 1.18 (Trang 16)',
            desc: 'Thay "?" bằng số thích hợp:<br><b>? + 2 895 = 2 895 + 6 789</b>',
            parts: [
              { id: 'ans', q: 'Số thích hợp thay cho "?" là:', type: 'text_input', ans: ['6789', '6 789', '6.789'], placeholder: 'Nhập số', hint: 'Áp dụng tính chất giao hoán của phép cộng: a + b = b + a.' }
            ],
            solution: 'Áp dụng tính chất giao hoán của phép cộng: <b>a + b = b + a</b><br>Ở đây có <b>? + 2 895 = 2 895 + 6 789</b><br>Do đó số cần thay vào dấu "?" chính là <b>6 789</b>.'
          },
          {
            id: '1.19',
            title: 'Bài 1.19 (Trang 16)',
            desc: 'Tìm số tự nhiên x biết:',
            parts: [
              { id: 'a', q: 'a) x + 7 = 362  →  x =', type: 'text_input', ans: ['355'], placeholder: 'Nhập x', hint: 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.' },
              { id: 'b', q: 'b) 25 - x = 15  →  x =', type: 'text_input', ans: ['10'], placeholder: 'Nhập x', hint: 'Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.' },
              { id: 'c', q: 'c) x - 56 = 4  →  x =', type: 'text_input', ans: ['60'], placeholder: 'Nhập x', hint: 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.' }
            ],
            solution: 'a) x + 7 = 362<br>x = 362 - 7<br><b>x = 355</b><br><br>b) 25 - x = 15<br>x = 25 - 15<br><b>x = 10</b><br><br>c) x - 56 = 4<br>x = 4 + 56<br><b>x = 60</b>'
          },
          {
            id: '1.20',
            title: 'Bài 1.20 (Trang 16)',
            desc: 'Dân số Việt Nam năm 2019 là 96 462 106 người. Năm 2020, dân số Việt Nam tăng thêm 876 473 người so với năm 2019. Tính dân số Việt Nam năm 2020.',
            parts: [
              { id: 'ans', q: 'Dân số Việt Nam năm 2020 là (người):', type: 'text_input', ans: ['97338579', '97 338 579', '97.338.579'], placeholder: 'Nhập kết quả', hint: 'Dân số năm 2020 = Dân số năm 2019 + Số người tăng thêm.' }
            ],
            solution: 'Dân số Việt Nam năm 2020 là:<br>96 462 106 + 876 473 = <b>97 338 579</b> (người).<br>Đáp số: <b>97 338 579 người</b>.'
          },
          {
            id: '1.21',
            title: 'Bài 1.21 (Trang 16)',
            desc: 'Nhà ga số 1 và nhà ga số 2 của một sân bay có thể tiếp nhận tương ứng khoảng 6 526 300 và 3 514 500 lượt hành khách mỗi năm. Nhờ đưa vào sử dụng nhà ga số 3 mà mỗi năm sân bay này có thể tiếp nhận được khoảng 22 851 200 lượt hành khách. Hãy tính số lượt hành khách mà nhà ga số 3 có thể tiếp nhận mỗi năm.',
            illustration: 'airport_svg',
            parts: [
              { id: 'ans', q: 'Số lượt hành khách nhà ga số 3 tiếp nhận mỗi năm (lượt):', type: 'text_input', ans: ['12810400', '12 810 400', '12.810.400'], placeholder: 'Nhập số', hint: 'Số lượt khách nhà ga 3 = Tổng số lượt khách cả sân bay - (Số lượt khách nhà ga 1 + Nhà ga 2).' }
            ],
            solution: '• Tổng số lượt hành khách mà nhà ga số 1 và số 2 tiếp nhận mỗi năm là:<br>6 526 300 + 3 514 500 = 10 040 800 (lượt khách)<br>• Số lượt hành khách mà nhà ga số 3 có thể tiếp nhận mỗi năm là:<br>22 851 200 - 10 040 800 = <b>12 810 400</b> (lượt khách).<br>Đáp số: <b>12 810 400 lượt khách</b>.'
          },
          {
            id: '1.22',
            title: 'Bài 1.22 (Trang 16)',
            desc: 'Tính một cách hợp lí:',
            parts: [
              { id: 'a', q: 'a) 285 + 470 + 115 + 230 =', type: 'text_input', ans: ['1100', '1 100', '1.100'], placeholder: 'Nhập kết quả', hint: 'Nhóm các số tròn trăm: (285 + 115) + (470 + 230).' },
              { id: 'b', q: 'b) 571 + 658 + 429 + 342 =', type: 'text_input', ans: ['2000', '2 000', '2.000'], placeholder: 'Nhập kết quả', hint: 'Nhóm các cặp số có tổng tròn nghìn: (571 + 429) + (658 + 342).' }
            ],
            solution: 'a) 285 + 470 + 115 + 230<br>= (285 + 115) + (470 + 230)<br>= 400 + 700 = <b>1 100</b><br><br>b) 571 + 658 + 429 + 342<br>= (571 + 429) + (658 + 342)<br>= 1 000 + 1 000 = <b>2 000</b>'
          }
        ]
      },
      {
        id: 'c1-l5', num: 5, title: 'Phép nhân và phép chia số tự nhiên', pages: '17-20', xp: 45,
        tags: ['Phép nhân', 'Phép chia', 'Số dư'],
        skills: ['Thực hiện phép nhân hai số tự nhiên', 'Thực hiện phép chia hết và chia có dư', 'Áp dụng tính chất phân phối'],
        theory: [
          { title: '1. Phép nhân số tự nhiên', content: 'a × b = a + a + ... + a (b số hạng). Kết quả gọi là tích.', formulas: ['Giao hoán: a × b = b × a', 'Kết hợp: (a × b) × c = a × (b × c)', 'Phân phối: a × (b + c) = a × b + a × c', 'a × 1 = a ;  a × 0 = 0'], notes: ['Mẹo: 2×5=10; 4×25=100; 8×125=1000 → Dùng để tính nhẩm nhanh'] },
          { title: '2. Phép chia hết và chia có dư', content: 'Với a và b (b ≠ 0), luôn tìm được q và r sao cho <strong>a = b × q + r</strong> (0 ≤ r < b).', formulas: ['Chia hết: r = 0 → a = b × q', 'Chia có dư: r ≠ 0 → a : b = q (dư r)'], notes: ['Số dư r luôn nhỏ hơn số chia b', 'a : 1 = a ;  0 : b = 0 (b ≠ 0)'] }
        ],
        examples: [
          { title: 'Ví dụ - Tính nhẩm', question: 'Tính nhẩm: 24 × 25', solution: '24 × 25 = (6 × 4) × 25 = 6 × (4 × 25) = 6 × 100 = 600' },
          { title: 'Ví dụ - Phép chia có dư', question: 'Cần ít nhất bao nhiêu xe 45 chỗ để chở 487 người?', solution: '487 : 45 = 10 (dư 37)\n→ 10 xe đầy và 1 xe chở 37 người → Cần ít nhất 11 xe.' }
        ],
        quiz: [
          { q: 'Tính nhẩm: 125 × 8', opts: ['1 000', '900', '800', '1 250'], ans: 0, exp: '125 × 8 = 1 000 (kết quả đặc biệt cần nhớ).' },
          { q: 'Phép chia 487 : 45 có thương và số dư là?', opts: ['Thương 10, dư 37', 'Thương 11, dư 0', 'Thương 10, dư 42', 'Thương 9, dư 37'], ans: 0, exp: '45 × 10 = 450; 487 - 450 = 37 (dư 37 < 45).' },
          { q: 'Tính chất phân phối: a × (b + c) = ?', opts: ['a×b + a×c', 'a×b + c', 'a + b×c', 'a×b × a×c'], ans: 0, exp: 'Tính chất phân phối: a × (b + c) = a × b + a × c.' }
        ],
        exercises: [
          {
            id: '1.23',
            title: 'Bài 1.23 (Trang 19)',
            desc: 'Thực hiện các phép nhân sau:',
            parts: [
              { id: 'a', q: 'a) 951 · 23 =', type: 'text_input', ans: ['21873', '21 873', '21.873'], placeholder: 'Nhập kết quả', hint: 'Đặt tính nhân 951 với 23.' },
              { id: 'b', q: 'b) 47 · 273 =', type: 'text_input', ans: ['12831', '12 831', '12.831'], placeholder: 'Nhập kết quả', hint: 'Tính chất giao hoán: 47 · 273 = 273 · 47.' },
              { id: 'c', q: 'c) 845 · 253 =', type: 'text_input', ans: ['213785', '213 785', '213.785'], placeholder: 'Nhập kết quả', hint: 'Đặt tính nhân 845 với 253.' },
              { id: 'd', q: 'd) 1 356 · 125 =', type: 'text_input', ans: ['169500', '169 500', '169.500'], placeholder: 'Nhập kết quả', hint: 'Đặt tính nhân 1 356 với 125.' }
            ],
            solution: 'a) 951 · 23 = <b>21 873</b><br>b) 47 · 273 = <b>12 831</b><br>c) 845 · 253 = <b>213 785</b><br>d) 1 356 · 125 = <b>169 500</b>'
          },
          {
            id: '1.24',
            title: 'Bài 1.24 (Trang 19)',
            desc: 'Tính nhẩm:',
            parts: [
              { id: 'a', q: 'a) 125 · 10 =', type: 'text_input', ans: ['1250', '1 250', '1.250'], placeholder: 'Nhập kết quả', hint: 'Thêm một chữ số 0 vào sau 125.' },
              { id: 'b', q: 'b) 2 021 · 100 =', type: 'text_input', ans: ['202100', '202 100', '202.100'], placeholder: 'Nhập kết quả', hint: 'Thêm hai chữ số 0 vào sau 2021.' },
              { id: 'c', q: 'c) 1 991 · 25 · 4 =', type: 'text_input', ans: ['199100', '199 100', '199.100'], placeholder: 'Nhập kết quả', hint: 'Nhóm (25 · 4) = 100 trước.' },
              { id: 'd', q: 'd) 3 025 · 125 · 8 =', type: 'text_input', ans: ['3025000', '3 025 000', '3.025.000'], placeholder: 'Nhập kết quả', hint: 'Nhóm (125 · 8) = 1 000 trước.' }
            ],
            solution: 'a) 125 · 10 = <b>1 250</b> (thêm một chữ số 0)<br>b) 2 021 · 100 = <b>202 100</b> (thêm hai chữ số 0)<br>c) 1 991 · 25 · 4 = 1 991 · (25 · 4) = 1 991 · 100 = <b>199 100</b><br>d) 3 025 · 125 · 8 = 3 025 · (125 · 8) = 3 025 · 1 000 = <b>3 025 000</b>'
          },
          {
            id: '1.25',
            title: 'Bài 1.25 (Trang 19)',
            desc: 'Tính nhẩm bằng cách áp dụng tính chất phân phối của phép nhân đối với phép cộng hoặc phép trừ:',
            parts: [
              { id: 'a', q: 'a) 125 · 101 =', type: 'text_input', ans: ['12625', '12 625', '12.625'], placeholder: 'Nhập kết quả', hint: 'Biến đổi 101 = 100 + 1.' },
              { id: 'b', q: 'b) 21 · 49 =', type: 'text_input', ans: ['1029', '1 029', '1.029'], placeholder: 'Nhập kết quả', hint: 'Biến đổi 49 = 50 - 1.' }
            ],
            solution: 'a) 125 · 101 = 125 · (100 + 1) = 125 · 100 + 125 · 1<br>= 12 500 + 125 = <b>12 625</b><br><br>b) 21 · 49 = 21 · (50 - 1) = 21 · 50 - 21 · 1<br>= 1 050 - 21 = <b>1 029</b>'
          },
          {
            id: '1.26',
            title: 'Bài 1.26 (Trang 19)',
            desc: 'Một trường Trung học cơ sở có 50 lớp, trung bình mỗi lớp có 11 bàn học, mỗi bàn học có 4 học sinh đang ngồi. Hỏi trường đó có bao nhiêu học sinh đang ngồi học?',
            parts: [
              { id: 'ans', q: 'Số học sinh đang ngồi học là (học sinh):', type: 'text_input', ans: ['2200', '2 200', '2.200'], placeholder: 'Nhập số học sinh', hint: 'Tính tích: 50 lớp · 11 bàn · 4 học sinh.' }
            ],
            solution: 'Trường đó có số học sinh đang ngồi học là:<br>50 · 11 · 4 = (50 · 4) · 11 = 200 · 11 = <b>2 200</b> (học sinh).<br>Đáp số: <b>2 200 học sinh</b>.'
          },
          {
            id: '1.27',
            title: 'Bài 1.27 (Trang 19)',
            desc: 'Tìm thương và số dư (nếu có) của các phép chia sau:',
            parts: [
              { id: 'q_a', q: 'a) Thương của phép chia 1 092 : 91 là:', type: 'text_input', ans: ['12'], placeholder: 'Nhập thương', hint: 'Đặt tính chia 1092 cho 91.' },
              { id: 'r_a', q: 'Số dư của phép chia 1 092 : 91 là:', type: 'text_input', ans: ['0'], placeholder: 'Nhập số dư (điền 0 nếu chia hết)', hint: 'Nhân ngược lại 91 · 12 = 1092.' },
              { id: 'q_b', q: 'b) Thương của phép chia 2 059 : 17 là:', type: 'text_input', ans: ['121'], placeholder: 'Nhập thương', hint: 'Đặt tính chia 2059 cho 17.' },
              { id: 'r_b', q: 'Số dư của phép chia 2 059 : 17 là:', type: 'text_input', ans: ['2'], placeholder: 'Nhập số dư', hint: 'Ta có 2059 = 17 · 121 + số dư.' }
            ],
            solution: 'a) Đặt tính phép chia 1 092 : 91 ta được thương là <b>12</b> và số dư là <b>0</b> (chia hết).<br>b) Đặt tính phép chia 2 059 : 17 ta được thương là <b>121</b> và số dư là <b>2</b> (vì 2 059 = 17 · 121 + 2).'
          },
          {
            id: '1.28',
            title: 'Bài 1.28 (Trang 19)',
            desc: 'Theo Tổng cục Thống kê, ngày 1-4-2019, tỉnh Bắc Giang có 1 803 950 người. Biết rằng hai lần số dân tỉnh Bắc Giang kém dân số tỉnh Thanh Hóa 32 228 người. Tính số dân tỉnh Thanh Hóa.',
            parts: [
              { id: 'ans', q: 'Số dân tỉnh Thanh Hóa là (người):', type: 'text_input', ans: ['3640128', '3 640 128', '3.640.128'], placeholder: 'Nhập số dân', hint: 'Số dân Thanh Hóa = 2 · (Số dân Bắc Giang) + 32 228.' }
            ],
            solution: 'Hai lần số dân tỉnh Bắc Giang là:<br>1 803 950 · 2 = 3 607 900 (người)<br>Số dân tỉnh Thanh Hóa là:<br>3 607 900 + 32 228 = <b>3 640 128</b> (người).<br>Đáp số: <b>3 640 128 người</b>.'
          },
          {
            id: '1.29',
            title: 'Bài 1.29 (Trang 19)',
            desc: 'Một trường THCS có 997 học sinh tham dự lễ tổng kết cuối năm. Ban tổ chức đã chuẩn bị những chiếc ghế băng 5 chỗ ngồi. Phải có ít nhất bao nhiêu chiếc ghế băng như vậy để tất cả học sinh đều có chỗ ngồi?',
            illustration: 'hall_svg',
            parts: [
              { id: 'ans', q: 'Số chiếc ghế băng ít nhất cần chuẩn bị là (chiếc):', type: 'text_input', ans: ['200'], placeholder: 'Nhập số ghế', hint: 'Tính phép chia 997 : 5 và cân nhắc số dư còn lại.' }
            ],
            solution: 'Thực hiện phép chia ta có:<br>997 : 5 = 199 (dư 2)<br>Vì có 199 ghế băng thì vẫn còn dư ra 2 học sinh chưa có chỗ ngồi. Do đó ban tổ chức cần chuẩn bị thêm ít nhất 1 chiếc ghế nữa cho 2 bạn này.<br>Số ghế băng tối thiểu cần là: 199 + 1 = <b>200</b> (chiếc).<br>Đáp số: <b>200 chiếc ghế băng</b>.'
          },
          {
            id: '1.30',
            title: 'Bài 1.30 (Trang 20)',
            desc: 'Một nhà máy dùng ô tô để chuyển 1 290 kiện hàng từ kho A sang kho B. Mỗi chuyến ô tô chở được nhiều nhất 45 kiện hàng. Hỏi phải xếp ít nhất bao nhiêu chuyến xe để chuyển hết số kiện hàng nói trên?',
            parts: [
              { id: 'ans', q: 'Số chuyến xe ít nhất là (chuyến):', type: 'text_input', ans: ['29'], placeholder: 'Nhập số chuyến', hint: 'Thực hiện phép chia 1290 : 45 và cộng thêm 1 chuyến cho số kiện hàng còn dư.' }
            ],
            solution: 'Thực hiện phép chia ta có:<br>1 290 : 45 = 28 (dư 30)<br>Nhà máy cần chạy 28 chuyến đầy kiện hàng, và còn dư ra 30 kiện hàng nữa cần xếp thêm 1 chuyến xe nữa để chuyển đi.<br>Tổng số chuyến xe ít nhất là: 28 + 1 = <b>29</b> (chuyến).<br>Đáp số: <b>29 chuyến xe</b>.'
          }
        ]
      },
      {
        id: 'c1-l6', num: 6, title: 'Luỹ thừa với số mũ tự nhiên', pages: '22-24', xp: 50,
        tags: ['Luỹ thừa', '7 công thức', 'Cơ số', 'Số mũ'],
        skills: ['Tính luỹ thừa bậc n', 'Nhân và chia hai luỹ thừa cùng cơ số', 'Áp dụng 7 công thức lũy thừa lớp 6'],
        theory: [
          {
            title: '1. Phép nâng lên lũy thừa & Các quy ước đặc biệt',
            content: '<strong>Lũy thừa bậc n</strong> của a là tích của n thừa số bằng nhau, mỗi thừa số bằng a.<br>Trong đó: <strong>a</strong> là cơ số, <strong>n</strong> là số mũ (n ∈ ℕ, n ≠ 0).',
            formulas: [
              'aⁿ = a · a · a ... a (gồm n thừa số a)',
              'Quy ước số mũ 1: a¹ = a',
              'Quy ước số mũ 0: a⁰ = 1 (với a ≠ 0)'
            ],
            notes: [
              'Ví dụ: 3⁴ = 3 · 3 · 3 · 3 = 81',
              'Lưu ý quan trọng: a⁰ luôn bằng 1 với mọi a ≠ 0. Ví dụ: 100⁰ = 1; 2026⁰ = 1.'
            ]
          },
          {
            title: '2. Nhân & Chia hai lũy thừa cùng cơ số',
            content: '<strong>Nhân cùng cơ số:</strong> Giữ nguyên cơ số và cộng các số mũ.<br><strong>Chia cùng cơ số (khác 0):</strong> Giữ nguyên cơ số và trừ các số mũ.',
            formulas: [
              'aᵐ · aⁿ = aᵐ⁺ⁿ',
              'aᵐ : aⁿ = aᵐ⁻ⁿ (với a ≠ 0, m ≥ n)'
            ],
            notes: [
              'Ví dụ nhân: 5³ · 5² = 5³⁺² = 5⁵ = 3125',
              'Ví dụ chia: 7⁵ : 7³ = 7⁵⁻³ = 7² = 49',
              'Hãy chắc chắn rằng các lũy thừa có cùng cơ số trước khi cộng hoặc trừ số mũ!'
            ]
          },
          {
            title: '3. Lũy thừa của một lũy thừa',
            content: 'Khi tính lũy thừa của một lũy thừa, ta giữ nguyên cơ số và nhân hai số mũ với nhau.',
            formulas: [
              '(aᵐ)ⁿ = aᵐ·ⁿ'
            ],
            notes: [
              'Ví dụ: (2³)² = 2³·² = 2⁶ = 64',
              'Tránh nhầm lẫn giữa lũy thừa của lũy thừa (nhân mũ) và nhân hai lũy thừa cùng cơ số (cộng mũ): (2³)² = 2⁶ khác với 2³ · 2² = 2⁵.'
            ]
          },
          {
            title: '4. Lũy thừa của một Tích & Lũy thừa của một Thương',
            content: '<strong>Lũy thừa của một tích:</strong> Bằng tích các lũy thừa.<br><strong>Lũy thừa của một thương:</strong> Bằng thương các lũy thừa.',
            formulas: [
              '(a · b)ⁿ = aⁿ · bⁿ',
              '(a : b)ⁿ = aⁿ : bⁿ (với b ≠ 0)'
            ],
            notes: [
              'Ví dụ lũy thừa của tích: (2 · 5)³ = 2³ · 5³ = 8 · 125 = 1000',
              'Ví dụ lũy thừa của thương: (10 : 2)⁴ = 10⁴ : 2⁴ = 10000 : 16 = 625',
              'Quy tắc này rất hữu ích để tính nhẩm nhanh khi kết hợp các thừa số tròn chục.'
            ]
          }
        ],
        examples: [
          {
            title: 'Ví dụ 1',
            question: 'Tính các giá trị sau: A = 5³ · 5² và B = 7⁵ : 7³',
            solution: 'A = 5³ · 5² = 5³⁺² = 5⁵ = 3125\nB = 7⁵ : 7³ = 7⁵⁻³ = 7² = 49'
          },
          {
            title: 'Ví dụ 2',
            question: 'Tính hợp lý: C = (2³)² và D = (2 · 5)³ và E = (10 : 2)⁴',
            solution: 'C = (2³)² = 2³·² = 2⁶ = 64\nD = (2 · 5)³ = 2³ · 5³ = 8 · 125 = 1000\n(Cách khác: D = 10³ = 1000)\nE = (10 : 2)⁴ = 10⁴ : 2⁴ = 10000 : 16 = 625\n(Cách khác: E = 5⁴ = 625)'
          }
        ],
        quiz: [
          { q: 'Tính 2³ × 2⁴ = ?', opts: ['2⁷ = 128', '2¹² = 4096', '4⁷ = 16384', '2⁷ = 256'], ans: 0, exp: 'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.' },
          { q: 'Quy ước a⁰ bằng bao nhiêu (với a ≠ 0)?', opts: ['1', '0', 'a', 'Không xác định'], ans: 0, exp: 'Theo quy ước đặc biệt: a⁰ = 1 với mọi cơ số a ≠ 0.' },
          { q: 'Tính giá trị của (2³)² ?', opts: ['64', '32', '12', '128'], ans: 0, exp: 'Áp dụng công thức lũy thừa của một lũy thừa, ta giữ nguyên cơ số và nhân hai số mũ: (2³)² = 2³·² = 2⁶ = 64.' },
          { q: 'Biểu thức (2 · 5)³ bằng tích các lũy thừa nào?', opts: ['2³ · 5³ = 1000', '2³ + 5³ = 133', '2 · 5³ = 250', '2³ · 5 = 40'], ans: 0, exp: 'Áp dụng công thức lũy thừa của một tích: (a · b)ⁿ = aⁿ · bⁿ. Do đó (2 · 5)³ = 2³ · 5³ = 8 · 125 = 1000.' },
          { q: 'Viết kết quả phép tính 10⁴ : 2⁴ dưới dạng một lũy thừa?', opts: ['5⁴', '5¹⁶', '10⁰', '8⁴'], ans: 0, exp: 'Áp dụng công thức lũy thừa của một thương: aⁿ : bⁿ = (a : b)ⁿ. Do đó 10⁴ : 2⁴ = (10 : 2)⁴ = 5⁴.' }
        ],
        exercises: [
          {
            id: '1.36',
            title: 'Bài 1.36 (Trang 24)',
            desc: 'Viết các tích sau dưới dạng một luỹ thừa:',
            parts: [
              { id: 'a', q: 'a) 9 · 9 · 9 · 9 · 9', type: 'math_input', ans: ['9^5', '9⁵'], placeholder: 'Nhập kết quả (ví dụ: 9^5)', hint: 'Có 5 thừa số 9 nhân với nhau.' },
              { id: 'b', q: 'b) 10 · 10 · 10 · 10', type: 'math_input', ans: ['10^4', '10⁴'], placeholder: 'Nhập kết quả', hint: 'Có 4 thừa số 10 nhân với nhau.' },
              { id: 'c', q: 'c) 5 · 5 · 5 · 25', type: 'math_input', ans: ['5^5', '5⁵'], placeholder: 'Nhập kết quả', hint: 'Biến đổi 25 = 5 · 5 = 5², rồi nhân các lũy thừa cùng cơ số.' },
              { id: 'd', q: 'd) a · a · a · a · a · a', type: 'math_input', ans: ['a^6', 'a⁶'], placeholder: 'Nhập kết quả', hint: 'Có 6 thừa số a nhân với nhau.' }
            ],
            solution: 'a) 9 · 9 · 9 · 9 · 9 = 9⁵ (5 thừa số 9)<br>b) 10 · 10 · 10 · 10 = 10⁴ (4 thừa số 10)<br>c) 5 · 5 · 5 · 25 = 5³ · 5² = 5³⁺² = 5⁵<br>d) a · a · a · a · a · a = a⁶ (6 thừa số a)'
          },
          {
            id: '1.37',
            title: 'Bài 1.37 (Trang 24)',
            desc: 'Hoàn thành bảng bình phương và lập phương sau (Điền giá trị đúng vào ô trống):',
            type: 'table',
            parts: [
              { id: 'r1_base', ans: ['4'], hint: 'Cơ số của lũy thừa 4³.' },
              { id: 'r1_exp', ans: ['3'], hint: 'Số mũ của lũy thừa 4³.' },
              { id: 'r1_val', ans: ['64'], hint: 'Tính 4 · 4 · 4 = ?' },
              { id: 'r2_pow', ans: ['3^5', '3⁵'], hint: 'Cơ số 3 và số mũ 5 ghép lại.' },
              { id: 'r2_val', ans: ['243'], hint: 'Tính 3 · 3 · 3 · 3 · 3 = 81 · 3 = ?' },
              { id: 'r3_pow', ans: ['2^7', '2⁷'], hint: 'Cơ số 2 và số mũ n sao cho 2ⁿ = 128.' },
              { id: 'r3_exp', ans: ['7'], hint: 'Tìm số mũ n để 2ⁿ = 128 (2⁵ = 32, 2⁶ = 64, 2⁷ = 128).' }
            ],
            solution: 'Bảng hoàn thiện như sau:<br>• Dòng 1: Lũy thừa <b>4³</b> có Cơ số là <b>4</b>, Số mũ là <b>3</b>, Giá trị là <b>64</b>.<br>• Dòng 2: Cơ số 3, Số mũ 5 viết thành Lũy thừa <b>3⁵</b>, Giá trị bằng <b>243</b>.<br>• Dòng 3: Cơ số 2, Giá trị 128 suy ra Số mũ là <b>7</b> (vì 2⁷ = 128), Lũy thừa là <b>2⁷</b>.'
          },
          {
            id: '1.38',
            title: 'Bài 1.38 (Trang 24)',
            desc: 'Tính giá trị của các lũy thừa sau:',
            parts: [
              { id: 'a', q: 'a) 2⁵', type: 'number_input', ans: ['32'], placeholder: 'Nhập số', hint: '2⁵ = 2 · 2 · 2 · 2 · 2' },
              { id: 'b', q: 'b) 3³', type: 'number_input', ans: ['27'], placeholder: 'Nhập số', hint: '3³ = 3 · 3 · 3' },
              { id: 'c', q: 'c) 5²', type: 'number_input', ans: ['25'], placeholder: 'Nhập số', hint: '5² = 5 · 5' },
              { id: 'd', q: 'd) 10⁹', type: 'number_input', ans: ['1000000000', '1.000.000.000', '1 000 000 000'], placeholder: 'Nhập số', hint: 'Số 1 theo sau bởi 9 chữ số 0.' }
            ],
            solution: 'a) 2⁵ = 2 · 2 · 2 · 2 · 2 = 32<br>b) 3³ = 3 · 3 · 3 = 27<br>c) 5² = 5 · 5 = 25<br>d) 10⁹ = 1 000 000 000 (Một tỷ)'
          },
          {
            id: '1.39',
            title: 'Bài 1.39 (Trang 24)',
            desc: 'Viết các số sau thành tổng giá trị các chữ số của nó bằng cách dùng các luỹ thừa của 10 theo mẫu:<br><i>Mẫu: 4 257 = 4 · 10³ + 2 · 10² + 5 · 10 + 7</i>',
            parts: [
              { id: 'a', q: 'Viết số 215', type: 'text_input', ans: ['2*10^2+1*10+5', '2*10^2+10+5', '2·10^2+10+5', '2·10^2+1·10+5', '2.10^2+1.10+5', '2*10²+10+5', '2·10²+1·10+5'], placeholder: 'Ví dụ: 2*10^2 + 1*10 + 5', hint: '2 trăm + 1 chục + 5 đơn vị. Viết 100 thành 10².' },
              { id: 'b', q: 'Viết số 902', type: 'text_input', ans: ['9*10^2+2', '9·10^2+2', '9.10^2+2', '9*10²+2', '9*10^2+0*10+2'], placeholder: 'Ví dụ: 9*10^2 + 2', hint: '9 trăm + 2 đơn vị (hàng chục bằng 0 nên có thể bỏ qua).' },
              { id: 'c', q: 'Viết số 2 020', type: 'text_input', ans: ['2*10^3+2*10', '2*10^3+20', '2·10^3+2·10', '2.10^3+2.10', '2*10³+2*10'], placeholder: 'Ví dụ: 2*10^3 + 2*10', hint: '2 nghìn + 2 chục. Viết 1000 = 10³.' },
              { id: 'd', q: 'Viết số 883 001', type: 'text_input', ans: ['8*10^5+8*10^4+3*10^3+1', '8·10^5+8·10^4+3·10^3+1', '8.10^5+8.10^4+3.10^3+1', '8*10⁵+8*10⁴+3*10³+1'], placeholder: 'Nhập dạng tương tự mẫu', hint: '8 trăm nghìn (10⁵) + 8 chục nghìn (10⁴) + 3 nghìn (10³) + 1 đơn vị.' }
            ],
            solution: '• 215 = 2 · 10² + 1 · 10 + 5<br>• 902 = 9 · 10² + 2<br>• 2 020 = 2 · 10³ + 2 · 10<br>• 883 001 = 8 · 10⁵ + 8 · 10⁴ + 3 · 10³ + 1'
          },
          {
            id: '1.40',
            title: 'Bài 1.40 (Trang 24)',
            desc: 'Tính 11², 111² và từ đó dự đoán kết quả của 1 111².',
            parts: [
              { id: 'a', q: 'Tính 11²', type: 'number_input', ans: ['121'], placeholder: 'Nhập số', hint: '11 · 11 = ?' },
              { id: 'b', q: 'Tính 111²', type: 'number_input', ans: ['12321'], placeholder: 'Nhập số', hint: '111 · 111 = ?' },
              { id: 'c', q: 'Dự đoán kết quả 1 111²', type: 'number_input', ans: ['1234321'], placeholder: 'Dự đoán số', hint: 'Chú ý quy luật tăng dần rồi giảm dần đối xứng: 121 (n=2), 12321 (n=3) -> ?' }
            ],
            solution: '• 11² = 121 (có hai chữ số 1, tăng đến 2 rồi giảm)<br>• 111² = 12 321 (có ba chữ số 1, tăng đến 3 rồi giảm)<br>• Quy luật: Khi bình phương một số gồm n chữ số 1, ta được kết quả là số đối xứng viết từ 1 đến n rồi giảm về 1.<br>→ Dự đoán: 1 111² = <b>1 234 321</b> (tăng đến 4 rồi giảm). Thử lại: 1111 · 1111 = 1 234 321 (Chính xác!)'
          },
          {
            id: '1.41',
            title: 'Bài 1.41 (Trang 24)',
            desc: 'Biết 2¹⁰ = 1 024. Hãy tính 2⁹ và 2¹¹.',
            parts: [
              { id: 'a', q: 'Tính 2⁹', type: 'number_input', ans: ['512'], placeholder: 'Nhập số', hint: '2⁹ = 2¹⁰ : 2 = 1 024 : 2' },
              { id: 'b', q: 'Tính 2¹¹', type: 'number_input', ans: ['2048'], placeholder: 'Nhập số', hint: '2¹¹ = 2¹⁰ · 2 = 1 024 · 2' }
            ],
            solution: '• Ta có 2⁹ = 2¹⁰ : 2 = 1 024 : 2 = <b>512</b><br>• Ta có 2¹¹ = 2¹⁰ · 2 = 1 024 · 2 = <b>2 048</b>'
          },
          {
            id: '1.42',
            title: 'Bài 1.42 (Trang 24)',
            desc: 'Viết kết quả các phép tính sau dưới dạng một lũy thừa:',
            parts: [
              { id: 'a', q: 'a) 5⁷ · 5³', type: 'math_input', ans: ['5^10', '5¹⁰'], placeholder: 'Ví dụ: 5^10', hint: 'Áp dụng quy tắc nhân hai lũy thừa cùng cơ số: Cộng số mũ.' },
              { id: 'b', q: 'b) 5⁸ : 5⁴', type: 'math_input', ans: ['5^4', '5⁴'], placeholder: 'Ví dụ: 5^4', hint: 'Áp dụng quy tắc chia hai lũy thừa cùng cơ số: Trừ số mũ.' }
            ],
            solution: 'a) 5⁷ · 5³ = 5⁷⁺³ = <b>5¹⁰</b><br>b) 5⁸ : 5⁴ = 5⁸⁻⁴ = <b>5⁴</b>'
          },
          {
            id: '1.43',
            title: 'Bài 1.43 (Trang 24)',
            desc: 'Ta có: 1 + 3 + 5 = 9 = 3².<br>Viết các tổng sau dưới dạng bình phương của một số tự nhiên:',
            parts: [
              { id: 'a', q: 'a) 1 + 3 + 5 + 7', type: 'math_input', ans: ['4^2', '4²'], placeholder: 'Ví dụ: 4^2', hint: 'Tính tổng: 1 + 3 + 5 + 7 = 16. Số nào bình phương bằng 16?' },
              { id: 'b', q: 'b) 1 + 3 + 5 + 7 + 9', type: 'math_input', ans: ['5^2', '5²'], placeholder: 'Ví dụ: 5^2', hint: 'Tính tổng: 1 + 3 + 5 + 7 + 9 = 25. Số nào bình phương bằng 25?' }
            ],
            solution: 'a) 1 + 3 + 5 + 7 = 16 = <b>4²</b><br>b) 1 + 3 + 5 + 7 + 9 = 25 = <b>5²</b><br><i>*Quy luật: Tổng của n số lẻ liên tiếp đầu tiên luôn bằng bình phương của n (n²).*</i>'
          },
          {
            id: '1.44',
            title: 'Bài 1.44 (Trang 24)',
            desc: 'Trái Đất có khối lượng khoảng 6 · 10²⁰ tấn. Mỗi giây Mặt Trời tiêu thụ 6 · 10⁶ tấn khí hydrogen. Hỏi Mặt Trời cần bao nhiêu giây để tiêu thụ một lượng khí hydrogen có khối lượng bằng khối lượng Trái Đất?',
            illustration: 'sun_earth_svg',
            parts: [
              { id: 'ans', q: 'Thời gian Mặt Trời cần để tiêu thụ là (giây):', type: 'math_input', ans: ['10^14', '10¹⁴', '100000000000000'], placeholder: 'Ví dụ: 10^14', hint: 'Lấy khối lượng Trái Đất chia cho lượng tiêu thụ mỗi giây: (6 · 10²⁰) : (6 · 10⁶).' }
            ],
            solution: 'Khối lượng Trái Đất chia cho lượng hydro Mặt Trời tiêu thụ mỗi giây:<br>(6 · 10²⁰) : (6 · 10⁶) = (6 : 6) · (10²⁰ : 10⁶) = 1 · 10²⁰⁻⁶ = <b>10¹⁴</b> (giây).<br>Đáp số: <b>10¹⁴ giây</b>.'
          },
          {
            id: '1.45',
            title: 'Bài 1.45 (Trang 24)',
            desc: 'Theo các nhà khoa học, mỗi giây cơ thể con người trung bình tạo ra khoảng 25 · 10⁵ tế bào hồng cầu. Hãy tính xem mỗi giờ, bao nhiêu tế bào hồng cầu được tạo ra?',
            illustration: 'blood_cell_svg',
            parts: [
              { id: 'ans', q: 'Số tế bào hồng cầu tạo ra trong 1 giờ là:', type: 'text_input', ans: ['9*10^9', '9·10^9', '9.10^9', '9*10⁹', '9000000000', '9 000 000 000', '9.000.000.000'], placeholder: 'Ví dụ: 9*10^9', hint: '1 giờ = 3 600 giây. Lấy số hồng cầu mỗi giây nhân với 3 600.' }
            ],
            solution: 'Đổi 1 giờ = 60 phút = 3 600 giây.<br>Số tế bào hồng cầu tạo ra trong 1 giờ là:<br>(25 · 10⁵) · 3 600 = 25 · 10⁵ · (36 · 10²)<br>= (25 · 36) · (10⁵ · 10²)<br>= 900 · 10⁷ = 9 · 10² · 10⁷ = <b>9 · 10⁹</b> (tế bào).<br>Đáp số: <b>9 · 10⁹ tế bào hồng cầu</b>.'
          }
        ]
      },
      {
        id: 'c1-l7', num: 7, mnemonic: 'Ngoặc tròn làm trước tiên phong,\nNgoặc vuông kế tiếp, ngoặc nhọn khóa đuôi!\nLuỹ thừa bá chủ đi đầu,\nNhân chia tiếp bước, cộng trừ theo sau!', title: 'Thứ tự thực hiện phép tính', pages: '25-27', xp: 40,
        tags: ['Thứ tự phép tính', 'Ngoặc', 'Biểu thức'],
        skills: ['Áp dụng đúng thứ tự thực hiện phép tính', 'Tính giá trị biểu thức có ngoặc', 'Tính biểu thức có luỹ thừa'],
        theory: [
          { title: 'Quy tắc thứ tự', content: '<strong>Không ngoặc:</strong> Luỹ thừa → Nhân/Chia (trái qua phải) → Cộng/Trừ (trái qua phải).<br><strong>Có ngoặc:</strong> ( ) → [ ] → { } từ trong ra ngoài.', formulas: ['Ngoặc tròn () → ngoặc vuông [] → ngoặc nhọn {}', 'Luỹ thừa → × ÷ → + −'], notes: ['Cùng bậc: thực hiện từ trái sang phải', 'Dấu ngoặc luôn ưu tiên hơn'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: 3 × 2² - (5 + 3)', solution: '3 × 2² - (5 + 3)\n= 3 × 4 - 8\n= 12 - 8 = 4' }
        ],
        quiz: [
          { q: 'Tính: 2 + 3 × 4', opts: ['14', '20', '12', '24'], ans: 0, exp: 'Nhân trước, cộng sau: 2 + (3×4) = 2 + 12 = 14.' },
          { q: 'Tính: (2 + 3) × 4', opts: ['20', '14', '24', '10'], ans: 0, exp: 'Ngoặc trước: (2+3) × 4 = 5 × 4 = 20.' },
          { q: 'Tính: 2³ + 4 × 5 - 6', opts: ['22', '34', '14', '46'], ans: 0, exp: '2³ + 4×5 - 6 = 8 + 20 - 6 = 22.' }
        ],
        exercises: [
          {
            id: '1.46',
            title: 'Bài 1.46 (Trang 26)',
            desc: 'Tính giá trị của biểu thức:',
            parts: [
              { id: 'a', q: 'a) 235 + 78 - 142 =', type: 'number_input', ans: ['171'], placeholder: 'Nhập số', hint: 'Thực hiện phép cộng và trừ từ trái sang phải.' },
              { id: 'b', q: 'b) 14 + 2 · 8² =', type: 'number_input', ans: ['142'], placeholder: 'Nhập số', hint: 'Tính lũy thừa 8² trước, sau đó thực hiện phép nhân rồi phép cộng.' },
              { id: 'c', q: 'c) {2³ + [1 + (3 - 1)²]} : 13 =', type: 'number_input', ans: ['1'], placeholder: 'Nhập số', hint: 'Ưu tiên ngoặc tròn (), sau đó đến lũy thừa, ngoặc vuông [], rồi ngoặc nhọn {}, và cuối cùng là phép chia.' }
            ],
            solution: 'a) 235 + 78 - 142 = 313 - 142 = <b>171</b><br>b) 14 + 2 · 8² = 14 + 2 · 64 = 14 + 128 = <b>142</b><br>c) {2³ + [1 + (3 - 1)²]} : 13 = {8 + [1 + 2²]} : 13 = {8 + [1 + 4]} : 13 = {8 + 5} : 13 = 13 : 13 = <b>1</b>'
          },
          {
            id: '1.47',
            title: 'Bài 1.47 (Trang 26)',
            desc: 'Tính giá trị của biểu thức: 1 + 2(a + b) - 4³ khi a = 25 và b = 9.',
            parts: [
              { id: 'ans', q: 'Giá trị của biểu thức là:', type: 'number_input', ans: ['5'], placeholder: 'Nhập số', hint: 'Thay a = 25 và b = 9 vào biểu thức, tính (a+b) và 4³ = 64 trước.' }
            ],
            solution: 'Thay a = 25 và b = 9 vào biểu thức ta được:<br>1 + 2 · (25 + 9) - 4³<br>= 1 + 2 · 34 - 64<br>= 1 + 68 - 64<br>= 69 - 64 = <b>5</b>'
          },
          {
            id: '1.48',
            title: 'Bài 1.48 (Trang 26)',
            desc: 'Trong 8 tháng đầu năm, một cửa hàng bán được 1 264 chiếc ti vi. Trong 4 tháng cuối năm, trung bình mỗi tháng cửa hàng bán được 164 chiếc ti vi.',
            parts: [
              { id: 'a', q: 'a) Viết biểu thức tính trung bình số ti vi bán được mỗi tháng trong cả năm:', type: 'text_input', ans: ['(1264+164*4)/12', '(1264+164·4)/12', '(1264+164.4)/12', '(1264+164*4):12', '(1264+164·4):12', '(1264+164.4):12', '(1264 + 164 * 4) / 12', '(1264 + 164 * 4) : 12'], placeholder: 'Ví dụ: (1264 + 164*4)/12', hint: 'Tổng số ti vi cả năm = (Số ti vi 8 tháng đầu) + (Số ti vi 4 tháng cuối nhân 164). Rồi chia cho 12 tháng.' },
              { id: 'b', q: 'b) Tính giá trị của biểu thức tìm được ở câu a:', type: 'number_input', ans: ['160'], placeholder: 'Nhập số ti vi', hint: 'Thực hiện nhân trong ngoặc 164 · 4, cộng với 1264 rồi chia cho 12.' }
            ],
            solution: 'a) Tổng số ti vi bán được trong 4 tháng cuối năm là: 164 · 4 (chiếc).<br>Tổng số ti vi bán được cả năm là: 1 264 + 164 · 4 (chiếc).<br>Trung bình mỗi tháng bán được: <b>(1 264 + 164 · 4) : 12</b> hoặc <b>(1 264 + 164 · 4) / 12</b> (chiếc).<br><br>b) Giá trị của biểu thức:<br>(1 264 + 164 · 4) : 12<br>= (1 264 + 656) : 12<br>= 1 920 : 12 = <b>160</b> (chiếc).<br>Đáp số: <b>160 chiếc ti vi</b>.'
          },
          {
            id: '1.49',
            title: 'Bài 1.49 (Trang 26)',
            desc: 'Căn hộ nhà bác Cường có diện tích 105 m². Ngoại trừ bếp và nhà vệ sinh rộng 30 m², toàn bộ diện tích còn lại được lát gỗ như sau: một nửa diện tích lát gỗ loại 1 giá 350 000 đồng/m²; phần còn lại lát gỗ loại 2 giá 270 000 đồng/m². Chi phí mua gỗ lát sàn cả căn hộ là bao nhiêu?',
            illustration: 'flooring_svg',
            parts: [
              { id: 'ans', q: 'Tổng chi phí mua gỗ lát sàn là (đồng):', type: 'text_input', ans: ['18240000', '18.240.000', '18 240 000'], placeholder: 'Nhập số tiền', hint: 'Diện tích lát gỗ = 105 - 30 = 75 m². Một nửa diện tích là 75 / 2 = 37,5 m². Chi phí = 37,5 · 350 000 + 37,5 · 270 000 = 37,5 · (350 000 + 270 000).' }
            ],
            solution: '• Diện tích căn hộ cần lát gỗ là:<br>105 - 30 = 75 (m²)<br>• Diện tích lát gỗ mỗi loại là:<br>75 : 2 = 37,5 (m²)<br>• Chi phí mua gỗ lát sàn loại 1 là:<br>37,5 · 350 000 = 13 125 000 (đồng)<br>• Chi phí mua gỗ lát sàn loại 2 là:<br>37,5 · 270 000 = 10 125 000 (đồng)<br>• Tổng chi phí bác Cường cần chi trả là:<br>13 125 000 + 10 125 000 = <b>18 240 000</b> (đồng).<br>(Cách tính nhanh: 37,5 · (350 000 + 270 000) = 37,5 · 620 000 = 18 240 000 đồng).<br>Đáp số: <b>18 240 000 đồng</b>.'
          },
          {
            id: '1.50',
            title: 'Bài 1.50 (Trang 27)',
            desc: 'Tính giá trị của biểu thức:',
            parts: [
              { id: 'a', q: 'a) 36 - 18 : 6 =', type: 'number_input', ans: ['33'], placeholder: 'Nhập số', hint: 'Thực hiện phép chia 18 : 6 trước rồi mới thực hiện phép trừ.' },
              { id: 'b', q: 'b) 2 · 3² + 24 : 6 · 2 =', type: 'number_input', ans: ['26'], placeholder: 'Nhập số', hint: 'Tính lũy thừa 3² = 9 trước. Thứ tự: 2·9 + (24:6)·2.' },
              { id: 'c', q: 'c) 2 · 3² - 24 : (6 · 2) =', type: 'number_input', ans: ['16'], placeholder: 'Nhập số', hint: 'Ưu tiên ngoặc tròn (6·2) trước, tính lũy thừa 3² = 9. Biểu thức trở thành: 2·9 - 24 : 12.' }
            ],
            solution: 'a) 36 - 18 : 6 = 36 - 3 = <b>33</b><br>b) 2 · 3² + 24 : 6 · 2 = 2 · 9 + 4 · 2 = 18 + 8 = <b>26</b><br>c) 2 · 3² - 24 : (6 · 2) = 2 · 9 - 24 : 12 = 18 - 2 = <b>16</b>'
          },
          {
            id: '1.51',
            title: 'Bài 1.51 (Trang 27)',
            desc: 'Viết kết quả các phép tính sau dưới dạng một lũy thừa:',
            parts: [
              { id: 'a', q: 'a) 3³ : 3² =', type: 'math_input', ans: ['3^1', '3', '3¹'], placeholder: 'Nhập dạng 3^1 hoặc 3', hint: 'Chia hai lũy thừa cùng cơ số: Trừ số mũ.' },
              { id: 'b', q: 'b) 5⁴ : 5² =', type: 'math_input', ans: ['5^2', '5²', '25'], placeholder: 'Nhập dạng 5^2', hint: 'Chia hai lũy thừa cùng cơ số: Trừ số mũ.' },
              { id: 'c', q: 'c) 8³ · 8² =', type: 'math_input', ans: ['8^5', '8⁵'], placeholder: 'Nhập dạng 8^5', hint: 'Nhân hai lũy thừa cùng cơ số: Cộng số mũ.' },
              { id: 'd', q: 'd) 5⁴ · 5³ : 5² =', type: 'math_input', ans: ['5^5', '5⁵'], placeholder: 'Nhập dạng 5^5', hint: 'Nhân và chia từ trái sang phải: 5⁴⁺³⁻².' }
            ],
            solution: 'a) 3³ : 3² = 3³⁻² = 3¹ = <b>3</b><br>b) 5⁴ : 5² = 5⁴⁻² = <b>5²</b> (hoặc 25)<br>c) 8³ · 8² = 8³⁺² = <b>8⁵</b><br>d) 5⁴ · 5³ : 5² = 5⁴⁺³⁻² = <b>5⁵</b>'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 1 - CHƯƠNG II: TÍNH CHIA HẾT (Bài 8-13)
  // ================================================================
  {
    id: 'c2', volume: 1,
    title: 'Tính chia hết trong ℕ',
    subtitle: 'Số học · Tập 1',
    emoji: '➗',
    color: '#8b5cf6',
    pages: '28-55',
    lessons: [
      {
        id: 'c2-l1', num: 8, mnemonic: 'Muốn tìm Bội số dễ dàng:\nNhân số đó với 0, 1, 2, 3...\nCòn tìm Ước số thì ta:\nChia số đó hỏi có chia hết không?\nChia từ 1 tới chính nó luôn!', title: 'Tính chia hết và ước, bội', pages: '28-31', xp: 35,
        tags: ['Chia hết', 'Ước', 'Bội'],
        skills: ['Xác định ước và bội của một số', 'Tìm tập hợp ước và bội', 'Áp dụng vào bài toán thực tế'],
        theory: [
          { title: '1. Quan hệ chia hết', content: 'a ⋮ b (đọc: a chia hết cho b) khi a = b × q (q ∈ ℕ).', formulas: ['a ⋮ b → a là bội của b', 'a ⋮ b → b là ước của a', 'a ⋮ b và b ⋮ c → a ⋮ c'], notes: ['0 là bội của mọi số khác 0', '1 là ước của mọi số', 'Mọi số tự nhiên đều chia hết cho 1 và chính nó'] },
          { title: '2. Tập ước và bội', content: 'Ư(a) = {d | a ⋮ d} ;  B(a) = {a × k | k ∈ ℕ}', formulas: ['Ư(12) = {1; 2; 3; 4; 6; 12}', 'B(5) = {0; 5; 10; 15; 20; ...}'], notes: ['Tập ước là hữu hạn', 'Tập bội là vô hạn'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tìm Ư(18) và 3 bội nhỏ nhất của 7 (khác 0).', solution: 'Ư(18) = {1; 2; 3; 6; 9; 18}\nB(7): 7×1=7; 7×2=14; 7×3=21 → {7; 14; 21}' }
        ],
        quiz: [
          { q: 'Số nào sau đây là ước của 24?', opts: ['8', '7', '5', '11'], ans: 0, exp: '24 : 8 = 3 (chia hết) → 8 là ước của 24.' },
          { q: 'Tập Ư(12) có bao nhiêu phần tử?', opts: ['6', '4', '12', '3'], ans: 0, exp: 'Ư(12) = {1;2;3;4;6;12} → 6 phần tử.' }
        ],
        exercises: [
          {
            id: '2.1',
            title: 'Bài 2.1 (Trang 30)',
            desc: 'Trong các số sau, số nào chia hết cho 9, số nào không chia hết cho 9?<br>Các số cần xét: 126; 432; 517; 9 810.',
            parts: [
              { id: 'chia_het', q: 'Các số chia hết cho 9 (nhập các số cách nhau bởi dấu chấm phẩy hoặc dấu phẩy):', type: 'text_input', ans: ['126;432;9810', '126; 432; 9810', '126;432;9 810', '126; 432; 9 810', '126,432,9810', '126, 432, 9810'], placeholder: 'Ví dụ: 126; 432; 9810', hint: 'Số chia hết cho 9 là số có tổng các chữ số chia hết cho 9. Hãy kiểm tra tổng chữ số của từng số.' },
              { id: 'khong_chia_het', q: 'Các số không chia hết cho 9:', type: 'text_input', ans: ['517', ' số 517'], placeholder: 'Ví dụ: 517', hint: 'Số không chia hết cho 9 là số có tổng các chữ số không chia hết cho 9.' }
            ],
            solution: 'Xét tổng các chữ số của từng số:<br>• 1 + 2 + 6 = 9 ⋮ 9 → <b>126 ⋮ 9</b>.<br>• 4 + 3 + 2 = 9 ⋮ 9 → <b>432 ⋮ 9</b>.<br>• 5 + 1 + 7 = 13 không chia hết cho 9 → <b>517 ∉ 9</b>.<br>• 9 + 8 + 1 + 0 = 18 ⋮ 9 → <b>9 810 ⋮ 9</b>.<br>→ Các số chia hết cho 9: <b>126; 432; 9 810</b>. Số không chia hết cho 9: <b>517</b>.'
          },
          {
            id: '2.5',
            title: 'Bài 2.5 (Trang 30)',
            desc: 'Tìm các tập hợp sau:',
            parts: [
              { id: 'u_30', q: 'a) Tập hợp các ước của 30: Ư(30) = ', type: 'text_input', ans: ['{1;2;3;5;6;10;15;30}', '{1,2,3,5,6,10,15,30}', '1;2;3;5;6;10;15;30', '1,2,3,5,6,10,15,30', '{1; 2; 3; 5; 6; 10; 15; 30}'], placeholder: 'Ví dụ: {1; 2; 3; 5; 6; 10; 15; 30}', hint: 'Lấy 30 chia cho các số tự nhiên từ 1 đến 30 để tìm các số mà 30 chia hết.' },
              { id: 'b_6', q: 'b) Tập hợp các bội của 6 nhỏ hơn 40: ', type: 'text_input', ans: ['{0;6;12;18;24;30;36}', '{0,6,12,18,24,30,36}', '0;6;12;18;24;30;36', '0,6,12,18,24,30,36', '{0; 6; 12; 18; 24; 30; 36}'], placeholder: 'Ví dụ: {0; 6; 12; 18; 24; 30; 36}', hint: 'Nhân 6 lần lượt với 0, 1, 2, 3, 4, 5, 6 để được các bội nhỏ hơn 40.' }
            ],
            solution: 'a) Ư(30) gồm các số chia hết của 30:<br><b>Ư(30) = {1; 2; 3; 5; 6; 10; 15; 30}</b>.<br>b) Bội của 6 nhỏ hơn 40: 6 × 0 = 0, 6 × 1 = 6, 6 × 2 = 12, 6 × 3 = 18, 6 × 4 = 24, 6 × 5 = 30, 6 × 6 = 36.<br><b>B(6) < 40 = {0; 6; 12; 18; 24; 30; 36}</b>.'
          }
        ]
      },
      {
        id: 'c2-l2', num: 9, title: 'Dấu hiệu chia hết cho 2, 5', pages: '32-34', xp: 30,
        tags: ['Chia hết cho 2', 'Chia hết cho 5', 'Chữ số tận cùng'],
        skills: ['Nhận biết số chia hết cho 2', 'Nhận biết số chia hết cho 5', 'Phân tích chữ số tận cùng'],
        theory: [
          { title: 'Dấu hiệu chia hết', content: '<strong>Chia hết cho 2:</strong> chữ số tận cùng là 0, 2, 4, 6, 8 (số chẵn).<br><strong>Chia hết cho 5:</strong> chữ số tận cùng là 0 hoặc 5.', formulas: [], notes: ['Chia hết cho cả 2 và 5 ↔ chữ số tận cùng là 0', 'Số chẵn chia hết cho 2, số lẻ thì không'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Trong các số: 120, 135, 246, 305, 1000 - số nào chia hết cho 2? Cho 5?', solution: 'Chia hết cho 2: 120, 246, 1000 (tận cùng 0, 6, 0)\nChia hết cho 5: 120, 135, 305, 1000 (tận cùng 0, 5, 5, 0)' }
        ],
        quiz: [
          { q: 'Số nào sau đây chia hết cho cả 2 và 5?', opts: ['370', '375', '372', '357'], ans: 0, exp: '370 tận cùng bằng 0 → chia hết cho cả 2 và 5.' },
          { q: 'Điền chữ số tận cùng để 35□ chia hết cho 2?', opts: ['0, 2, 4, 6 hoặc 8', 'Chỉ 0', 'Chỉ 0 hoặc 5', 'Chỉ 5'], ans: 0, exp: 'Để chia hết cho 2, chữ số tận cùng phải là 0, 2, 4, 6 hoặc 8.' }
        ],
        exercises: [
          {
            id: '2.10',
            title: 'Bài 2.10 (Trang 34)',
            desc: 'Trong các số sau: 345; 680; 724; 1 025.<br>Số nào chia hết cho 2? Số nào chia hết cho 5? Số nào chia hết cho cả 2 và 5?',
            parts: [
              { id: 'div_2', q: 'a) Số chia hết cho 2:', type: 'text_input', ans: ['680;724', '680,724', '680; 724', '680, 724'], placeholder: 'Ví dụ: 680; 724', hint: 'Các số có chữ số tận cùng chẵn (0, 2, 4, 6, 8) thì chia hết cho 2.' },
              { id: 'div_5', q: 'b) Số chia hết cho 5:', type: 'text_input', ans: ['345;680;1025', '345; 680; 1025', '345;680;1 025', '345; 680; 1 025', '345,680,1025', '345, 680, 1025'], placeholder: 'Ví dụ: 345; 680; 1025', hint: 'Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5.' },
              { id: 'div_2_5', q: 'c) Số chia hết cho cả 2 và 5:', type: 'text_input', ans: ['680', 'số 680'], placeholder: 'Ví dụ: 680', hint: 'Các số có chữ số tận cùng bằng 0 thì chia hết cho cả 2 và 5.' }
            ],
            solution: '• Chia hết cho 2 (tận cùng là 0, 4): <b>680; 724</b>.<br>• Chia hết cho 5 (tận cùng là 5, 0): <b>345; 680; 1 025</b>.<br>• Chia hết cho cả 2 và 5 (tận cùng bằng 0): <b>680</b>.'
          },
          {
            id: '2.12',
            title: 'Bài 2.12 (Trang 34)',
            desc: 'Thay dấu `*` bằng một chữ số thích hợp để số 2 3* chia hết cho cả 2 và 5.',
            parts: [
              { id: 'star', q: 'Chữ số thích hợp thay thế vào dấu `*` là:', type: 'number_input', ans: ['0'], placeholder: 'Nhập chữ số', hint: 'Một số chia hết cho cả 2 và 5 khi và chỉ khi chữ số tận cùng bằng bao nhiêu?' }
            ],
            solution: 'Để số 2 3* chia hết cho cả 2 và 5 thì chữ số tận cùng `*` phải bằng 0. Khi đó ta được số 230.'
          }
        ]
      },
      {
        id: 'c2-l3', num: 10, title: 'Dấu hiệu chia hết cho 3, 9', pages: '35-37', xp: 35,
        tags: ['Chia hết cho 3', 'Chia hết cho 9', 'Tổng chữ số'],
        skills: ['Nhận biết số chia hết cho 3', 'Nhận biết số chia hết cho 9', 'Tính tổng chữ số'],
        theory: [
          { title: 'Dấu hiệu chia hết cho 3 và 9', content: '<strong>Chia hết cho 3:</strong> Tổng các chữ số chia hết cho 3.<br><strong>Chia hết cho 9:</strong> Tổng các chữ số chia hết cho 9.', formulas: [], notes: ['Chia hết cho 9 → chia hết cho 3 (không ngược lại)', '315: 3+1+5=9 → chia hết cho cả 3 và 9'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Số 2 718 có chia hết cho 3 và 9 không?', solution: 'Tổng chữ số: 2+7+1+8 = 18\n18 ⋮ 9 → 2718 ⋮ 9\n18 ⋮ 3 → 2718 ⋮ 3' }
        ],
        quiz: [
          { q: 'Số 1 347 có chia hết cho 9 không?', opts: ['Không (1+3+4+7=15, 15 không chia hết cho 9)', 'Có (vì chia hết cho 3)', 'Có (vì chẵn)', 'Không xác định'], ans: 0, exp: '1+3+4+7=15; 15 không chia hết cho 9 nên 1347 không chia hết cho 9.' },
          { q: 'Số nào dưới đây chia hết cho 9?', opts: ['729', '123', '456', '789'], ans: 0, exp: '7+2+9=18; 18 ⋮ 9 nên 729 ⋮ 9.' }
        ],
        exercises: [
          {
            id: '2.14',
            title: 'Bài 2.14 (Trang 37)',
            desc: 'Thay dấu `*` bằng chữ số thích hợp để được số tự nhiên thỏa mãn điều kiện:',
            parts: [
              { id: 'a', q: 'a) Số 1 2* chia hết cho 3:', type: 'text_input', ans: ['0;3;6;9', '0,3,6,9', '0; 3; 6; 9', '0, 3, 6, 9'], placeholder: 'Nhập các chữ số có thể, ví dụ: 0; 3; ...', hint: 'Tổng chữ số: 1 + 2 + * = 3 + *. Để chia hết cho 3 thì (3 + *) ⋮ 3.' },
              { id: 'b', q: 'b) Số 3 *5 chia hết cho 9:', type: 'number_input', ans: ['1'], placeholder: 'Nhập chữ số', hint: 'Tổng chữ số: 3 + * + 5 = 8 + *. Để chia hết cho 9 thì (8 + *) ⋮ 9.' }
            ],
            solution: 'a) Tổng các chữ số của 1 2* là: 1 + 2 + * = 3 + *. Để 1 2* ⋮ 3 thì (3 + *) ⋮ 3. Vì * ∈ {0;1;2;3;4;5;6;7;8;9} nên * ∈ <b>{0; 3; 6; 9}</b>.<br>b) Tổng chữ số của 3 *5 là: 3 + * + 5 = 8 + *. Để 3 *5 ⋮ 9 thì (8 + *) ⋮ 9. Suy ra 8 + * = 9 → <b>* = 1</b>.'
          },
          {
            id: '2.16',
            title: 'Bài 2.16 (Trang 37)',
            desc: 'Không thực hiện phép tính, giải thích tại sao tích 2026 × 9 chia hết cho 9.',
            parts: [
              { id: 'choice', q: 'Khẳng định nào sau đây giải thích ĐÚNG và đầy đủ nhất?', type: 'choice', opts: ['Tích có thừa số 9 chia hết cho 9 nên cả tích chia hết cho 9', 'Vì 2026 là số chẵn', 'Vì tổng các chữ số của 2026 là 10 không chia hết cho 9', 'Vì phép nhân này không chứa số lẻ'], ans: 0, hint: 'Xem tính chất chia hết của một tích: Nếu có một thừa số chia hết cho m thì cả tích chia hết cho m.' }
            ],
            solution: 'Vì trong tích 2026 × 9 có thừa số 9 chia hết cho 9, do đó cả tích 2026 × 9 chia hết cho 9 theo tính chất chia hết của một tích.'
          }
        ]
      },
      {
        id: 'c2-l4', num: 11, title: 'Số nguyên tố và hợp số', pages: '38-40', xp: 40,
        tags: ['Số nguyên tố', 'Hợp số', 'Phân tích thừa số'],
        skills: ['Phân biệt số nguyên tố và hợp số', 'Kiểm tra số nguyên tố', 'Phân tích ra thừa số nguyên tố'],
        theory: [
          { title: '1. Số nguyên tố và hợp số', content: '<strong>Số nguyên tố:</strong> > 1, chỉ có 2 ước là 1 và chính nó.<br><strong>Hợp số:</strong> > 1, có nhiều hơn 2 ước.', formulas: [], notes: ['1 không là số nguyên tố, không là hợp số', '2 là số nguyên tố chẵn duy nhất', 'Số nguyên tố nhỏ: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...'] },
          { title: '2. Phân tích ra thừa số nguyên tố', content: 'Mọi hợp số đều viết được dưới dạng tích các thừa số nguyên tố.', formulas: ['60 = 2² × 3 × 5', '36 = 2² × 3²'], notes: ['Phân tích bằng cách chia lần lượt cho các số nguyên tố từ nhỏ đến lớn'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Phân tích 84 ra thừa số nguyên tố.', solution: '84 = 2 × 42 = 2 × 2 × 21 = 2 × 2 × 3 × 7\n→ 84 = 2² × 3 × 7' }
        ],
        quiz: [
          { q: 'Số nào sau đây là số nguyên tố?', opts: ['17', '15', '21', '27'], ans: 0, exp: '17 chỉ có ước là 1 và 17 → là số nguyên tố.' },
          { q: '60 = 2² × ? × 5', opts: ['3', '2', '4', '6'], ans: 0, exp: '60 = 4 × 15 = 4 × 3 × 5 = 2² × 3 × 5.' }
        ],
        exercises: [
          {
            id: '2.18',
            title: 'Bài 2.18 (Trang 40)',
            desc: 'Các số sau đây là số nguyên tố hay hợp số: 89; 97; 125; 2 011?',
            parts: [
              { id: '89', q: 'Số 89 là:', type: 'choice', opts: ['Số nguyên tố', 'Hợp số'], ans: 0, hint: 'Hãy thử chia 89 cho các số nguyên tố nhỏ hơn căn 89 (2, 3, 5, 7).' },
              { id: '125', q: 'Số 125 là:', type: 'choice', opts: ['Hợp số', 'Số nguyên tố'], ans: 0, hint: '125 có tận cùng là 5, vậy ngoài 1 và 125 thì nó còn chia hết cho số nào nữa không?' },
              { id: '2011', q: 'Số 2 011 là:', type: 'choice', opts: ['Số nguyên tố', 'Hợp số'], ans: 0, hint: '2 011 không chia hết cho các số nguyên tố từ 2 đến 43.' }
            ],
            solution: '• <b>89 và 97</b> chỉ chia hết cho 1 và chính nó → <b>Số nguyên tố</b>.<br>• <b>125</b> tận cùng là 5 nên chia hết cho 5, có nhiều hơn 2 ước → <b>Hợp số</b>.<br>• <b>2 011</b> không chia hết cho số nguyên tố nào nhỏ hơn nó → <b>Số nguyên tố</b>.'
          },
          {
            id: '2.20',
            title: 'Bài 2.20 (Trang 40)',
            desc: 'Phân tích các số sau ra thừa số nguyên tố: 24, 75, 120.',
            parts: [
              { id: '24', q: '24 = ', type: 'text_input', ans: ['2^3*3', '2^3 * 3', '2^3.3', '3*2^3', '8*3'], placeholder: 'Ví dụ: 2^3 * 3', hint: '24 = 8 × 3. Viết 8 dưới dạng luỹ thừa của 2.' },
              { id: '75', q: '75 = ', type: 'text_input', ans: ['3*5^2', '3 * 5^2', '3.5^2', '5^2*3'], placeholder: 'Ví dụ: 3 * 5^2', hint: '75 = 3 × 25. Viết 25 dưới dạng luỹ thừa của 5.' },
              { id: '120', q: '120 = ', type: 'text_input', ans: ['2^3*3*5', '2^3 * 3 * 5', '2^3.3.5', '3*5*2^3'], placeholder: 'Ví dụ: 2^3 * 3 * 5', hint: '120 = 8 × 3 × 5. Viết 8 thành luỹ thừa của 2.' }
            ],
            solution: '• 24 = 8 × 3 = <b>2³ × 3</b>.<br>• 75 = 3 × 25 = <b>3 × 5²</b>.<br>• 120 = 10 × 12 = 2 × 5 × 4 × 3 = <b>2³ × 3 × 5</b>.'
          }
        ]
      },
      {
        id: 'c2-l5', num: 12, title: 'Ước chung lớn nhất (ƯCLN)', pages: '41-44', xp: 45,
        tags: ['ƯCLN', 'Ước chung', 'Phân số tối giản'],
        skills: ['Tìm ƯCLN của hai hay nhiều số', 'Rút gọn phân số bằng ƯCLN', 'Giải bài toán chia đều'],
        theory: [
          { title: 'ƯCLN và cách tìm', content: 'ƯCLN(a,b) là ước chung lớn nhất của a và b. Tìm bằng phân tích thừa số nguyên tố: lấy tích các thừa số chung với số mũ nhỏ nhất.', formulas: ['ƯCLN(36, 24): 36=2²×3², 24=2³×3 → ƯCLN=2²×3=12'], notes: ['Nếu a ⋮ b thì ƯCLN(a,b) = b', 'ƯCLN(a,b,c) = ƯCLN(ƯCLN(a,b), c)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tìm ƯCLN(48, 36, 18).', solution: '48 = 2⁴ × 3\n36 = 2² × 3²\n18 = 2 × 3²\nƯCLN = 2¹ × 3¹ = 6' }
        ],
        quiz: [
          { q: 'ƯCLN(12, 18) = ?', opts: ['6', '3', '36', '2'], ans: 0, exp: '12=2²×3; 18=2×3². ƯCLN=2¹×3¹=6.' },
          { q: 'Có 48 bút và 36 vở chia đều cho nhiều nhất bao nhiêu bạn?', opts: ['12', '6', '8', '4'], ans: 0, exp: 'ƯCLN(48,36) = 12 → chia cho tối đa 12 bạn.' }
        ],
        exercises: [
          {
            id: '2.30',
            title: 'Bài 2.30 (Trang 44)',
            desc: 'Tìm ƯCLN của các cặp số và nhóm số sau:',
            parts: [
              { id: 'a', q: 'a) ƯCLN(24, 36) = ', type: 'number_input', ans: ['12'], placeholder: 'Nhập kết quả', hint: 'Phân tích: 24 = 2^3 * 3; 36 = 2^2 * 3^2. Lấy tích các thừa số chung với số mũ nhỏ nhất.' },
              { id: 'b', q: 'b) ƯCLN(18, 30, 42) = ', type: 'number_input', ans: ['6'], placeholder: 'Nhập kết quả', hint: 'Phân tích: 18 = 2*3^2; 30 = 2*3*5; 42 = 2*3*7. Thừa số chung là 2 và 3.' }
            ],
            solution: 'a) 24 = 2³ × 3 ; 36 = 2² × 3² → ƯCLN(24, 36) = 2² × 3 = <b>12</b>.<br>b) 18 = 2 × 3² ; 30 = 2 × 3 × 5 ; 42 = 2 × 3 × 7 → ƯCLN(18, 30, 42) = 2 × 3 = <b>6</b>.'
          },
          {
            id: '2.33',
            title: 'Bài 2.33 (Trang 44)',
            desc: 'Rút gọn các phân số sau về dạng tối giản bằng cách chia cả tử và mẫu cho ƯCLN của chúng:',
            parts: [
              { id: 'a', q: 'a) Rút gọn 18/30 được phân số tối giản:', type: 'text_input', ans: ['3/5', '3 / 5', '0.6', '0,6'], placeholder: 'Ví dụ: 3/5', hint: 'ƯCLN(18, 30) = 6. Chia cả tử và mẫu cho 6.' },
              { id: 'b', q: 'b) Rút gọn 36/120 được phân số tối giản:', type: 'text_input', ans: ['3/10', '3 / 10', '0.3', '0,3'], placeholder: 'Ví dụ: 3/10', hint: 'ƯCLN(36, 120) = 12. Chia cả tử và mẫu cho 12.' }
            ],
            solution: 'a) ƯCLN(18, 30) = 6. Chia cả tử và mẫu cho 6:<br>18/30 = (18:6)/(30:6) = <b>3/5</b>.<br>b) ƯCLN(36, 120) = 12. Chia cả tử và mẫu cho 12:<br>36/120 = (36:12)/(120:12) = <b>3/10</b>.'
          }
        ]
      },
      {
        id: 'c2-l6', num: 13, title: 'Bội chung nhỏ nhất (BCNN)', pages: '45-48', xp: 45,
        tags: ['BCNN', 'Bội chung', 'Lịch trình'],
        skills: ['Tìm BCNN của hai hay nhiều số', 'Giải bài toán chu kỳ', 'Tính phân số có cùng mẫu'],
        theory: [
          { title: 'BCNN và cách tìm', content: 'BCNN(a,b) là bội chung nhỏ nhất khác 0 của a và b. Lấy tích các thừa số nguyên tố với số mũ LỚN NHẤT.', formulas: ['BCNN(12, 18): 12=2²×3, 18=2×3² → BCNN=2²×3²=36', 'ƯCLN × BCNN = a × b'], notes: ['Nếu a ⋮ b thì BCNN(a,b) = a', 'BCNN ≥ max(a,b)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Hai xe cứu hỏa xuất phát cùng lúc, xe A cứ 4 giờ về một lần, xe B cứ 6 giờ. Sau ít nhất bao lâu chúng về cùng lúc?', solution: 'BCNN(4, 6) = 12\n→ Sau 12 giờ, cả hai xe về cùng lúc.' }
        ],
        quiz: [
          { q: 'BCNN(8, 12) = ?', opts: ['24', '96', '4', '48'], ans: 0, exp: '8=2³; 12=2²×3. BCNN=2³×3=24.' },
          { q: 'ƯCLN(a,b) × BCNN(a,b) = ?', opts: ['a × b', 'a + b', 'ƯCLN²', 'BCNN²'], ans: 0, exp: 'Tích ƯCLN và BCNN bằng tích hai số: ƯCLN × BCNN = a × b.' }
        ],
        exercises: [
          {
            id: '2.38',
            title: 'Bài 2.38 (Trang 48)',
            desc: 'Tìm BCNN của các nhóm số sau:',
            parts: [
              { id: 'a', q: 'a) BCNN(12, 18) = ', type: 'number_input', ans: ['36'], placeholder: 'Nhập số', hint: 'Phân tích: 12 = 2^2 * 3; 18 = 2 * 3^2. Lấy thừa số chung và riêng với số mũ lớn nhất.' },
              { id: 'b', q: 'b) BCNN(10, 12, 15) = ', type: 'number_input', ans: ['60'], placeholder: 'Nhập số', hint: 'Phân tích: 10 = 2*5; 12 = 2^2*3; 15 = 3*5. BCNN = 2^2 * 3 * 5.' }
            ],
            solution: 'a) 12 = 2² × 3 ; 18 = 2 × 3² → BCNN(12, 18) = 2² × 3² = 4 × 9 = <b>36</b>.<br>b) 10 = 2 × 5 ; 12 = 2² × 3 ; 15 = 3 × 5 → BCNN(10, 12, 15) = 2² × 3 × 5 = <b>60</b>.'
          },
          {
            id: '2.40',
            title: 'Bài 2.40 (Trang 48)',
            desc: 'Học sinh lớp 6A khi xếp hàng 2, hàng 3, hàng 4 đều vừa đủ hàng. Biết số học sinh của lớp trong khoảng từ 30 đến 45. Tính số học sinh lớp 6A.',
            parts: [
              { id: 'students', q: 'Số học sinh của lớp 6A là (bạn):', type: 'number_input', ans: ['36'], placeholder: 'Nhập số', hint: 'Số học sinh là bội chung của 2, 3 và 4. Tìm BCNN(2, 3, 4) rồi tìm bội nằm trong khoảng từ 30 đến 45.' }
            ],
            solution: 'Gọi số học sinh lớp 6A là x (x ∈ ℕ* và 30 ≤ x ≤ 45).<br>Vì xếp hàng 2, 3, 4 đều vừa đủ nên x chia hết cho cả 2, 3, 4. Suy ra x là bội chung của 2, 3, 4.<br>Ta có BCNN(2, 3, 4) = 12. Do đó x ∈ BC(2, 3, 4) = B(12) = {0; 12; 24; 36; 48; ...}.<br>Vì số học sinh trong khoảng từ 30 đến 45 nên 30 ≤ x ≤ 45 → <b>x = 36</b>.<br>Vậy lớp 6A có <b>36 học sinh</b>.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 1 - CHƯƠNG III: SỐ NGUYÊN (Bài 14-17)
  // ================================================================
  {
    id: 'c3', volume: 1,
    title: 'Số nguyên',
    subtitle: 'Số học · Tập 1',
    emoji: '➖',
    color: '#06b6d4',
    pages: '56-80',
    lessons: [
      {
        id: 'c3-l1', num: 14, title: 'Số nguyên âm và tập ℤ', pages: '56-60', xp: 35,
        tags: ['Số nguyên âm', 'Tập Z', 'Trục số'],
        skills: ['Nhận biết số nguyên âm trong thực tế', 'Biểu diễn số nguyên trên trục số', 'So sánh hai số nguyên'],
        theory: [
          { title: '1. Số nguyên âm và tập ℤ', svg: `<svg viewBox='0 0 500 80' width='100%' height='60' style='max-width: 450px;'><line x1='20' y1='40' x2='480' y2='40' stroke='#94a3b8' stroke-width='2' /><polygon points='20,35 10,40 20,45' fill='#94a3b8' /><polygon points='480,35 490,40 480,45' fill='#94a3b8' /><circle cx='250' cy='40' r='4' fill='#0ea5e9' /><text x='246' y='25' fill='#0ea5e9' font-size='12' font-weight='bold' font-family='sans-serif'>O</text><text x='246' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>0</text><circle cx='310' cy='40' r='3' fill='#e2e8f0' /><text x='307' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>1</text><circle cx='370' cy='40' r='3' fill='#e2e8f0' /><text x='367' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>2</text><circle cx='430' cy='40' r='3' fill='#e2e8f0' /><text x='427' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif'>3</text><circle cx='190' cy='40' r='3' fill='#f43f5e' /><text x='182' y='60' fill='#f43f5e' font-size='12' font-family='sans-serif'>-1</text><circle cx='130' cy='40' r='3' fill='#f43f5e' /><text x='122' y='60' fill='#f43f5e' font-size='12' font-family='sans-serif'>-2</text><circle cx='70' cy='40' r='3' fill='#f43f5e' /><text x='62' y='60' fill='#f43f5e' font-size='12' font-family='sans-serif'>-3</text></svg>`, content: 'Các số -1, -2, -3, ... gọi là <strong>số nguyên âm</strong>. Dùng để biểu diễn nhiệt độ dưới 0°C, độ sâu dưới mực nước biển, ...', formulas: [], notes: ['ℤ = {...; -3; -2; -1; 0; 1; 2; 3; ...}', 'ℕ ⊂ ℤ'] },
          { title: '2. So sánh số nguyên', content: 'Trên trục số: số bên phải lớn hơn số bên trái.<br>Mọi số nguyên dương > 0 > mọi số nguyên âm.', formulas: ['-5 < -3 < 0 < 2 < 7'], notes: ['Số đối của a là -a; đối của -5 là 5', '|a| = a nếu a ≥ 0; |a| = -a nếu a < 0'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Nhiệt độ ở Hà Nội là -3°C, ở Huế là 5°C. Nơi nào lạnh hơn?', solution: '-3 < 5 → Hà Nội (-3°C) lạnh hơn Huế (5°C).' }
        ],
        quiz: [
          { q: 'Sắp xếp tăng dần: -7, 3, -2, 0, 5', opts: ['-7 < -2 < 0 < 3 < 5', '-2 < -7 < 0 < 3 < 5', '0 < -2 < -7 < 3 < 5', '3 < 5 < 0 < -2 < -7'], ans: 0, exp: 'Trên trục số từ trái sang phải: -7, -2, 0, 3, 5.' },
          { q: '|-8| = ?', opts: ['8', '-8', '0', '64'], ans: 0, exp: 'Giá trị tuyệt đối của -8 là 8 (khoảng cách đến 0).' }
        ],
        exercises: [
          {
            id: '3.1',
            title: 'Bài 3.1 (Trang 58)',
            desc: 'Hãy ghi các số nguyên biểu thị các đại lượng sau:',
            parts: [
              { id: 'a', q: 'a) Độ cao của đỉnh núi Phan-xi-păng là 3 143 mét trên mực nước biển:', type: 'text_input', ans: ['3143', '+3143', '3143m', '3 143'], placeholder: 'Nhập số nguyên (ví dụ: 3143)', hint: 'Độ cao trên mực nước biển được biểu diễn bằng số nguyên dương.' },
              { id: 'b', q: 'b) Độ cao của đáy vịnh Cam Ranh là 30 mét dưới mực nước biển:', type: 'text_input', ans: ['-30', '-30m'], placeholder: 'Nhập số nguyên (ví dụ: -30)', hint: 'Độ cao dưới mực nước biển được biểu diễn bằng số nguyên âm.' }
            ],
            solution: '• Độ cao của đỉnh núi cao hơn mực nước biển được biểu diễn bằng số nguyên dương: <b>3 143</b> (hoặc +3 143) mét.<br>• Độ sâu của đáy vịnh dưới mực nước biển được biểu diễn bằng số nguyên âm: <b>-30</b> mét.'
          },
          {
            id: '3.3',
            title: 'Bài 3.3 (Trang 58)',
            desc: 'Đọc trị số của các điểm A, B, C trên trục số dưới đây:',
            svg: `<svg viewBox='0 0 500 80' width='100%' height='60' style='max-width: 450px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='30' y1='40' x2='470' y2='40' stroke='#94a3b8' stroke-width='2' />
              <polygon points='470,35 480,40 470,45' fill='#94a3b8' />
              <circle cx='250' cy='40' r='4' fill='#0ea5e9' />
              <text x='250' y='60' fill='#e2e8f0' font-size='12' font-family='sans-serif' text-anchor='middle'>0</text>
              <line x1='90' y1='35' x2='90' y2='45' stroke='#475569' stroke-width='1.5' />
              <line x1='130' y1='35' x2='130' y2='45' stroke='#f43f5e' stroke-width='2' />
              <circle cx='130' cy='40' r='4' fill='#f43f5e' />
              <text x='130' y='25' fill='#f43f5e' font-size='12' font-weight='bold' font-family='sans-serif' text-anchor='middle'>A</text>
              <line x1='170' y1='35' x2='170' y2='45' stroke='#475569' stroke-width='1.5' />
              <line x1='210' y1='35' x2='210' y2='45' stroke='#f43f5e' stroke-width='2' />
              <circle cx='210' cy='40' r='4' fill='#f43f5e' />
              <text x='210' y='25' fill='#f43f5e' font-size='12' font-weight='bold' font-family='sans-serif' text-anchor='middle'>B</text>
              <line x1='290' y1='35' x2='290' y2='45' stroke='#475569' stroke-width='1.5' />
              <text x='290' y='60' fill='#94a3b8' font-size='11' font-family='sans-serif' text-anchor='middle'>1</text>
              <line x1='330' y1='35' x2='330' y2='45' stroke='#10b981' stroke-width='2' />
              <circle cx='330' cy='40' r='4' fill='#10b981' />
              <text x='330' y='25' fill='#10b981' font-size='12' font-weight='bold' font-family='sans-serif' text-anchor='middle'>C</text>
              <line x1='370' y1='35' x2='370' y2='45' stroke='#475569' stroke-width='1.5' />
              <line x1='410' y1='35' x2='410' y2='45' stroke='#475569' stroke-width='1.5' />
            </svg>`,
            parts: [
              { id: 'a', q: 'Tọa độ của điểm A là:', type: 'number_input', ans: ['-3'], placeholder: 'Nhập số nguyên', hint: 'Điểm A nằm bên trái điểm 0 và cách điểm 0 là 3 đơn vị.' },
              { id: 'b', q: 'Tọa độ của điểm B là:', type: 'number_input', ans: ['-1'], placeholder: 'Nhập số nguyên', hint: 'Điểm B nằm bên trái điểm 0 và cách điểm 0 là 1 đơn vị.' },
              { id: 'c', q: 'Tọa độ của điểm C là:', type: 'number_input', ans: ['2'], placeholder: 'Nhập số nguyên', hint: 'Điểm C nằm bên phải điểm 0 và cách điểm 0 là 2 đơn vị.' }
            ],
            solution: 'Nhìn vào trục số ta thấy:<br>• Điểm A nằm bên trái điểm O và cách O là 3 vạch chia → Điểm A biểu diễn số <b>-3</b>.<br>• Điểm B nằm bên trái điểm O và cách O là 1 vạch chia → Điểm B biểu diễn số <b>-1</b>.<br>• Điểm C nằm bên phải điểm O và cách O là 2 vạch chia → Điểm C biểu diễn số <b>2</b>.'
          }
        ]
      },
      {
        id: 'c3-l2', num: 15, mnemonic: 'Cộng hai số khác dấu nhau,\nLấy hiệu hai số, đứa nào lớn hơn?\nSố to trừ số nhỏ đi,\nDấu theo số lớn, ngại gì không ghi!', title: 'Phép cộng và trừ số nguyên', pages: '61-67', xp: 45,
        tags: ['Cộng số nguyên', 'Trừ số nguyên', 'Quy tắc dấu'],
        skills: ['Cộng hai số nguyên cùng dấu và khác dấu', 'Trừ số nguyên', 'Áp dụng quy tắc dấu ngoặc'],
        theory: [
          { title: '1. Cộng hai số nguyên', content: '<strong>Cùng dấu:</strong> Cộng hai giá trị tuyệt đối, giữ nguyên dấu chung.<br><strong>Khác dấu:</strong> Lấy hiệu hai GTTĐ (lớn trừ nhỏ), lấy dấu của số có GTTĐ lớn hơn.', formulas: ['(+5) + (+3) = +8', '(-5) + (-3) = -8', '(+5) + (-3) = +2', '(-5) + (+3) = -2'], notes: ['a + (-a) = 0', 'a + 0 = a'] },
          { title: '2. Trừ số nguyên', content: 'a - b = a + (-b) (trừ đi một số = cộng số đối của nó).', formulas: ['5 - 8 = 5 + (-8) = -3', '(-3) - (-7) = (-3) + 7 = 4'], notes: ['Quy tắc dấu ngoặc: +(a-b) = a-b; -(a-b) = -a+b'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: (-15) + 23 và 7 - (-12)', solution: '(-15) + 23 = 23 - 15 = 8\n7 - (-12) = 7 + 12 = 19' }
        ],
        quiz: [
          { q: '(-5) + (-8) = ?', opts: ['-13', '13', '-3', '3'], ans: 0, exp: 'Cùng dấu âm: cộng GTTĐ rồi giữ dấu → -(5+8) = -13.' },
          { q: '(-7) - (-4) = ?', opts: ['-3', '-11', '3', '11'], ans: 0, exp: '(-7) - (-4) = (-7) + 4 = -3.' }
        ],
        exercises: [
          {
            id: '3.10',
            title: 'Bài 3.10 (Trang 65)',
            desc: 'Tính các tổng sau:',
            parts: [
              { id: 'a', q: 'a) (-43) + (-9) = ', type: 'number_input', ans: ['-52'], placeholder: 'Nhập kết quả', hint: 'Cộng hai số nguyên âm: cộng hai giá trị tuyệt đối rồi đặt dấu trừ đằng trước.' },
              { id: 'b', q: 'b) (-291) + 51 = ', type: 'number_input', ans: ['-240'], placeholder: 'Nhập kết quả', hint: 'Cộng hai số nguyên khác dấu: lấy số có giá trị tuyệt đối lớn hơn trừ số nhỏ hơn, rồi lấy dấu của số lớn hơn.' },
              { id: 'c', q: 'c) -(-43) + (-43) = ', type: 'number_input', ans: ['0'], placeholder: 'Nhập kết quả', hint: 'Chú ý -(-43) chính là số đối của -43, tức là 43. Tổng hai số đối nhau bằng bao nhiêu?' }
            ],
            solution: 'a) (-43) + (-9) = -(43 + 9) = <b>-52</b>.<br>b) (-291) + 51 = -(291 - 51) = <b>-240</b>.<br>c) -(-43) + (-43) = 43 + (-43) = <b>0</b> (tổng hai số đối nhau).'
          },
          {
            id: '3.14',
            title: 'Bài 3.14 (Trang 66)',
            desc: 'Tính một cách hợp lí:<br><b>(-2 020) + 2 021 + 21 + (-22)</b>',
            parts: [
              { id: 'ans', q: 'Kết quả tính hợp lí là:', type: 'number_input', ans: ['0'], placeholder: 'Nhập kết quả', hint: 'Nhóm các số một cách thông minh: [(-2020) + 2021] + [21 + (-22)] = 1 + (-1).' }
            ],
            solution: 'Ta có thể nhóm các số như sau:<br>(-2 020) + 2 021 + 21 + (-22)<br>= [(-2 020) + 2 021] + [21 + (-22)]<br>= 1 + (-1)<br>= <b>0</b>.'
          }
        ]
      },
      {
        id: 'c3-l3', num: 16, mnemonic: 'Nhân hai số cùng dấu nhau:\nHóa ra tình bạn, dấu Cộng (+) đi đầu!\nKhác dấu thì hóa kẻ thù:\nDấu Trừ (-) đứng trước, lo gì sai đâu!\n(Bạn của bạn là bạn, kẻ thù của bạn là kẻ thù!)', title: 'Phép nhân số nguyên', pages: '68-73', xp: 40,
        tags: ['Nhân số nguyên', 'Quy tắc dấu nhân', 'Luỹ thừa âm'],
        skills: ['Nhân hai số nguyên', 'Áp dụng quy tắc dấu trong phép nhân', 'Tính luỹ thừa số nguyên âm'],
        theory: [
          { title: 'Quy tắc nhân số nguyên', content: '<strong>(+) × (+) = (+)</strong><br><strong>(-) × (-) = (+)</strong><br><strong>(+) × (-) = (-)</strong><br><strong>(-) × (+) = (-)</strong>', formulas: ['(+) × (+) = +', '(-) × (-) = +', '(+) × (-) = -', '(-) × (+) = -', 'a × 0 = 0'], notes: ['(-a)² = a² (số âm mũ chẵn → dương)', '(-a)³ = -a³ (số âm mũ lẻ → âm)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: (-3) × (-5) và (-2)³', solution: '(-3) × (-5) = 15\n(-2)³ = (-2) × (-2) × (-2) = 4 × (-2) = -8' }
        ],
        quiz: [
          { q: '(-4) × (-7) = ?', opts: ['28', '-28', '-11', '11'], ans: 0, exp: '(-) × (-) = (+): (-4) × (-7) = 28.' },
          { q: '(-3)⁴ = ?', opts: ['81', '-81', '12', '-12'], ans: 0, exp: '(-3)⁴ = (-3)×(-3)×(-3)×(-3) = 9×9 = 81 (mũ chẵn → dương).' }
        ],
        exercises: [
          {
            id: '3.26',
            title: 'Bài 3.26 (Trang 72)',
            desc: 'Tính các tích sau:',
            parts: [
              { id: 'a', q: 'a) 24 · (-25) = ', type: 'number_input', ans: ['-600'], placeholder: 'Nhập kết quả', hint: 'Nhân hai số nguyên khác dấu sẽ cho kết quả âm.' },
              { id: 'b', q: 'b) (-15) · (-12) = ', type: 'number_input', ans: ['180'], placeholder: 'Nhập kết quả', hint: 'Nhân hai số nguyên cùng dấu âm sẽ cho kết quả dương.' }
            ],
            solution: 'a) 24 · (-25) = -(24 · 25) = <b>-600</b>.<br>b) (-15) · (-12) = 15 · 12 = <b>180</b>.'
          },
          {
            id: '3.29',
            title: 'Bài 3.29 (Trang 72)',
            desc: 'Tính một cách hợp lí:<br><b>(-4) · 3 · (-125) · 25 · (-8)</b>',
            parts: [
              { id: 'ans', q: 'Kết quả của phép nhân là:', type: 'number_input', ans: ['-300000', '-300000'], placeholder: 'Nhập kết quả', hint: 'Nhóm các cặp thừa số tròn chục, tròn trăm: [(-4) · 25] · [(-125) · (-8)] · 3.' }
            ],
            solution: 'Ta sử dụng tính chất giao hoán và kết hợp:<br>(-4) · 3 · (-125) · 25 · (-8)<br>= [(-4) · 25] · [(-125) · (-8)] · 3<br>= (-100) · 1000 · 3<br>= (-100 000) · 3 = <b>-300 000</b>.'
          }
        ]
      },
      {
        id: 'c3-l4', num: 17, title: 'Ước và bội của số nguyên', pages: '74-77', xp: 35,
        tags: ['Ước số nguyên', 'Bội số nguyên', 'Phân tích thừa số'],
        skills: ['Mở rộng khái niệm ước và bội sang số nguyên', 'Tìm ước của số nguyên', 'Phân tích số nguyên'],
        theory: [
          { title: 'Ước và bội trong ℤ', content: 'a ⋮ b trong ℤ: a = b × q (q ∈ ℤ). Ước của a trong ℤ bao gồm cả ước dương và âm.', formulas: ['Ư(6) trong ℤ = {±1; ±2; ±3; ±6}', 'B(3) trong ℤ = {...; -9; -6; -3; 0; 3; 6; 9; ...}'], notes: ['Số ước trong ℤ = 2 × số ước dương (trừ ước 0)', 'Tích hai ước đối nhau = số đó'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tìm tất cả ước của 8 trong ℤ.', solution: 'Ư(8) = {-8; -4; -2; -1; 1; 2; 4; 8}' }
        ],
        quiz: [
          { q: 'Số ước nguyên của 9 là?', opts: ['6', '3', '4', '9'], ans: 0, exp: 'Ư(9) = {-9;-3;-1;1;3;9} → 6 ước.' }
        ],
        exercises: [
          {
            id: '3.35',
            title: 'Bài 3.35 (Trang 76)',
            desc: 'Tìm tập hợp tất cả các ước trong ℤ của:',
            parts: [
              { id: 'u6', q: 'Số ước nguyên của 6 là:', type: 'number_input', ans: ['8'], placeholder: 'Nhập số lượng ước', hint: 'Ước nguyên của 6 gồm cả số nguyên dương và số nguyên âm: ±1, ±2, ±3, ±6.' },
              { id: 'u7', q: 'Số ước nguyên của -7 là:', type: 'number_input', ans: ['4'], placeholder: 'Nhập số lượng ước', hint: '7 là số nguyên tố, ước nguyên của -7 chỉ gồm ±1 and ±7.' }
            ],
            solution: '• Các ước nguyên của 6 là: <b>-6; -3; -2; -1; 1; 2; 3; 6</b> (tổng cộng có 8 ước).<br>• Các ước nguyên của -7 là: <b>-7; -1; 1; 7</b> (tổng cộng có 4 ước).'
          },
          {
            id: '3.38',
            title: 'Bài 3.38 (Trang 77)',
            desc: 'Tìm các bội nguyên của -5 lớn hơn -15 và nhỏ hơn hoặc bằng 10.',
            parts: [
              { id: 'count', q: 'Có bao nhiêu bội nguyên của -5 thỏa mãn điều kiện trên?', type: 'number_input', ans: ['5'], placeholder: 'Nhập số lượng bội', hint: 'Bội của -5 là các số có dạng -5 · k với k ∈ ℤ. Liệt kê các số chia hết cho -5 trong khoảng (-15; 10].' }
            ],
            solution: 'Các bội của -5 là: {...; -20; -15; -10; -5; 0; 5; 10; 15; ...}.<br>Các bội lớn hơn -15 và nhỏ hơn hoặc bằng 10 là: <b>-10; -5; 0; 5; 10</b>.<br>Tổng cộng có <b>5 số</b>.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 1 - CHƯƠNG IV: HÌNH HỌC PHẲNG (Bài 18-20)
  // ================================================================
  {
    id: 'c4', volume: 1,
    title: 'Một số hình phẳng trong thực tiễn',
    subtitle: 'Hình học · Tập 1',
    emoji: '📐',
    color: '#f59e0b',
    pages: '78-98',
    lessons: [
      {
        id: 'c4-l1', num: 18, title: 'Tam giác đều, hình vuông, lục giác đều', pages: '78-84', xp: 40,
        tags: ['Tam giác đều', 'Hình vuông', 'Lục giác đều'],
        skills: ['Nhận biết và vẽ các hình đều', 'Tính chu vi và diện tích', 'Xác định trục đối xứng'],
        theory: [
          { title: '1. Tam giác đều', svg: `<svg viewBox='0 0 160 160' width='100' height='100'><polygon points='80,20 20,130 140,130' fill='none' stroke='#6366f1' stroke-width='2' /><text x='40' y='80' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text><text x='110' y='80' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text><text x='75' y='145' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text></svg>`, content: 'Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng nhau = 60°.', formulas: ['Chu vi = 3a', 'Diện tích = (a² × √3)/4'], notes: ['Có 3 trục đối xứng'] },
          { title: '2. Hình vuông', svg: `<svg viewBox='0 0 160 160' width='100' height='100'><rect x='30' y='30' width='100' height='100' fill='none' stroke='#10b981' stroke-width='2' /><text x='75' y='20' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text><text x='75' y='145' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text><text x='15' y='85' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text><text x='135' y='85' fill='#94a3b8' font-size='12' font-family='sans-serif'>a</text></svg>`, content: 'Hình vuông: 4 cạnh bằng nhau, 4 góc vuông = 90°.', formulas: ['Chu vi = 4a', 'Diện tích = a²'], notes: ['Có 4 trục đối xứng'] },
          { title: '3. Lục giác đều', svg: `<svg viewBox='0 0 160 160' width='100' height='100'><polygon points='80,10 135,42 135,106 80,138 25,106 25,42' fill='none' stroke='#f59e0b' stroke-width='2' /><text x='80' y='85' fill='#94a3b8' font-size='11' font-family='sans-serif' text-anchor='middle'>Lục giác đều</text></svg>`, content: 'Lục giác đều: 6 cạnh bằng nhau, 6 góc bằng nhau = 120°.', formulas: ['Chu vi = 6a', 'Diện tích = (3a² × √3)/2'], notes: ['Có 6 trục đối xứng'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Một hình vuông có cạnh 5 cm. Tính chu vi và diện tích.', solution: 'Chu vi = 4 × 5 = 20 cm\nDiện tích = 5² = 25 cm²' }
        ],
        quiz: [
          { q: 'Tam giác đều cạnh 6 cm có chu vi là?', opts: ['18 cm', '12 cm', '24 cm', '9 cm'], ans: 0, exp: 'Chu vi tam giác đều = 3 × 6 = 18 cm.' },
          { q: 'Lục giác đều có bao nhiêu trục đối xứng?', opts: ['6', '3', '4', '2'], ans: 0, exp: 'Lục giác đều có 6 trục đối xứng.' }
        ],
        exercises: [
          {
            id: '4.1',
            title: 'Bài 4.1 (Trang 84)',
            desc: 'Cho tam giác đều ABC có cạnh AB = 5 cm.',
            parts: [
              { id: 'ac', q: 'Độ dài cạnh AC là (cm):', type: 'number_input', ans: ['5'], placeholder: 'Nhập số', hint: 'Trong tam giác đều, độ dài của ba cạnh như thế nào với nhau?' },
              { id: 'bc', q: 'Độ dài cạnh BC là (cm):', type: 'number_input', ans: ['5'], placeholder: 'Nhập số', hint: 'Cạnh BC có bằng cạnh AB không?' },
              { id: 'angle', q: 'Số đo góc C bằng bao nhiêu độ (°):', type: 'number_input', ans: ['60'], placeholder: 'Nhập số', hint: 'Trong tam giác đều, cả ba góc đều bằng nhau và bằng bao nhiêu độ?' }
            ],
            solution: 'Vì ABC là tam giác đều nên:<br>• Độ dài ba cạnh bằng nhau: AC = BC = AB = <b>5 cm</b>.<br>• Ba góc ở các đỉnh bằng nhau và bằng <b>60°</b>. Vậy góc C có số đo là 60°.'
          },
          {
            id: '4.4',
            title: 'Bài 4.4 (Trang 84)',
            desc: 'Quan sát hình lục giác đều ABCDEF dưới đây. Hãy cho biết những đường chéo chính của lục giác đều này là gì.',
            svg: `<svg viewBox='0 0 160 160' width='100' height='100' style='background: rgba(30, 41, 59, 0.5); border-radius: 8px;'>
              <polygon points='20,80 50,28 110,28 140,80 110,132 50,132' fill='none' stroke='#f59e0b' stroke-width='2' />
              <line x1='20' y1='80' x2='140' y2='80' stroke='#ef4444' stroke-width='1.5' stroke-dasharray='3' />
              <line x1='50' y1='28' x2='110' y2='132' stroke='#10b981' stroke-width='1.5' stroke-dasharray='3' />
              <line x1='110' y1='28' x2='50' y2='132' stroke='#3b82f6' stroke-width='1.5' stroke-dasharray='3' />
              <text x='8' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>A</text>
              <text x='44' y='20' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>B</text>
              <text x='112' y='20' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>C</text>
              <text x='146' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>D</text>
              <text x='112' y='146' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>E</text>
              <text x='44' y='146' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>F</text>
            </svg>`,
            parts: [
              { id: 'diag1', q: 'Đường chéo chính thứ nhất nối từ A đến:', type: 'text_input', ans: ['D', 'd'], placeholder: 'Nhập tên đỉnh (ví dụ: D)', hint: 'Nhìn vào hình vẽ đường nét đứt màu đỏ nối từ A.' },
              { id: 'diag2', q: 'Đường chéo chính thứ hai nối từ B đến:', type: 'text_input', ans: ['E', 'e'], placeholder: 'Nhập tên đỉnh (ví dụ: E)', hint: 'Nhìn vào đường nét đứt màu xanh lá nối từ B.' },
              { id: 'diag3', q: 'Đường chéo chính thứ ba nối từ C đến:', type: 'text_input', ans: ['F', 'f'], placeholder: 'Nhập tên đỉnh (ví dụ: F)', hint: 'Nhìn vào đường nét đứt màu xanh dương nối từ C.' }
            ],
            solution: 'Hình lục giác đều ABCDEF có ba đường chéo chính nối các cặp đỉnh đối diện, đó là: <b>AD</b>, <b>BE</b>, và <b>CF</b>.'
          }
        ]
      },
      {
        id: 'c4-l2', num: 19, title: 'Hình chữ nhật, hình thoi, hình bình hành, hình thang cân', pages: '85-94', xp: 45,
        tags: ['HCN', 'Hình thoi', 'Bình hành', 'Thang cân'],
        skills: ['Nhận biết và phân biệt các tứ giác', 'Tính chu vi và diện tích', 'Xác định trục đối xứng'],
        theory: [
          { title: 'Các tứ giác thông dụng', svg: `<svg viewBox='0 0 420 120' width='100%' height='110' style='max-width: 420px;'><g transform='translate(10, 10)'><rect x='0' y='10' width='80' height='50' fill='none' stroke='#6366f1' stroke-width='2' /><text x='40' y='80' fill='#e2e8f0' font-size='10' font-family='sans-serif' text-anchor='middle'>H.chữ nhật</text><text x='40' y='5' fill='#94a3b8' font-size='9' font-family='sans-serif' text-anchor='middle'>a</text><text x='85' y='40' fill='#94a3b8' font-size='9' font-family='sans-serif'>b</text></g><g transform='translate(120, 10)'><polygon points='40,0 80,35 40,70 0,35' fill='none' stroke='#10b981' stroke-width='2' /><line x1='0' y1='35' x2='80' y2='35' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2' /><line x1='40' y1='0' x2='40' y2='70' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2' /><text x='40' y='85' fill='#e2e8f0' font-size='10' font-family='sans-serif' text-anchor='middle'>Hình thoi</text></g><g transform='translate(220, 10)'><polygon points='20,10 90,10 70,60 0,60' fill='none' stroke='#f59e0b' stroke-width='2' /><line x1='20' y1='10' x2='20' y2='60' stroke='#f43f5e' stroke-width='1' stroke-dasharray='2' /><text x='45' y='80' fill='#e2e8f0' font-size='10' font-family='sans-serif' text-anchor='middle'>H.bình hành</text><text x='14' y='38' fill='#f43f5e' font-size='9' font-family='sans-serif' text-anchor='end'>h</text></g><g transform='translate(330, 10)'><polygon points='20,10 60,10 80,60 0,60' fill='none' stroke='#0ea5e9' stroke-width='2' /><text x='40' y='80' fill='#e2e8f0' font-size='10' font-family='sans-serif' text-anchor='middle'>H.thang cân</text></g></svg>`, content: '<strong>HCN:</strong> 4 góc vuông, 2 cặp cạnh bằng nhau.<br><strong>Hình thoi:</strong> 4 cạnh bằng nhau.<br><strong>Bình hành:</strong> 2 cặp cạnh song song và bằng nhau.<br><strong>Thang cân:</strong> có đúng 1 cặp cạnh song song và 2 cạnh bên bằng nhau.', formulas: ['S(HCN) = dài × rộng', 'S(thoi) = (d₁ × d₂) / 2', 'S(bình hành) = đáy × chiều cao', 'S(thang) = (a + b) × h / 2'], notes: ['HCN có 2 trục đối xứng', 'Thang cân có 1 trục đối xứng'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'HCN dài 8 cm, rộng 5 cm. Tính chu vi và diện tích.', solution: 'Chu vi = 2 × (8 + 5) = 26 cm\nDiện tích = 8 × 5 = 40 cm²' }
        ],
        quiz: [
          { q: 'Hình thang cân có bao nhiêu trục đối xứng?', opts: ['1', '2', '0', '4'], ans: 0, exp: 'Hình thang cân có đúng 1 trục đối xứng (đường trung trực của 2 đáy).' },
          { q: 'Diện tích hình thoi có 2 đường chéo 6 cm và 8 cm?', opts: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'], ans: 0, exp: 'S = d₁×d₂/2 = 6×8/2 = 24 cm².' }
        ],
        exercises: [
          {
            id: '4.8',
            title: 'Bài 4.8 (Trang 93)',
            desc: 'Cho hình thoi ABCD có hai đường chéo AC và BD cắt nhau tại O. Biết AC = 8 cm, BD = 6 cm.',
            svg: `<svg viewBox='0 0 160 120' width='120' height='90' style='background: rgba(30, 41, 59, 0.5); border-radius: 8px;'>
              <polygon points='80,20 140,60 80,100 20,60' fill='none' stroke='#10b981' stroke-width='2' />
              <line x1='80' y1='20' x2='80' y2='100' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='2' />
              <line x1='20' y1='60' x2='140' y2='60' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='2' />
              <circle cx='80' cy='60' r='2' fill='#e2e8f0' />
              <text x='76' y='15' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>A</text>
              <text x='144' y='64' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>B</text>
              <text x='76' y='112' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>C</text>
              <text x='8' y='64' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>D</text>
              <text x='84' y='56' fill='#e2e8f0' font-size='8' font-family='sans-serif' font-weight='bold'>O</text>
            </svg>`,
            parts: [
              { id: 'oa', q: 'Độ dài đoạn OA bằng (cm):', type: 'number_input', ans: ['4'], placeholder: 'Nhập số', hint: 'Trong hình thoi, hai đường chéo cắt nhau tại trung điểm của mỗi đường. OA = AC / 2.' },
              { id: 'ob', q: 'Độ dài đoạn OB bằng (cm):', type: 'number_input', ans: ['3'], placeholder: 'Nhập số', hint: 'OB là một nửa của đường chéo BD. OB = BD / 2.' }
            ],
            solution: 'Trong hình thoi, hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường.<br>Do đó:<br>• OA = AC : 2 = 8 : 2 = <b>4 cm</b>.<br>• OB = BD : 2 = 6 : 2 = <b>3 cm</b>.'
          },
          {
            id: '4.10',
            title: 'Bài 4.10 (Trang 94)',
            desc: 'Cho hình bình hành ABCD có AB = 6 cm, AD = 4 cm.',
            svg: `<svg viewBox='0 0 160 110' width='120' height='82' style='background: rgba(30, 41, 59, 0.5); border-radius: 8px;'>
              <polygon points='30,30 110,30 130,80 50,80' fill='none' stroke='#f59e0b' stroke-width='2' />
              <text x='20' y='28' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>A</text>
              <text x='112' y='28' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>B</text>
              <text x='132' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>C</text>
              <text x='42' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>D</text>
              <text x='70' y='25' fill='#94a3b8' font-size='9' font-family='sans-serif'>6 cm</text>
              <text x='26' y='60' fill='#94a3b8' font-size='9' font-family='sans-serif'>4 cm</text>
            </svg>`,
            parts: [
              { id: 'cd', q: 'Độ dài cạnh CD bằng (cm):', type: 'number_input', ans: ['6'], placeholder: 'Nhập số', hint: 'Trong hình bình hành, các cạnh đối diện song song và bằng nhau. CD = AB.' },
              { id: 'bc', q: 'Độ dài cạnh BC bằng (cm):', type: 'number_input', ans: ['4'], placeholder: 'Nhập số', hint: 'Cạnh BC đối diện với cạnh AD.' }
            ],
            solution: 'Trong hình bình hành, hai cặp cạnh đối diện bằng nhau:<br>• Cạnh CD đối diện và bằng AB: CD = AB = <b>6 cm</b>.<br>• Cạnh BC đối diện và bằng AD: BC = AD = <b>4 cm</b>.'
          }
        ]
      },
      {
        id: 'c4-l3', num: 20, title: 'Chu vi và diện tích một số hình', pages: '95-98', xp: 35,
        tags: ['Chu vi', 'Diện tích', 'Ứng dụng'],
        skills: ['Áp dụng công thức tính chu vi và diện tích', 'Giải bài toán thực tế về chu vi và diện tích'],
        theory: [
          { title: 'Tổng hợp công thức', content: 'Ôn lại tất cả công thức chu vi, diện tích đã học.', formulas: ['C(tam giác) = a + b + c', 'S(tam giác) = đáy × h / 2', 'C(tứ giác) = tổng 4 cạnh'], notes: ['Đơn vị diện tích: cm², m², km²', 'Đổi đơn vị: 1 m² = 10 000 cm²'] }
        ],
        examples: [
          { title: 'Ví dụ thực tế', question: 'Sân trường hình chữ nhật 40m × 25m. Cần bao nhiêu m² gạch lát sân?', solution: 'Diện tích = 40 × 25 = 1 000 m²' }
        ],
        quiz: [
          { q: 'Sân hình thoi có đường chéo 12m và 8m. Diện tích là?', opts: ['48 m²', '96 m²', '20 m²', '40 m²'], ans: 0, exp: 'S = 12×8/2 = 48 m².' }
        ],
        exercises: [
          {
            id: '4.16',
            title: 'Bài 4.16 (Trang 98)',
            desc: 'Một khu vườn hình chữ nhật có chiều dài 25 m, chiều rộng 15 m.',
            parts: [
              { id: 'perimeter', q: 'Chu vi khu vườn bằng (m):', type: 'number_input', ans: ['80'], placeholder: 'Nhập số', hint: 'Chu vi hình chữ nhật = 2 · (chiều dài + chiều rộng).' },
              { id: 'area', q: 'Diện tích khu vườn bằng (m²):', type: 'number_input', ans: ['375'], placeholder: 'Nhập số', hint: 'Diện tích hình chữ nhật = chiều dài · chiều rộng.' }
            ],
            solution: 'Áp dụng công thức đối với hình chữ nhật:<br>• Chu vi khu vườn là: 2 · (25 + 15) = 2 · 40 = <b>80 m</b>.<br>• Diện tích khu vườn là: 25 · 15 = <b>375 m²</b>.'
          },
          {
            id: '4.18',
            title: 'Bài 4.18 (Trang 98)',
            desc: 'Một thửa ruộng hình thang cân có độ dài hai đáy lần lượt là 15 m và 25 m, chiều cao là 10 m.',
            svg: `<svg viewBox='0 0 160 110' width='120' height='82' style='background: rgba(30, 41, 59, 0.5); border-radius: 8px;'>
              <polygon points='50,30 110,30 130,80 30,80' fill='none' stroke='#0ea5e9' stroke-width='2' />
              <line x1='50' y1='30' x2='50' y2='80' stroke='#f43f5e' stroke-width='1.5' stroke-dasharray='2' />
              <rect x='50' y='75' width='5' height='5' fill='none' stroke='#f43f5e' stroke-width='1' />
              <text x='40' y='28' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>A</text>
              <text x='112' y='28' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>B</text>
              <text x='132' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>C</text>
              <text x='20' y='84' fill='#e2e8f0' font-size='10' font-family='sans-serif' font-weight='bold'>D</text>
              <text x='48' y='92' fill='#e2e8f0' font-size='8' font-family='sans-serif' font-weight='bold'>H</text>
              <text x='80' y='25' fill='#94a3b8' font-size='8' font-family='sans-serif' text-anchor='middle'>15 m</text>
              <text x='80' y='92' fill='#94a3b8' font-size='8' font-family='sans-serif' text-anchor='middle'>25 m</text>
              <text x='42' y='60' fill='#f43f5e' font-size='8' font-family='sans-serif' text-anchor='end'>10 m</text>
            </svg>`,
            parts: [
              { id: 'area', q: 'Diện tích của thửa ruộng hình thang cân bằng (m²):', type: 'number_input', ans: ['200'], placeholder: 'Nhập số', hint: 'Diện tích hình thang = (đáy lớn + đáy bé) · chiều cao / 2.' }
            ],
            solution: 'Diện tích của thửa ruộng hình thang cân là:<br>S = (15 + 25) · 10 / 2 = 40 · 10 / 2 = <b>200 m²</b>.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 1 - CHƯƠNG V: ĐỐI XỨNG (Bài 21-22)
  // ================================================================
  {
    id: 'c5', volume: 1,
    title: 'Tính đối xứng của hình phẳng',
    subtitle: 'Hình học · Tập 1',
    emoji: '🔮',
    color: '#ec4899',
    pages: '99-115',
    lessons: [
      {
        id: 'c5-l1', num: 21, title: 'Trục đối xứng', pages: '99-106', xp: 40,
        tags: ['Trục đối xứng', 'Hình đối xứng', 'Phép chiếu'],
        skills: ['Nhận biết trục đối xứng của hình', 'Vẽ hình đối xứng qua một trục', 'Đếm số trục đối xứng'],
        theory: [
          { title: '1. Trục đối xứng', svg: `<svg viewBox='0 0 200 120' width='100%' height='100' style='max-width: 200px;'><path d='M 100 90 C 20 60 20 20 100 20 C 180 20 180 60 100 90 Z' fill='none' stroke='#ec4899' stroke-width='2' /><line x1='100' y1='5' x2='100' y2='115' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='4' /><text x='108' y='15' fill='#e2e8f0' font-size='11' font-weight='bold' font-family='sans-serif'>d</text></svg>`, content: 'Đường thẳng d là <strong>trục đối xứng</strong> của hình H nếu với mỗi điểm M của H, điểm đối xứng M\' cũng thuộc H.', formulas: [], notes: ['Tam giác đều: 3 trục', 'HCN: 2 trục', 'Hình thoi: 2 trục', 'Hình vuông: 4 trục', 'Lục giác đều: 6 trục', 'Đường tròn: vô số trục'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Hình chữ H (chữ cái) có bao nhiêu trục đối xứng?', solution: 'Hình chữ H có 2 trục đối xứng: 1 trục ngang và 1 trục dọc.' }
        ],
        quiz: [
          { q: 'Hình vuông có bao nhiêu trục đối xứng?', opts: ['4', '2', '1', '8'], ans: 0, exp: 'Hình vuông có 4 trục đối xứng: 2 đường chéo và 2 đường trung trực của các cạnh.' }
        ],
        exercises: [
          {
            id: '5.1',
            title: 'Bài 5.1 (Trang 105)',
            desc: 'Nhận biết trục đối xứng của một số hình phẳng quen thuộc:',
            parts: [
              { id: 'trapezoid', q: 'Hình thang cân có bao nhiêu trục đối xứng?', type: 'choice', opts: ['1 trục đối xứng', '2 trục đối xứng', 'Không có trục đối xứng', '4 trục đối xứng'], ans: 0, hint: 'Trục đối xứng của hình thang cân đi qua trung điểm của hai đáy.' },
              { id: 'parallelogram', q: 'Hình bình hành (không phải là hình thoi/chữ nhật) có bao nhiêu trục đối xứng?', type: 'choice', opts: ['Không có trục đối xứng', '1 trục đối xứng', '2 trục đối xứng', '4 trục đối xứng'], ans: 0, hint: 'Thử gấp đôi một hình bình hành bất kỳ theo bất kỳ đường thẳng nào xem hai nửa có khớp nhau hoàn hảo không.' }
            ],
            solution: '• <b>Hình thang cân</b> có đúng <b>1 trục đối xứng</b>: đó là đường thẳng đi qua trung điểm hai đáy.<br>• <b>Hình bình hành</b> (nói chung) <b>không có trục đối xứng</b> nào.'
          },
          {
            id: '5.3',
            title: 'Bài 5.3 (Trang 106)',
            desc: 'Tìm trục đối xứng trong các chữ cái in hoa tiếng Anh sau: <b>A, B, O, N, X</b>.',
            parts: [
              { id: 'a', q: 'Chữ cái nào chỉ có 1 trục đối xứng nằm dọc?', type: 'choice', opts: ['A', 'B', 'O', 'N', 'X'], ans: 0, hint: 'Chữ này đối xứng qua một trục đứng ở giữa.' },
              { id: 'b', q: 'Chữ cái nào chỉ có 1 trục đối xứng nằm ngang?', type: 'choice', opts: ['B', 'A', 'N', 'X', 'O'], ans: 0, hint: 'Chữ này có nửa trên và nửa dưới đối xứng hoàn hảo.' },
              { id: 'none', q: 'Chữ cái nào không có trục đối xứng nhưng có tính đối xứng khác?', type: 'choice', opts: ['N', 'A', 'B', 'X', 'O'], ans: 0, hint: 'Chữ này không thể gấp đôi theo trục nào, nhưng xoay 180 độ thì nó giữ nguyên.' }
            ],
            solution: '• Chữ <b>A</b> có 1 trục đối xứng dọc.<br>• Chữ <b>B</b> có 1 trục đối xứng ngang.<br>• Chữ <b>N</b> không có trục đối xứng.<br>• Chữ <b>O</b> và <b>X</b> có 2 trục đối xứng (dọc và ngang).'
          }
        ]
      },
      {
        id: 'c5-l2', num: 22, title: 'Tâm đối xứng', pages: '107-115', xp: 40,
        tags: ['Tâm đối xứng', 'Hình có tâm đối xứng'],
        skills: ['Nhận biết tâm đối xứng', 'Phân biệt trục và tâm đối xứng', 'Vẽ hình đối xứng qua tâm'],
        theory: [
          { title: '2. Tâm đối xứng', svg: `<svg viewBox='0 0 200 120' width='100%' height='100' style='max-width: 200px;'><path d='M 100 60 L 60 30 A 20 20 0 0 1 80 10 L 100 60 L 140 90 A 20 20 0 0 1 120 110 Z' fill='none' stroke='#8b5cf6' stroke-width='2' /><circle cx='100' cy='60' r='4' fill='#f59e0b' /><text x='108' y='64' fill='#f59e0b' font-size='12' font-weight='bold' font-family='sans-serif'>O</text></svg>`, content: 'Điểm O là <strong>tâm đối xứng</strong> của hình H nếu điểm đối xứng của mỗi điểm M qua O cũng thuộc H.', formulas: [], notes: ['Bình hành, hình thoi, HCN, hình vuông có tâm đối xứng', 'Tam giác đều KHÔNG có tâm đối xứng', 'Đường tròn có tâm đối xứng là tâm đường tròn'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Hình chữ S có tâm đối xứng không? Trục đối xứng không?', solution: 'Hình chữ S CÓ tâm đối xứng (điểm giữa).\nHình chữ S KHÔNG có trục đối xứng.' }
        ],
        quiz: [
          { q: 'Hình nào sau đây có tâm đối xứng?', opts: ['Hình bình hành', 'Tam giác đều', 'Hình thang cân', 'Tam giác cân'], ans: 0, exp: 'Hình bình hành có tâm đối xứng là giao điểm 2 đường chéo.' }
        ],
        exercises: [
          {
            id: '5.5',
            title: 'Bài 5.5 (Trang 114)',
            desc: 'Nhận biết tâm đối xứng của một số hình phẳng quen thuộc:',
            parts: [
              { id: 'triangle', q: 'Hình tam giác đều có tâm đối xứng không?', type: 'choice', opts: ['Không có tâm đối xứng', 'Có tâm đối xứng (giao ba đường cao)', 'Có tâm đối xứng (trọng tâm)'], ans: 0, hint: 'Nếu xoay một tam giác đều 180 độ quanh trọng tâm của nó, hình có trùng khít với vị trí ban đầu không? (Gợi ý: đỉnh hướng lên trên sẽ hướng xuống dưới).' },
              { id: 'parallelogram', q: 'Hình bình hành có tâm đối xứng không?', type: 'choice', opts: ['Có tâm đối xứng (giao điểm 2 đường chéo)', 'Không có tâm đối xứng', 'Có tâm đối xứng (trung điểm cạnh bên)'], ans: 0, hint: 'Giao điểm hai đường chéo chia mỗi đường chéo làm hai phần bằng nhau. Mọi điểm trên hình bình hành đối xứng qua điểm này đều thuộc hình bình hành.' }
            ],
            solution: '• <b>Hình tam giác đều không có tâm đối xứng</b>. Xoay 180° quanh trọng tâm sẽ làm đỉnh hướng lên trên chuyển thành hướng xuống dưới, hình không trùng khít.<br>• <b>Hình bình hành có tâm đối xứng</b>, chính là giao điểm của hai đường chéo.'
          },
          {
            id: '5.7',
            title: 'Bài 5.7 (Trang 115)',
            desc: 'Trong các chữ cái in hoa sau: <b>H, I, S, T, U</b>, hãy xác định các chữ cái có tâm đối xứng.',
            parts: [
              { id: 'count', q: 'Có bao nhiêu chữ cái trong nhóm trên có tâm đối xứng?', type: 'number_input', ans: ['3'], placeholder: 'Nhập số lượng', hint: 'Những chữ cái có tâm đối xứng khi xoay 180 độ quanh một điểm ở giữa sẽ giữ nguyên hình dáng ban đầu. Đó là các chữ H, I, S.' }
            ],
            solution: '• Các chữ <b>H, I, S</b> có tâm đối xứng là điểm nằm ở chính giữa của mỗi chữ. Khi xoay chúng 180° quanh điểm này, chữ vẫn không thay đổi.<br>• Các chữ <b>T, U</b> không có tâm đối xứng (chỉ có trục đối xứng dọc).<br>Vậy có <b>3 chữ cái</b> có tâm đối xứng.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 2 - CHƯƠNG VI: PHÂN SỐ (Bài 23-27)
  // ================================================================
  {
    id: 'c6', volume: 2,
    title: 'Phân số',
    subtitle: 'Số học · Tập 2',
    emoji: '½',
    color: '#10b981',
    pages: 'T2: 5-31',
    lessons: [
      {
        id: 'c6-l1', num: 23, title: 'Phân số và các phép tính', pages: 'T2:5-10', xp: 40,
        tags: ['Phân số', 'Phân số bằng nhau', 'Rút gọn'],
        skills: ['Nhận biết phân số', 'Tìm phân số bằng nhau', 'Rút gọn phân số về dạng tối giản'],
        theory: [
          { title: '1. Phân số', svg: `<svg viewBox='0 0 200 120' width='100%' height='100' style='max-width: 200px;'><circle cx='100' cy='60' r='45' fill='none' stroke='#94a3b8' stroke-width='2' /><line x1='100' y1='15' x2='100' y2='105' stroke='#94a3b8' stroke-width='1.5' /><line x1='55' y1='60' x2='145' y2='60' stroke='#94a3b8' stroke-width='1.5' /><path d='M 100 60 L 100 15 A 45 45 0 1 1 55 60 Z' fill='rgba(16, 185, 129, 0.25)' /><text x='100' y='65' fill='#10b981' font-size='16' font-family='sans-serif' font-weight='bold' text-anchor='middle'>3/4</text></svg>`, content: 'Phân số a/b (b ≠ 0): a là tử số, b là mẫu số. Phân số âm: a và b khác dấu.', formulas: ['a/b = (a×m)/(b×m) với m ≠ 0', 'a/b = (a:n)/(b:n) với n là ước chung'], notes: ['Phân số tối giản: ƯCLN(|a|, |b|) = 1', 'Hỗn số: 2⅓ = 2 + 1/3 = 7/3'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Rút gọn phân số 36/48.', solution: 'ƯCLN(36, 48) = 12\n36/48 = (36:12)/(48:12) = 3/4' }
        ],
        quiz: [
          { q: 'Phân số nào bằng 2/3?', opts: ['8/12', '6/10', '4/7', '3/5'], ans: 0, exp: '8/12 = (8:4)/(12:4) = 2/3.' },
          { q: 'Rút gọn 24/36 về dạng tối giản?', opts: ['2/3', '4/6', '6/9', '8/12'], ans: 0, exp: 'ƯCLN(24,36)=12; 24/36 = 2/3.' }
        ],
        exercises: [
          {
            id: '6.1',
            title: 'Bài 6.1 (Trang 8)',
            desc: 'Quan sát hình chữ nhật dưới đây được chia làm 8 phần bằng nhau, có 6 phần được tô màu:',
            illustration: 'fraction_visual_svg',
            svg: `<svg viewBox='0 0 400 120' width='100%' height='120' style='max-width: 300px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <rect x='40' y='30' width='320' height='60' fill='none' stroke='#94a3b8' stroke-width='2' />
              <!-- Dividers -->
              <line x1='80' y1='30' x2='80' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='120' y1='30' x2='120' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='160' y1='30' x2='160' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='200' y1='30' x2='200' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='240' y1='30' x2='240' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='280' y1='30' x2='280' y2='90' stroke='#475569' stroke-width='1.5' />
              <line x1='320' y1='30' x2='320' y2='90' stroke='#475569' stroke-width='1.5' />
              
              <!-- Colored areas (6 parts out of 8) -->
              <rect x='40' y='30' width='240' height='60' fill='rgba(16, 185, 129, 0.35)' />
              <text x='160' y='65' fill='#10b981' font-size='14' font-weight='bold' text-anchor='middle'>Đã tô màu (6/8)</text>
              <text x='320' y='65' fill='#94a3b8' font-size='14' text-anchor='middle'>Trống</text>
            </svg>`,
            parts: [
              { id: 'num', q: 'Tử số của phân số tối giản biểu diễn phần được tô màu là:', type: 'text_input', ans: ['3'], placeholder: 'Nhập tử số', hint: 'Phân số ban đầu là 6/8. Hãy rút gọn phân số này về dạng tối giản.' },
              { id: 'den', q: 'Mẫu số của phân số tối giản biểu diễn phần được tô màu là:', type: 'text_input', ans: ['4'], placeholder: 'Nhập mẫu số', hint: 'Phân số tối giản sau khi rút gọn 6/8 có mẫu số là bao nhiêu?' }
            ],
            solution: '• Số phần được tô màu là 6 trên tổng số 8 phần bằng nhau. Phân số biểu diễn là <b>6/8</b>.<br>• Để đưa về phân số tối giản, ta chia cả tử và mẫu cho ƯCLN(6, 8) = 2:<br>Tử số mới = 6 : 2 = <b>3</b>.<br>Mẫu số mới = 8 : 2 = <b>4</b>.<br>Đáp số: Phân số tối giản là <b>3/4</b>.'
          }
        ]
      },
      {
        id: 'c6-l2', num: 24, title: 'So sánh phân số', pages: 'T2:11-14', xp: 35,
        tags: ['So sánh phân số', 'Quy đồng mẫu'],
        skills: ['So sánh hai phân số cùng mẫu', 'Quy đồng mẫu để so sánh', 'Sắp xếp phân số'],
        theory: [
          { title: 'So sánh phân số', content: '<strong>Cùng mẫu dương:</strong> So sánh tử số.<br><strong>Khác mẫu:</strong> Quy đồng mẫu (dùng BCNN) rồi so sánh.', formulas: ['a/b < c/b khi a < c (b > 0)', 'a/b = (a×m)/(b×m) để quy đồng'], notes: ['Phân số âm: -3/5 < -1/4 (lấy phần dương: 3/5 > 1/4 rồi đảo dấu)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'So sánh 3/4 và 5/6.', solution: 'BCNN(4,6) = 12\n3/4 = 9/12; 5/6 = 10/12\n9/12 < 10/12 → 3/4 < 5/6' }
        ],
        quiz: [
          { q: 'So sánh 5/6 và 7/9', opts: ['5/6 > 7/9', '5/6 < 7/9', '5/6 = 7/9', 'Không so sánh được'], ans: 0, exp: '5/6 = 15/18; 7/9 = 14/18; 15 > 14 → 5/6 > 7/9.' }
        ],
        exercises: [
          {
            id: '6.8',
            title: 'Bài 6.8 (Trang 12)',
            desc: 'Quy đồng mẫu số để so sánh hai phân số: <b>5/6</b> và <b>7/9</b>.',
            parts: [
              { id: 'lcm', q: 'Mẫu số chung nhỏ nhất (BCNN của 6 và 9) là:', type: 'text_input', ans: ['18'], placeholder: 'Nhập mẫu chung', hint: 'Tìm BCNN(6, 9).' },
              { id: 'sign', q: 'Điền dấu so sánh thích hợp vào chỗ trống (nhập > hoặc < hoặc =): 5/6 ... 7/9', type: 'text_input', ans: ['>'], placeholder: 'Nhập dấu > hoặc < hoặc =', hint: 'Quy đồng: 5/6 = 15/18 và 7/9 = 14/18. So sánh hai tử số.' }
            ],
            solution: '• BCNN(6, 9) = 18. Chọn mẫu chung là 18.<br>• Quy đồng phân số 5/6: nhân cả tử và mẫu với 3 ta được: 5/6 = (5 · 3)/(6 · 3) = 15/18.<br>• Quy đồng phân số 7/9: nhân cả tử và mẫu với 2 ta được: 7/9 = (7 · 2)/(9 · 2) = 14/18.<br>• Vì 15/18 > 14/18 nên <b>5/6 > 7/9</b>.'
          }
        ]
      },
      {
        id: 'c6-l3', num: 25, title: 'Phép cộng và trừ phân số', pages: 'T2:15-19', xp: 40,
        tags: ['Cộng phân số', 'Trừ phân số', 'Quy đồng'],
        skills: ['Cộng trừ phân số cùng mẫu', 'Cộng trừ phân số khác mẫu', 'Cộng trừ hỗn số'],
        theory: [
          { title: 'Cộng và trừ phân số', content: '<strong>Cùng mẫu:</strong> Cộng/trừ tử, giữ mẫu.<br><strong>Khác mẫu:</strong> Quy đồng về cùng mẫu (BCNN) rồi cộng/trừ.', formulas: ['a/m + b/m = (a+b)/m', 'a/b + c/d = (a×d + c×b)/(b×d)'], notes: ['Kết quả nên rút gọn về dạng tối giản', 'Phân số âm: thêm dấu âm vào tử'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: 1/3 + 1/4 và 5/6 - 1/4', solution: '1/3 + 1/4 = 4/12 + 3/12 = 7/12\n5/6 - 1/4 = 10/12 - 3/12 = 7/12' }
        ],
        quiz: [
          { q: '1/2 + 1/3 = ?', opts: ['5/6', '2/5', '2/6', '3/5'], ans: 0, exp: '1/2 + 1/3 = 3/6 + 2/6 = 5/6.' }
        ],
        exercises: [
          {
            id: '6.20',
            title: 'Bài 6.20 (Trang 18)',
            desc: 'Tính giá trị biểu thức sau và rút gọn kết quả về phân số tối giản:<br><b>A = 5/6 + (-3/4)</b>',
            parts: [
              { id: 'ans', q: 'Kết quả của phép tính A là (nhập dưới dạng phân số tối giản x/y):', type: 'text_input', ans: ['1/12', '1 / 12'], placeholder: 'Ví dụ: 1/12', hint: 'Mẫu số chung của 6 và 4 là 12. Hãy quy đồng rồi thực hiện phép cộng tử số.' }
            ],
            solution: '• Chọn mẫu số chung nhỏ nhất của 6 và 4 là BCNN(6, 4) = 12.<br>• Quy đồng phân số 5/6: 5/6 = (5 · 2)/12 = 10/12.<br>• Quy đồng phân số -3/4: -3/4 = (-3 · 3)/12 = -9/12.<br>• Thực hiện phép tính: A = 10/12 + (-9/12) = (10 - 9)/12 = <b>1/12</b>.<br>Đáp số: <b>1/12</b>.'
          }
        ]
      },
      {
        id: 'c6-l4', num: 26, mnemonic: 'Phép nhân thẳng cánh cò bay:\nTử nhân với tử, mẫu bày nhân nhau.\nPhép chia đảo ngược lên đầu:\nNhân với nghịch đảo, tính mau ra liền!', title: 'Phép nhân và chia phân số', pages: 'T2:20-25', xp: 40,
        tags: ['Nhân phân số', 'Chia phân số', 'Phân số nghịch đảo'],
        skills: ['Nhân hai phân số', 'Tìm phân số nghịch đảo', 'Chia hai phân số'],
        theory: [
          { title: 'Nhân và chia phân số', content: '<strong>Nhân:</strong> Nhân tử với tử, mẫu với mẫu.<br><strong>Chia:</strong> Nhân với nghịch đảo của số chia.', formulas: ['a/b × c/d = (a×c)/(b×d)', 'a/b : c/d = a/b × d/c', 'Nghịch đảo của a/b là b/a'], notes: ['Rút gọn trước khi nhân để tính toán dễ hơn', 'a/b × b/a = 1'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: 3/4 × 8/9 và 5/6 : 5/3', solution: '3/4 × 8/9 = (3×8)/(4×9) = 24/36 = 2/3\n5/6 : 5/3 = 5/6 × 3/5 = 15/30 = 1/2' }
        ],
        quiz: [
          { q: '2/3 × 9/4 = ?', opts: ['3/2', '6/7', '18/12', '2/4'], ans: 0, exp: '2/3 × 9/4 = 18/12 = 3/2.' },
          { q: 'Nghịch đảo của 5/7 là?', opts: ['7/5', '5/7', '-5/7', '-7/5'], ans: 0, exp: 'Nghịch đảo của a/b là b/a → nghịch đảo 5/7 là 7/5.' }
        ],
        exercises: [
          {
            id: '6.27',
            title: 'Bài 6.27 (Trang 24)',
            desc: 'Thực hiện các phép tính nhân và chia phân số sau, đưa kết quả về phân số tối giản:',
            parts: [
              { id: 'mul', q: 'a) Tích của 3/5 · (-5/9) là (nhập dạng phân số x/y):', type: 'text_input', ans: ['-1/3', '-1 / 3'], placeholder: 'Ví dụ: -1/3', hint: 'Nhân tử với tử, mẫu với mẫu rồi rút gọn (hoặc triệt tiêu số 5 ở cả tử và mẫu trước).' },
              { id: 'div', q: 'b) Thương của (-2/7) : (4/7) là (nhập dạng phân số x/y):', type: 'text_input', ans: ['-1/2', '-1 / 2'], placeholder: 'Ví dụ: -1/2', hint: 'Nhân phân số thứ nhất với phân số nghịch đảo của phân số thứ hai: (-2/7) · (7/4).' }
            ],
            solution: 'a) Ta có: 3/5 · (-5/9) = (3 · (-5)) / (5 · 9) = -15/45 = <b>-1/3</b>.<br><br>b) Ta có: (-2/7) : (4/7) = (-2/7) · (7/4) = (-2 · 7) / (7 · 4) = -14/28 = <b>-1/2</b>.'
          }
        ]
      },
      {
        id: 'c6-l5', num: 27, title: 'Hai bài toán về phân số', pages: 'T2:26-31', xp: 45,
        tags: ['Bài toán phần trăm', 'Tìm phân số', 'Ứng dụng'],
        skills: ['Tìm giá trị phân số của một số', 'Tìm một số khi biết giá trị phân số của nó', 'Tính toán phần trăm'],
        theory: [
          { title: 'Hai dạng bài toán cơ bản', content: '<strong>Bài 1:</strong> Tìm m/n của số a → Tính a × m/n.<br><strong>Bài 2:</strong> Biết m/n của số a là b → Tính a = b : m/n = b × n/m.', formulas: ['Dạng 1: x = a × m/n', 'Dạng 2: a = b × n/m (b = a × m/n)'], notes: ['Phần trăm: 1% = 1/100', '35% = 35/100 = 7/20'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Lớp có 40 học sinh, 3/5 là nữ. Tìm số học sinh nữ. Sau khi thêm, số nữ là 25. Tìm tổng ban đầu.', solution: 'Số nữ = 40 × 3/5 = 24 học sinh\nTổng = 25 : 3/5 = 25 × 5/3 ≈ 41,67 (làm tròn theo ngữ cảnh)' }
        ],
        quiz: [
          { q: '2/5 của 60 là?', opts: ['24', '12', '30', '15'], ans: 0, exp: '60 × 2/5 = 120/5 = 24.' },
          { q: '3/4 của một số là 15. Số đó là?', opts: ['20', '12', '18', '25'], ans: 0, exp: 'Số đó = 15 : 3/4 = 15 × 4/3 = 20.' }
        ],
        exercises: [
          {
            id: '6.37',
            title: 'Bài 6.37 (Trang 30)',
            desc: 'Lớp 6A có 40 học sinh gồm ba loại học lực: Giỏi, Khá và Trung bình. Số học sinh Giỏi chiếm 1/5 số học sinh cả lớp. Số học sinh Khá chiếm 3/8 số học sinh còn lại.',
            parts: [
              { id: 'gioi', q: 'a) Số học sinh Giỏi của lớp 6A là:', type: 'text_input', ans: ['8', '8 học sinh', '8 hs'], placeholder: 'Nhập số học sinh', hint: 'Tính 1/5 của 40 học sinh: 40 · 1/5.' },
              { id: 'kha', q: 'b) Số học sinh Khá của lớp 6A là:', type: 'text_input', ans: ['12', '12 học sinh', '12 hs'], placeholder: 'Nhập số học sinh', hint: 'Đầu tiên tính số học sinh còn lại (40 trừ số học sinh Giỏi), sau đó nhân với 3/8.' },
              { id: 'tb', q: 'c) Số học sinh Trung bình của lớp 6A là:', type: 'text_input', ans: ['20', '20 học sinh', '20 hs'], placeholder: 'Nhập số học sinh', hint: 'Số học sinh Trung bình = Tổng cả lớp - (Học sinh Giỏi + Học sinh Khá).' }
            ],
            solution: '• Số học sinh Giỏi của lớp 6A là: 40 · 1/5 = <b>8</b> (học sinh).<br>• Số học sinh còn lại sau khi trừ đi học sinh Giỏi là: 40 - 8 = 32 (học sinh).<br>• Số học sinh Khá của lớp 6A là: 32 · 3/8 = <b>12</b> (học sinh).<br>• Số học sinh Trung bình của lớp 6A là: 40 - (8 + 12) = <b>20</b> (học sinh).<br>Đáp số: a) <b>8 học sinh Giỏi</b>, b) <b>12 học sinh Khá</b>, c) <b>20 học sinh Trung bình</b>.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 2 - CHƯƠNG VII: SỐ THẬP PHÂN (Bài 28-31)
  // ================================================================
  {
    id: 'c7', volume: 2,
    title: 'Số thập phân',
    subtitle: 'Số học · Tập 2',
    emoji: '🔢',
    color: '#3b82f6',
    pages: 'T2: 32-50',
    lessons: [
      {
        id: 'c7-l1', num: 28, title: 'Số thập phân và các phép tính', pages: 'T2:32-37', xp: 40,
        tags: ['Số thập phân', 'Phần thập phân', 'Vị trí chữ số'],
        skills: ['Đọc viết số thập phân', 'Cộng trừ số thập phân', 'Nhân chia số thập phân'],
        theory: [
          { title: '1. Số thập phân', content: 'Số thập phân gồm: phần nguyên (trái dấu phẩy) và phần thập phân (phải dấu phẩy).', formulas: ['2,35 = 2 + 3/10 + 5/100', 'Hàng phần mười: ×0,1', 'Hàng phần trăm: ×0,01'], notes: ['Nhân với 10ⁿ: chuyển dấu phẩy sang phải n chữ số', 'Chia với 10ⁿ: chuyển dấu phẩy sang trái n chữ số'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính: 3,14 + 2,86 và 5,2 × 3,1', solution: '3,14 + 2,86 = 6,00 = 6\n5,2 × 3,1 = 16,12' }
        ],
        quiz: [
          { q: '3,7 × 10 = ?', opts: ['37', '0,37', '370', '3,70'], ans: 0, exp: 'Nhân 10 → chuyển dấu phẩy phải 1 chữ số: 3,7 → 37.' },
          { q: '12,5 : 100 = ?', opts: ['0,125', '1,25', '0,0125', '125'], ans: 0, exp: 'Chia 100 → chuyển dấu phẩy trái 2 chữ số: 12,5 → 0,125.' }
        ],
        exercises: [
          {
            id: '7.1',
            title: 'Bài 7.1 (Trang 35)',
            desc: 'Viết các phân số thập phân sau dưới dạng số thập phân: 21/10 và -125/1000.',
            parts: [
              { id: 'a', q: 'a) Viết 21/10 dưới dạng số thập phân:', type: 'text_input', ans: ['2.1', '2,1'], placeholder: 'Ví dụ: 2.1', hint: 'Phân số có mẫu là 10 thì phần thập phân có 1 chữ số.' },
              { id: 'b', q: 'b) Viết -125/1000 dưới dạng số thập phân:', type: 'text_input', ans: ['-0.125', '-0,125'], placeholder: 'Ví dụ: -0.125', hint: 'Phân số có mẫu là 1000 thì phần thập phân có 3 chữ số, nhớ giữ nguyên dấu âm.' }
            ],
            solution: 'a) 21/10 = <b>2,1</b>.<br>b) -125/1000 = <b>-0,125</b>.'
          },
          {
            id: '7.3',
            title: 'Bài 7.3 (Trang 36)',
            desc: 'Thực hiện phép tính sau: -12,245 + (-8,31).',
            parts: [
              { id: 'ans', q: 'Kết quả của phép tính:', type: 'text_input', ans: ['-20.555', '-20,555'], placeholder: 'Nhập kết quả', hint: 'Cộng hai số thập phân âm: -(12,245 + 8,310).' }
            ],
            solution: 'Cộng hai số âm ta cộng hai phần số thập phân của chúng rồi đặt dấu trừ đằng trước:<br>-12,245 + (-8,31) = -(12,245 + 8,310) = <b>-20,555</b>.'
          }
        ]
      },
      {
        id: 'c7-l2', num: 29, title: 'Làm tròn số và ước lượng', pages: 'T2:38-42', xp: 35,
        tags: ['Làm tròn', 'Ước lượng', 'Chữ số có nghĩa'],
        skills: ['Làm tròn số đến hàng cho trước', 'Ước lượng kết quả tính toán', 'Sử dụng dấu ≈'],
        theory: [
          { title: 'Quy tắc làm tròn', content: 'Để làm tròn đến hàng nào đó: Xét chữ số kế tiếp (bên phải).<br>• ≥ 5: tăng hàng cần làm tròn lên 1, bỏ phần còn lại.<br>• < 5: giữ nguyên hàng cần làm tròn, bỏ phần còn lại.', formulas: ['3,147 ≈ 3,15 (làm tròn đến phần trăm)', '3,144 ≈ 3,14 (làm tròn đến phần trăm)', '4 567 ≈ 4 600 (làm tròn đến trăm)'], notes: ['Dấu ≈ đọc là "xấp xỉ"', 'Ước lượng: thay số bằng số tròn gần nhất'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Làm tròn 3,1416 đến hàng phần trăm và hàng phần nghìn.', solution: 'Đến phần trăm: 3,1416 ≈ 3,14 (chữ số tiếp: 1 < 5 → giữ nguyên)\nĐến phần nghìn: 3,1416 ≈ 3,142 (chữ số tiếp: 6 ≥ 5 → tăng 1)' }
        ],
        quiz: [
          { q: 'Làm tròn 4,567 đến hàng phần trăm?', opts: ['4,57', '4,56', '4,5', '4,6'], ans: 0, exp: 'Chữ số thứ 3 là 7 ≥ 5 → tăng vị trí thứ 2: 4,567 ≈ 4,57.' }
        ],
        exercises: [
          {
            id: '7.5',
            title: 'Bài 7.5 (Trang 40)',
            desc: 'Làm tròn số thập phân 2,1345 đến hàng phần mười và hàng phần trăm:',
            parts: [
              { id: 'a', q: 'a) Làm tròn đến hàng phần mười (chữ số thập phân thứ nhất):', type: 'text_input', ans: ['2.1', '2,1'], placeholder: 'Nhập số', hint: 'Chữ số ngay sau hàng phần mười là 3 < 5, ta giữ nguyên chữ số hàng phần mười.' },
              { id: 'b', q: 'b) Làm tròn đến hàng phần trăm (chữ số thập phân thứ hai):', type: 'text_input', ans: ['2.13', '2,13'], placeholder: 'Nhập số', hint: 'Chữ số ngay sau hàng phần trăm là 4 < 5, ta giữ nguyên chữ số hàng phần trăm.' }
            ],
            solution: '• Làm tròn đến hàng phần mười: Chữ số sau hàng phần mười là 3 &lt; 5 nên 2,1345 ≈ <b>2,1</b>.<br>• Làm tròn đến hàng phần trăm: Chữ số sau hàng phần trăm là 4 &lt; 5 nên 2,1345 ≈ <b>2,13</b>.'
          },
          {
            id: '7.8',
            title: 'Bài 7.8 (Trang 41)',
            desc: 'Một túi bột giặt có khối lượng tịnh ghi trên bao bì là 4,2 kg. Hãy làm tròn khối lượng này đến hàng đơn vị.',
            parts: [
              { id: 'ans', q: 'Khối lượng sau khi làm tròn đến hàng đơn vị (kg):', type: 'text_input', ans: ['4'], placeholder: 'Nhập số nguyên', hint: 'Chữ số ngay sau hàng đơn vị là 2 < 5, giữ nguyên chữ số hàng đơn vị.' }
            ],
            solution: 'Làm tròn 4,2 đến hàng đơn vị:<br>Vì chữ số hàng phần mười là 2 &lt; 5 nên ta giữ nguyên hàng đơn vị.<br>Kết quả làm tròn là: <b>4 kg</b>.'
          }
        ]
      },
      {
        id: 'c7-l3', num: 30, title: 'Tỉ số và tỉ số phần trăm', pages: 'T2:43-47', xp: 40,
        tags: ['Tỉ số', 'Phần trăm', '%'],
        skills: ['Tính tỉ số của hai đại lượng', 'Chuyển đổi tỉ số - phần trăm', 'Ứng dụng vào đời sống'],
        theory: [
          { title: 'Tỉ số và phần trăm', content: '<strong>Tỉ số</strong> a : b = a/b (b ≠ 0).<br><strong>Phần trăm:</strong> a% = a/100.', formulas: ['a% = a/100', 'p% của n = n × p/100', '1% = 0,01', '100% = 1'], notes: ['Tỉ số phần trăm thường dùng để so sánh', 'Tăng x% → nhân với (1 + x/100)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: '30% của 250 là bao nhiêu? Số học sinh nữ là 18/40 bao nhiêu %?', solution: '30% × 250 = 250 × 30/100 = 75\n18/40 = 0,45 = 45%' }
        ],
        quiz: [
          { q: '25% của 80 là?', opts: ['20', '25', '40', '32'], ans: 0, exp: '80 × 25/100 = 80 × 0,25 = 20.' },
          { q: '15/20 = ?%', opts: ['75%', '15%', '20%', '80%'], ans: 0, exp: '15/20 = 0,75 = 75%.' }
        ],
        exercises: [
          {
            id: '7.10',
            title: 'Bài 7.10 (Trang 45)',
            desc: 'Tính tỉ số phần trăm của hai số sau:',
            parts: [
              { id: 'a', q: 'a) Tỉ số phần trăm của 2 và 5 (nhớ thêm ký hiệu % ở cuối):', type: 'text_input', ans: ['40%', '40 %'], placeholder: 'Nhập kết quả', hint: 'Tính (2 : 5) · 100% = 0,4 · 100%.' },
              { id: 'b', q: 'b) Tỉ số phần trăm của -1,25 và 4:', type: 'text_input', ans: ['-31.25%', '-31,25%', '-31.25 %', '-31,25 %'], placeholder: 'Nhập kết quả', hint: 'Tính (-1,25 : 4) · 100% = -0,3125 · 100%.' }
            ],
            solution: 'a) Tỉ số phần trăm của 2 và 5 là: (2 : 5) · 100% = 0,4 · 100% = <b>40%</b>.<br><br>b) Tỉ số phần trăm của -1,25 và 4 là: (-1,25 : 4) · 100% = -0,3125 · 100% = <b>-31,25%</b>.'
          }
        ]
      },
      {
        id: 'c7-l4', num: 31, title: 'Một số bài toán về tỉ số phần trăm', pages: 'T2:48-50', xp: 45,
        tags: ['Bài toán %', 'Tăng giảm', 'Lãi suất'],
        skills: ['Tính giá trị khi biết phần trăm', 'Tính phần trăm tăng/giảm', 'Giải bài toán thực tế về %'],
        theory: [
          { title: 'Ba dạng bài toán %', content: '<strong>Dạng 1:</strong> Tìm p% của a → a × p/100<br><strong>Dạng 2:</strong> Tìm a khi biết p% của a là b → a = b × 100/p<br><strong>Dạng 3:</strong> Tìm p% khi biết a và b → p = b/a × 100', formulas: ['Dạng 1: b = a × p%', 'Dạng 2: a = b / p%', 'Dạng 3: p% = b/a × 100%'], notes: ['Giảm x% → còn lại (100-x)%', 'Tăng x% → tổng cộng (100+x)%'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Giá áo gốc 200 000đ. Giảm 30%. Giá sau giảm là bao nhiêu?', solution: 'Giá giảm = 200 000 × 30% = 60 000đ\nGiá sau giảm = 200 000 - 60 000 = 140 000đ\n(Hoặc: 200 000 × 70% = 140 000đ)' }
        ],
        quiz: [
          { q: 'Giá sản phẩm 500 000đ, tăng 20%. Giá mới là?', opts: ['600 000đ', '520 000đ', '400 000đ', '480 000đ'], ans: 0, exp: '500 000 × (1 + 20%) = 500 000 × 1,2 = 600 000đ.' }
        ],
        exercises: [
          {
            id: '7.14',
            title: 'Bài 7.14 (Trang 49)',
            desc: 'Một chiếc áo khoác có giá niêm yết là 350 000 đồng và được giảm giá 20% nhân dịp khuyến mại.',
            parts: [
              { id: 'a', q: 'a) Số tiền chiếc áo khoác đó được giảm là (đồng):', type: 'text_input', ans: ['70000', '70.000', '70 000'], placeholder: 'Nhập số tiền', hint: 'Tính 20% của 350 000 đồng: 350 000 · 20/100.' },
              { id: 'b', q: 'b) Giá bán thực tế của chiếc áo sau khi giảm giá là (đồng):', type: 'text_input', ans: ['280000', '280.000', '280 000'], placeholder: 'Nhập số tiền', hint: 'Giá bán thực tế = Giá gốc - Số tiền được giảm.' }
            ],
            solution: 'a) Số tiền được giảm là:<br>350 000 · 20% = 350 000 · 0,2 = <b>70 000</b> (đồng).<br><br>b) Giá bán thực tế của chiếc áo khoác là:<br>350 000 - 70 000 = <b>280 000</b> (đồng).<br>Đáp số: a) <b>70 000 đồng</b>, b) <b>280 000 đồng</b>.'
          },
          {
            id: '7.16',
            title: 'Bài 7.16 (Trang 50)',
            desc: 'Bác An gửi tiết kiệm 10 000 000 đồng vào ngân hàng với kì hạn một năm và lãi suất 6% một năm. Hãy tính số tiền lãi bác An nhận được sau một năm gửi.',
            parts: [
              { id: 'lai', q: 'Số tiền lãi sau một năm bác An nhận được là (đồng):', type: 'text_input', ans: ['600000', '600.000', '600 000'], placeholder: 'Nhập số tiền', hint: 'Tính 6% của 10 000 000 đồng: 10 000 000 · 6/100.' }
            ],
            solution: 'Số tiền lãi sau một năm gửi tiết kiệm của bác An là:<br>Tiền lãi = 10 000 000 · 6% = 10 000 000 · 0,06 = <b>600 000</b> (đồng).<br>Đáp số: <b>600 000 đồng</b> tiền lãi.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 2 - CHƯƠNG VIII: HÌNH HỌC CƠ BẢN (Bài 32-37)
  // ================================================================
  {
    id: 'c8', volume: 2,
    title: 'Hình học cơ bản',
    subtitle: 'Hình học · Tập 2',
    emoji: '📏',
    color: '#f97316',
    pages: 'T2: 51-75',
    lessons: [
      {
        id: 'c8-l1', num: 32, title: 'Điểm, đường thẳng và mặt phẳng', pages: 'T2:51-54', xp: 30,
        tags: ['Điểm', 'Đường thẳng', 'Mặt phẳng'],
        skills: ['Nhận biết điểm, đường thẳng, mặt phẳng', 'Xác định vị trí tương đối của điểm và đường thẳng', 'Vẽ đường thẳng qua hai điểm'],
        theory: [
          { title: '1. Điểm và đường thẳng', content: '<strong>Điểm:</strong> không có kích thước, ký hiệu bằng chữ cái in hoa.<br><strong>Đường thẳng:</strong> kéo dài vô hạn về hai phía, ký hiệu thường bằng chữ thường.', formulas: ['Qua 2 điểm phân biệt có đúng 1 đường thẳng', '3 điểm thẳng hàng: cùng nằm trên 1 đường thẳng'], notes: ['Điểm nằm trên đường thẳng: A ∈ d', 'Điểm không nằm trên đường thẳng: A ∉ d'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Cho 4 điểm A, B, C, D không có 3 điểm nào thẳng hàng. Có thể vẽ bao nhiêu đường thẳng?', solution: 'Mỗi cặp điểm xác định 1 đường thẳng.\nSố đường thẳng = C(4,2) = 4×3/2 = 6 đường thẳng.' }
        ],
        quiz: [
          { q: 'Qua 2 điểm phân biệt có bao nhiêu đường thẳng?', opts: ['Đúng 1', '2', 'Vô số', '0'], ans: 0, exp: 'Qua 2 điểm phân biệt có đúng 1 đường thẳng.' }
        ],
        exercises: [
          {
            id: '8.1',
            title: 'Bài 8.1 (Trang 53)',
            desc: 'Quan sát hình vẽ dưới đây, dùng kí hiệu ∈ hoặc ∉ để biểu diễn mối quan hệ giữa các điểm A, B, C với đường thẳng d:',
            illustration: 'line_points_svg',
            svg: `<svg viewBox='0 0 400 120' width='100%' height='120' style='max-width: 300px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='50' y1='60' x2='350' y2='60' stroke='#6366f1' stroke-width='3' />
              <text x='330' y='50' fill='#6366f1' font-size='14' font-weight='bold'>d</text>
              <circle cx='100' cy='60' r='5' fill='#ef4444' />
              <text x='95' y='50' fill='#e2e8f0' font-size='14' font-weight='bold'>A</text>
              <circle cx='220' cy='60' r='5' fill='#ef4444' />
              <text x='215' y='50' fill='#e2e8f0' font-size='14' font-weight='bold'>B</text>
              <circle cx='160' cy='25' r='5' fill='#ef4444' />
              <text x='155' y='15' fill='#e2e8f0' font-size='14' font-weight='bold'>C</text>
            </svg>`,
            parts: [
              { id: 'A', q: 'A ... d', type: 'text_input', ans: ['∈', 'in', 'thuộc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Điểm A có nằm trên đường thẳng d không?' },
              { id: 'C', q: 'C ... d', type: 'text_input', ans: ['∉', 'notin', 'không thuộc'], placeholder: 'Điền ∈ hoặc ∉', hint: 'Điểm C có nằm ngoài đường thẳng d không?' }
            ],
            solution: '• Điểm A và điểm B nằm trực tiếp trên đường thẳng d nên: <b>A ∈ d</b>, <b>B ∈ d</b>.<br>• Điểm C nằm ngoài đường thẳng d nên: <b>C ∉ d</b>.'
          }
        ]
      },
      {
        id: 'c8-l2', num: 33, title: 'Tia, đoạn thẳng', pages: 'T2:47-50', xp: 35,
        tags: ['Tia', 'Đoạn thẳng', 'Hai tia đối nhau'],
        skills: ['Phân biệt tia và đoạn thẳng', 'Nhận biết hai tia đối nhau', 'Vẽ tia và đoạn thẳng'],
        theory: [
          { title: 'Tia và đoạn thẳng', content: '<strong>Tia gốc O:</strong> Gồm điểm O và một phần đường thẳng bị chia bởi O.<br><strong>Hai tia đối nhau:</strong> Chung gốc, tạo thành đường thẳng.', formulas: [], notes: ['Ứng dụng: Nhật thực, nguyệt thực (Mặt Trời, Trái Đất, Mặt Trăng thẳng hàng)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Trên đường thẳng xy, điểm O nằm giữa x và y. Các tia gốc O là những tia nào?', solution: 'Tia Ox và tia Oy là hai tia đối nhau, gốc O.' }
        ],
        quiz: [
          { q: 'Hai tia đối nhau có đặc điểm gì?', opts: ['Chung gốc và tạo thành đường thẳng', 'Chung gốc và song song', 'Khác gốc nhau', 'Vuông góc nhau'], ans: 0, exp: 'Hai tia đối nhau: chung gốc và hợp lại thành một đường thẳng.' }
        ],
        exercises: [
          {
            id: '8.5',
            title: 'Bài 8.5 (Trang 57)',
            desc: 'Cho 3 điểm A, B, C thẳng hàng theo thứ tự như hình dưới. Kể tên các tia đối nhau gốc B:',
            illustration: 'collinear_points_svg',
            svg: `<svg viewBox='0 0 400 120' width='100%' height='120' style='max-width: 300px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='30' y1='60' x2='370' y2='60' stroke='#10b981' stroke-width='2' />
              <circle cx='80' cy='60' r='5' fill='#ef4444' />
              <text x='75' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>A</text>
              <circle cx='200' cy='60' r='5' fill='#ef4444' />
              <text x='195' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>B</text>
              <circle cx='320' cy='60' r='5' fill='#ef4444' />
              <text x='315' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>C</text>
            </svg>`,
            parts: [
              { id: 'ans', q: 'Hai tia đối nhau gốc B là tia BA và tia:', type: 'text_input', ans: ['BC', 'bc'], placeholder: 'Nhập tên tia', hint: 'Tia đối của tia BA phải chung gốc B và kéo dài về phía ngược lại (phía điểm C).' }
            ],
            solution: 'Với 3 điểm thẳng hàng theo thứ tự A, B, C ta có:<br>Hai tia gốc B kéo dài về hai phía ngược nhau tạo thành đường thẳng AC chính là hai tia đối nhau.<br>Vậy hai tia đối nhau gốc B là tia <b>BA</b> và tia <b>BC</b>.'
          }
        ]
      },
      {
        id: 'c8-l3', num: 34, title: 'Đoạn thẳng. Độ dài đoạn thẳng', pages: 'T2:51-54', xp: 35,
        tags: ['Đoạn thẳng', 'Độ dài', 'So sánh đoạn thẳng'],
        skills: ['Nhận biết đoạn thẳng', 'Tính cộng đoạn thẳng khi có điểm nằm giữa'],
        theory: [
          { title: 'Đoạn thẳng và độ dài', content: '<strong>Đoạn thẳng AB:</strong> Hình gồm A, B và tất cả điểm nằm giữa.<br>Độ dài AB là số dương.', formulas: ['Nếu B nằm giữa A và C thì: AC = AB + BC'], notes: ['AB = khoảng cách giữa A và B', 'AB = BA'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'M nằm giữa A và B với AM=3cm, MB=5cm. Tính AB.', solution: 'AB = AM + MB = 3 + 5 = 8 cm' }
        ],
        quiz: [
          { q: 'M nằm giữa A và B. AM=4cm, AB=9cm. Tính MB.', opts: ['5 cm', '4 cm', '13 cm', '9 cm'], ans: 0, exp: 'AB = AM + MB → MB = AB - AM = 9 - 4 = 5 cm.' }
        ],
        exercises: [
          {
            id: '8.8',
            title: 'Bài 8.8 (Trang 61)',
            desc: 'Cho điểm M nằm giữa hai điểm A và B sao cho AM = 3 cm, AB = 8 cm. Tính độ dài đoạn thẳng MB:',
            illustration: 'segment_math_svg',
            svg: `<svg viewBox='0 0 400 120' width='100%' height='120' style='max-width: 300px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='60' y1='60' x2='340' y2='60' stroke='#f59e0b' stroke-width='3' stroke-linecap='round' />
              <circle cx='60' cy='60' r='5' fill='#ef4444' />
              <text x='50' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>A</text>
              <circle cx='165' cy='60' r='5' fill='#ef4444' />
              <text x='160' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>M</text>
              <circle cx='340' cy='60' r='5' fill='#ef4444' />
              <text x='335' y='45' fill='#e2e8f0' font-size='14' font-weight='bold'>B</text>
              <path d='M 60,75 L 340,75' stroke='#a8a29e' stroke-width='1.5' />
              <text x='200' y='95' fill='#a8a29e' font-size='12' text-anchor='middle'>AB = 8 cm</text>
              <path d='M 60,105 L 165,105' stroke='#f59e0b' stroke-width='1.5' />
              <text x='112' y='120' fill='#f59e0b' font-size='12' text-anchor='middle'>AM = 3 cm</text>
            </svg>`,
            parts: [
              { id: 'MB', q: 'Độ dài đoạn thẳng MB là (cm):', type: 'text_input', ans: ['5'], placeholder: 'Nhập số', hint: 'Vì M nằm giữa A và B nên: AM + MB = AB. Từ đó tính MB = AB - AM.' }
            ],
            solution: 'Vì điểm M nằm giữa hai điểm A và B nên ta có:<br>AM + MB = AB<br>Thay số: 3 + MB = 8<br>MB = 8 - 3 = <b>5</b> (cm).<br>Đáp số: <b>5 cm</b>.'
          }
        ]
      },
      {
        id: 'c8-l4', num: 35, title: 'Trung điểm của đoạn thẳng', pages: 'T2:55-57', xp: 30,
        tags: ['Trung điểm', 'Trung điểm đoạn thẳng'],
        skills: ['Xác định trung điểm của đoạn thẳng', 'Tính khoảng cách từ trung điểm'],
        theory: [
          { title: 'Trung điểm', content: 'I là <strong>trung điểm</strong> của AB khi I nằm giữa A, B và IA = IB.', formulas: ['IA = IB = AB/2'], notes: ['Mỗi đoạn thẳng có đúng một trung điểm', 'Ứng dụng: điểm cân bằng bập bênh'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'M là trung điểm AB, AB = 10cm. Tính AM.', solution: 'AM = AB/2 = 10/2 = 5 cm' }
        ],
        quiz: [
          { q: 'I là trung điểm AB với AB=14cm. Tính IB.', opts: ['7 cm', '14 cm', '28 cm', '3,5 cm'], ans: 0, exp: 'IB = AB/2 = 14/2 = 7 cm.' }
        ],
        exercises: [
          {
            id: '8.12',
            title: 'Bài 8.12 (Trang 65)',
            desc: 'Cho trung điểm M của đoạn thẳng AB có độ dài bằng 12 cm. Tính độ dài đoạn thẳng AM và MB:',
            parts: [
              { id: 'AM', q: 'Độ dài AM = MB = (cm):', type: 'text_input', ans: ['6'], placeholder: 'Nhập số', hint: 'M là trung điểm của AB nên AM = MB = AB / 2.' }
            ],
            solution: 'Vì M là trung điểm của đoạn thẳng AB nên M nằm giữa A, B và cách đều hai đầu mút A, B.<br>Ta có: AM = MB = AB / 2 = 12 / 2 = <b>6</b> (cm).<br>Đáp số: <b>6 cm</b>.'
          }
        ]
      },
      {
        id: 'c8-l5', num: 36, title: 'Góc', pages: 'T2:58-64', xp: 40,
        tags: ['Góc', 'Số đo góc', 'Các loại góc'],
        skills: ['Nhận biết và đọc tên góc', 'Đo góc bằng thước đo', 'Phân loại các loại góc'],
        theory: [
          { title: '1. Góc và số đo góc', content: '<strong>Góc</strong> là hình gồm hai tia chung gốc. Đơn vị đo: độ (°), phút (\'), giây (").', formulas: ['1° = 60\'', '1\' = 60"'], notes: ['Góc nhọn: 0° < α < 90°', 'Góc vuông: α = 90°', 'Góc tù: 90° < α < 180°', 'Góc bẹt: α = 180°'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Góc AOB = 135°. Đó là loại góc gì?', solution: '90° < 135° < 180° → Góc AOB là góc tù.' }
        ],
        quiz: [
          { q: 'Góc có số đo 90° là loại góc gì?', opts: ['Góc vuông', 'Góc nhọn', 'Góc tù', 'Góc bẹt'], ans: 0, exp: 'Góc có số đo đúng 90° gọi là góc vuông.' }
        ],
        exercises: [
          {
            id: '8.25',
            title: 'Bài 8.25 (Trang 72)',
            desc: 'Hãy phân loại các góc có số đo sau: 45° và 120°.',
            parts: [
              { id: 'nhon', q: 'Góc có số đo 45° thuộc loại góc nào (nhọn / vuông / tù / bẹt):', type: 'text_input', ans: ['nhọn', 'nhon', 'góc nhọn', 'goc nhon'], placeholder: 'Nhập góc nhọn, vuông, tù hoặc bẹt', hint: 'So sánh: 0° < 45° < 90°.' },
              { id: 'tu', q: 'Góc có số đo 120° thuộc loại góc nào (nhọn / vuông / tù / bẹt):', type: 'text_input', ans: ['tù', 'tu', 'góc tù', 'goc tu'], placeholder: 'Nhập góc nhọn, vuông, tù hoặc bẹt', hint: 'So sánh: 90° < 120° < 180°.' }
            ],
            solution: '• Góc 45° có số đo nhỏ hơn 90° (và lớn hơn 0°) nên đây là <b>góc nhọn</b>.<br>• Góc 120° có số đo lớn hơn 90° và nhỏ hơn 180° nên đây là <b>góc tù</b>.'
          }
        ]
      },
      {
        id: 'c8-l6', num: 37, title: 'Vẽ góc. Tia phân giác của góc', pages: 'T2:65-69', xp: 40,
        tags: ['Vẽ góc', 'Tia phân giác', 'Kẹp góc'],
        skills: ['Vẽ góc có số đo cho trước', 'Xác định tia phân giác của góc', 'Tính số đo khi biết tia phân giác'],
        theory: [
          { title: 'Tia phân giác của góc', content: '<strong>Tia phân giác</strong> của góc là tia nằm trong góc và chia góc thành hai góc bằng nhau.', formulas: ['Om là phân giác góc AOB → ∠AOM = ∠MOB = ∠AOB/2'], notes: ['Mỗi góc có đúng một tia phân giác', 'Tia phân giác của góc bẹt là tia vuông góc với cạnh góc'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tia Om là phân giác góc AOB = 80°. Tính góc AOM.', solution: '∠AOM = ∠AOB / 2 = 80° / 2 = 40°' }
        ],
        quiz: [
          { q: 'Tia phân giác chia góc 120° thành hai góc bằng nhau. Mỗi góc là?', opts: ['60°', '120°', '30°', '90°'], ans: 0, exp: 'Phân giác chia đôi → mỗi góc = 120°/2 = 60°.' }
        ],
        exercises: [
          {
            id: '8.31',
            title: 'Bài 8.31 (Trang 76)',
            desc: 'Cho tia Oz là tia phân giác của góc xOy có số đo bằng 80°. Hãy tính số đo của góc xOz và góc zOy:',
            illustration: 'angle_bisector_svg',
            svg: `<svg viewBox='0 0 400 200' width='100%' height='160' style='max-width: 300px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='80' y1='150' x2='300' y2='150' stroke='#a29bfe' stroke-width='2' />
              <text x='290' y='170' fill='#a29bfe' font-size='14' font-weight='bold'>Ox</text>
              <line x1='80' y1='150' x2='120' y2='40' stroke='#a29bfe' stroke-width='2' />
              <text x='105' y='30' fill='#a29bfe' font-size='14' font-weight='bold'>Oy</text>
              <line x1='80' y1='150' x2='220' y2='60' stroke='#f59e0b' stroke-dasharray='3' stroke-width='2' />
              <text x='225' y='50' fill='#f59e0b' font-size='14' font-weight='bold'>Oz</text>
              <circle cx='80' cy='150' r='5' fill='#ef4444' />
              <text x='70' y='170' fill='#e2e8f0' font-size='14' font-weight='bold'>O</text>
              <path d='M 120,150 A 40,40 0 0,0 115,115' fill='none' stroke='#f59e0b' stroke-width='1.5' />
              <path d='M 115,115 A 40,40 0 0,0 90,118' fill='none' stroke='#e2e8f0' stroke-width='1.5' />
              <text x='150' y='125' fill='#f59e0b' font-size='12'>80°</text>
            </svg>`,
            parts: [
              { id: 'degree', q: 'Số đo góc xOz = zOy = (độ):', type: 'text_input', ans: ['40', '40°', '40 độ'], placeholder: 'Nhập số', hint: 'Tia phân giác Oz chia góc xOy làm hai góc bằng nhau: xOz = zOy = xOy / 2.' }
            ],
            solution: 'Vì Oz là tia phân giác của góc xOy nên ta có:<br>∠xOz = ∠zOy = ∠xOy / 2 = 80° / 2 = <b>40°</b>.<br>Đáp số: <b>40°</b>.'
          }
        ]
      }
    ]
  },
  // ================================================================
  // TẬP 2 - CHƯƠNG IX: DỮ LIỆU VÀ XÁC SUẤT (Bài 38-43)
  // ================================================================
  {
    id: 'c9', volume: 2,
    title: 'Dữ liệu và xác suất thực nghiệm',
    subtitle: 'Thống kê · Tập 2',
    emoji: '📊',
    color: '#ef4444',
    pages: 'T2: 70-100',
    lessons: [
      {
        id: 'c9-l1', num: 38, title: 'Thu thập và tổ chức dữ liệu', pages: 'T2:70-74', xp: 35,
        tags: ['Dữ liệu', 'Bảng thống kê', 'Tần số'],
        skills: ['Thu thập dữ liệu từ thực tế', 'Lập bảng thống kê', 'Tính tần số và tần suất'],
        theory: [
          { title: '1. Dữ liệu và bảng thống kê', content: '<strong>Dữ liệu:</strong> Thông tin thu thập được qua quan sát, điều tra.<br><strong>Bảng thống kê:</strong> Trình bày dữ liệu có tổ chức với tần số (số lần xuất hiện).', formulas: ['Tần suất (%) = Tần số / Tổng × 100%'], notes: ['Dữ liệu định tính: màu sắc, loại...', 'Dữ liệu định lượng: chiều cao, cân nặng...'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Điểm kiểm tra của 10 HS: 7,8,6,9,8,7,10,6,8,7. Lập bảng tần số.', solution: 'Điểm 6: 2 lần; Điểm 7: 3 lần;\nĐiểm 8: 3 lần; Điểm 9: 1 lần; Điểm 10: 1 lần\nTổng: 10' }
        ],
        quiz: [
          { q: 'Tần số của điểm 8 trong dãy 7,8,6,9,8,7,10,6,8,7 là?', opts: ['3', '2', '1', '4'], ans: 0, exp: 'Đếm: 8 xuất hiện ở vị trí 2, 5, 9 → tần số = 3.' }
        ],
        exercises: [
          {
            id: '9.1',
            title: 'Bài 9.1 (Trang 80)',
            desc: 'Bạn Nam khảo sát về loại quả yêu thích của 10 bạn học sinh trong tổ và thu được dãy dữ liệu nháp sau:<br><b>Cam, Táo, Cam, Xoài, Cam, Táo, Xoài, Mận, Cam, Xoài</b>',
            parts: [
              { id: 'kinds', q: 'Có bao nhiêu loại quả khác nhau được các bạn học sinh lựa chọn?', type: 'text_input', ans: ['4'], placeholder: 'Nhập số', hint: 'Liệt kê các loại quả xuất hiện trong dãy và đếm.' },
              { id: 'cam_freq', q: 'Số bạn học sinh lựa chọn quả Cam (tần số xuất hiện của Cam) là:', type: 'text_input', ans: ['4'], placeholder: 'Nhập số', hint: 'Đếm xem từ "Cam" xuất hiện bao nhiêu lần trong dãy dữ liệu.' }
            ],
            solution: '• Các loại quả khác nhau được lựa chọn là: <b>Cam, Táo, Xoài, Mận</b>. Có tất cả <b>4</b> loại quả khác nhau.<br>• Từ "Cam" xuất hiện 4 lần trong dãy dữ liệu nháp. Vậy số học sinh thích Cam là <b>4</b>.'
          }
        ]
      },
      {
        id: 'c9-l2', num: 39, title: 'Biểu đồ cột và biểu đồ cột kép', pages: 'T2:75-81', xp: 40,
        tags: ['Biểu đồ cột', 'Biểu đồ kép', 'Biểu diễn dữ liệu'],
        skills: ['Vẽ biểu đồ cột từ bảng số liệu', 'Đọc và phân tích biểu đồ cột', 'So sánh dữ liệu từ biểu đồ kép'],
        theory: [
          { title: '2. Biểu đồ cột', content: '<strong>Biểu đồ cột:</strong> Mỗi cột biểu diễn tần số của một giá trị.<br><strong>Biểu đồ cột kép:</strong> So sánh 2 tập dữ liệu cùng lúc.', formulas: [], notes: ['Chiều cao cột = tần số', 'Biểu đồ kép: 2 màu khác nhau cho 2 nhóm'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Biểu đồ cột kép so sánh kết quả học tập của lớp A và B qua 4 học kỳ. Đọc biểu đồ.', solution: 'Nhìn vào cột: chiều cao = số học sinh đạt loại giỏi. Cột cao hơn = kết quả tốt hơn.' }
        ],
        quiz: [
          { q: 'Biểu đồ cột dùng để làm gì?', opts: ['Biểu diễn và so sánh dữ liệu theo loại', 'Tính trung bình', 'Tìm số lớn nhất', 'Vẽ phân phối tần suất'], ans: 0, exp: 'Biểu đồ cột dùng biểu diễn và so sánh dữ liệu theo từng loại/nhóm.' }
        ],
        exercises: [
          {
            id: '9.7',
            title: 'Bài 9.7 (Trang 86)',
            desc: 'Quan sát biểu đồ cột kép dưới đây biểu diễn số sách đọc được trong dịp hè của hai lớp 6A và 6B:',
            illustration: 'double_column_chart_svg',
            svg: `<svg viewBox='0 0 400 240' width='100%' height='240' style='max-width: 360px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='50' y1='180' x2='360' y2='180' stroke='#64748b' stroke-width='1.5' />
              <line x1='50' y1='20' x2='50' y2='180' stroke='#64748b' stroke-width='1.5' />
              <line x1='50' y1='140' x2='360' y2='140' stroke='#334155' stroke-dasharray='3' />
              <line x1='50' y1='100' x2='360' y2='100' stroke='#334155' stroke-dasharray='3' />
              <line x1='50' y1='60' x2='360' y2='60' stroke='#334155' stroke-dasharray='3' />
              <line x1='50' y1='20' x2='360' y2='20' stroke='#334155' stroke-dasharray='3' />
              <text x='40' y='184' fill='#94a3b8' font-size='11' text-anchor='end'>0</text>
              <text x='40' y='144' fill='#94a3b8' font-size='11' text-anchor='end'>5</text>
              <text x='40' y='104' fill='#94a3b8' font-size='11' text-anchor='end'>10</text>
              <text x='40' y='64' fill='#94a3b8' font-size='11' text-anchor='end'>15</text>
              <text x='40' y='24' fill='#94a3b8' font-size='11' text-anchor='end'>20</text>
              <text x='45' y='15' fill='#94a3b8' font-size='9' text-anchor='start'>cuốn</text>
              
              <!-- Văn học -->
              <rect x='70' y='84' width='20' height='96' fill='#3b82f6' rx='3' />
              <text x='80' y='80' fill='#60a5fa' font-size='9' text-anchor='middle'>12</text>
              <rect x='92' y='60' width='20' height='120' fill='#f59e0b' rx='3' />
              <text x='102' y='56' fill='#fbbf24' font-size='9' text-anchor='middle'>15</text>
              <text x='91' y='198' fill='#e2e8f0' font-size='11' text-anchor='middle'>Văn học</text>
              
              <!-- Khoa học -->
              <rect x='170' y='36' width='20' height='144' fill='#3b82f6' rx='3' />
              <text x='180' y='32' fill='#60a5fa' font-size='9' text-anchor='middle'>18</text>
              <rect x='192' y='100' width='20' height='80' fill='#f59e0b' rx='3' />
              <text x='202' y='96' fill='#fbbf24' font-size='9' text-anchor='middle'>10</text>
              <text x='191' y='198' fill='#e2e8f0' font-size='11' text-anchor='middle'>Khoa học</text>
              
              <!-- Lịch sử -->
              <rect x='270' y='116' width='20' height='64' fill='#3b82f6' rx='3' />
              <text x='280' y='112' fill='#60a5fa' font-size='9' text-anchor='middle'>8</text>
              <rect x='292' y='84' width='20' height='96' fill='#f59e0b' rx='3' />
              <text x='302' y='80' fill='#fbbf24' font-size='9' text-anchor='middle'>12</text>
              <text x='291' y='198' fill='#e2e8f0' font-size='11' text-anchor='middle'>Lịch sử</text>
              
              <!-- Legend -->
              <rect x='110' y='215' width='12' height='12' fill='#3b82f6' rx='2' />
              <text x='128' y='225' fill='#e2e8f0' font-size='11'>Lớp 6A</text>
              <rect x='220' y='215' width='12' height='12' fill='#f59e0b' rx='2' />
              <text x='238' y='225' fill='#e2e8f0' font-size='11'>Lớp 6B</text>
            </svg>`,
            parts: [
              { id: 'science_6A', q: 'Số cuốn sách Khoa học lớp 6A đọc được là:', type: 'text_input', ans: ['18'], placeholder: 'Nhập số', hint: 'Tìm nhóm "Khoa học" và nhìn độ cao cột màu xanh (6A).' },
              { id: 'total_literature', q: 'Tổng số cuốn sách Văn học cả hai lớp đọc được là:', type: 'text_input', ans: ['27'], placeholder: 'Nhập số', hint: 'Cộng số cuốn sách Văn học của 6A (12) và 6B (15).' },
              { id: 'history_6B', q: 'Số cuốn sách Lịch sử lớp 6B đọc được là:', type: 'text_input', ans: ['12'], placeholder: 'Nhập số', hint: 'Tìm nhóm "Lịch sử" và nhìn độ cao cột màu vàng (6B).' }
            ],
            solution: 'Dựa vào biểu đồ cột kép:<br>• Số sách Khoa học lớp 6A (cột xanh lá/xanh dung) đọc được là <b>18</b> cuốn.<br>• Số sách Văn học lớp 6A là 12 cuốn, lớp 6B là 15 cuốn. Tổng cả hai lớp là: 12 + 15 = <b>27</b> cuốn.<br>• Số sách Lịch sử lớp 6B (cột màu vàng) đọc được là <b>12</b> cuốn.'
          }
        ]
      },
      {
        id: 'c9-l3', num: 40, title: 'Biểu đồ đoạn thẳng', pages: 'T2:82-85', xp: 35,
        tags: ['Biểu đồ đường', 'Xu hướng', 'Thay đổi theo thời gian'],
        skills: ['Vẽ biểu đồ đoạn thẳng', 'Đọc xu hướng từ biểu đồ', 'Phân tích sự thay đổi theo thời gian'],
        theory: [
          { title: '3. Biểu đồ đoạn thẳng', content: 'Dùng để biểu diễn sự thay đổi của dữ liệu theo thời gian. Các điểm dữ liệu nối với nhau bằng đoạn thẳng.', formulas: [], notes: ['Đường đi lên → tăng dần', 'Đường đi xuống → giảm dần', 'Phù hợp cho dữ liệu theo thời gian (tháng, năm...)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Biểu đồ nhiệt độ theo tháng: T1:18, T2:20, T3:25, T4:30. Xu hướng là gì?', solution: 'Nhiệt độ tăng dần từ tháng 1 đến tháng 4 → xu hướng tăng.' }
        ],
        quiz: [
          { q: 'Biểu đồ đoạn thẳng phù hợp nhất để biểu diễn?', opts: ['Nhiệt độ theo từng tháng trong năm', 'Điểm thi của từng học sinh', 'Màu sắc yêu thích', 'Số học sinh mỗi lớp'], ans: 0, exp: 'Biểu đồ đoạn thẳng phù hợp cho dữ liệu thay đổi theo thời gian như nhiệt độ tháng.' }
        ],
        exercises: [
          {
            id: '9.11',
            title: 'Bài 9.11 (Trang 90)',
            desc: 'Dưới đây là biểu đồ đoạn thẳng ghi lại sự thay đổi nhiệt độ ở Hà Nội trong một ngày mùa xuân:',
            illustration: 'line_graph_svg',
            svg: `<svg viewBox='0 0 400 240' width='100%' height='240' style='max-width: 360px; background: rgba(30, 41, 59, 0.5); border-radius: 8px; border: 1px solid #475569;'>
              <line x1='50' y1='200' x2='370' y2='200' stroke='#64748b' stroke-width='1.5' />
              <line x1='50' y1='30' x2='50' y2='200' stroke='#64748b' stroke-width='1.5' />
              
              <!-- Y-axis ticks and grids -->
              <line x1='50' y1='160' x2='370' y2='160' stroke='#334155' stroke-dasharray='3' />
              <text x='40' y='164' fill='#94a3b8' font-size='11' text-anchor='end'>15°C</text>
              <line x1='50' y1='120' x2='370' y2='120' stroke='#334155' stroke-dasharray='3' />
              <text x='40' y='124' fill='#94a3b8' font-size='11' text-anchor='end'>20°C</text>
              <line x1='50' y1='80' x2='370' y2='80' stroke='#334155' stroke-dasharray='3' />
              <text x='40' y='84' fill='#94a3b8' font-size='11' text-anchor='end'>25°C</text>
              <line x1='50' y1='40' x2='370' y2='40' stroke='#334155' stroke-dasharray='3' />
              <text x='40' y='44' fill='#94a3b8' font-size='11' text-anchor='end'>30°C</text>
              
              <!-- X-axis labels and ticks -->
              <text x='60' y='218' fill='#94a3b8' font-size='10' text-anchor='middle'>6h</text>
              <text x='130' y='218' fill='#94a3b8' font-size='10' text-anchor='middle'>10h</text>
              <text x='200' y='218' fill='#94a3b8' font-size='10' text-anchor='middle'>14h</text>
              <text x='270' y='218' fill='#94a3b8' font-size='10' text-anchor='middle'>18h</text>
              <text x='340' y='218' fill='#94a3b8' font-size='10' text-anchor='middle'>22h</text>
              
              <!-- Data lines -->
              <polyline points='60,136 130,88 200,56 270,104 340,120' fill='none' stroke='#06b6d4' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
              
              <!-- Data points & labels -->
              <!-- 6h: 18°C -->
              <circle cx='60' cy='136' r='5' fill='#ef4444' />
              <text x='60' y='126' fill='#06b6d4' font-size='10' font-weight='bold' text-anchor='middle'>18°</text>
              
              <!-- 10h: 24°C -->
              <circle cx='130' cy='88' r='5' fill='#ef4444' />
              <text x='130' y='78' fill='#06b6d4' font-size='10' font-weight='bold' text-anchor='middle'>24°</text>
              
              <!-- 14h: 28°C -->
              <circle cx='200' cy='56' r='5' fill='#ef4444' />
              <text x='200' y='46' fill='#06b6d4' font-size='10' font-weight='bold' text-anchor='middle'>28°</text>
              
              <!-- 18h: 22°C -->
              <circle cx='270' cy='104' r='5' fill='#ef4444' />
              <text x='270' y='94' fill='#06b6d4' font-size='10' font-weight='bold' text-anchor='middle'>22°</text>
              
              <!-- 22h: 20°C -->
              <circle cx='340' cy='120' r='5' fill='#ef4444' />
              <text x='340' y='110' fill='#06b6d4' font-size='10' font-weight='bold' text-anchor='middle'>20°</text>
            </svg>`,
            parts: [
              { id: 'temp_10h', q: 'Nhiệt độ đo được vào lúc 10 giờ là bao nhiêu độ C?', type: 'text_input', ans: ['24', '24 độ C', '24°C'], placeholder: 'Nhập số', hint: 'Dò trục hoành tại vị trí 10h và nhìn giá trị tương ứng ở điểm màu đỏ.' },
              { id: 'hottest_hour', q: 'Tại thời điểm nào trong ngày (mấy giờ) nhiệt độ đạt cao nhất?', type: 'text_input', ans: ['14 giờ', '14h', '14', '14 giờ chiều'], placeholder: 'Ví dụ: 14h', hint: 'Nhìn xem điểm cao nhất của đường biểu diễn ứng với mốc thời gian nào bên dưới.' },
              { id: 'temp_diff', q: 'Nhiệt độ đã giảm bao nhiêu độ C từ lúc 14 giờ đến 22 giờ?', type: 'text_input', ans: ['8', '8 độ C', '8°C'], placeholder: 'Nhập số', hint: 'Lấy nhiệt độ lúc 14 giờ (28°) trừ đi nhiệt độ lúc 22 giờ (20°).' }
            ],
            solution: '• Vào lúc 10 giờ, nhiệt độ đo được là <b>24°C</b>.<br>• Điểm cao nhất trên biểu đồ đạt 28°C ứng với thời điểm <b>14h (14 giờ)</b>.<br>• Nhiệt độ lúc 14h là 28°C và lúc 22h là 20°C. Từ 14h đến 22h, nhiệt độ đã giảm: 28°C - 20°C = <b>8°C</b>.'
          }
        ]
      },
      {
        id: 'c9-l4', num: 41, title: 'Kết quả có thể và sự kiện', pages: 'T2:86-90', xp: 40,
        tags: ['Kết quả có thể', 'Sự kiện', 'Không gian mẫu'],
        skills: ['Xác định không gian mẫu', 'Phân biệt sự kiện chắc chắn, không thể, có thể', 'Liệt kê kết quả có thể'],
        theory: [
          { title: 'Kết quả có thể và sự kiện', content: '<strong>Không gian mẫu Ω:</strong> Tập hợp tất cả kết quả có thể của thí nghiệm.<br><strong>Sự kiện:</strong> Tập con của Ω.', formulas: [], notes: ['Sự kiện chắc chắn: luôn xảy ra (P=1)', 'Sự kiện không thể: không bao giờ xảy ra (P=0)', 'Tung đồng xu: Ω = {Sấp, Ngửa}'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tung 1 xúc xắc. Liệt kê Ω và sự kiện A = "ra số chẵn".', solution: 'Ω = {1; 2; 3; 4; 5; 6}\nA = {2; 4; 6}' }
        ],
        quiz: [
          { q: 'Tung 1 đồng xu. Không gian mẫu Ω là?', opts: ['{Sấp, Ngửa}', '{1, 2}', '{Đỏ, Đen}', '{Trên, Dưới, Giữa}'], ans: 0, exp: 'Tung đồng xu có 2 kết quả: Sấp hoặc Ngửa → Ω = {Sấp, Ngửa}.' }
        ],
        exercises: [
          {
            id: '9.18',
            title: 'Bài 9.18 (Trang 94)',
            desc: 'Trong một hộp kín có chứa 3 quả bóng có cùng kích thước và khối lượng, gồm: 1 bóng màu Đỏ, 1 bóng màu Xanh, và 1 bóng màu Vàng. Bạn Minh nhắm mắt và lấy ngẫu nhiên ra 1 quả bóng.',
            parts: [
              { id: 'possible_outcomes', q: 'Có bao nhiêu kết quả có thể xảy ra khi Minh lấy ra 1 quả bóng?', type: 'text_input', ans: ['3'], placeholder: 'Nhập số', hint: 'Mỗi lần lấy, Minh có thể nhận được quả bóng màu gì?' },
              { id: 'event_purple', q: 'Sự kiện "Minh lấy được quả bóng màu Tím" là sự kiện loại nào (Chắc chắn / Không thể / Có thể):', type: 'text_input', ans: ['không thể', 'khong the', 'sự kiện không thể', 'sự kiện khong the'], placeholder: 'Điền từ', hint: 'Trong hộp có quả bóng màu Tím nào không?' },
              { id: 'event_not_green', q: 'Sự kiện "Minh lấy được một quả bóng không phải màu Xanh" là sự kiện loại nào (Chắc chắn / Không thể / Có thể):', type: 'text_input', ans: ['có thể', 'co the', 'sự kiện có thể', 'sự kiện co the'], placeholder: 'Điền từ', hint: 'Sự kiện này có thể xảy ra (khi lấy được bóng Đỏ hoặc Vàng) nhưng không chắc chắn (vì vẫn có thể lấy trúng bóng Xanh).' }
            ],
            solution: '• Hộp có 3 quả bóng khác màu (Đỏ, Xanh, Vàng) nên có đúng <b>3</b> kết quả có thể xảy ra.<br>• Trong hộp không có bóng màu Tím, vì vậy sự kiện "lấy được bóng màu Tím" là <b>Không thể</b>.<br>• Quả bóng lấy ra có thể không phải màu Xanh (nếu lấy trúng màu Đỏ hoặc màu Vàng) hoặc vẫn có thể là màu Xanh, nên sự kiện này chỉ là <b>Có thể xảy ra</b>.'
          }
        ]
      },
      {
        id: 'c9-l5', num: 42, title: 'Xác suất thực nghiệm', pages: 'T2:91-95', xp: 45,
        tags: ['Xác suất thực nghiệm', 'Tần suất', 'Quy luật số lớn'],
        skills: ['Tính xác suất thực nghiệm từ dữ liệu', 'Nhận biết quy luật số lớn', 'Phân biệt xác suất lý thuyết và thực nghiệm'],
        theory: [
          { title: 'Xác suất thực nghiệm', content: 'P(A) ≈ f(A) = số lần A xảy ra / tổng số thí nghiệm. Khi số thí nghiệm lớn, xác suất thực nghiệm gần với xác suất lý thuyết.', formulas: ['P(A) = m/n (m: số lần A xảy ra, n: tổng số lần)'], notes: ['0 ≤ P(A) ≤ 1', 'P(A chắc chắn) = 1', 'P(A không thể) = 0', 'Quy luật số lớn: thực nghiệm nhiều lần → kết quả gần lý thuyết'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tung đồng xu 200 lần, ra mặt sấp 112 lần. Xác suất thực nghiệm ra sấp?', solution: 'P(Sấp) = 112/200 = 0,56 = 56%\n(Lý thuyết: 50% → gần đúng)' }
        ],
        quiz: [
          { q: 'Tung xúc xắc 60 lần, ra mặt 6 là 8 lần. Xác suất thực nghiệm là?', opts: ['2/15', '1/6', '8/10', '6/60'], ans: 0, exp: 'P = 8/60 = 2/15 ≈ 0,133.' }
        ],
        exercises: [
          {
            id: '9.21',
            title: 'Bài 9.21 (Trang 98)',
            desc: 'Bạn Nam thực hiện tung một đồng xu cân đối 50 lần liên tiếp và đếm được mặt Sấp (S) xuất hiện 22 lần, các lần còn lại xuất hiện mặt Ngửa (N).',
            parts: [
              { id: 'prob_sap', q: 'Xác suất thực nghiệm xuất hiện mặt Sấp là (nhập dưới dạng phân số tối giản x/y hoặc tỉ số %):', type: 'text_input', ans: ['11/25', '11 / 25', '22/50', '22 / 50', '44%', '0.44', '0,44'], placeholder: 'Ví dụ: 11/25', hint: 'Số lần mặt Sấp xuất hiện chia cho tổng số lần tung đồng xu, sau đó rút gọn phân số.' },
              { id: 'prob_ngua', q: 'Xác suất thực nghiệm xuất hiện mặt Ngửa là (nhập dưới dạng phân số tối giản x/y hoặc tỉ số %):', type: 'text_input', ans: ['14/25', '14 / 25', '28/50', '28 / 50', '56%', '0.56', '0,56'], placeholder: 'Ví dụ: 14/25', hint: 'Đầu tiên tính số lần xuất hiện mặt Ngửa (50 - 22), sau đó chia cho tổng số lần tung và rút gọn.' }
            ],
            solution: '• Tổng số lần tung đồng xu là n = 50.<br>• Số lần mặt Sấp xuất hiện là k_S = 22. Xác suất thực nghiệm xuất hiện mặt Sấp là: P(Sấp) = 22/50 = <b>11/25</b> (hoặc <b>44%</b>).<br>• Số lần mặt Ngửa xuất hiện là k_N = 50 - 22 = 28. Xác suất thực nghiệm xuất hiện mặt Ngửa là: P(Ngửa) = 28/50 = <b>14/25</b> (hoặc <b>56%</b>).'
          }
        ]
      },
      {
        id: 'c9-l6', num: 43, title: 'Bài tập ôn tổng kết Toán 6', pages: 'T2:96-100', xp: 60,
        tags: ['Ôn tập', 'Tổng kết', 'Tổng hợp'],
        skills: ['Ôn tập toàn bộ chương trình Toán 6', 'Giải bài tập tổng hợp', 'Kết nối các kiến thức giữa các chương'],
        theory: [
          { title: 'Tổng kết chương trình Toán 6', content: 'Ôn lại toàn bộ: Số học (tập hợp, số tự nhiên, số nguyên, phân số, thập phân, %) và Hình học (hình phẳng, đối xứng, hình học cơ bản).', formulas: ['Tổng hợp công thức từ tất cả chương'], notes: ['Số học → Tập 1 C1-C3 + Tập 2 C6-C7', 'Hình học → Tập 1 C4-C5 + Tập 2 C8', 'Thống kê → Tập 2 C9'] }
        ],
        examples: [
          { title: 'Bài toán tổng hợp', question: 'Lớp 6A có 40 HS. 60% đạt loại Giỏi. Số HS giỏi là bao nhiêu? Biết 3/4 số HS giỏi là nữ. Số nữ giỏi là bao nhiêu?', solution: 'Số HS giỏi = 40 × 60% = 24 HS\nSố nữ giỏi = 24 × 3/4 = 18 HS' }
        ],
        quiz: [
          { q: 'Tổng XP nếu hoàn thành 100% tất cả 43 bài là bao nhiêu?', opts: ['1650+ XP', '500 XP', '1000 XP', '2000 XP'], ans: 0, exp: 'Tổng XP toàn bộ 43 bài Toán 6 là trên 1650 XP. Cố lên!' },
          { q: 'Chương nào thuộc Tập 2?', opts: ['Phân số, Thập phân, Hình học cơ bản, Thống kê', 'Tập hợp, Chia hết', 'Số nguyên, Đối xứng', 'Tất cả chương đều ở Tập 1'], ans: 0, exp: 'Tập 2 gồm: Chương VI (Phân số), VII (Số thập phân), VIII (Hình học cơ bản), IX (Dữ liệu & xác suất).' }
        ],
        exercises: [
          {
            id: '9.31',
            title: 'Bài tập Ôn Số học (Tổng hợp)',
            desc: 'Tính giá trị biểu thức sau một cách hợp lí:<br><b>A = (3/4) × (5/7) + (3/4) × (2/7)</b>',
            parts: [
              { id: 'calc_fraction', q: 'Giá trị rút gọn của biểu thức A là:', type: 'text_input', ans: ['3/4', '3 / 4', '0.75', '0,75', '75%'], placeholder: 'Ví dụ: 3/4', hint: 'Đặt thừa số chung (3/4) ra ngoài, bên trong còn tổng hai phân số có cùng mẫu.' }
            ],
            solution: 'Sử dụng tính chất phân phối của phép nhân đối với phép cộng:<br>A = (3/4) × (5/7 + 2/7) = (3/4) × (7/7) = (3/4) × 1 = <b>3/4</b>.<br>Đáp số: <b>3/4</b> (hoặc <b>0.75</b>).'
          },
          {
            id: '9.32',
            title: 'Bài tập Ôn Hình học (Tổng hợp)',
            desc: 'Cho góc xOy có số đo bằng 120°. Tia Oz là tia phân giác của góc xOy, còn tia Ot là tia phân giác của góc xOz. Hãy tính số đo của góc zOt:',
            parts: [
              { id: 'angle_calc', q: 'Số đo góc zOt là (độ):', type: 'text_input', ans: ['30', '30°', '30 độ'], placeholder: 'Nhập số', hint: 'Tính góc xOz trước dựa vào phân giác Oz của xOy, sau đó tính zOt dựa vào phân giác Ot của xOz.' }
            ],
            solution: '• Vì Oz là tia phân giác của góc xOy nên: ∠xOz = ∠zOy = ∠xOy / 2 = 120° / 2 = 60°.<br>• Vì Ot là tia phân giác của góc xOz nên: ∠xOt = ∠zOt = ∠xOz / 2 = 60° / 2 = <b>30°</b>.<br>Đáp số: <b>30°</b>.'
          },
          {
            id: '9.33',
            title: 'Bài tập Ôn Thống kê & Thực tế',
            desc: 'Lớp 6A có 40 học sinh. Kết quả xếp loại học tập cuối học kì II gồm 3 mức: Tốt, Khá và Đạt. Trong đó có 25% học sinh xếp loại Tốt, 55% học sinh xếp loại Khá, còn lại xếp loại Đạt.',
            parts: [
              { id: 'std_dat', q: 'Số học sinh xếp loại Đạt của lớp 6A là:', type: 'text_input', ans: ['8', '8 học sinh', '8 hs'], placeholder: 'Nhập số', hint: 'Tính tổng phần trăm học sinh xếp loại Tốt và Khá, từ đó tìm phần trăm xếp loại Đạt. Nhân với sĩ số lớp.' }
            ],
            solution: '• Tỉ số phần trăm học sinh xếp loại Đạt là: 100% - 25% - 55% = 20%.<br>• Số học sinh xếp loại Đạt của lớp 6A là: 40 × 20% = 40 × 0,2 = <b>8</b> học sinh.<br>Đáp số: <b>8 học sinh</b>.'
          }
        ]
      }
    ]
  }

];
