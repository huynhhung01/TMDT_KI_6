'use client'

import { useState, useRef } from 'react'
import { Leaf, Users, Award, Play } from 'lucide-react'
import Image from 'next/image'

export default function TrustSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const trustPoints = [
    {
      icon: Leaf,
      title: "100% Tự Nhiên",
      description: "Trầm hương nguyên chất, không pha tạp chất hay hoá chất hóa học",
    },
    {
      icon: Users,
      title: "Thủ Công Xứ Quảng",
      description: "Được chế tác tỉ mỉ bởi các nghệ nhân truyền thống của vùng đất Xứ Quảng",
    },
    {
      icon: Award,
      title: "Cam Kết Chất Lượng",
      description: "Cam kết rõ ràng về chất lượng, nguồn gốc, và trách nhiệm khách hàng",
    },
  ]

  return (
    <section className="py-20 bg-[#80643c]">
      <div className="section-container max-w-7xl mx-auto px-4">
        {/* Trust Points - Giữ nguyên */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="group bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brass/20">
                <div className="w-16 h-16 mx-auto mb-6 bg-cream rounded-full flex items-center justify-center group-hover:bg-brass transition-colors duration-300">
                  <Icon className="text-brass w-8 h-8 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-brown-dark mb-3 font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}