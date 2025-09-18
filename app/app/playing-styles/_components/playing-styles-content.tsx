
'use client'

import { motion } from 'framer-motion'
import { Sword, Shield, Brain, Clock, Target, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const playingStyles = [
  {
    name: 'Aggressive Style',
    description: 'Players who favor sharp, tactical positions and quick attacks on the enemy king.',
    icon: Sword,
    color: 'from-red-600 to-red-800',
    characteristics: [
      'Seeks tactical complications',
      'Prefers open positions',
      'Quick development and attack',
      'Takes calculated risks'
    ],
    famousPlayers: ['Mikhail Tal', 'Garry Kasparov', 'Hikaru Nakamura'],
    strengths: [
      { aspect: 'Tactics', value: 95 },
      { aspect: 'Attack', value: 90 },
      { aspect: 'Speed', value: 85 }
    ],
    weaknesses: [
      'May overextend in positions',
      'Can neglect defense',
      'Impatient in quiet positions'
    ],
    suitedFor: 'Players who enjoy calculating variations and creating threats',
    openings: ['Sicilian Defense', 'King\'s Indian Defense', 'Dutch Defense']
  },
  {
    name: 'Positional Style',
    description: 'Players who focus on long-term strategic advantages and gradual improvement.',
    icon: Shield,
    color: 'from-blue-600 to-blue-800',
    characteristics: [
      'Long-term planning',
      'Gradual advantage accumulation',
      'Strong endgame technique',
      'Patience in development'
    ],
    famousPlayers: ['Anatoly Karpov', 'Tigran Petrosian', 'Magnus Carlsen'],
    strengths: [
      { aspect: 'Strategy', value: 95 },
      { aspect: 'Endgames', value: 90 },
      { aspect: 'Patience', value: 95 }
    ],
    weaknesses: [
      'May miss tactical shots',
      'Slower in sharp positions',
      'Can be too cautious'
    ],
    suitedFor: 'Players who enjoy strategic planning and positional understanding',
    openings: ['Queen\'s Gambit', 'English Opening', 'Ruy López Closed']
  },
  {
    name: 'Tactical Style',
    description: 'Players who excel in calculating complex combinations and tactical sequences.',
    icon: Target,
    color: 'from-green-600 to-green-800',
    characteristics: [
      'Exceptional calculation',
      'Pattern recognition',
      'Combination finding',
      'Sharp tactical awareness'
    ],
    famousPlayers: ['Mikhail Tal', 'Alexander Alekhine', 'Judit Polgar'],
    strengths: [
      { aspect: 'Calculation', value: 95 },
      { aspect: 'Combinations', value: 90 },
      { aspect: 'Pattern Recognition', value: 85 }
    ],
    weaknesses: [
      'May overlook positional factors',
      'Time management issues',
      'Weak in quiet positions'
    ],
    suitedFor: 'Players who love solving puzzles and finding brilliant combinations',
    openings: ['Sicilian Najdorf', 'French Winawer', 'Caro-Kann Advance']
  },
  {
    name: 'Endgame-Focused Style',
    description: 'Players who excel in the final phase of the game with precise technique.',
    icon: Clock,
    color: 'from-purple-600 to-purple-800',
    characteristics: [
      'Excellent endgame knowledge',
      'Technical precision',
      'Simplified positions',
      'Resource optimization'
    ],
    famousPlayers: ['José Capablanca', 'Akiba Rubinstein', 'Magnus Carlsen'],
    strengths: [
      { aspect: 'Technique', value: 95 },
      { aspect: 'Precision', value: 90 },
      { aspect: 'Simplification', value: 85 }
    ],
    weaknesses: [
      'May avoid complex middlegames',
      'Less aggressive in openings',
      'Overly simplifies sometimes'
    ],
    suitedFor: 'Players who enjoy technical precision and converting advantages',
    openings: ['Queen\'s Gambit Declined', 'Caro-Kann Classical', 'Petrov Defense']
  }
]

const styleQuiz = [
  {
    question: 'In a complex position, I prefer to:',
    options: [
      'Calculate all tactical possibilities',
      'Look for long-term strategic plans',
      'Find forcing moves and combinations',
      'Simplify toward a favorable endgame'
    ]
  },
  {
    question: 'When my opponent makes an unexpected move, I:',
    options: [
      'Look for immediate counterplay',
      'Reassess the position calmly',
      'Search for tactical refutations',
      'Steer toward positions I understand'
    ]
  }
]

export default function PlayingStylesContent() {
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
            Chess Playing Styles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover your natural chess playing style and learn how to develop it. Every great player has a distinct 
            approach to the game - find yours and master it.
          </p>
        </motion.div>
      </div>

      {/* Playing Styles */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          The Four Main Playing Styles
        </h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {playingStyles?.map((style, index) => {
            const Icon = style?.icon || Brain
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
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 bg-gradient-to-br ${style?.color || 'from-amber-600 to-amber-800'} rounded-xl shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-crimson text-chess-accent">
                          {style?.name || 'Playing Style'}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {style?.description || 'Style description'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Characteristics */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-chess-accent">Characteristics:</h4>
                      <ul className="space-y-1">
                        {style?.characteristics?.map((char, charIndex) => (
                          <li key={charIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{char || 'Characteristic'}</span>
                          </li>
                        )) || []}
                      </ul>
                    </div>

                    {/* Strengths */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-chess-accent">Key Strengths:</h4>
                      <div className="space-y-2">
                        {style?.strengths?.map((strength, strengthIndex) => (
                          <div key={strengthIndex} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{strength?.aspect || 'Aspect'}</span>
                              <span className="font-medium">{strength?.value || 0}%</span>
                            </div>
                            <Progress 
                              value={strength?.value || 0} 
                              className="h-2"
                            />
                          </div>
                        )) || []}
                      </div>
                    </div>

                    {/* Famous Players */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent">Famous Practitioners:</h4>
                      <div className="flex flex-wrap gap-1">
                        {style?.famousPlayers?.map((player, playerIndex) => (
                          <Badge key={playerIndex} variant="outline" className="text-xs">
                            {player || 'Player'}
                          </Badge>
                        )) || []}
                      </div>
                    </div>

                    {/* Weaknesses */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent">Potential Weaknesses:</h4>
                      <ul className="space-y-1">
                        {style?.weaknesses?.slice(0, 2)?.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex} className="flex items-start space-x-2 text-xs">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{weakness || 'Weakness'}</span>
                          </li>
                        )) || []}
                      </ul>
                    </div>

                    {/* Suited For */}
                    <div className="p-3 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg">
                      <p className="text-sm">
                        <span className="font-medium text-chess-accent">Best suited for: </span>
                        <span className="text-muted-foreground">{style?.suitedFor || 'All players'}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Style Development Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-crimson text-chess-accent text-center">
              Developing Your Playing Style
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">Self-Discovery</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Analyze your favorite games to find patterns</li>
                <li>• Notice which positions you handle best</li>
                <li>• Identify your natural preferences</li>
                <li>• Study games of players with similar styles</li>
                <li>• Take note of your time management patterns</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-chess-accent">Style Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don't limit yourself to one style completely</li>
                <li>• Strengthen your weaknesses gradually</li>
                <li>• Choose openings that fit your style</li>
                <li>• Practice positions outside your comfort zone</li>
                <li>• Adapt your style based on the opponent</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Style Assessment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold font-crimson text-chess-accent text-center">
          Quick Style Assessment
        </h2>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5">
          <CardHeader>
            <CardTitle className="text-lg font-crimson text-chess-accent">
              What's Your Natural Style?
            </CardTitle>
            <CardDescription>
              Answer these questions to get insights into your playing preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {styleQuiz?.map((question, questionIndex) => (
              <div key={questionIndex} className="space-y-3">
                <h4 className="font-medium text-chess-accent">{question?.question || 'Question'}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {question?.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                      <p className="text-sm text-muted-foreground">{option || 'Option'}</p>
                    </div>
                  )) || []}
                </div>
              </div>
            ))}
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Reflect on your answers to understand your natural tendencies. Remember, great players can adapt their style when needed!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
