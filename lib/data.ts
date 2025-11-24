export const PRODUCTS = [
  {
    id: 1,
    name: "Nhang Trầm Cao Cấp",
    price: "450.000 VNĐ",
    image: "/premium-incense-sticks-natural.jpg",
    description: "Nhang trầm cao cấp từ Xứ Quảng, được chọn lọc kỹ lưỡng và gia công thủ công. Sản phẩm 100% tự nhiên, mang lại không gian thiền định sâu lắng.",
    details: [
      "Thành phần: Trầm hương tự nhiên 100%",
      "Chiều dài: 20cm",
      "Trọng lượng: 50 gram",
      "Thời gian cháy: 45-60 phút",
      "Xuất xứ: Xứ Quảng, Việt Nam"
    ],
    benefits: [
      "Tăng sự tập trung khi làm việc",
      "Thư giãn tinh thần, giảm stress",
      "Thanh lọc không khí, khử mùi",
      "Tạo cảm giác an bình cho gia chủ"
    ],
    reviews: [
      { author: "Nguyễn Anh", rating: 5, comment: "Chất lượng tuyệt vời, mùi hương rất tinh tế và lưu hương lâu." },
      { author: "Trần Hương", rating: 4, comment: "Đóng gói rất đẹp, tôi rất hài lòng, sẽ mua tiếp!" }
    ],
    // --- THÊM PHẦN QUÀ TẶNG ---
    giftItems: [
      // { name: "Đế cắm nhang hồ lô đồng", image: "/hộp đựng hương1.png" },
      { name: "Hộp đựng hương cao cấp trắng", image: "/hộp đựng hương1.png" },
      { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng.png" },
      { name: "Sổ tay Mộc An", image: "/số tay 2.png" },
      // { name: "Hộp diêm dài chuyên dụng", image: "/hộp đựng hương1.png" }
    ],
    featured: true
  },
  {
    id: 2,
    name: "Vòng Trầm 108 Hạt",
    price: "550.000 VNĐ",
    image: "/incense-wood-bracelet-handmade.jpg",
    description: "Vòng tay trầm thủ công tinh xảo, được tạc tỉ mỉ bởi những thợ thủ công lão luyện. Mỗi hạt trầm là một câu chuyện về thời gian và hương thơm.",
    details: [
      "Loại: Vòng trầm thủ công",
      "Kích cỡ: Dây co giãn cao cấp",
      "Số hạt: 18 hạt chính",
      "Đường kính hạt: 10mm",
      "Trọng lượng: 20 gram"
    ],
    benefits: [
      "Giúp định tâm, tăng tập trung",
      "Bình tĩnh tâm trí trong mọi hoàn cảnh",
      "Vật phẩm phong thủy mang lại may mắn",
      "Phù hợp khi thiền định hoặc đi chùa"
    ],
    reviews: [
      { author: "Lê Minh", rating: 5, comment: "Đẹp lắm, vân gỗ tự nhiên nhìn rất thích." },
      { author: "Phạm Linh", rating: 5, comment: "Quà tặng cực kỳ sang trọng, sếp mình rất thích!" },
    ],
    giftItems: [
      { name: "Hộp bìa cao cấp", image: "/hộp bìa.png" },
      { name: "Hộp đựng trầm", image: "/hộp quà đựng trầm 2.png" },
      { name: "Túi vải đựng trầm", image: "/túi vải đựng trầm.png" },


      // { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng.png" },
      { name: "Sổ tay Mộc An", image: "/số tay 2.png" },
      { name: "Thiệp cao cấp Mộc An", image: "/thiệp1.png" },
    ],
  },
  {
    id: 3,
    name: "Bộ Quà Tặng MỘC AN",
    price: "1.290.000 VNĐ",
    image: "/luxury-incense-gift-set-premium-box.jpg",
    description: "Bộ quà tặng premium hoàn hảo cho những người yêu thích trầm hương. Sự kết hợp tinh tế giữa nghệ thuật thưởng hương và văn hóa biếu tặng.",
    details: [
      "Phân loại: Giftset Cao Cấp",
      "Bao gồm: 2 hộp nhang, 1 vòng tay",
      "Phụ kiện: 1 lư đốt gốm, bộ dụng cụ",
      "Hộp đựng: Gỗ bọc nhung",
      "Kèm thiệp và hướng dẫn sử dụng"
    ],
    benefits: [
      "Quà tặng ý nghĩa cho đối tác, người thân",
      "Thể hiện sự tinh tế của người tặng",
      "Trọn bộ đầy đủ tiện lợi cho người mới",
      "Giá trị thẩm mỹ và sử dụng cao"
    ],
    reviews: [
      { author: "Phạm Linh", rating: 5, comment: "Quà tặng cực kỳ sang trọng, sếp mình rất thích!" }
    ],
    // Bộ quà tặng lớn thường có nhiều quà đi kèm
    giftItems: [
      { name: "Hộp bìa cao cấp", image: "/hộp bìa.png" },
      { name: "Hộp đựng hương cao cấp trắng", image: "/hộp đựng hương1.png" },
      { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng.png" },
      { name: "Sổ tay Mộc An", image: "/số tay 2.png" },
      { name: "Thiệp cao cấp Mộc An", image: "/thiệp1.png" },

      // { name: "Thiệp thiết kế riêng", image: "/gifts/custom-card.jpg" },
      // { name: "Túi giấy Kraft cao cấp", image: "/gifts/kraft-bag.jpg" },
      // { name: "Voucher giảm 10% lần sau", image: "/gifts/voucher.jpg" }
    ],
    featured: true
  },
  {
    id: 4,
    name: "Nhang Trầm",
    title: "Nhang Trầm",
    description: "Trầm hương tự nhiên 100%. Được làm từ bột trầm hương nguyên chất, không pha trộn hóa chất, mang lại hương thơm dịu nhẹ, ấm áp.",
    image: "/natural-incense-sticks.jpg",
    price: "450.000 VNĐ",
    details: [
      "Thành phần: Bột trầm hương, keo bời lời",
      "Số lượng: 50 nén/hộp",
      "Thời gian cháy: 45 phút/nén",
      "Xuất xứ: Tiên Phước, Quảng Nam"
    ],
    benefits: [
      "Thanh lọc không khí",
      "Giảm căng thẳng, mệt mỏi",
      "Hỗ trợ thiền định",
      "Xua đuổi tà khí"
    ],
    reviews: [
      { author: "Minh Tuấn", rating: 5, comment: "Mùi rất thơm, không bị khét." }
    ],
    giftItems: [
      { name: "Hộp đựng hương cao cấp trắng", image: "/hộp đựng hương1.png" },
      { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng 2.png" },
      { name: "Sổ tay Mộc An", image: "/số tay 2.png" },
      { name: "Thiệp cao cấp Mộc An", image: "/thiệp.png" },

    ], // Không có quà
    featured: true
  },
  {
    id: 5,
    name: "Vòng Trầm",
    title: "Vòng Trầm",
    description: "Vòng tay thủ công tinh xảo. Được chế tác từ gỗ trầm hương lâu năm, vân gỗ tự nhiên, càng đeo càng bóng đẹp và dậy mùi hương.",
    image: "/wooden-incense-bracelet.jpg",
    price: "850.000 VNĐ",
    details: [
      "Chất liệu: Trầm Tốc Việt Nam",
      "Kích thước hạt: 10mm, 12mm",
      "Kiểu dáng: Hạt tròn đơn giản",
      "Bảo hành: Đánh bóng trọn đời"
    ],
    benefits: [
      "Mang lại may mắn, bình an",
      "Là trang sức phong thủy sang trọng",
      "Hương thơm giúp định tâm",
      "Món quà ý nghĩa cho người thân"
    ],
    reviews: [
      { author: "Hoàng Nam", rating: 5, comment: "Vòng đẹp, đeo vào thấy nhẹ nhàng hẳn." }
    ],
    giftItems: [
      // { name: "Hộp gỗ đựng vòng", image: "/gifts/wooden-box.jpg" }
      { name: "Hộp bìa cao cấp", image: "/hộp bìa.png" },
      { name: "Hộp đựng trầm", image: "/hộp quà đựng trầm 2.png" },
      { name: "Túi vải đựng trầm", image: "/túi vải đựng trầm.png" },
      // { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng.png" },
      { name: "Sổ tay Mộc An", image: "/số tay.png" },
      { name: "Thiệp cao cấp Mộc An", image: "/thiệp.png" },
    ]
  },
  {
    id: 6,
    name: "Quà Tặng Premium",
    title: "Quà Tặng Premium",
    description: "Bộ quà hoàn hảo cho người thân. Sự kết hợp tinh tế giữa nhang trầm, lư đốt và vòng tay, được đóng gói trong hộp gấm sang trọng.",
    image: "/premium-gift-set.jpg",
    price: "1.500.000 VNĐ",
    details: [
      "Bao gồm: 1 hộp nhang, 1 vòng trầm, 1 lư xông",
      "Hộp đựng: Hộp gấm cao cấp",
      "Kèm theo: Thiệp chúc mừng và HDSD",
      "Kích thước hộp: 20x20x10cm"
    ],
    benefits: [
      "Thể hiện sự trân trọng với người nhận",
      "Phù hợp biếu tặng dịp lễ, Tết",
      "Bộ sản phẩm đầy đủ để thưởng trầm",
      "Giá trị tinh thần cao"
    ],
    reviews: [
      { author: "Công ty ABC", rating: 5, comment: "Chúng tôi đã đặt 50 bộ để tặng đối tác." }
    ],
    giftItems: [
      // { name: "Lư đốt trầm mini", image: "/gifts/mini-burner.jpg" }
      { name: "Hộp bìa cao cấp", image: "/hộp bìa.png" },
      { name: "Hộp đựng hương cao cấp trắng", image: "/hộp đựng hương1.png" },
      { name: "Hộp đựng hương cao cấp đỏ", image: "/hộp đựng hương màu đỏ.png" },
      { name: "Móc khóa sang trọng", image: "/móc khóa sang trọng.png" },
      { name: "Sổ tay Mộc An", image: "/số tay 2.png" },
      { name: "Thiệp cao cấp Mộc An", image: "/thiệp1.png" },
    ],
    featured: true
  }
]

// Guide/Blog data with full content
// lib/data.ts

export const GUIDES = [
  {
    id: 1,
    title: "Cách Phân Biệt Trầm Thật - Giả: Cẩm Nang Cho Người Mới",
    excerpt: "Thị trường trầm hương thật giả lẫn lộn. Hãy trang bị cho mình kiến thức để trở thành người tiêu dùng thông thái với 3 cách kiểm tra đơn giản sau.",
    image: "/identifying-genuine-incense.jpg", // Đảm bảo bạn có ảnh này hoặc dùng ảnh mẫu
    author: "Lê Tuấn - Chuyên gia Trầm",
    date: "2024-01-15",
    readTime: "5 phút đọc",
    tags: ["Kiến thức", "Phân biệt", "Mẹo vặt"],
    content: `
Trầm hương được ví như "Giọt máu của rừng già", là báu vật mà thiên nhiên ban tặng. Chính vì giá trị kinh tế và tâm linh cao ngất ngưởng, trầm hương bị làm giả rất nhiều. Dưới đây là những kinh nghiệm xương máu để bạn không mất tiền oan.

## 1. Quan sát hình dáng và vân gỗ
Trầm hương tự nhiên không bao giờ có màu đen tuyền bóng loáng như nhựa đường.
> "Vân trầm thật giống như vân tay của con người, hỗn loạn nhưng tự nhiên, không tuân theo quy luật lặp lại."

Hãy soi kỹ dưới ánh sáng. Trầm thật có màu nâu sẫm, nâu vàng, các thớ gỗ chứa dầu sẽ đậm màu hơn phần gỗ xác. Trầm giả thường được tẩm màu hóa chất nên có màu rất đều, xỉn và không có chiều sâu.

## 2. Thử thách khứu giác
Đây là cách quan trọng nhất. Trầm hương thật khi ở nhiệt độ thường có mùi thơm rất nhẹ, thanh tao, đôi khi khó ngửi thấy nếu chưa quen.
Ngược lại, trầm giả (tẩm hương liệu) sẽ có mùi nồng nặc ngay khi mở hộp, ngửi lâu có thể gây đau đầu hoặc khó chịu.
Khi đốt lên, trầm thật tỏa hương ngọt dịu, khói trắng bay thẳng rồi toả ra. Trầm giả khói đen, mùi khét của gỗ cháy hoặc mùi nước hoa nồng gắt.

## 3. Quy luật "Trầm chìm - Trầm nổi"
Giá trị của trầm nằm ở lượng tinh dầu.
- **Trầm nổi:** Lượng dầu ít, gỗ nhẹ hơn nước. Đây là loại phổ biến và giá cả phải chăng.
- **Trầm chìm:** Lượng dầu cực nhiều, lấp đầy thớ gỗ khiến nó nặng hơn nước. Đây là loại thượng hạng, giá trị rất cao.

Nếu ai đó bán cho bạn "vòng trầm chìm" với giá vài trăm nghìn đồng, chắc chắn đó là gỗ ép hoặc bắn chì vào trong.`
  },
  {
    id: 2,
    title: "Nghệ Thuật Đốt Trầm: Thưởng Thức Sự Tĩnh Lặng",
    excerpt: "Đốt trầm không chỉ là làm thơm phòng, đó là một nghi thức nuôi dưỡng tâm hồn. Học cách thưởng trầm đúng điệu cùng Mộc An.",
    image: "/incense-burning-technique.jpg",
    author: "MỘC AN Team",
    date: "2024-01-10",
    readTime: "4 phút đọc",
    tags: ["Lifestyle", "Thiền", "Hướng dẫn"],
    content: `
Giữa cuộc sống bộn bề, dành 15 phút mỗi ngày để thưởng trầm là cách tuyệt vời để tái tạo năng lượng. Nhưng đốt trầm sao cho đúng?

## Chuẩn bị không gian
Đừng đốt trầm trong phòng kín mít không có lối thoát khí. Trầm cần sự lưu thông nhẹ nhàng của gió để lan tỏa. Hãy hé mở cửa sổ, chọn một góc bàn trà yên tĩnh hoặc bàn làm việc sạch sẽ.

## Các phương pháp thưởng trầm
Tùy vào loại trầm mà ta có cách thưởng khác nhau:
1. **Đốt trực tiếp:** Dùng cho nhang cây hoặc nhang nụ. Bạn chỉ cần châm lửa, phẩy nhẹ cho tắt lửa ngọn và cắm vào lư.
2. **Xông trầm:** Dùng cho bột trầm hoặc dăm trầm. Sử dụng lư điện hoặc than hoạt tính để nung nóng trầm từ từ, giúp hương thơm tinh khiết nhất mà không bị mùi khói lửa ám vào.

> "Hương trầm là sợi dây kết nối vô hình giữa thực tại ồn ào và nội tâm tĩnh lặng."

## Lưu ý quan trọng
- Không ngửi trực tiếp vào làn khói đậm đặc vừa mới tỏa ra.
- Hãy đặt lư trầm cách xa người khoảng 1-2 mét để hương thoảng nhẹ.
- Thưởng trầm tốt nhất vào sáng sớm (để khởi động ngày mới) hoặc tối muộn (để thư giãn trước khi ngủ).`
  },
  {
    id: 3,
    title: "Hành Trình Của Trầm Hương Tại Xứ Quảng",
    excerpt: "Về miền đất Tiên Phước, Quảng Nam để nghe kể chuyện về những phu trầm và sự hình thành của loại gỗ thánh.",
    image: "/incense-culture-heritage.jpg",
    author: "Ban Biên Tập",
    date: "2024-01-05",
    readTime: "6 phút đọc",
    tags: ["Văn hóa", "Lịch sử", "Du lịch"],
    content: `
"Đau thương dó biến thành trầm". Câu nói dân gian ấy đã tóm tắt cả một quá trình hình thành đầy khắc nghiệt của loài gỗ quý này.

## Vết thương và sự chữa lành
Cây Dó Bầu không tự nhiên sinh ra trầm. Chỉ khi thân cây bị thương (do bom đạn, sét đánh, hay kiến đục...), cây mới tiết ra một loại nhựa đặc biệt bao bọc lấy vết thương để tự chữa lành. Qua hàng chục, hàng trăm năm, lớp nhựa ấy thấm vào gỗ, biến tính và tạo thành Trầm Hương.

## Tiên Phước - Thủ phủ Trầm Hương
Nhắc đến trầm Xứ Quảng, không thể không nhắc đến Tiên Phước. Nơi đây thổ nhưỡng khắc nghiệt nhưng lại cho ra đời những khối trầm có mùi hương ngọt hậu, sâu lắng nhất Việt Nam.

> "Người Quảng Nam ăn cục nói hòn, nhưng làm ra sản phẩm thì tinh tế vô cùng."

Ngày nay, các nghệ nhân tại Mộc An vẫn kế thừa kỹ thuật của cha ông, chế tác thủ công từng chiếc vòng, từng nén nhang để giữ trọn vẹn hồn cốt của đất trời Xứ Quảng.`
  }
]