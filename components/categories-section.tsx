'use client'

import Image from 'next/image'
import Link from 'next/link'

const CATEGORIES = [
  {
    id: 4,
    title: "Nhang Trầm",
    description: "Trầm hương tự nhiên 100%",
    image: "/natural-incense-sticks.jpg",
  },
  {
    id: 5,
    title: "Vòng Trầm",
    description: "Vòng tay thủ công tinh xảo",
    image: "/wooden-incense-bracelet.jpg",
  },
  {
    id: 6,
    title: "Quà Tặng Premium",
    description: "Bộ quà hoàn hảo cho người thân",
    image: "/premium-gift-set.jpg",
  },
]

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">
            Danh Mục Sản Phẩm
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                </div>
                <h3 className="font-serif text-xl text-brown-dark mb-1 group-hover:text-brass transition">{cat.title}</h3>
                <p className="text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
