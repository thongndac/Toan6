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
        ]
      },
      {
        id: 'c1-l6', num: 6, title: 'Luỹ thừa với số mũ tự nhiên', pages: '22-24', xp: 50,
        tags: ['Luỹ thừa', 'Cơ số', 'Số mũ'],
        skills: ['Tính luỹ thừa bậc n', 'Nhân và chia hai luỹ thừa cùng cơ số', 'Áp dụng luỹ thừa vào bài toán thực tiễn'],
        theory: [
          { title: '1. Luỹ thừa', content: 'aⁿ = a × a × ... × a (n thừa số a). a là <strong>cơ số</strong>, n là <strong>số mũ</strong>.', formulas: ['aᵐ × aⁿ = aᵐ⁺ⁿ (nhân cùng cơ số: cộng số mũ)', 'aᵐ : aⁿ = aᵐ⁻ⁿ (m ≥ n, a ≠ 0)', 'a⁰ = 1 (a ≠ 0)', 'a¹ = a'], notes: ['2¹⁰ = 1 024 ≈ 1000', '10ⁿ = 1 000...0 (n chữ số 0)'] }
        ],
        examples: [
          { title: 'Ví dụ', question: 'Tính 2³ × 2⁴ và 3⁵ : 3²', solution: '2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128\n3⁵ : 3² = 3⁵⁻² = 3³ = 27' }
        ],
        quiz: [
          { q: 'Tính 2³ × 2⁴ = ?', opts: ['2⁷ = 128', '2¹² = 4096', '4⁷', '2⁷ = 256'], ans: 0, exp: '2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.' },
          { q: 'a⁰ bằng bao nhiêu (a ≠ 0)?', opts: ['1', '0', 'a', 'Không xác định'], ans: 0, exp: 'Theo quy ước: a⁰ = 1 với mọi a ≠ 0.' },
          { q: '10⁴ = ?', opts: ['10 000', '1 000', '100 000', '40'], ans: 0, exp: '10⁴ = 10 × 10 × 10 × 10 = 10 000 (4 chữ số 0).' }
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
        ]
      }
    ]
  }

];