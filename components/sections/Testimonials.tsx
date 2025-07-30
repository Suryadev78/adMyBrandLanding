"use client"
import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import {useKeenSlider} from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"; 

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 4.9,
    quote: "ADmyBRAND AI Suite transformed our marketing campaigns. We saw a 300% increase in engagement within just 2 months. The AI-driven insights are incredible!"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Growth Lead",
    company: "Startup Ventures",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 4.9,
    quote: "The personalization capabilities are mind-blowing. Our conversion rates doubled, and the time saved on campaign creation is invaluable."
  },
  {
    id: 3,
    name: "Emily Foster",
    role: "Brand Manager",
    company: "Creative Solutions",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 4.9,
    quote: "Finally, an AI tool that understands our brand voice perfectly. The content generation is so sophisticated, our clients think we hired more writers!"
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Digital Dynamics",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 4.9,
    quote: "ROI increased by 250% in our first quarter using ADmyBRAND. This isn't just a tool, it's a competitive advantage."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div 
      className="flex items-center gap-1"
      role="img"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={index}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
          </div>
        </div>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <Star
          key={index + fullStars + (hasHalfStar ? 1 : 0)}
          className="w-4 h-4 text-gray-300 dark:text-gray-600"
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {rating}
      </span>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <article 
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
      aria-labelledby={`testimonial-${testimonial.id}-author`}
      aria-describedby={`testimonial-${testimonial.id}-quote`}
    >
      {/* Animated gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow" role="presentation" aria-hidden="true"></div>
      
      {/* Main glassmorphism card */}
      <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
        {/* Floating quote icon */}
        <div 
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg opacity-80"
          role="img"
          aria-label="Quote icon"
        >
          <Quote className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
        
        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>
        
        {/* Quote with gradient text */}
        <blockquote 
          id={`testimonial-${testimonial.id}-quote`}
          className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed text-sm font-medium relative"
          cite={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
        >
          <span className="absolute -left-2 -top-1 text-indigo-400 text-2xl opacity-50" aria-hidden="true">"</span>
          {testimonial.quote}
          <span className="absolute -right-1 -bottom-2 text-indigo-400 text-2xl opacity-50" aria-hidden="true">"</span>
        </blockquote>
        
        {/* User info with enhanced styling */}
        <footer className="flex items-center gap-4">
          <div className="relative">
            {/* Profile image glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" role="presentation" aria-hidden="true"></div>
            <Image
              src={testimonial.image}
              alt={`Portrait of ${testimonial.name}`}
              width={48}
              height={48}
              unoptimized
              className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white/50 dark:ring-gray-700/50 shadow-lg"
            />
          </div>
          
          <div className="flex-1">
            <h3 
              id={`testimonial-${testimonial.id}-author`}
              className="font-semibold text-gray-900 dark:text-white text-sm"
            >
              {testimonial.name}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </p>
            <p className="text-xs font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {testimonial.company}
            </p>
          </div>
        </footer>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" role="presentation" aria-hidden="true"></div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  });
  
  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20" role="presentation" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" role="presentation" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} role="presentation" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-200/30 dark:border-indigo-700/30"
            role="status"
            aria-label="Trusted by 10,000+ marketing teams"
          >
            <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Trusted by 10,000+ Marketing Teams
            </span>
          </div>
          
          <h2 
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Are Saying
            </span>
          </h2>
          
          <p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            aria-describedby="testimonials-heading"
          >
            Join thousands of marketing professionals who have transformed their campaigns with ADmyBRAND AI Suite
          </p>
        </header>
        
        {/* Testimonials Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialCard
                testimonial={testimonial}
                index={index}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <footer className="text-center mt-16">
          <div 
            className="inline-flex items-center gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl"
            role="region"
            aria-labelledby="review-summary-heading"
          >
            <div className="flex -space-x-2" role="img" aria-label="Customer profile images">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={`${testimonial.name} from ${testimonial.company}`}
                  width={32}
                  height={32}
                  unoptimized
                  className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                  style={{ zIndex: 3 - index }}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                <StarRating rating={4.9} />
              </div>
              <p 
                id="review-summary-heading"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="font-semibold text-gray-900 dark:text-white">4.9/5</span> from 2,847+ reviews
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Testimonials;