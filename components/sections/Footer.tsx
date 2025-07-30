import React from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#linkedin', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      href: '#twitter', 
      icon: Twitter,
      color: 'hover:text-sky-400'
    },
    { 
      name: 'YouTube', 
      href: '#youtube', 
      icon: Youtube,
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="relative py-16 px-4 overflow-hidden" role="contentinfo" aria-labelledby="footer-heading">
      {/* Background effects - Decorative only */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/20 dark:from-gray-950 dark:via-indigo-950/30 dark:to-purple-950/30" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="relative">
          {/* Glassmorphism background - Decorative */}
          <div className="absolute -inset-4 bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl rounded-3xl border border-white/10 dark:border-gray-700/20 shadow-2xl" aria-hidden="true"></div>
          
          <div className="relative p-8 md:p-12">
            {/* Top section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
              {/* Company info */}
              <section className="lg:col-span-2 space-y-6" aria-labelledby="company-info-heading">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300" aria-hidden="true">
                    <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="company-info-heading" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      ADmyBRAND
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      AI Suite
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                  Transform your marketing campaigns with AI-powered personalization and automation. 
                  Join thousands of brands creating exceptional customer experiences.
                </p>
                
                {/* Contact info */}
                <address className="space-y-3 not-italic" role="group" aria-labelledby="contact-info-heading">
                  <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <a href="mailto:hello@admybrand.ai" className="text-sm" aria-label="Email us at hello@admybrand.ai">
                      hello@admybrand.ai
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <a href="tel:+15551234567" className="text-sm" aria-label="Call us at +1 (555) 123-4567">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </address>
              </section>
              
              {/* Navigation */}
              <nav className="space-y-6" role="navigation" aria-labelledby="footer-nav-heading">
                <h3 id="footer-nav-heading" className="text-lg font-semibold text-gray-900 dark:text-white">
                  Navigation
                </h3>
                <ul className="space-y-3" role="list">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                        aria-label={`Navigate to ${link.name} section`}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Legal */}
              <nav className="space-y-6" role="navigation" aria-labelledby="legal-nav-heading">
                <h3 id="legal-nav-heading" className="text-lg font-semibold text-gray-900 dark:text-white">
                  Legal
                </h3>
                <ul className="space-y-3" role="list">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 flex items-center gap-2 group"
                        aria-label={`View ${link.name}`}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Divider */}
            <hr className="h-px bg-gradient-to-r from-transparent via-gray-300/30 dark:via-gray-600/30 to-transparent mb-8 border-0" aria-hidden="true" />
            
            {/* Bottom section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  © 2025 ADmyBRAND AI Suite. All rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                  Built with ❤️ for modern marketers
                </p>
              </div>
              
              {/* Social links */}
              <nav className="flex items-center gap-4" role="navigation" aria-labelledby="social-nav-heading">
                <h3 id="social-nav-heading" className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                  Follow us:
                </h3>
                <ul className="flex items-center gap-4" role="list">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          className={`w-10 h-10 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:bg-white/20 dark:hover:bg-gray-700/30 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl`}
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <IconComponent className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Subtle inner glow - Decorative */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" aria-hidden="true"></div>
        </div>
        
        {/* Newsletter signup section */}
        <section className="mt-12 relative" aria-labelledby="newsletter-heading">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-white/10 dark:border-gray-700/20" aria-hidden="true"></div>
          
          <div className="relative p-6 text-center">
            <h3 id="newsletter-heading" className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4" id="newsletter-description">
              Get the latest AI marketing insights and product updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" role="form" aria-labelledby="newsletter-heading" aria-describedby="newsletter-description">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter subscription
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                aria-required="true"
                aria-describedby="newsletter-description"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;