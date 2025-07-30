'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form submitted:', data)
    toast.success('Message sent successfully!')
    form.reset()
  }

  return (
    <div className="bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/20 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Have questions or want a demo? We’d love to hear from you.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-white/20 dark:bg-gray-800/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white/20 dark:bg-gray-800/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Tell us more about what you’re looking for..."
                    className="bg-white/20 dark:bg-gray-800/30 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  )
}
