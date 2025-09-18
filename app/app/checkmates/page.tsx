
import { Metadata } from 'next'
import CheckmatesContent from './_components/checkmates-content'

export const metadata: Metadata = {
  title: 'Checkmate Patterns Guide | Master Checkmate Techniques - ChessMaster Academy',
  description: 'Learn essential checkmate patterns including Scholar\'s Mate, Back Rank Mate, Queen and King vs King, and more classic patterns.',
}

export default function CheckmatesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CheckmatesContent />
      </div>
    </div>
  )
}
