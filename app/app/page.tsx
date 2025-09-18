
import Hero from '@/components/hero'
import FeaturedContent from '@/components/featured-content'
import ChessBoard from '@/components/chess-board'
import QuickGuides from '@/components/quick-guides'
import FamousPlayers from '@/components/famous-players'
import NewsletterSignup from '@/components/newsletter-signup'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-20">
        <FeaturedContent />
        <ChessBoard />
        <QuickGuides />
        <FamousPlayers />
        <NewsletterSignup />
      </div>
    </div>
  )
}
