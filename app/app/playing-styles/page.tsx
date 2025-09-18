
import { Metadata } from 'next'
import PlayingStylesContent from './_components/playing-styles-content'

export const metadata: Metadata = {
  title: 'Chess Playing Styles Guide | Find Your Chess Style - ChessMaster Academy',
  description: 'Discover different chess playing styles: aggressive, positional, tactical, and endgame-focused. Learn which style suits you best.',
}

export default function PlayingStylesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PlayingStylesContent />
      </div>
    </div>
  )
}
