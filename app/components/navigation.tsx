
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/openings', label: 'Openings' },
  { href: '/strategies', label: 'Strategies' },
  { href: '/checkmates', label: 'Checkmates' },
  { href: '/playing-styles', label: 'Playing Styles' },
  { href: '/masters', label: 'Chess Masters' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'chess-nav shadow-lg border-b border-chess-border' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 gradient-chess-board rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 hover-chess-lift">
              <Crown className="w-6 h-6 text-chess-gold" />
            </div>
            <span className="text-xl font-bold font-crimson text-chess-accent">
              ChessMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems?.map((item) => (
              <Link
                key={item?.href}
                href={item?.href || '/'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 chess-card-pattern ${
                  pathname === item?.href
                    ? 'bg-chess-square-dark/10 text-chess-accent shadow-sm border border-chess-border'
                    : 'text-foreground/80 hover:bg-chess-square-light/10 hover:text-chess-accent hover:border hover:border-chess-border'
                }`}
              >
                {item?.label || 'Menu Item'}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="chess-card-pattern"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-chess-border chess-nav chess-card-pattern"
            >
              <div className="py-4 space-y-2">
                {navItems?.map((item) => (
                  <Link
                    key={item?.href}
                    href={item?.href || '/'}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 chess-card-pattern ${
                      pathname === item?.href
                        ? 'bg-chess-square-dark/10 text-chess-accent border border-chess-border'
                        : 'text-foreground/80 hover:bg-chess-square-light/10 hover:text-chess-accent hover:border hover:border-chess-border'
                    }`}
                  >
                    {item?.label || 'Menu Item'}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
