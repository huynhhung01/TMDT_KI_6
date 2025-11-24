'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Flame, Droplets, Mountain, Wind, Sprout, ArrowDown } from 'lucide-react'

// Dữ liệu Ngũ Hành
const ELEMENTS = [
  {
    id: 'kim',
    icon: Wind,
    name: 'Kim',
    trait: 'Cương trực & Quyết đoán',
    advice: 'Người mệnh Kim đôi khi quá cứng nhắc. Một chút hương trầm dịu nhẹ sẽ làm mềm sự sắc sảo.'
  },
  {
    id: 'moc',
    icon: Sprout,
    name: 'Mộc',
    trait: 'Sáng tạo & Vươn lên',
    advice: 'Bạn cần thêm chút "Nước" (Thủy) để nuôi dưỡng sự sáng tạo không bị khô cằn.'
  },
  {
    id: 'thuy',
    icon: Droplets,
    name: 'Thủy',
    trait: 'Linh hoạt & Nhạy cảm',
    advice: 'Bạn như dòng nước, dễ thích nghi nhưng dễ phân tâm. Trầm hương giúp bạn tĩnh tại và sâu sắc hơn.'
  },
  {
    id: 'hoa',
    icon: Flame,
    name: 'Hỏa',
    trait: 'Nhiệt huyết & Bùng nổ',
    advice: 'Đầy lửa nhưng dễ "đốt" cạn chính mình. Bạn cần chút "Đất" (Thổ) của trầm để bình tâm lại.'
  },
  {
    id: 'tho',
    icon: Mountain,
    name: 'Thổ',
    trait: 'Vững chãi & Bao dung',
    advice: 'Đôi khi sự ổn định khiến bạn trì trệ. Hương trầm thanh thoát sẽ giúp bạn nhẹ nhõm hơn.'
  }
]

