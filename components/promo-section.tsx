'use client'

export default function PromoSection() {
  return (
    <section className="section-padding bg-brown-dark text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Ưu Đãi Tháng Này
            </h2>
            <p className="text-lg text-white mb-8">
              Dành riêng cho những khách hàng quý giá của MỘC AN
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass text-brown-dark flex items-center justify-center font-bold">✓</div>
                <p className="text-lg">Combo giảm <strong>15%</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass text-brown-dark flex items-center justify-center font-bold">✓</div>
                <p className="text-lg">Freeship toàn quốc</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass text-brown-dark flex items-center justify-center font-bold">✓</div>
                <p className="text-lg">Hộp quà khắc tên miễn phí</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brass text-brown-dark flex items-center justify-center font-bold">✓</div>
                <p className="text-lg">Thời gian giới hạn <strong>48 giờ</strong></p>
              </div>
            </div>

            <button className="px-8 py-3 bg-brass text-brown-dark rounded-md font-body text-base font-semibold hover:opacity-90 transition">
              Đặt Mua Ngay & Nhận Ưu Đãi
            </button>
          </div>

          {/* Right Visual */}
          <div className="bg-brass/20 rounded-lg p-8 text-center">
            <div className="text-6xl font-bold text-brass mb-4">15%</div>
            <p className="text-xl font-semibold">Giảm giá combo</p>
            <p className="text-sm text-muted-foreground mt-4">Áp dụng cho bộ quà tặng từ 2 sản phẩm trở lên</p>
          </div>
        </div>
      </div>
    </section>
  )
}
