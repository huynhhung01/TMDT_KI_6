'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react' // 1. Thêm useEffect
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // 2. Thêm state để bắt sự kiện cuộn

  // 3. Xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-[#80643c] backdrop-blur-md border-b border-border shadow-sm py-0' // Khi cuộn: Nền màu cream mờ, có border
        : 'bg-transparent  border-transparent py-2' // Khi ở đỉnh: Trong suốt, không border, thoáng hơn
        }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="logo-no-background.png"
            alt="MỘC AN"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <div>
            {/* text-brown-dark */}
            <h1 className="font-serif text-xl font-bold text-[#F4EDE2]">MỘC AN</h1>
            <p className="text-xs text-[#F4EDE2]  leading-none">Tĩnh Lặng Xứ Quảng</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Câu Chuyện', 'Sản Phẩm', 'Cẩm Nang', 'Liên Hệ'].map((item, index) => (
            <Link
              key={index}
              href={`#${index}`}
              className={` ${isScrolled
                ? 'text-[#F4EDE2]' //'text-brown-dark' // Khi cuộn: Nền màu cream mờ, có border
                : 'text-[#F4EDE2]' //'text-brass' // Khi ở đỉnh: Trong suốt, không border, thoáng hơn
                } hover:text-brass transition font-body font-medium`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="text-brown-dark hover:text-brass transition p-2">
            <ShoppingCart size={20} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brown-dark"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Vẫn giữ nền trắng đục để dễ đọc */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-cream absolute top-full w-full shadow-lg animate-in slide-in-from-top-5">
          <div className="section-container py-4 flex flex-col gap-4">
            <Link href="#story" className="text-brown-dark hover:text-brass transition">
              Câu Chuyện
            </Link>
            <Link href="#products" className="text-brown-dark hover:text-brass transition">
              Sản Phẩm
            </Link>
            <Link href="#guide" className="text-brown-dark hover:text-brass transition">
              Cẩm Nang
            </Link>
            <Link href="#contact" className="text-brown-dark hover:text-brass transition">
              Liên Hệ
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}