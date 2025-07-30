'use client'

import { useEffect, useRef } from 'react'
import { Sparkles, MessageSquare, Share2, BarChart3, Zap, Target, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

interface FeatureCardProps {
  feature: Feature
  index: number
}

// Feature Card Component
function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            ;(entry.target as HTMLElement).style.animationDelay = `${index * 100}ms`
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const Icon = feature.icon

  return (
    <div
      ref={cardRef}
      className="group opacity-0 transform translate-y-8 hover:scale-105 transition-all duration-500 ease-out"
    >
      <div className="relative h-full p-8 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Animated border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

// Features data
const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Create compelling copy, visuals, and campaigns in seconds with our advanced AI engine.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: MessageSquare,
    title: "Brand Voice Analysis",
    description: "Maintain consistent brand messaging across all channels with intelligent voice optimization.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Schedule, optimize, and publish content across multiple platforms with smart timing.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Get real-time insights and predictive analytics to maximize your marketing ROI.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Campaign Optimization",
    description: "Automatically adjust and improve campaigns using machine learning algorithms.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision AI-driven targeting.",
    gradient: "from-teal-500 to-green-500"
  }
]

// Main Features Section Component
export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
    id='features'
      ref={sectionRef}
      className="relative py-20 px-6 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Powered by Advanced AI
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ADmyBRAND AI Suite
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing with cutting-edge AI technology. Create, optimize, and scale your brand across all digital channels with unprecedented efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Start Your AI-Powered Journey</span>
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}