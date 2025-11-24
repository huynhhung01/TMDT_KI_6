'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Link as LinkIcon,
  Bookmark,
  ChevronRight
} from 'lucide-react'
import { GUIDES } from '@/lib/data'
import Header from '@/components/header'

// Hàm render nội dung giả lập Markdown đơn giản
const renderContent = (content: string) => {
  const sections = content.split('\n').filter(line => line.trim() !== '');
  
  return sections.map((line, index) => {
    // Xử lý Tiêu đề (##)
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} id={`section-${index}`} className="font-serif text-2xl md:text-3xl text-brown-dark mt-10 mb-6 font-bold scroll-mt-24">
          {line.replace('## ', '')}
        </h2>
      );
    }
    // Xử lý Trích dẫn (>)
    if (line.startsWith('> ')) {
      return (
        <blockquote key={index} className="border-l-4 border-brass pl-6 italic text-xl text-brown-dark/80 my-8 bg-cream/30 py-4 pr-4 rounded-r-lg">
          {line.replace('> ', '').replace(/"/g, '')}
        </blockquote>
      );
    }
    // Xử lý List item (-)
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="list-disc ml-6 mb-3 text-muted-foreground pl-2 marker:text-brass">
          {line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')} 
        </li>
      );
    }
    // Xử lý đoạn văn thường (có in đậm **)
    return (
      <p key={index} className="mb-6 text-lg leading-loose text-muted-foreground text-justify" 
         dangerouslySetInnerHTML={{ 
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brown-dark font-semibold">$1</strong>') 
         }} 
      />
    );
  });
};

// Hàm tạo Mục lục tự động từ content
const getTableOfContents = (content: string) => {
  return content.split('\n')
    .filter(line => line.startsWith('## '))
    .map((line, index) => ({
      id: `section-${content.split('\n').indexOf(line)}`, // Map lại index gốc để scroll đúng
      text: line.replace('## ', '')
    }));
};

