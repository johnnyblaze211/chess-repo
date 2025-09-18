
'use client'

import { motion } from 'framer-motion'
import { Crown, Trophy, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const featuredPlayers = [
  {
    name: 'Magnus Carlsen',
    title: 'Current World Champion',
    description: 'Norwegian grandmaster known for his exceptional endgame technique and intuitive style.',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=400&fit=crop',
    achievements: ['World Champion 2013-2023', 'Highest rating ever achieved (2882)', '5-time World Champion'],
    style: 'Universal'
  },
  {
    name: 'Garry Kasparov',
    title: 'Chess Legend',
    description: 'Russian grandmaster and former World Champion, famous for his aggressive attacking style.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop',
    achievements: ['World Champion 1985-2000', 'Defeated Deep Blue initially', 'Youngest ever World Champion'],
    style: 'Aggressive'
  },
  {
    name: 'Bobby Fischer',
    title: 'American Chess Legend',
    description: 'American grandmaster who broke Soviet dominance and popularized chess worldwide.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    achievements: ['World Champion 1972-1975', '11th World Champion', 'Perfect score in US Championship'],
    style: 'Precise'
  },
]

export default function FamousPlayers() {
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
            Meet the Chess Legends
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from the greatest players in chess history and discover what made them champions.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredPlayers?.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5 overflow-hidden">
              <CardHeader className="text-center pb-2">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={player?.image || ''}
                      alt={`${player?.name || 'Chess Player'} portrait`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-crimson text-chess-accent">
                  {player?.name || 'Chess Player'}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-amber-600">
                  {player?.title || 'Grandmaster'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {player?.description || 'Famous chess player'}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-medium text-chess-accent">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {player?.achievements?.slice(0, 2)?.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="flex items-start space-x-2 text-xs">
                        <div className="w-1 h-1 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement || 'Achievement'}</span>
                      </li>
                    )) || []}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-medium text-chess-accent">
                      {player?.style || 'Universal'} Style
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white shadow-lg">
          <Link href="/masters">
            <Crown className="w-5 h-5 mr-2" />
            Meet All Chess Masters
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
