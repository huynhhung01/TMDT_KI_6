'use client'

import Link from 'next/link'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-brown-dark text-white">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">Về MỘC AN</h3>
            <p className="text-sm text-gray-300">Mang trọn vẹn di sản Xứ Quảng vào không gian sống của bạn</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Chính Sách</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-brass transition">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-brass transition">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-brass transition">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>📱 <a href="tel:0123456789" className="hover:text-brass transition">0123 456 789</a></li>
              <li>📧 <a href="mailto:hello@mocan.vn" className="hover:text-brass transition">hello@mocan.vn</a></li>
              <li className="pt-2">💬 Zalo & Messenger</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg mb-4">Theo Dõi Chúng Tôi</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brass transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brass transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brass transition">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 MỘC AN. Tĩnh Lặng Xứ Quảng. Bản quyền được bảo vệ.
          </p>
        </div>
      </div>
    </footer>
  )
}
