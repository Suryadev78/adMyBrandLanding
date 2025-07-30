'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles } from "lucide-react"

export default function FAQ() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-200/30 dark:border-indigo-700/30">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Got Questions?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="text-gray-900 dark:text-white">Questions</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Glass-style Accordion */}
        <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/20 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does ADmyBRAND AI Suite improve my marketing campaigns?</AccordionTrigger>
              <AccordionContent>
              ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand voice, target audience, and market trends. It automatically generates personalized content, optimizes ad targeting, and provides real-time performance insights that typically result in 200-400% improvement in engagement rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is my data secure and how do you handle privacy?</AccordionTrigger>
              <AccordionContent>
              Security is our top priority. We use enterprise-grade encryption (AES-256), comply with GDPR, CCPA, and SOC 2 Type II standards. Your data is never shared with third parties, and we offer on-premise deployment options for enterprise clients. All AI training is done on anonymized, aggregated data only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is customer support available 24/7?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Our AI chatbot and human team are here to help 24/7.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is there a refund policy?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee on all plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do I need technical knowledge to use it?</AccordionTrigger>
              <AccordionContent>
                Not at all! ADmyBRAND is designed to be intuitive for both marketers and non-technical users.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
