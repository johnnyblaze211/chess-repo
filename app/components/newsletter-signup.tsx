
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubscribed(true)
      setEmail('')
      toast.success('Successfully subscribed to chess tips!')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-crimson text-green-800 dark:text-green-400 mb-4">
                  Welcome to the Chess Community!
                </h3>
                <p className="text-green-700 dark:text-green-300 max-w-md mx-auto">
                  You'll receive weekly chess tips, opening strategies, and updates on new content directly in your inbox.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-chess-wood-light/10 to-chess-wood-dark/10">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold font-crimson text-chess-accent mb-4">
                Level Up Your Chess Game
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get weekly chess tips, opening strategies, and tactical puzzles delivered to your inbox. 
                Join thousands of players improving their game!
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-chess-wood-dark/20 focus:ring-amber-600 focus:border-amber-600"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white shadow-lg h-12 px-8"
                  >
                    {isLoading ? (
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
