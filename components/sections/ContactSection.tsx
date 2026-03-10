'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'info@jalandharcuesports.org',
      link: 'mailto:info@jalandharcuesports.org',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+91-XXX-XXX-XXXX',
      link: 'tel:+91-XXX-XXX-XXXX',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come say hello',
      value: 'Jalandhar District, Punjab',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section 
      id="contact" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary-900 via-slate-900 to-primary-800 overflow-hidden"
      aria-label="Contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-black text-white tracking-widest uppercase">Let's Connect</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
              Get in Touch
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-primary-400 rounded-full" />
              <div className="w-3 h-3 bg-primary-400 rounded-full" />
              <div className="h-1 w-32 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full" />
              <div className="w-3 h-3 bg-accent-400 rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-accent-400 to-transparent rounded-full" />
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Have a question or want to join us? We'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.title} animation="slide-up" delay={index * 0.1}>
              <a
                href={method.link}
                className="group relative block"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm text-primary-300 font-semibold">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Main Contact Form */}
        <ScrollReveal animation="slide-up" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-20 blur-2xl" />
              
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 mb-4">
                    Send Us a Message
                  </h3>
                  <p className="text-lg text-gray-600">
                    Fill out the form and our team will get back to you within 24 hours
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-8 p-5 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-emerald-900 text-lg">Success!</p>
                      <p className="text-emerald-700 mt-1">Your message has been sent. We'll be in touch soon!</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none"
                        placeholder="+91-XXX-XXX-XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 1rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '3rem'
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="tournament">Tournament Information</option>
                        <option value="coaching">Coaching Programs</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 outline-none resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    {isSubmitting ? (
                      <span className="relative flex items-center justify-center gap-3">
                        <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-lg">Sending...</span>
                      </span>
                    ) : (
                      <span className="relative flex items-center justify-center gap-3">
                        <span className="text-lg">Send Message</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We'll respond within 24 hours • Your information is secure
                  </p>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
