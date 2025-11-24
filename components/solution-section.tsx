'use client'

import Image from 'next/image'

export default function SolutionSection() {
  const features = [
    {
      title: "Nhang Trầm Tự Nhiên",
      description: "Trầm hương 100% tự nhiên, không pha tạp chất",
      icon: "🌿",
    },
    {
      title: "Vòng Trầm Thủ Công",
      description: "Được chế tác tỉ mỉ bởi các nghệ nhân Xứ Quảng",
      icon: "📿", // Đã sửa icon con ngỗng thành tràng hạt cho phù hợp ngữ cảnh
    },
    {
      title: "Bộ Phụ Kiện Đốt Trầm",
      description: "Đầy đủ các dụng cụ đốt trầm chuyên nghiệp",
      icon: "🔥",
    },
    {
      title: "Hộp Gỗ Khắc Logo",
      description: "Hộp gỗ cao cấp với logo Chùa Cầu khắc tinh xảo",
      icon: "📦",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADLINE --- */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#9b7a49] mb-4">
            Giải Pháp: Bộ Quà Tặng MỘC AN
          </h2>
          <p className="text-lg text-stone-500 italic font-medium">
            "Tĩnh Lặng Như Chính Bạn"
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger">
          {features.map((item, idx) => (
            <div key={idx} className="bg-stone-50 rounded-xl p-6 text-center border border-stone-100 hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4 opacity-90">{item.icon}</div>
              <h3 className="font-serif text-lg text-[#9b7a49] mb-2 font-bold">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* --- UNBOXING IMAGE --- */}
        {/* Đã thay bg-brown-dark bằng #3b2417 */}
        <div className="relative bg-[#b79865] rounded-2xl overflow-hidden shadow-xl mb-12 border border-stone-800">
          <Image
            src="/luxury-incense-gift-box-unboxing-premium-packaging.jpg"
            alt="Unboxing Bộ Quà Tặng MỘC AN"
            width={1200}
            height={600}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay nhẹ để hình ảnh hòa vào nền web hơn */}
          <div className="absolute inset-0 bg-[#9b7a49]/5 pointer-events-none"></div>
        </div>

        {/* --- CONTENTS LIST --- */}
        <div className="mt-8 bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-100">
          <h3 className="font-serif text-2xl text-[#9b7a49] mb-8 text-center md:text-left border-b border-stone-200 pb-4 inline-block">
            Bộ Quà Tặng Bao Gồm:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Nhang trầm tự nhiên 100%",
              "Vòng trầm thủ công Xứ Quảng",
              "Bộ phụ kiện đốt trầm (Lư, kẹp...)",
              "Thiệp cảm ơn & Túi quà Premium",
              "Hộp gỗ khắc logo Chùa Cầu",
              "Hướng dẫn sử dụng & Bảo quản"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {/* Bullet point màu #9b7a49 */}
                <div className="w-2 h-2 rounded-full bg-[#9b7a49] group-hover:scale-150 transition-transform"></div>
                <p className="text-stone-600 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}