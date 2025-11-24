'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { PRODUCTS } from '@/lib/data'

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">
            Sản Phẩm Nổi Bật
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div 
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group ${
                  product.featured ? 'ring-2 ring-brass' : ''
                }`}
              >
                <div className="bg-gray-100 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-brass text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Bán Chạy
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl text-brown-dark mb-2 group-hover:text-brass transition">{product.name}</h3>
                  <p className="text-lg text-brass font-semibold mb-4">{product.price}</p>
                  <button onClick={(e) => {
                    e.preventDefault()
                  }} className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Xem Chi Tiết
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
