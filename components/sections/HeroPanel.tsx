'use client'

import {
  Brain,
  Palette,
  Zap,
  TrendingUp,
  Users,
  Star,
  Sparkles,
} from 'lucide-react'

const HeroPanel = () => {
  return (
    <article 
      className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl animate-fade-in-up delay-600"
      role="region"
      aria-labelledby="ai-studio-title"
      aria-describedby="ai-studio-description"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center" role="img" aria-label="AI Brain icon">
            <Brain className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 id="ai-studio-title" className="text-sm font-semibold text-gray-900 dark:text-white">AI Brand Studio</h3>
            <p id="ai-studio-description" className="text-xs text-gray-500 dark:text-gray-400">Generating assets...</p>
          </div>
        </div>
        <div className="flex items-center space-x-2" role="status" aria-live="polite" aria-label="System status">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" role="presentation" aria-hidden="true" />
          <span className="text-xs text-gray-500 dark:text-gray-400">Live</span>
        </div>
      </header>

      {/* Progress Bars */}
      <section aria-labelledby="progress-title" role="region">
        <h4 id="progress-title" className="sr-only">Generation Progress</h4>
        {[
          { label: 'Logo Generation', value: '100%', width: 'w-full', id: 'logo-progress' },
          { label: 'Color Palette', value: '85%', width: 'w-4/5', id: 'palette-progress' },
          { label: 'Brand Guidelines', value: '72%', width: 'w-3/4', id: 'guidelines-progress' },
        ].map(({ label, value, width, id }, i) => (
          <div key={label} className="mb-4" role="group" aria-labelledby={`${id}-label`}>
            <div className="flex justify-between text-sm mb-1">
              <span id={`${id}-label`} className="text-gray-700 dark:text-gray-300">{label}</span>
              <span className="text-indigo-600 dark:text-indigo-400" aria-label={`${value} complete`}>{value}</span>
            </div>
            <div 
              className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"
              role="progressbar"
              aria-valuenow={parseInt(value)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby={`${id}-label`}
              aria-describedby={`${id}-description`}
            >
              <div
                className={`bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full ${width} animate-progress`}
                style={{ animationDelay: `${i * 300}ms` }}
              />
            </div>
            <span id={`${id}-description`} className="sr-only">{label} is {value} complete</span>
          </div>
        ))}
      </section>

      {/* Features */}
      <section aria-labelledby="features-title" role="region">
        <h4 id="features-title" className="sr-only">AI Studio Features</h4>
        <div className="grid grid-cols-3 gap-4 pt-4" role="list">
          {[
            { icon: Palette, label: 'Design', description: 'AI-powered design tools' },
            { icon: Zap, label: 'Generate', description: 'Instant content generation' },
            { icon: TrendingUp, label: 'Scale', description: 'Scale your marketing efforts' },
          ].map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="text-center p-4 bg-white/10 dark:bg-gray-800/20 rounded-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
              role="listitem"
              tabIndex={0}
              aria-label={`${label}: ${description}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle click action here
                }
              }}
            >
              <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" aria-hidden="true" />
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom stats */}
      <footer className="flex justify-between items-center pt-4 border-t border-white/20 dark:border-gray-700/20 mt-4">
        <div className="flex items-center space-x-2" role="status" aria-label="Active users count">
          <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
          <span className="text-xs text-gray-500 dark:text-gray-400">2.4K active users</span>
        </div>
        <div className="flex items-center space-x-1" role="group" aria-label="User rating: 4.9 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-3 w-3 text-yellow-400 fill-current" 
              aria-hidden="true"
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">4.9</span>
        </div>
      </footer>

      {/* Floating icons */}
      <div 
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce"
        role="presentation"
        aria-hidden="true"
      >
        <Sparkles className="h-4 w-4 text-white" />
      </div>
      <div 
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"
        role="presentation" 
        aria-hidden="true"
      />
    </article>
  )
}

export default HeroPanel;