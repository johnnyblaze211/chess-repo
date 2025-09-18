
'use client'

import { motion } from 'framer-motion'
import { Target, Crown, Zap, Shield, Clock, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const checkmatePatterns = [
  {
    name: "Scholar's Mate",
    moves: "1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6? 4.Qxf7#",
    description: "The fastest checkmate for beginners to learn, targeting the weak f7 square.",
    difficulty: "Beginner",
    moveCount: "4 moves",
    icon: Zap,
    keyPoints: [
      "Targets the f7 square early",
      "Works against unprepared opponents",
      "Easy to defend once you know it",
      "Good for teaching opening principles"
    ],
    defense: "Develop knights and defend f7 with Nf6"
  },
  {
    name: "Back Rank Mate",
    moves: "R-8th rank with enemy king trapped",
    description: "One of the most common checkmate patterns where the enemy king is trapped on the back rank.",
    difficulty: "Beginner",
    moveCount: "Endgame",
    icon: Target,
    keyPoints: [
      "Enemy king trapped by own pawns",
      "Rook or queen delivers mate on 8th rank",
      "Very common in practical games",
      "Learn to recognize and create"
    ],
    defense: "Give your king an escape square (h2, g2, etc.)"
  },
  {
    name: "Queen and King vs King",
    moves: "Drive enemy king to edge with queen and king",
    description: "Essential endgame technique where queen and king coordinate to checkmate lone king.",
    difficulty: "Beginner",
    moveCount: "10-15 moves",
    icon: Crown,
    keyPoints: [
      "Use queen to cut off king's escape",
      "Bring your king up to help",
      "Drive enemy king to the edge",
      "Avoid stalemate tricks"
    ],
    defense: "Stay in center as long as possible, avoid corners"
  },
  {
    name: "Rook and King vs King",
    moves: "Cut off king, then checkmate on edge",
    description: "Fundamental rook endgame that every player must master for competitive play.",
    difficulty: "Intermediate",
    moveCount: "15-20 moves",
    icon: Shield,
    keyPoints: [
      "Use rook to cut off enemy king",
      "Coordinate king and rook",
      "Force king to the edge",
      "Learn the box technique"
    ],
    defense: "Stay centralized, make it difficult"
  },
  {
    name: "Two Bishops Mate",
    moves: "Force king to corner with bishop pair",
    description: "Advanced technique using two bishops to drive the enemy king to a corner.",
    difficulty: "Advanced",
    moveCount: "20-30 moves",
    icon: Star,
    keyPoints: [
      "More complex than queen mate",
      "Requires precise coordination",
      "Drive king to correct colored corner",
      "Pattern recognition is key"
    ],
    defense: "Avoid corners, stay on wrong colored squares"
  },
  {
    name: "Smothered Mate",
    moves: "Knight delivers mate to smothered king",
    description: "Beautiful tactical pattern where a knight delivers checkmate to a king trapped by its own pieces.",
    difficulty: "Advanced",
    moveCount: "Tactical",
    icon: Clock,
    keyPoints: [
      "King trapped by own pieces",
      "Knight's unique movement pattern",
      "Often involves sacrifices",
      "Spectacular when it works"
    ],
    defense: "Don't let your king get too boxed in"
  },
  {
    name: "Anastasia's Mate",
    moves: "Knight and rook coordinate for mate",
    description: "Classic mating pattern with knight and rook working together against a castled king.",
    difficulty: "Advanced",
    moveCount: "Tactical",
    icon: Target,
    keyPoints: [
      "Attacks castled king position",
      "Knight blocks escape squares",
      "Rook delivers the checkmate",
      "Common in practical games"
    ],
    defense: "Keep escape squares open for your king"
  }
]

const endgameBasics = [
  {
    title: "King Activity",
    description: "In endgames, the king transforms from a liability to a powerful piece.",
    tips: [
      "Centralize your king",
      "Use king to support pawns",
      "King and pawn vs King",
      "Opposition concept"
    ]
  },
  {
    title: "Pawn Endgames",
    description: "Understanding pawn endgames is crucial for every chess player.",
    tips: [
      "Learn the square rule",
      "Understand breakthrough",
      "Master king and pawn vs king",
      "Know key squares concept"
    ]
  },
  {
    title: "Basic Checkmates",
    description: "Master the fundamental checkmate patterns to convert winning positions.",
    tips: [
      "Queen and king vs king",
      "Rook and king vs king",
      "Two bishops checkmate",
      "Avoid 50-move rule draws"
    ]
  }
]

export default function CheckmatesContent() {
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
            Master Checkmate Patterns
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn the essential checkmate patterns that every chess player should know. From quick tactical strikes 
            to fundamental endgame techniques, master the art of delivering checkmate.
          </p>
        </motion.div>
      </div>

      {/* Essential Checkmate Patterns */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Essential Checkmate Patterns
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {checkmatePatterns?.map((pattern, index) => {
            const Icon = pattern?.icon || Target
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
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-crimson text-chess-accent">
                            {pattern?.name || 'Checkmate Pattern'}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge 
                              variant={pattern?.difficulty === 'Beginner' ? 'default' : 
                                     pattern?.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                              className="text-xs"
                            >
                              {pattern?.difficulty || 'Beginner'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {pattern?.moveCount || 'N/A'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {pattern?.description || 'Checkmate pattern description'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <p className="text-sm font-mono text-chess-accent">
                        {pattern?.moves || 'Move sequence'}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-chess-accent">Key Points:</h4>
                      <ul className="space-y-1">
                        {pattern?.keyPoints?.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{point || 'Key point'}</span>
                          </li>
                        )) || []}
                      </ul>
                    </div>

                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <p className="text-sm">
                        <span className="font-medium text-chess-accent">Defense: </span>
                        <span className="text-muted-foreground">{pattern?.defense || 'Defensive tip'}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Endgame Essentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Endgame Essentials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {endgameBasics?.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5">
                <CardHeader>
                  <CardTitle className="text-lg font-crimson text-chess-accent">
                    {topic?.title || 'Endgame Topic'}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {topic?.description || 'Topic description'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic?.tips?.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{tip || 'Tip'}</span>
                      </li>
                    )) || []}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Practice Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-crimson text-chess-accent text-center">
              How to Practice Checkmate Patterns
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">Study Method</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start with basic patterns (Scholar's Mate, Back Rank)</li>
                <li>• Practice each pattern until it becomes automatic</li>
                <li>• Use tactics trainers online for repetition</li>
                <li>• Study games where these patterns occur</li>
                <li>• Practice both sides of each pattern</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">Practical Application</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Look for checkmate opportunities in every game</li>
                <li>• Don't just win material, look for mate</li>
                <li>• Practice endgame positions against computer</li>
                <li>• Time yourself on basic checkmates</li>
                <li>• Understand the defensive side too</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
