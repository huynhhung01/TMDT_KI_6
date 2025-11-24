'use client'

import { Star } from 'lucide-react'

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Nguyễn Linh Đan",
      rating: 5,
      comment: "Mùi trầm rất thanh, thư giãn tuyệt vời. Quá hài lòng với chất lượng!",
      avatar: "ND",
    },
    {
      name: "Trần Minh Huy",
      rating: 5,
      comment: "Quà tặng sang trọng, ai nhận cũng thích. Hộp đẹp, sản phẩm chất lượng.",
      avatar: "TH",
    },
    {
      name: "Phạm Thu Thảo",
      rating: 5,
      comment: "Câu chuyện thương hiệu rất hay, tinh tế. Đúng là trầm hương cao cấp!",
      avatar: "PT",
    },
  ]

  return (
    <section className="section-padding bg-[#80643c]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <p className="text-lg text-muted-foreground">Khách hàng thực tế nói gì về MỘC AN?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brass text-white flex items-center justify-center font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-brown-dark">{review.name}</p>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brass text-brass" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