export default function GuideDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id
  const guide = GUIDES.find(g => g.id === parseInt(id))

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground">Bài viết không tìm thấy</p>
      </div>
    )
  }

  // Tìm các bài viết khác để gợi ý (trừ bài hiện tại)
  const relatedGuides = GUIDES.filter(g => g.id !== guide.id).slice(0, 2);
  const tableOfContents = getTableOfContents(guide.content);

  const formattedDate = new Date(guide.date).toLocaleDateString('vi-VN', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
        <Header/>
    <div className="min-h-screen bg-[#F5F2EA] pt-28 pb-20 animate-in fade-in duration-700">
      
      {/* Progress Bar (Optional - giả lập) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-border">
        <div className="h-full bg-brass w-1/3"></div> 
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <nav className="flex items-center justify-between mb-12">
          <Link href="/#guide" className="inline-flex items-center gap-2 text-muted-foreground hover:text-brass transition-colors font-medium group">
            <div className="p-2 rounded-full bg-cream group-hover:bg-brass group-hover:text-white transition-colors">
               <ArrowLeft size={16} />
            </div>
            <span>Quay lại Cẩm Nang</span>
          </Link>
          
          {/* Social Share (Mobile hidden) */}
          <div className="hidden md:flex items-center gap-2">
             <button className="p-2 hover:bg-cream rounded-full transition text-muted-foreground hover:text-blue-600"><Facebook size={20} /></button>
             <button className="p-2 hover:bg-cream rounded-full transition text-muted-foreground hover:text-black"><span className="font-bold text-sm">X</span></button>
             <button className="p-2 hover:bg-cream rounded-full transition text-muted-foreground hover:text-brass"><LinkIcon size={20} /></button>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN: CONTENT (8 cols) --- */}
          <div className="lg:col-span-8">
            <article>
              {/* Header */}
              <header className="mb-10">
                <div className="flex gap-2 mb-6">
                   {guide.tags?.map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-full bg-brass/10 text-brass text-xs font-bold uppercase tracking-wider">
                       {tag}
                     </span>
                   ))}
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark mb-8 leading-tight font-bold">
                  {guide.title}
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground text-sm md:text-base border-b border-border pb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                       {/* Avatar placeholder */}
                       <div className="w-full h-full bg-brass/20 flex items-center justify-center text-brass font-bold">{guide.author.charAt(0)}</div>
                    </div>
                    <div>
                       <p className="font-medium text-brown-dark leading-none">{guide.author}</p>
                       <p className="text-xs mt-1">Tác giả</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border mx-2"></div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-brass" />
                    <time>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-brass" />
                    <span>{guide.readTime || '5 phút đọc'}</span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
              </div>

              {/* Main Content Rendered */}
              <div className="prose prose-lg prose-brown max-w-none">
                 {/* Đoạn Sapo (Excerpt) */}
                 <p className="text-xl md:text-2xl font-serif italic text-brown-dark/80 mb-10 leading-relaxed border-l-4 border-brass/50 pl-6">
                    {guide.excerpt}
                 </p>
                 
                 {/* Nội dung chính */}
                 {renderContent(guide.content)}
              </div>

              {/* Post Footer */}
              <div className="mt-16 pt-8 border-t border-border">
                 <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-cream/20 p-6 rounded-xl">
                    <div>
                       <h4 className="font-serif text-lg text-brown-dark font-bold">Thấy bài viết hữu ích?</h4>
                       <p className="text-muted-foreground text-sm">Chia sẻ ngay với bạn bè để lan tỏa kiến thức.</p>
                    </div>
                    <div className="flex gap-3">
                       <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg hover:border-brass text-brown-dark transition shadow-sm">
                          <Share2 size={18} /> Chia sẻ
                       </button>
                       <button className="flex items-center gap-2 px-4 py-2 bg-brown-dark text-white rounded-lg hover:bg-brass transition shadow-md">
                          <Bookmark size={18} /> Lưu bài
                       </button>
                    </div>
                 </div>
              </div>
            </article>
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR (4 cols) --- */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Sticky Wrapper */}
            <div className="sticky top-32 space-y-10">
              
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-xl text-brown-dark mb-4 font-bold flex items-center gap-2">
                    <span className="w-1 h-6 bg-brass rounded-full"></span>
                    Mục Lục
                  </h3>
                  <ul className="space-y-3">
                    {tableOfContents.map((item, idx) => (
                      <li key={idx}>
                        <a 
                          href={`#${item.id}`} 
                          className="text-muted-foreground hover:text-brass hover:translate-x-1 transition-all block text-sm py-1 border-b border-transparent hover:border-brass/20"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Guides */}
              <div className="bg-cream/30 p-6 rounded-2xl border border-border/50">
                 <h3 className="font-serif text-xl text-brown-dark mb-6 font-bold">Bài Viết Liên Quan</h3>
                 <div className="space-y-6">
                    {relatedGuides.map(related => (
                       <Link href={`/guides/${related.id}`} key={related.id} className="group block">
                          <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3">
                             <Image 
                               src={related.image || "/placeholder.svg"} 
                               alt={related.title} 
                               fill 
                               className="object-cover group-hover:scale-110 transition-transform duration-500"
                             />
                          </div>
                          <h4 className="font-serif font-bold text-brown-dark group-hover:text-brass transition-colors line-clamp-2">
                             {related.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                             <Calendar size={12} />
                             {new Date(related.date).toLocaleDateString('vi-VN')}
                          </div>
                       </Link>
                    ))}
                 </div>
                 
                 <Link href="/#guide" className="flex items-center justify-center gap-2 mt-6 text-sm font-bold text-brass hover:underline uppercase tracking-wide">
                    Xem tất cả <ChevronRight size={16} />
                 </Link>
              </div>

              {/* Newsletter / Promo Box */}
              <div className="bg-brown-dark text-white p-8 rounded-2xl text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brass rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="font-serif text-2xl mb-4 relative z-10">Trải Nghiệm Trầm Hương?</h3>
                 <p className="text-white/80 mb-6 text-sm relative z-10">Nhận ngay ưu đãi 10% cho đơn hàng đầu tiên khi đăng ký thành viên.</p>
                 <Link href="/#products" className="block w-full py-3 bg-white text-brown-dark font-bold rounded-lg hover:bg-brass hover:text-white transition-colors relative z-10">
                    Mua Ngay
                 </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}