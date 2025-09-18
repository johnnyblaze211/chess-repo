
import { Metadata } from 'next'
import StrategiesContent from './_components/strategies-content'

export const metadata: Metadata = {
  title: 'Chess Strategies Guide | Master Chess Tactics - ChessMaster Academy',
  description: 'Learn essential chess strategies for beginner and intermediate players. Master tactical patterns, positional play, and strategic thinking.',
}

export default function StrategiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StrategiesContent />
      </div>
    </div>
  )
}
