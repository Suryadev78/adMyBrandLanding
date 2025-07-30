import React from 'react';
import Image from 'next/image';

import { Calendar,  ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Marketing: 2025 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping marketing strategies and what innovative approaches will dominate the industry in 2025.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    publishedDate: "Dec 15, 2024",
    category: "AI Trends"
  },
  {
    id: 2,
    title: "Maximizing ROI with Personalized Campaign Automation",
    excerpt: "Learn proven strategies to increase your marketing ROI by 300% using AI-driven personalization and automated campaign optimization.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    publishedDate: "Dec 12, 2024",
    category: "Strategy"
  },
  {
    id: 3,
    title: "Building Brand Voice with AI: A Complete Guide",
    excerpt: "Master the art of creating consistent, authentic brand messaging across all channels using advanced AI content generation tools.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    author: {
      name: "Emily Foster",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    publishedDate: "Dec 10, 2024",
    category: "Branding"
  }
];

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  return (
    <article 
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Animated gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
      
      {/* Main glassmorphism card */}
      <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-xl border border-white/20 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
        {/* Featured image */}
        <div className="relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            unoptimized
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              <Sparkles className="w-3 h-3" />
              {post.category}
            </span>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Author and date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Author avatar with glow effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                height={40}
                  unoptimized
                  className="relative w-8 h-8 rounded-full object-cover ring-2 ring-white/50 dark:ring-gray-700/50"
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{post.publishedDate}</span>
                </div>
              </div>
            </div>
            
            {/* Read more arrow */}
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  return (
    <section id='blog' className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-200/30 dark:border-indigo-700/30">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Latest Resources
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Insights &
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Resources
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and actionable strategies 
            to maximize your AI-powered marketing success
          </p>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Want more insights?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subscribe to our newsletter for weekly AI marketing tips and updates
              </p>
            </div>
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;