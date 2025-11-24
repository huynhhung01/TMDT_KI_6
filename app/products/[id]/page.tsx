'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShoppingCart, 
  ArrowLeft, 
  Star, 
  Minus, 
  Plus, 
  Check, 
  ShieldCheck, 
  Truck, 
  RefreshCcw,
  Gift, 
  X // Thêm icon X cho nút đóng
} from 'lucide-react'
import { PRODUCTS } from '@/lib/data'
import Header from '@/components/header'

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id
  const product = PRODUCTS.find(p => p.id == parseInt(id))
  
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'benefits'>('details')
  
  // --- STATE MỚI CHO MODAL ---
  const [selectedGift, setSelectedGift] = useState(null) 

  const openGiftModal = (gift) => {
    setSelectedGift(gift)
  }

  const closeGiftModal = () => {
    setSelectedGift(null)
  }
  // -----------------------------

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
        <p className="text-2xl font-serif text-[#3b2417] mb-4">Sản phẩm không tồn tại</p>
        <Link href="/#products" className="text-[#9b7a49] hover:underline">
          Quay về danh sách sản phẩm
        </Link>
      </div>
    )
  }

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 2)

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#F5F2EA] pt-28 pb-20 animate-in fade-in duration-700">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-[#9b7a49] transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-[#9b7a49] transition-colors">Sản phẩm</Link>
          <span>/</span>
          <span className="text-[#3b2417] font-medium">{product.name}</span>
        </nav>

        {/* --- MAIN PRODUCT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl border border-white/50 bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-[#9b7a49] text-white px-4 py-1 text-sm tracking-widest uppercase font-medium shadow-lg">
                    Best Seller
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INFO */}
          <div className="flex flex-col h-full">
            <div className="mb-6 border-b border-stone-200 pb-6">
              <h1 className="font-serif text-4xl md:text-5xl text-[#3b2417] mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-3xl font-medium text-[#9b7a49]">{product.price}</p>
                
                <div className="flex items-center gap-2">
                  <div className="flex text-[#9b7a49]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" className={i < 4 ? "text-[#9b7a49]" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-sm text-stone-500 underline cursor-pointer">
                    {product.reviews?.length || 0} đánh giá
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-stone text-stone-600 leading-relaxed mb-8">
              <p>{product.description}</p>
            </div>

            {/* Action: Quantity & Add to Cart */}
            <div className="bg-white/60 p-6 rounded-xl border border-stone-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Quantity */}
                <div className="flex items-center justify-between border border-stone-200 bg-white rounded-lg w-full sm:w-auto px-4 py-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-stone-400 hover:text-[#3b2417] transition"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-medium text-lg w-12 text-center text-[#3b2417]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-stone-400 hover:text-[#3b2417] transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Add Button */}
                <button className="flex-1 bg-[#3b2417] hover:bg-[#9b7a49] text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-orange-900/20 hover:-translate-y-1">
                  <ShoppingCart size={20} />
                  <span>Thêm vào giỏ - {(parseInt(product.price.replace(/\D/g,'')) * quantity).toLocaleString('vi-VN')} đ</span>
                </button>
              </div>
            </div>

            {/* --- PHẦN QUÀ TẶNG KÈM (NEW) --- */}
            {product.giftItems && product.giftItems.length > 0 && (
              <div className="mb-8 bg-[#9b7a49]/10 border border-dashed border-[#9b7a49]/40 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                   <Gift size={18} className="text-[#9b7a49]" />
                   <span className="font-serif text-lg text-[#3b2417] font-semibold">Quà Tặng Kèm:</span>
                </div>
                <div className="space-y-3">
                  {product.giftItems.map((gift, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border border-stone-100 cursor-pointer hover:bg-stone-50 transition"
                      onClick={() => openGiftModal(gift)} // Thêm onClick
                    >
                       <div className="relative w-12 h-12 rounded overflow-hidden border border-stone-100 bg-stone-50 flex-shrink-0">
                          <Image 
                            src={gift.image || "/placeholder.svg"} 
                            alt={gift.name} 
                            fill 
                            className="object-cover" 
                          />
                       </div>
                       <div>
                          <p className="text-sm font-medium text-[#3b2417]">{gift.name}</p>
                          <p className="text-xs text-[#9b7a49]">Bấm để xem chi tiết</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Policy Icons */}
            <div className="grid grid-cols-3 gap-4 mb-10 text-center border-t border-stone-200 pt-6">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white shadow-sm text-[#9b7a49]">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-medium text-stone-500">100% Tự Nhiên</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white shadow-sm text-[#9b7a49]">
                  <Truck size={20} />
                </div>
                <span className="text-xs font-medium text-stone-500">Ship Toàn Quốc</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-white shadow-sm text-[#9b7a49]">
                  <RefreshCcw size={20} />
                </div>
                <span className="text-xs font-medium text-stone-500">Đổi Trả 7 Ngày</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-auto">
              <div className="flex border-b border-stone-200 mb-6">
                <button 
                  onClick={() => setActiveTab('details')}
                  className={`pb-3 pr-6 font-serif text-lg transition-colors relative ${
                    activeTab === 'details' ? 'text-[#3b2417] font-medium' : 'text-stone-400'
                  }`}
                >
                  Chi Tiết
                  {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9b7a49]"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('benefits')}
                  className={`pb-3 px-6 font-serif text-lg transition-colors relative ${
                    activeTab === 'benefits' ? 'text-[#3b2417] font-medium' : 'text-stone-400'
                  }`}
                >
                  Lợi Ích
                  {activeTab === 'benefits' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9b7a49]"></span>}
                </button>
              </div>

              <div className="min-h-[150px]">
                {activeTab === 'details' && (
                  <ul className="space-y-3 animate-in slide-in-from-left-2 fade-in duration-300">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9b7a49] mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'benefits' && (
                  <div className="grid grid-cols-1 gap-3 animate-in slide-in-from-right-2 fade-in duration-300">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-stone-100">
                        <Check size={18} className="text-[#9b7a49]" />
                        <span className="text-[#3b2417]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="border-t border-stone-200 pt-16 mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl text-[#3b2417] mb-4">Khách Hàng Nói Gì?</h2>
              <p className="text-stone-500">Những trải nghiệm thực tế từ những người yêu mến Mộc An.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#9b7a49" className="text-[#9b7a49]" />
                      ))}
                    </div>
                    <span className="text-xs text-stone-400">Đã mua hàng</span>
                  </div>
                  <p className="text-[#3b2417] italic text-lg mb-6">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#3b2417] font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#3b2417]">{review.author}</p>
                      <p className="text-xs text-stone-400">Khách hàng thân thiết</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- RELATED PRODUCTS --- */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-stone-200">
             <h2 className="font-serif text-3xl text-[#3b2417] mb-8">Có Thể Bạn Cũng Thích</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {relatedProducts.map((item) => (
                 <Link href={`/products/${item.id}`} key={item.id} className="group block">
                   <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-white">
                     <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-[#3b2417]/0 group-hover:bg-[#3b2417]/5 transition-colors" />
                   </div>
                   <h3 className="font-serif text-xl text-[#3b2417] group-hover:text-[#9b7a49] transition-colors">{item.name}</h3>
                   <p className="text-stone-500 mt-1">{item.price}</p>
                 </Link>
               ))}
               
               <Link href="/#products" className="flex flex-col items-center justify-center bg-white/50 rounded-xl aspect-[4/5] border border-dashed border-[#9b7a49]/30 hover:bg-white transition group">
                  <div className="w-12 h-12 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#9b7a49] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <ArrowLeft className="rotate-180" />
                  </div>
                  <span className="font-serif text-lg text-[#3b2417]">Xem tất cả sản phẩm</span>
               </Link>
             </div>
          </div>
        )}

      </div>
    </div>

    {/* --- MODAL HIỂN THỊ QUÀ TẶNG (NEW) --- */}
    {selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeGiftModal}>
            <div 
                className="bg-white rounded-2xl p-8 w-11/12 max-w-md relative shadow-2xl animate-in fade-in slide-in-from-bottom-5" 
                onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng modal khi click bên trong
            >
                <button 
                    onClick={closeGiftModal} 
                    className="absolute top-4 right-4 text-stone-500 hover:text-[#3b2417] transition"
                >
                    <X size={24} />
                </button>
                
                <h3 className="font-serif text-2xl text-[#3b2417] mb-4 border-b border-stone-200 pb-2">
                    {selectedGift.name}
                </h3>
                
                <div className="relative aspect-video w-full mb-4 rounded-xl overflow-hidden border border-stone-200">
                    <Image 
                        src={selectedGift.image || "/placeholder.svg"} 
                        alt={selectedGift.name} 
                        fill 
                        className="object-cover" 
                    />
                </div>

                <div className="space-y-3">
                    <p className="text-stone-600 text-base">
                        Quà tặng kèm đặc biệt, được chọn lựa cẩn thận để nâng cao trải nghiệm sản phẩm của bạn.
                    </p>
                    <p className="text-sm font-medium">
                        <span className="text-green-600 font-bold">GIÁ TRỊ: 0 VNĐ</span> (Chỉ dành cho đơn hàng này)
                    </p>
                    <p className="text-xs text-stone-400 italic">
                        *Hình ảnh chỉ mang tính chất minh họa.
                    </p>
                </div>
                
                <button 
                    onClick={closeGiftModal}
                    className="mt-6 w-full bg-[#9b7a49] text-white py-3 rounded-lg hover:bg-[#3b2417] transition shadow-md"
                >
                    Đóng
                </button>
            </div>
        </div>
    )}
    </>
  )
}