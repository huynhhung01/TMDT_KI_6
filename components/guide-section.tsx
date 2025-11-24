'use client'

import { GUIDES } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function GuideSection() {
  return (
    <section id="guide" className="section-padding bg-[#80643c]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">
            Cẩm Nang Về Trầm
          </h2>
          <p className="text-lg text-brass">Kiến thức hữu ích để bạn hiểu rõ hơn về trầm hương</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {GUIDES.map((guide) => (
            <Link key={guide.id} href={`/guides/${guide.id}`}>
              <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-brown-dark mb-2 group-hover:text-brass transition">{guide.title}</h3>
                  <p className="text-muted-foreground text-sm">{guide.excerpt.substring(0, 100)}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
