'use client'

import { useEffect, useRef } from 'react'
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  ctaText: string
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  buttonGradient: string
}

interface PricingCardProps {
  tier: PricingTier
  index: number
}

// Pricing Card Component
function PricingCard({ tier, index }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            ;(entry.target as HTMLElement).style.animationDelay = `${index * 150}ms`
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

  const Icon = tier.icon

  return (
    <article
      ref={cardRef}
      className={`relative opacity-0 transform translate-y-8 group hover:scale-105 transition-all duration-500 ease-out ${
        tier.popular ? 'lg:scale-110' : ''
      }`}
      aria-labelledby={`plan-${tier.name.toLowerCase()}-title`}
      aria-describedby={`plan-${tier.name.toLowerCase()}-description`}
    >
      {/* Most Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg"
            role="status"
            aria-label="Most popular plan"
          >
            <Star className="w-4 h-4 fill-current" aria-hidden="true" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div className={`relative h-full p-8 rounded-3xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300 ${
        tier.popular ? 'border-indigo-500/30 shadow-indigo-500/20' : ''
      }`}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" role="presentation" aria-hidden="true"></div>
        
        {/* Icon */}
        <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.gradient} shadow-lg mb-6`} role="img" aria-label={`${tier.name} plan icon`}>
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        {/* Plan Name */}
        <h3 
          id={`plan-${tier.name.toLowerCase()}-title`}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {tier.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span 
              className="text-4xl font-bold text-gray-900 dark:text-white"
              aria-label={`Price: ${tier.price}${tier.period}`}
            >
              {tier.price}
            </span>
            {tier.period && (
              <span className="text-gray-600 dark:text-gray-400 text-lg">
                {tier.period}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p 
          id={`plan-${tier.name.toLowerCase()}-description`}
          className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          {tier.description}
        </p>

        {/* Features */}
        <section aria-labelledby={`plan-${tier.name.toLowerCase()}-features-title`}>
          <h4 id={`plan-${tier.name.toLowerCase()}-features-title`} className="sr-only">
            {tier.name} plan features
          </h4>
          <ul className="space-y-4 mb-8" role="list">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3" role="listitem">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5" role="img" aria-label="Included feature">
                  <Check className="w-3 h-3 text-white" aria-hidden="true" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Button */}
        <button 
          className={`relative w-full py-4 px-6 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r ${tier.buttonGradient} overflow-hidden group/btn`}
          aria-label={`${tier.ctaText} for ${tier.name} plan`}
        >
          {/* Button gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" role="presentation" aria-hidden="true"></div>
          <span className="relative z-10">{tier.ctaText}</span>
        </button>

        {/* Animated border for popular plan */}
        {tier.popular && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur transition-opacity duration-300 group-hover:opacity-30" role="presentation" aria-hidden="true"></div>
        )}
      </div>
    </article>
  )
}

// Pricing tiers data
const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals and small businesses getting started with AI marketing.",
    features: [
      "5 AI-generated content pieces per month",
      "Basic brand voice analysis",
      "Social media scheduling (2 platforms)",
      "Email support",
      "Basic analytics dashboard",
      "Template library access"
    ],
    ctaText: "Get Started Free",
    icon: Rocket,
    gradient: "from-green-500 to-emerald-500",
    buttonGradient: "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Ideal for growing businesses that need advanced AI capabilities and automation.",
    features: [
      "Unlimited AI content generation",
      "Advanced brand voice optimization",
      "Multi-platform social media automation",
      "A/B testing and optimization",
      "Advanced analytics and insights",
      "Priority email & chat support",
      "Custom templates and workflows",
      "Team collaboration tools"
    ],
    ctaText: "Start Pro Trial",
    popular: true,
    icon: Zap,
    gradient: "from-indigo-500 to-purple-500",
    buttonGradient: "from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Comprehensive solution for large organizations with custom requirements and dedicated support.",
    features: [
      "Everything in Pro plan",
      "Custom AI model training",
      "White-label solutions",
      "Advanced API access",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Enterprise-grade security",
      "Unlimited team members"
    ],
    ctaText: "Contact Sales",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    buttonGradient: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
  }
]

// Main Pricing Section Component
export default function PricingSection() {
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
      id='pricing'
      ref={sectionRef}
      className="relative py-20 px-6"
      aria-labelledby="pricing-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-400/20 mb-6"
            role="status"
            aria-label="Choose your plan section"
          >
            <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Choose Your Plan
            </span>
          </div>
          
          <h2 
            id="pricing-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          
          <p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            aria-describedby="pricing-heading"
          >
            Start free and scale as you grow. No hidden fees, no surprises. Choose the perfect plan for your AI marketing journey.
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          role="list"
          aria-label="Available pricing plans"
        >
          {pricingTiers.map((tier, index) => (
            <div key={tier.name} role="listitem">
              <PricingCard 
                tier={tier} 
                index={index} 
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <footer className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
            role="list"
            aria-label="Plan guarantees and benefits"
          >
            <div className="flex items-center gap-2" role="listitem">
              <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}