export default function BrandStory() {
  const [activeElement, setActiveElement] = useState(ELEMENTS[3]) // Mặc định là Hỏa theo bài viết

  return (
    <section className="relative w-full">
      
      {/* --- CHƯƠNG 1: THỰC TẠI ỒN ÀO (THE NOISE) --- */}
      <div className="relative min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text ồn ào */}
          <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Chúng ta của hiện tại có <span className="text-gray-400 line-through decoration-2">tất cả</span>?
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Thông báo <span className="font-mono bg-gray-200 px-2 py-0.5 rounded text-sm text-black">"ting ting"</span> không ngớt. 
                Những deadline "dí" sát nút. Một danh sách to-do dường như vô tận.
              </p>
              <p>
                Chúng ta <strong>"hustle"</strong> (cày cuốc) để chứng tỏ mình, để không bị bỏ lại phía sau. 
                Giữa những <span className="italic">on-air, online, on-time</span> đó, chúng ta quên mất cách để...
              </p>
            </div>
            
            {/* Điểm nhấn chuyển đổi */}
            <div className="pt-8">
               <span className="inline-block border-b-2 border-black pb-1 text-2xl font-bold tracking-wider uppercase">
                 OFFLINE
               </span>
               <p className="mt-2 text-sm text-gray-500">Ngắt kết nối với thế giới để kết nối với chính mình.</p>
            </div>
          </div>

          {/* Right: Hình ảnh ẩn dụ (Ví dụ: Một bức ảnh mờ ảo của đèn đường/thành phố hoặc người đang ôm đầu) */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-gray-200 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
            <Image
               src="/busy-city-life.jpg" // Hãy tìm ảnh thành phố mờ ảo hoặc người bận rộn
               alt="Cuộc sống hối hả"
               fill
               className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs text-center">
                  <p className="font-mono text-sm text-red-500 font-bold">FORGET YOURSELF</p>
                  {/* <p className="font-mono text-xs text-gray-500 mt-2">5 minutes ago</p> */}
               </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
           <ArrowDown />
        </div>
      </div>

      {/* --- CHƯƠNG 2: KHOẢNG LẶNG MỘC AN (THE ANCHOR) --- */}
      <div className="relative py-24 bg-brown-dark text-cream overflow-hidden">
        {/* Nền khói mờ ảo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           {/* Có thể đặt video khói bay làm nền ở đây */}
           <div className="w-full h-full bg-[url('/video.mp4')] bg-cover bg-center animate-pulse"></div>
        </div>

        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          {/* <source src="/videos/background-video.webm" type="video/webm" /> */}
        </video>
        
        {/* Overlay tối để text dễ đọc */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

       {/* Content - Đã làm sáng màu chữ */}
          <div className="section-container max-w-4xl mx-auto text-center relative z-10 px-4">
            <div className="mb-12">
              {/* Logo sáng hơn */}
              <Image
                src="/logo-moc-an-large.png"
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto mb-8 invert drop-shadow-lg" 
              />
              
              {/* Bỏ opacity-90, dùng text-white và drop-shadow */}
              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-white drop-shadow-md">
                Mộc An ra đời từ sự<br/> <i className="font-serif text-yellow-100">chênh vênh</i> đó.
              </h2>
              
              {/* Đổi màu nhấn từ Brass sang Yellow-300 sáng hơn */}
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white drop-shadow-sm">
                Chúng tôi tìm về Trầm, không phải như một vật phẩm tâm linh xa xôi,
                mà như một <span className="text-yellow-300 font-bold tracking-wide">"mỏ neo"</span> cho tâm trí.
              </p>
            </div>
          
            {/* Line sáng hơn */}
            <div className="h-px w-24 bg-yellow-200 mx-auto my-12 opacity-80"></div>

            {/* Bỏ opacity-70, để text rõ ràng 100% */}
            <p className="text-lg text-gray-100 max-w-2xl mx-auto font-medium">
              Chúng tôi nhận ra, thứ chúng ta thiếu không phải là cơ hội, mà là sự cân bằng.
              Và chúng tôi phát hiện ra một bí mật cổ xưa: <strong className="text-yellow-200">Ngũ Hành</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* --- CHƯƠNG 3: BẢN ĐỒ NĂNG LƯỢNG (THE MAP - Interactive) --- */}
      <div className="py-24 bg-gray-50">
        <div className="section-container max-w-6xl mx-auto px-4">
           
           <div className="text-center mb-16">
             <span className="text-sage font-bold tracking-widest uppercase text-sm">Tìm sự cân bằng của bạn</span>
             <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mt-4 mb-6">Ngũ Hành: Bản Đồ Năng Lượng</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
               Đó không phải là "số phận" cứng nhắc. Hãy chọn yếu tố bạn cảm thấy giống mình nhất lúc này để xem Mộc An có thể giúp gì.
             </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Vòng tròn chọn mệnh */}
              <div className="flex flex-wrap justify-center gap-4">
                 {ELEMENTS.map((el) => {
                   const Icon = el.icon;
                   const isActive = activeElement.id === el.id;
                   return (
                     <button
                       key={el.id}
                       onClick={() => setActiveElement(el)}
                       className={`
                         relative group flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 transition-all duration-500
                         ${isActive ? 'border-brass bg-white scale-110 shadow-xl' : 'border-brown-dark/10 bg-transparent hover:border-brass/50 hover:bg-white/50'}
                       `}
                     >
                       <Icon size={28} className={`mb-2 transition-colors ${isActive ? 'text-brass' : 'text-muted-foreground group-hover:text-brown-dark'}`} />
                       <span className={`font-serif text-lg ${isActive ? 'text-brown-dark font-bold' : 'text-muted-foreground'}`}>{el.name}</span>
                     </button>
                   )
                 })}
              </div>

              {/* Card hiển thị thông điệp */}
              <div className="relative">
                <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-4 border-brass animate-in fade-in slide-in-from-right duration-500 key={activeElement.id}">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gray-50 rounded-full text-brown-dark">
                        <activeElement.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif text-brown-dark font-bold">Bạn là {activeElement.name}?</h3>
                        <p className="text-sm text-sage font-medium uppercase tracking-wider">{activeElement.trait}</p>
                      </div>
                   </div>
                   
                   <blockquote className="text-xl text-muted-foreground italic mb-8 leading-relaxed border-l-4 border-gray-200 pl-4">
                     "{activeElement.advice}"
                   </blockquote>

                   <div className="bg-gray p-6 rounded-xl">
                      <p className="text-brown-dark font-medium mb-2">Gợi ý từ Mộc An:</p>
                      <p className="text-sm text-muted-foreground">
                        Hãy để một làn hương Trầm đúng "Mệnh" nhắc bạn dừng lại, hít thở thật sâu, và nhớ rằng: 
                        <br/>
                        <span className="text-brass font-bold text-lg mt-2 inline-block">Bạn đủ rồi. Bạn ổn rồi.</span>
                      </p>
                   </div>
                </div>
                
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brass/10 blur-3xl -z-10 rounded-full"></div>
              </div>
           </div>

        </div>
      </div>

      {/* --- KẾT: LỜI HỨA THƯƠNG HIỆU --- */}
      <div className="py-20 bg-white border-t border-border text-center">
         <h3 className="font-serif text-3xl md:text-4xl text-brown-dark mb-4">
           "Hương của Trầm, Cân bằng của Mệnh, <br/> <span className="text-brass italic">An yên của Bạn.</span>"
         </h3>
         <Image 
            src="/signature-moc-an.png" // Chữ ký hoặc triện ấn
            alt="Mộc An" 
            width={200} 
            height={60}
            className="mx-auto mt-8 opacity-60"
         />
      </div>

    </section>
  )
}