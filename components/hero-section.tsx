'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

// 1. KHAI BÁO DANH SÁCH ẢNH
// Bạn hãy điền chính xác tên file ảnh đang có trong folder public/landing-imgs của bạn vào đây
const SLIDE_IMAGES = [
  '/landing-imgs/anh-1.jpg', // Thay bằng tên file thật của bạn
  '/landing-imgs/anh-2.jpg',
  '/landing-imgs/anh-3.jpg',
  '/landing-imgs/anh-4.jpg',
  // '/landing-imgs/Gemini_Generated_Image_yf2pclyf2pclyf2p (1).png',
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [contentLoaded, setContentLoaded] = useState(false)

  // 2. LOGIC TỰ ĐỘNG CHUYỂN SLIDE
  useEffect(() => {
    // Nếu chỉ có 1 ảnh thì không cần chạy interval
    if (SLIDE_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === SLIDE_IMAGES.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Chuyển ảnh mỗi 5 giây (5000ms)

    return () => clearInterval(interval) // Dọn dẹp khi component unmount
  }, [])

  const logoUrl = '/logo-moc-an-large.png'

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* 3. SLIDESHOW NỀN (BACKGROUND LAYER) */}
      <div className="absolute inset-0 z-0">
        {SLIDE_IMAGES.map((imgSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={imgSrc}
              alt={`Slide background ${index + 1}`}
              fill
              priority={index === 0} // Chỉ ưu tiên load ảnh đầu tiên để tối ưu tốc độ
              className="object-cover"
              onLoadingComplete={() => index === 0 && setContentLoaded(true)} // Hiện nội dung khi ảnh đầu tiên load xong
            />
          </div>
        ))}

        {/* Lớp phủ tối (Overlay) - Giữ nguyên để chữ dễ đọc bất kể ảnh nền nào */}
        <div className="absolute inset-0  backdrop-brightness-75 z-10"></div>
      </div>
      
      {/* 4. NỘI DUNG (CONTENT LAYER) */}
      <div className="section-container relative z-20 py-24 md:py-32 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
          
          {/* LEFT: Logo */}
          <div 
            className="flex items-center justify-center lg:justify-start transition-all duration-1000 transform translate-y-0" 
            style={{ 
              opacity: contentLoaded ? 1 : 0, 
              transform: contentLoaded ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <div className="relative w-full max-w-sm">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={logoUrl}
                  alt="MỘC AN - Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brass text-white px-6 py-2 rounded-full text-sm font-serif whitespace-nowrap shadow-xl border border-white/10">
                Mộc - An - Tinh Tế
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div 
            className="space-y-8 text-white transition-all duration-1000 delay-200" 
            style={{ 
              opacity: contentLoaded ? 1 : 0,
              transform: contentLoaded ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <div className="space-y-4">
              <p className="text-cream/90 font-serif text-lg tracking-widest uppercase border-l-4 border-brass pl-4">
                Xứ Quảng Heritage
              </p>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight shadow-black drop-shadow-lg">
                <span className="text-white">TĨNH</span>
                <br />
                <span className="text-brass font-bold italic">LẶNG</span>
                <br />
                <span className="text-white">XỨ QUẢNG</span>
              </h1>
            </div>

            <div className="space-y-4 max-w-lg">
              <p className="text-lg md:text-xl text-cream leading-relaxed font-body drop-shadow-md">
                Mộc mạc – An yên – Tinh tế trong từng khoảnh khắc. 
              </p>
              <p className="text-base text-cream/80 italic">
                Trầm hương tự nhiên 100% từ Xứ Quảng, mang lại sự thư thái cho tâm hồn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-brass hover:bg-brass-dark text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-brass/50">
                Khám Phá Câu Chuyện
              </button>
              <button className="px-8 py-3 border border-white/40 hover:bg-white/10 text-white font-medium rounded-full transition-colors backdrop-blur-sm">
                Đặt Mua Ngay
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cream/70" />
        </div>
      </div>
    </section>
  )
}