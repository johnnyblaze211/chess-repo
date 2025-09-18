
'use client'

import { motion } from 'framer-motion'
import { Crown, Trophy, Star, Calendar, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const chessMasters = [
  {
    name: 'Magnus Carlsen',
    title: 'Current World Champion',
    country: 'Norway',
    peakRating: 2882,
    worldChampion: '2013-2023',
    playingStyle: 'Universal',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=400&fit=crop',
    achievements: [
      'Youngest player to reach #1 ranking (age 19)',
      'Highest rating ever achieved (2882)',
      '5-time World Champion',
      'Won World Championship in all time controls'
    ],
    famousGames: ['Carlsen vs Anand 2014 Game 6', 'Carlsen vs Caruana 2018 Tiebreak'],
    quote: 'I don\'t look at computers. I hate computers.',
    strengths: ['Endgame mastery', 'Intuitive play', 'Time management', 'Universal style'],
    contribution: 'Popularized chess globally and showed that intuition can compete with deep preparation.'
  },
  {
    name: 'Garry Kasparov',
    title: 'Chess Legend',
    country: 'Russia',
    peakRating: 2851,
    worldChampion: '1985-2000',
    playingStyle: 'Aggressive',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop',
    achievements: [
      'Youngest World Champion ever (age 22)',
      '15 years as World Champion',
      'First to defeat Deep Blue, then lost rematch',
      'Highest rated player for 255 months'
    ],
    famousGames: ['Kasparov vs Topalov 1999', 'Kasparov vs Deep Blue 1997'],
    quote: 'Chess is mental torture.',
    strengths: ['Attacking genius', 'Deep preparation', 'Fighting spirit', 'Theoretical knowledge'],
    contribution: 'Elevated chess to new heights and bridged the classical and computer eras.'
  },
  {
    name: 'Bobby Fischer',
    title: 'American Chess Legend',
    country: 'USA',
    peakRating: 2785,
    worldChampion: '1972-1975',
    playingStyle: 'Precise',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    achievements: [
      'Broke Soviet chess dominance',
      'Perfect 11-0 score in 1963 US Championship',
      'Won Candidates with incredible margins',
      'Chess boom following 1972 World Championship'
    ],
    famousGames: ['Fischer vs Spassky 1972 Game 6', 'Fischer vs Byrne 1956'],
    quote: 'Chess is life.',
    strengths: ['Perfect technique', 'Endgame mastery', 'Psychological warfare', 'Preparation'],
    contribution: 'Made chess popular in America and showed the importance of deep study and preparation.'
  },
  {
    name: 'Anatoly Karpov',
    title: 'Positional Master',
    country: 'Russia',
    peakRating: 2780,
    worldChampion: '1975-1985',
    playingStyle: 'Positional',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    achievements: [
      '12th World Champion',
      'Dominated 1970s and early 1980s',
      'Over 160 tournament victories',
      'FIDE World Champion 1993-1999'
    ],
    famousGames: ['Karpov vs Kasparov 1984 Game 27', 'Karpov vs Korchnoi 1978'],
    quote: 'The pawns are the soul of chess.',
    strengths: ['Positional understanding', 'Endgame technique', 'Strategic patience', 'Grinding wins'],
    contribution: 'Master of positional play and showed the power of gradual advantage accumulation.'
  },
  {
    name: 'Mikhail Tal',
    title: 'The Magician from Riga',
    country: 'Latvia',
    peakRating: 2705,
    worldChampion: '1960-1961',
    playingStyle: 'Tactical',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    achievements: [
      '8th World Champion',
      'Youngest World Champion at the time (age 23)',
      'Master of tactical combinations',
      'Legendary attacking games'
    ],
    famousGames: ['Tal vs Botvinnik 1960 Game 6', 'Tal vs NN Blitz'],
    quote: 'You must take your opponent into a deep dark forest where 2+2=5.',
    strengths: ['Tactical vision', 'Combinative play', 'Intuitive sacrifices', 'Creative genius'],
    contribution: 'Showed that chess can be an art form through brilliant tactical combinations.'
  },
  {
    name: 'José Capablanca',
    title: 'Chess Machine',
    country: 'Cuba',
    peakRating: 2725,
    worldChampion: '1921-1927',
    playingStyle: 'Natural',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop',
    achievements: [
      '3rd World Champion',
      'Undefeated for 8 years (1916-1924)',
      'Natural chess genius',
      'Perfect endgame technique'
    ],
    famousGames: ['Capablanca vs Marshall 1909', 'Capablanca vs Alekhine 1927'],
    quote: 'I see only one move ahead, but it is always the correct one.',
    strengths: ['Natural talent', 'Endgame mastery', 'Simple play', 'Intuitive understanding'],
    contribution: 'Proved that natural talent and simplicity can dominate complex preparation.'
  },
  {
    name: 'Alexander Alekhine',
    title: 'Attacking Artist',
    country: 'Russia/France',
    peakRating: 2690,
    worldChampion: '1927-1935, 1937-1946',
    playingStyle: 'Aggressive',
    image: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=400&fit=crop',
    achievements: [
      '4th World Champion',
      'Only player to die as reigning World Champion',
      'Brilliant attacking games',
      'Author of great chess books'
    ],
    famousGames: ['Alekhine vs Bogoljubov 1929', 'Alekhine\'s Defense games'],
    quote: 'Chess for me is not a game, but an art.',
    strengths: ['Attacking brilliance', 'Deep combinations', 'Fighting spirit', 'Theoretical contributions'],
    contribution: 'Advanced attacking chess theory and created some of the most beautiful games ever played.'
  },
  {
    name: 'Viswanathan Anand',
    title: 'Lightning Kid',
    country: 'India',
    peakRating: 2817,
    worldChampion: '2007-2013',
    playingStyle: 'Universal',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop',
    achievements: [
      '15th World Champion',
      'First Asian World Champion',
      'Speed chess legend',
      '5-time World Champion'
    ],
    famousGames: ['Anand vs Gelfand 2012', 'Anand vs Kramnik 2008'],
    quote: 'Confidence is very important—even pretending to be confident.',
    strengths: ['Fast calculation', 'Universal style', 'Tournament fighting', 'Adaptability'],
    contribution: 'Brought chess to new audiences in Asia and showed the power of rapid calculation.'
  }
]

const eraComparison = [
  {
    era: 'Classical Era',
    period: '1886-1946',
    characteristics: ['Positional understanding', 'Strategic planning', 'Classical principles'],
    representatives: ['Steinitz', 'Capablanca', 'Alekhine']
  },
  {
    era: 'Soviet Dominance',
    period: '1948-1972',
    characteristics: ['Scientific approach', 'Opening theory', 'State support'],
    representatives: ['Botvinnik', 'Petrosian', 'Spassky']
  },
  {
    era: 'Fischer Era',
    period: '1972-1975',
    characteristics: ['Individual brilliance', 'Deep preparation', 'American chess boom'],
    representatives: ['Fischer']
  },
  {
    era: 'Computer Era',
    period: '1985-2000',
    characteristics: ['Computer preparation', 'Opening theory expansion', 'Tactical precision'],
    representatives: ['Kasparov', 'Kramnik']
  },
  {
    era: 'Modern Era',
    period: '2000-present',
    characteristics: ['Engine analysis', 'Global competition', 'Online training'],
    representatives: ['Anand', 'Carlsen', 'Caruana']
  }
]

export default function MastersContent() {
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
            Chess Masters & Legends
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the legendary chess players who shaped the game we love today. Learn from their styles, 
            study their greatest games, and understand what made them champions.
          </p>
        </motion.div>
      </div>

      {/* Chess Masters */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Greatest Chess Players of All Time
        </h2>
        
        <div className="space-y-8">
          {chessMasters?.map((master, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-chess-wood-light/5 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                  {/* Player Photo and Basic Info */}
                  <div className="text-center space-y-4">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={master?.image || ''}
                          alt={`${master?.name || 'Chess Master'} portrait`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-crimson text-chess-accent">
                        {master?.name || 'Chess Master'}
                      </h3>
                      <p className="text-sm text-amber-600 font-medium">{master?.title || 'Grandmaster'}</p>
                      <div className="flex justify-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {master?.country || 'Unknown'}
                        </Badge>
                        <Badge 
                          variant={master?.playingStyle === 'Aggressive' ? 'destructive' : 
                                 master?.playingStyle === 'Positional' ? 'secondary' : 'default'}
                          className="text-xs"
                        >
                          {master?.playingStyle || 'Universal'}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Stats and Achievements */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-chess-accent">Peak Rating</span>
                        </div>
                        <p className="text-2xl font-bold text-chess-accent">{master?.peakRating || 'N/A'}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-chess-accent">World Champion</span>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">{master?.worldChampion || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent flex items-center">
                        <Star className="w-4 h-4 mr-2 text-amber-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {master?.achievements?.slice(0, 3)?.map((achievement, achieveIndex) => (
                          <li key={achieveIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement || 'Achievement'}</span>
                          </li>
                        )) || []}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent flex items-center">
                        <Target className="w-4 h-4 mr-2 text-amber-600" />
                        Strengths
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {master?.strengths?.slice(0, 4)?.map((strength, strengthIndex) => (
                          <Badge key={strengthIndex} variant="outline" className="text-xs">
                            {strength || 'Strength'}
                          </Badge>
                        )) || []}
                      </div>
                    </div>
                  </div>

                  {/* Quote and Contribution */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg">
                      <p className="text-sm italic text-chess-accent text-center">
                        "{master?.quote || 'Chess quote'}"
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent">Legacy</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {master?.contribution || 'Chess contribution'}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-chess-accent">Famous Games</h4>
                      <ul className="space-y-1">
                        {master?.famousGames?.slice(0, 2)?.map((game, gameIndex) => (
                          <li key={gameIndex} className="text-xs text-muted-foreground">
                            • {game || 'Famous game'}
                          </li>
                        )) || []}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chess Eras */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold font-crimson text-chess-accent text-center">
          Evolution of Chess Through the Ages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eraComparison?.slice(0, 5)?.map((era, index) => (
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
                    {era?.era || 'Chess Era'}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {era?.period || 'Time period'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-chess-accent">Characteristics:</h4>
                    <ul className="space-y-1">
                      {era?.characteristics?.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{char || 'Characteristic'}</span>
                        </li>
                      )) || []}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-chess-accent">Key Players:</h4>
                    <div className="flex flex-wrap gap-1">
                      {era?.representatives?.map((player, playerIndex) => (
                        <Badge key={playerIndex} variant="outline" className="text-xs">
                          {player || 'Player'}
                        </Badge>
                      )) || []}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
