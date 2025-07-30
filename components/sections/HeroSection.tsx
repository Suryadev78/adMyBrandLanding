'use client'

import React, { useEffect, useState, JSX } from 'react'
import {
  ArrowRight, Play, Sparkles, Eye, Menu, X, Moon, Sun, Brain,
  CheckCircle
} from 'lucide-react'
import HeroPanel from './HeroPanel'

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' }
]

const Stats = [
  { label: 'Brands Created', value: '50K+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'User Rating', value: '4.9★' }
]

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const [orbs, setOrbs] = useState<JSX.Element[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [visitorCount, setVisitorCount] = useState(12847)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setMounted(true)

    const visited = sessionStorage.getItem('hasVisited')
    if (!visited) {
      const count = localStorage.getItem('visitorCount')
      const newCount = count ? +count + 1 : 12848
      setVisitorCount(newCount)
      localStorage.setItem('visitorCount', newCount.toString())
      sessionStorage.setItem('hasVisited', 'true')
    } else {
      const savedCount = localStorage.getItem('visitorCount')
      if (savedCount) setVisitorCount(parseInt(savedCount))
    }

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    const orbElements = [...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float-slow"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${15 + Math.random() * 25}s`
        }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 dark:opacity-20" />
      </div>
    ))
    setOrbs(orbElements)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">

      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/30'
          : 'bg-transparent'}`}
        role="banner"
      >
        <nav 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3" role="img" aria-label="ADmyBRAND AI Suite logo">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-2.5 w-2.5 text-white" aria-hidden="true" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ADmyBRAND
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block -mt-1">AI Suite</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} role="listitem">
                  <a 
                    href={item.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                const isDark = document.documentElement.classList.contains('dark')
                document.documentElement.classList.toggle('dark', !isDark)
                localStorage.setItem('darkMode', JSON.stringify(!isDark))
              }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl bg-white/10 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-gray-700/50"
            >
              {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 font-semibold shadow-lg"
              aria-label="Start your free trial of ADmyBRAND AI Suite"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={`${isMenuOpen ? 'Close' : 'Open'} mobile navigation menu`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden px-4 py-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 space-y-4"
            role="region"
            aria-label="Mobile navigation menu"
          >
            <nav role="navigation" aria-label="Mobile navigation">
              <ul className="space-y-4" role="list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} role="listitem">
                    <a 
                      href={item.href} 
                      className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold"
              aria-label="Start your free trial of ADmyBRAND AI Suite"
            >
              Start Free Trial
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main>
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
          aria-labelledby="hero-heading"
          role="region"
          aria-label="Hero section with main product introduction"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0" role="presentation" aria-hidden="true">{orbs}</div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-pulse" role="presentation" aria-hidden="true" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-pulse delay-1000" role="presentation" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <article className="text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 dark:border-gray-700/30 mb-4 animate-fade-in-up"
                role="status"
                aria-live="polite"
                aria-label="Live visitor count"
              >
                <Eye className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {visitorCount.toLocaleString()} students visited
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" role="presentation" aria-hidden="true" />
              </div>

              <h1 
                id="hero-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up delay-100"
              >
                Transform Your
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Brand Identity
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl">with AI Magic</span>
              </h1>

              <p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-200"
                aria-describedby="hero-heading"
              >
                Create stunning brand assets and scale your marketing efforts with our AI-powered suite. <span className="font-semibold text-indigo-600 dark:text-indigo-400">10x faster than traditional methods.</span>
              </p>

              <section 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 animate-fade-in-up delay-300"
                aria-labelledby="stats-heading"
                role="region"
              >
                <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
                {Stats.map(stat => (
                  <div key={stat.label} className="text-center" role="group" aria-labelledby={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white" aria-label={`${stat.value} ${stat.label}`}>{stat.value}</div>
                    <div id={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </section>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-fade-in-up delay-400">
                <button 
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 flex items-center gap-2"
                  aria-label="Start creating your brand assets now with ADmyBRAND AI Suite"
                >
                  Start Creating Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button 
                  className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  aria-label="Watch product demonstration video"
                >
                  <div className="w-12 h-12 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 dark:border-gray-700/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-all duration-200">
                    <Play className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-medium">Watch Demo</span>
                </button>
              </div>

              <div 
                className="flex justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up delay-500"
                role="list"
                aria-label="Key benefits"
              >
                <div className="flex items-center gap-1" role="listitem">
                  <CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>No credit card needed</span>
                </div>
                <div className="flex items-center gap-1" role="listitem">
                  <CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>Launch in minutes</span>
                </div>
              </div>
            </article>

            <aside className="relative" aria-label="Product demonstration panel">
              <HeroPanel/>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HeroSection;