
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Brain, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const guides = [
  {
    title: 'Opening Principles',
    description: 'Control the center, develop pieces, castle early',
    icon: BookOpen,
    tips: ['Control central squares e4, e5, d4, d5', 'Develop knights before bishops', 'Castle within 10 moves'],
    href: '/openings'
  },
  {
    title: 'Tactical Patterns',
    description: 'Pins, forks, skewers, and discovered attacks',
    icon: Target,
    tips: ['Look for undefended pieces', 'Check for tactical motifs', 'Calculate forcing moves first'],
    href: '/strategies'
  },
  {
    title: 'Endgame Basics',
    description: 'Essential endgame knowledge for every player',
    icon: Brain,
    tips: ['Activate your king in endgames', 'Push passed pawns', 'Learn basic checkmate patterns'],
    href: '/checkmates'
  },
  {
    title: 'Time Management',
    description: 'Make the most of your thinking time',
    icon: Zap,
    tips: ['Spend time on critical positions', 'Trust your instincts in simple positions', 'Save time for the endgame'],
    href: '/playing-styles'
  },
]

export default function QuickGuides() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-crimson text-chess-accent mb-4">
            Quick Learning Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential tips and principles every chess player should know, broken down into digestible insights.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guides?.map((guide, index) => {
          const Icon = guide?.icon || BookOpen
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-crimson text-chess-accent">
                        {guide?.title || 'Guide'}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {guide?.description || 'Guide description'}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {guide?.tips?.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{tip || 'Tip'}</span>
                      </li>
                    )) || []}
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full border-chess-wood-dark/20 hover:bg-chess-wood-light/20">
                    <Link href={guide?.href || '/'}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
