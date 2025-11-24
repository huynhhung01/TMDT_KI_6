'use client'

import Image from 'next/image'

export default function SocialProofSection() {
  const instagramPosts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: `/placeholder.svg?height=300&width=300&query=lifestyle_incense_customer_photo_${i + 1}`,
  }))

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">
            Khách Hàng Của Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground">Theo dõi @moc_an trên Instagram</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.011 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.011 3.584-.07 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.011-3.584.07-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.011-4.947.072-1.275.06-2.145.264-2.908.564-.787.304-1.459.718-2.126 1.384-.666.667-1.08 1.339-1.384 2.126-.3.763-.504 1.633-.564 2.907-.061 1.28-.072 1.688-.072 4.947s.011 3.667.072 4.947c.06 1.275.264 2.145.564 2.908.304.787.718 1.459 1.384 2.126.667.666 1.339 1.08 2.126 1.384.763.3 1.633.504 2.907.564 1.28.061 1.688.072 4.947.072s3.667-.011 4.947-.072c1.275-.06 2.145-.264 2.908-.564.787-.304 1.459-.718 2.126-1.384.666-.667 1.08-1.339 1.384-2.126.3-.763.504-1.633.564-2.907.061-1.28.072-1.688.072-4.947s-.011-3.667-.072-4.947c-.06-1.275-.264-2.145-.564-2.908-.304-.787-.718-1.459-1.384-2.126-.667-.666-1.339-1.08-2.126-1.384-.763-.3-1.633-.504-2.907-.564-1.28-.061-1.688-.072-4.947-.072z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
