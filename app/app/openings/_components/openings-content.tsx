
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const openings = [
  {
    name: 'Sicilian Defense',
    notation: '1...c5',
    description: 'The most popular and aggressive defense against 1.e4, offering Black excellent winning chances and complex positions.',
    difficulty: 'Intermediate',
    popularity: '95%',
    keyIdeas: [
      'Control the d4 square',
      'Counterplay on the queenside',
      'Sharp tactical positions',
      'Excellent for ambitious players'
    ],
    variations: ['Najdorf', 'Dragon', 'Accelerated Dragon', 'Scheveningen']
  },
  {
    name: "Queen's Gambit",
    notation: '1.d4 d5 2.c4',
    description: 'A classical opening that offers White excellent central control and long-term strategic advantages.',
    difficulty: 'Beginner',
    popularity: '88%',
    keyIdeas: [
      'Control the center with pawns',
      'Rapid piece development',
      'Pressure on Black\'s position',
      'Sound positional foundation'
    ],
    variations: ['Accepted', 'Declined', 'Slav Defense', 'Semi-Slav']
  },
  {
    name: 'King\'s Indian Defense',
    notation: '1.d4 Nf6 2.c4 g6',
    description: 'A hypermodern defense that allows White central control while preparing a kingside attack.',
    difficulty: 'Advanced',
    popularity: '82%',
    keyIdeas: [
      'Fianchetto the bishop',
      'Castle kingside early',
      'Launch a pawn storm attack',
      'Dynamic piece play'
    ],
    variations: ['Classical', 'Four Pawns Attack', 'Sämisch', 'Averbakh']
  },
  {
    name: 'Ruy López',
    notation: '1.e4 e5 2.Nf3 Nc6 3.Bb5',
    description: 'One of the oldest and most respected openings, named after Spanish priest Ruy López de Segura.',
    difficulty: 'Intermediate',
    popularity: '90%',
    keyIdeas: [
      'Pressure on Black\'s center',
      'Develop with tempo',
      'Long-term strategic advantage',
      'Rich theoretical content'
    ],
    variations: ['Closed Variation', 'Open Variation', 'Berlin Defense', 'Exchange Variation']
  },
  {
    name: 'French Defense',
    notation: '1.e4 e6',
    description: 'A solid defense that leads to strategic battles and gives Black a strong pawn chain.',
    difficulty: 'Intermediate',
    popularity: '75%',
    keyIdeas: [
      'Solid pawn structure',
      'Strategic complexity',
      'Bishop development challenges',
      'Counterplay opportunities'
    ],
    variations: ['Winawer', 'Classical', 'Advance', 'Exchange']
  },
  {
    name: 'Caro-Kann Defense',
    notation: '1.e4 c6',
    description: 'A reliable defense that provides Black with a solid position and good piece development.',
    difficulty: 'Beginner',
    popularity: '78%',
    keyIdeas: [
      'Solid pawn structure',
      'Easy piece development',
      'Less tactical complications',
      'Suitable for positional players'
    ],
    variations: ['Classical', 'Advance', 'Exchange', 'Panov-Botvinnik']
  }
]

export default function OpeningsContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-crimson text-chess-accent mb-4">
            Master Chess Openings
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn the most important chess openings used by masters worldwide. From beginner-friendly systems 
            to complex tactical battles, discover the opening that matches your style.
          </p>
        </motion.div>
      </div>

      {/* Opening Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-crimson text-chess-accent flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-amber-600" />
              Universal Opening Principles
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-chess-accent">Control the Center</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Occupy e4, e5, d4, d5 squares with pawns</li>
                <li>• Control central squares with pieces</li>
                <li>• Prevent opponent's central control</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-chess-accent">Develop Pieces</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Knights before bishops</li>
                <li>• Don't move the same piece twice</li>
                <li>• Develop with purpose and tempo</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-chess-accent">King Safety</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Castle early (within first 10 moves)</li>
                <li>• Don't weaken the king position</li>
                <li>• Create a safe haven for your king</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-chess-accent">Don't...</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bring your queen out too early</li>
                <li>• Make too many pawn moves</li>
                <li>• Neglect development for tactics</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Popular Openings */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Popular Chess Openings
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openings?.map((opening, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-crimson text-chess-accent">
                        {opening?.name || 'Opening'}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <code className="px-2 py-1 bg-chess-wood-light/20 rounded text-sm font-mono">
                          {opening?.notation || '1.e4'}
                        </code>
                        <Badge 
                          variant={opening?.difficulty === 'Beginner' ? 'default' : 
                                 opening?.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {opening?.difficulty || 'Beginner'}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4" />
                        <span>{opening?.popularity || '0%'}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {opening?.description || 'Opening description'}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-chess-accent">Key Ideas</span>
                    </div>
                    <ul className="space-y-1">
                      {opening?.keyIdeas?.map((idea, ideaIndex) => (
                        <li key={ideaIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{idea || 'Key idea'}</span>
                        </li>
                      )) || []}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-chess-accent">Main Variations</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {opening?.variations?.map((variation, varIndex) => (
                        <Badge key={varIndex} variant="outline" className="text-xs">
                          {variation || 'Variation'}
                        </Badge>
                      )) || []}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
