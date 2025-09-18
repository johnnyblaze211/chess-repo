
'use client'

import { motion } from 'framer-motion'
import { Brain, Target, Shield, Zap, Eye, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const strategies = [
  {
    title: 'Control the Center',
    description: 'The center squares (e4, e5, d4, d5) are the most important squares on the board.',
    icon: Target,
    level: 'Beginner',
    concepts: [
      'Place pawns on central squares early',
      'Support central pawns with pieces',
      'Challenge opponent\'s central control',
      'Use central control for piece mobility'
    ]
  },
  {
    title: 'Piece Development',
    description: 'Develop your pieces quickly and efficiently to create threats and defend your position.',
    icon: Zap,
    level: 'Beginner',
    concepts: [
      'Knights before bishops',
      'Don\'t move the same piece twice',
      'Castle early for king safety',
      'Connect your rooks'
    ]
  },
  {
    title: 'King Safety',
    description: 'Keep your king safe throughout the game with proper castling and pawn shelter.',
    icon: Shield,
    level: 'Beginner',
    concepts: [
      'Castle within the first 10 moves',
      'Keep pawns in front of castled king',
      'Don\'t expose your king unnecessarily',
      'Create escape squares for your king'
    ]
  },
  {
    title: 'Tactical Awareness',
    description: 'Look for tactical opportunities in every position to gain material or positional advantage.',
    icon: Eye,
    level: 'Intermediate',
    concepts: [
      'Check for pins and forks',
      'Look for discovered attacks',
      'Calculate forcing moves first',
      'Don\'t miss opponent\'s threats'
    ]
  },
  {
    title: 'Pawn Structure',
    description: 'Understanding pawn structure is crucial for long-term strategic planning.',
    icon: Brain,
    level: 'Intermediate',
    concepts: [
      'Avoid creating weak pawns',
      'Use pawn chains effectively',
      'Create passed pawns in endgames',
      'Understand pawn breaks'
    ]
  },
  {
    title: 'Time Management',
    description: 'Effective time management can make the difference between winning and losing.',
    icon: Clock,
    level: 'Advanced',
    concepts: [
      'Spend time on critical positions',
      'Use intuition for simple moves',
      'Save time for complex endgames',
      'Don\'t panic in time trouble'
    ]
  }
]

const tacticalPatterns = [
  {
    name: 'Pin',
    description: 'A piece cannot move because it would expose a more valuable piece behind it.',
    example: 'Bishop pins knight to king',
    frequency: 'Very Common'
  },
  {
    name: 'Fork',
    description: 'One piece attacks two or more enemy pieces simultaneously.',
    example: 'Knight fork attacking king and queen',
    frequency: 'Very Common'
  },
  {
    name: 'Skewer',
    description: 'A valuable piece is forced to move, exposing a less valuable piece behind it.',
    example: 'Rook skewers king and rook',
    frequency: 'Common'
  },
  {
    name: 'Discovered Attack',
    description: 'Moving one piece reveals an attack from another piece behind it.',
    example: 'Knight moves, revealing bishop attack',
    frequency: 'Common'
  },
  {
    name: 'Double Attack',
    description: 'Attacking two targets simultaneously with different pieces.',
    example: 'Queen and bishop attack different pieces',
    frequency: 'Common'
  },
  {
    name: 'Deflection',
    description: 'Forcing a piece away from defending an important square or piece.',
    example: 'Sacrifice forces defender away',
    frequency: 'Moderate'
  }
]

export default function StrategiesContent() {
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
            Chess Strategies & Tactics
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the essential strategic concepts and tactical patterns that separate good players from great ones. 
            Learn how to think strategically and spot tactical opportunities.
          </p>
        </motion.div>
      </div>

      {/* Core Strategies */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Essential Chess Strategies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies?.map((strategy, index) => {
            const Icon = strategy?.icon || Brain
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
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge 
                        variant={strategy?.level === 'Beginner' ? 'default' : 
                               strategy?.level === 'Intermediate' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {strategy?.level || 'Beginner'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-crimson text-chess-accent">
                      {strategy?.title || 'Strategy'}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {strategy?.description || 'Strategy description'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy?.concepts?.map((concept, conceptIndex) => (
                        <li key={conceptIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{concept || 'Concept'}</span>
                        </li>
                      )) || []}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Tactical Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Common Tactical Patterns
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tacticalPatterns?.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-crimson text-chess-accent">
                      {pattern?.name || 'Pattern'}
                    </CardTitle>
                    <Badge 
                      variant={pattern?.frequency === 'Very Common' ? 'default' : 
                             pattern?.frequency === 'Common' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {pattern?.frequency || 'Common'}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {pattern?.description || 'Pattern description'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <p className="text-sm text-chess-accent font-medium">
                      Example: {pattern?.example || 'Pattern example'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Strategic Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-crimson text-chess-accent text-center">
              Master's Strategic Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">For Beginners</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Always check if your move leaves pieces undefended</li>
                <li>• Look for your opponent's threats before making your move</li>
                <li>• Try to improve your worst-placed piece</li>
                <li>• Don't trade pieces without a reason</li>
                <li>• Control more space gradually</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">For Intermediate Players</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Study pawn structures and typical plans</li>
                <li>• Learn to evaluate positions objectively</li>
                <li>• Practice calculating variations deeply</li>
                <li>• Understand when to trade pieces</li>
                <li>• Master basic endgame principles</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
