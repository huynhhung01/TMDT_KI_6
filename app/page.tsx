import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import BrandStory from '@/components/brand-story'
import PainPointsSection from '@/components/pain-points-section'
import SolutionSection from '@/components/solution-section'
import TrustSection from '@/components/trust-section'
import ProductsSection from '@/components/products-section'
import ReviewsSection from '@/components/reviews-section'
import PromoSection from '@/components/promo-section'
import CategoriesSection from '@/components/categories-section'
import GuideSection from '@/components/guide-section'
import SocialProofSection from '@/components/social-proof-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-cream">
      <Header />
      <HeroSection />
      <BrandStory />
      <PainPointsSection />
      <SolutionSection />
      <TrustSection />
      <ProductsSection />
      <ReviewsSection />
      <PromoSection />
      <CategoriesSection />
      <GuideSection />
      {/* <SocialProofSection /> */}
      <Footer />
    </main>
  )
}
