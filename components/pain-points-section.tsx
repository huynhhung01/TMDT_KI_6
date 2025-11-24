'use client'

import { CheckCircle2 } from 'lucide-react'

export default function PainPointsSection() {
  const painPoints = [
    {
      problem: "Quà tặng nhàm chán, thiếu tinh tế",
      solution: "Bộ Quà Tặng MỘC AN mang đến sự sang trọng và khác biệt",
    },
    {
      problem: "Không chắc chắn về chất lượng",
      solution: "100% tự nhiên, nguồn gốc rõ ràng, cam kết chất lượng",
    },
    {
      problem: "Không mang được tính văn hoá – cảm xúc",
      solution: "Mang theo di sản Xứ Quảng, câu chuyện thương hiệu sâu sắc",
    },
    {
      problem: "Tính cá nhân hoá thấp",
      solution: "Có thể khắc tên, tùy chỉnh hộp quà riêng biệt",
    },
  ]

  return (
    <section className="section-padding bg-[#80643c]">
      <div className="section-container">
        <div className="text-center mb-12">
          {/* Sử dụng mã màu #9b7a49 cho tiêu đề lớn */}
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">
            Bạn đang tìm một món quà sang trọng, ý nghĩa và khác biệt?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger">
          {painPoints.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition group border border-stone-100">
              <div className="flex gap-4">
                {/* Icon sử dụng mã màu #9b7a49 */}
                <CheckCircle2 className="text-[#9b7a49] flex-shrink-0 mt-1" size={24} />
                <div>
                  {/* Tiêu đề vấn đề cũng sử dụng mã màu này để đồng bộ */}
                  <p className="text-[#9b7a49] font-semibold mb-2">{item.problem}</p>
                  
                  {/* Phần giải pháp giữ màu xám nhẹ để tạo độ tương phản dễ đọc */}
                  <p className="text-gray-500 text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}