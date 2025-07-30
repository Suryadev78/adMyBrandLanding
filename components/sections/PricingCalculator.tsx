"use client"
import React, { useState, useEffect } from 'react';
import { Calculator, Users, Mail, Zap, Check, Sparkles } from 'lucide-react';

interface PricingConfig {
  teamMembers: number;
  emailsPerMonth: number;
  aiCredits: number;
  isYearly: boolean;
}

const PricingCalculator = () => {
  const [config, setConfig] = useState<PricingConfig>({
    teamMembers: 5,
    emailsPerMonth: 10000,
    aiCredits: 1000,
    isYearly: false
  });

  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [animatedPrice, setAnimatedPrice] = useState(0);

  // Pricing logic
  const calculatePrice = (config: PricingConfig) => {
    const basePrice = 29; // Base price per team member
    const emailPrice = 0.001; // Price per email
    const aiCreditPrice = 0.05; // Price per AI credit
    
    const teamCost = config.teamMembers * basePrice;
    const emailCost = config.emailsPerMonth * emailPrice;
    const aiCost = config.aiCredits * aiCreditPrice;
    
    let totalMonthly = teamCost + emailCost + aiCost;
    
    // Apply yearly discount (20% off)
    if (config.isYearly) {
      totalMonthly = totalMonthly * 0.8;
    }
    
    return Math.round(totalMonthly);
  };

  // Animate price changes
  useEffect(() => {
    const newPrice = calculatePrice(config);
    setCalculatedPrice(newPrice);
    
    // Animate the price change
    const duration = 500;
    const steps = 30;
    const stepValue = (newPrice - animatedPrice) / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setAnimatedPrice(newPrice);
        clearInterval(interval);
      } else {
        setAnimatedPrice(prev => Math.round(prev + stepValue));
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [config]);

  const features = [
    'Advanced AI Content Generation',
    'Multi-platform Campaign Management',
    'Real-time Analytics Dashboard',
    'Custom Brand Voice Training',
    '24/7 Priority Support',
    'API Access & Integrations'
  ];

  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="calculator-heading"
      role="region"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20" role="presentation" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" role="presentation" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} role="presentation" aria-hidden="true"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-200/30 dark:border-indigo-700/30"
            role="status"
            aria-label="Pricing calculator section"
          >
            <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Pricing Calculator
            </span>
          </div>
          
          <h2 
            id="calculator-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Calculate Your
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Perfect Plan
            </span>
          </h2>
          
          <p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            aria-describedby="calculator-heading"
          >
            Customize your ADmyBRAND AI Suite plan based on your team size and usage needs. 
            Get real-time pricing with our interactive calculator.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Controls */}
          <aside 
            className="space-y-8"
            aria-labelledby="calculator-controls-heading"
            role="form"
          >
            <h3 id="calculator-controls-heading" className="sr-only">Pricing Configuration Controls</h3>
            
            {/* Billing Toggle */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20" role="presentation" aria-hidden="true"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl">
                <fieldset>
                  <legend className="sr-only">Billing frequency selection</legend>
                  <div className="flex items-center justify-center gap-4">
                    <label 
                      htmlFor="billing-monthly"
                      className={`font-medium transition-colors duration-200 cursor-pointer ${!config.isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
                    >
                      Monthly
                    </label>
                    
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="billing-toggle"
                        checked={config.isYearly}
                        onChange={(e) => setConfig(prev => ({ ...prev, isYearly: e.target.checked }))}
                        className="sr-only"
                        aria-describedby="billing-description"
                      />
                      <button
                        onClick={() => setConfig(prev => ({ ...prev, isYearly: !prev.isYearly }))}
                        className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        role="switch"
                        aria-checked={config.isYearly}
                        aria-labelledby="billing-yearly"
                        aria-describedby="billing-description"
                      >
                        <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg transition-transform duration-200 ${config.isYearly ? 'translate-x-8' : 'translate-x-1'}`}></div>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <label 
                        id="billing-yearly"
                        htmlFor="billing-toggle"
                        className={`font-medium transition-colors duration-200 cursor-pointer ${config.isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
                      >
                        Yearly
                      </label>
                      {config.isYearly && (
                        <span 
                          className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full"
                          role="status"
                          aria-label="20% discount applied"
                        >
                          20% OFF
                        </span>
                      )}
                    </div>
                  </div>
                  <p id="billing-description" className="sr-only">
                    Toggle between monthly and yearly billing. Yearly billing includes a 20% discount.
                  </p>
                </fieldset>
              </div>
            </div>

            {/* Team Members Slider */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20" role="presentation" aria-hidden="true"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center" role="img" aria-label="Team members icon">
                    <Users className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Team Members</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Number of users in your team</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                      aria-live="polite"
                      aria-label={`${config.teamMembers} team members selected`}
                    >
                      {config.teamMembers}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${29 * config.teamMembers}/month per user
                    </span>
                  </div>
                  
                  <label htmlFor="team-members-slider" className="sr-only">
                    Number of team members (1 to 50)
                  </label>
                  <input
                    id="team-members-slider"
                    type="range"
                    min="1"
                    max="50"
                    value={config.teamMembers}
                    onChange={(e) => setConfig(prev => ({ ...prev, teamMembers: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    aria-describedby="team-members-range"
                  />
                  
                  <div id="team-members-range" className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>1 user</span>
                    <span>50+ users</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Volume Slider */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20" role="presentation" aria-hidden="true"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center" role="img" aria-label="Email campaigns icon">
                    <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Monthly Emails</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email campaigns per month</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      aria-live="polite"
                      aria-label={`${config.emailsPerMonth.toLocaleString()} emails per month selected`}
                    >
                      {config.emailsPerMonth.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${(config.emailsPerMonth * 0.001).toFixed(2)}/month
                    </span>
                  </div>
                  
                  <label htmlFor="email-volume-slider" className="sr-only">
                    Monthly email volume (1,000 to 100,000)
                  </label>
                  <input
                    id="email-volume-slider"
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={config.emailsPerMonth}
                    onChange={(e) => setConfig(prev => ({ ...prev, emailsPerMonth: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    aria-describedby="email-volume-range"
                  />
                  
                  <div id="email-volume-range" className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>1K emails</span>
                    <span>100K+ emails</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Credits Slider */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20" role="presentation" aria-hidden="true"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center" role="img" aria-label="AI credits icon">
                    <Zap className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AI Credits</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly AI generation credits</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"
                      aria-live="polite"
                      aria-label={`${config.aiCredits.toLocaleString()} AI credits selected`}
                    >
                      {config.aiCredits.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${(config.aiCredits * 0.05).toFixed(2)}/month
                    </span>
                  </div>
                  
                  <label htmlFor="ai-credits-slider" className="sr-only">
                    Monthly AI credits (100 to 10,000)
                  </label>
                  <input
                    id="ai-credits-slider"
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={config.aiCredits}
                    onChange={(e) => setConfig(prev => ({ ...prev, aiCredits: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    aria-describedby="ai-credits-range"
                  />
                  
                  <div id="ai-credits-range" className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>100 credits</span>
                    <span>10K+ credits</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Pricing Display */}
          <article 
            className="relative"
            aria-labelledby="pricing-display-heading"
            role="region"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30" role="presentation" aria-hidden="true"></div>
            <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-2xl">
              {/* Price Display */}
              <header className="text-center mb-8">
                <h3 id="pricing-display-heading" className="sr-only">Calculated pricing information</h3>
                <div className="mb-4">
                  <span 
                    className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    aria-live="polite"
                    aria-label={`Calculated price: $${animatedPrice} per month`}
                  >
                    ${animatedPrice}
                  </span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400 ml-2">
                    /month
                  </span>
                </div>
                
                {config.isYearly && (
                  <div 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/30 dark:border-green-700/30"
                    role="status"
                    aria-live="polite"
                  >
                    <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Save ${Math.round(calculatedPrice * 0.20 * 12)} per year
                    </span>
                  </div>
                )}
              </header>

              {/* Features List */}
              <section aria-labelledby="included-features-heading">
                <h4 id="included-features-heading" className="font-semibold text-gray-900 dark:text-white text-center mb-6">
                  Everything included:
                </h4>
                <ul className="space-y-4 mb-8" role="list">
                  {features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                      role="listitem"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0" role="img" aria-label="Included feature">
                        <Check className="w-3 h-3 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA Button */}
              <button 
                className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                aria-label="Start your free trial with the calculated pricing plan"
              >
                Start Your Free Trial
              </button>
              
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </article>
        </div>

        {/* Bottom Info */}
        <footer className="text-center mt-16">
          <div 
            className="inline-flex items-center gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl"
            role="region"
            aria-labelledby="contact-sales-heading"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg" role="img" aria-label="Calculator icon">
              <Calculator className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div className="text-left">
              <h4 id="contact-sales-heading" className="font-semibold text-gray-900 dark:text-white mb-1">
                Need a custom plan?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact our sales team for enterprise pricing and custom features
              </p>
            </div>
            <button 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              aria-label="Contact sales team for custom enterprise pricing"
            >
              Contact Sales
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PricingCalculator;