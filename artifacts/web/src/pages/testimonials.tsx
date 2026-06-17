import React, { useState } from 'react';
import { Star, Quote, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechFlow Inc',
      role: 'CEO',
      content: 'NexusAI increased our lead conversion by 40% in just 3 months. The AI assistant feels like a natural extension of our team.',
      rating: 5,
      image: '👩‍💼',
      metric: '+$85K revenue'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GrowthCo',
      role: 'Marketing Director',
      content: 'The best investment we made this year. Our response time went from hours to instant, and customers love it.',
      rating: 5,
      image: '👨‍💼',
      metric: '+156 appointments/month'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Digital Design Studio',
      role: 'Founder',
      content: 'Setup took less than 5 minutes. The AI understood our business perfectly without any complex training. Highly recommend!',
      rating: 5,
      image: '👩‍🔬',
      metric: '+92% customer satisfaction'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: 'E-commerce Giants',
      result: '3x More Leads',
      metric: 'Captured 2,400 additional leads per month',
      color: 'blue'
    },
    {
      id: 2,
      company: 'Service Business',
      result: '$240K Revenue',
      metric: 'Additional revenue generated in 6 months',
      color: 'green'
    },
    {
      id: 3,
      company: 'SaaS Company',
      result: '68% Faster Booking',
      metric: 'Appointment scheduling down from 48 to 15 hours',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by 500+ Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            See how companies like yours are transforming conversations into revenue
          </motion.p>
        </div>
      </div>

      {/* Video Testimonial */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="aspect-video flex items-center justify-center">
            <button className="p-6 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              <Play size={32} className="text-white" fill="white" />
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-bold text-lg">Watch how Sarah grew her business 3x</p>
            <p className="text-gray-300 text-sm">CEO of TechFlow Inc • 3:42</p>
          </div>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Metric */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">Impact</p>
                <p className="font-bold text-lg text-blue-600">{testimonial.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => {
              const colors: Record<string, string> = {
                blue: 'from-blue-600 to-blue-700',
                green: 'from-green-600 to-green-700',
                purple: 'from-purple-600 to-purple-700'
              };

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colors[study.color]} rounded-xl p-8 text-white relative overflow-hidden group`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />

                  <div className="relative z-10">
                    <p className="text-sm font-semibold text-white/80 mb-2">{study.company}</p>
                    <p className="text-3xl font-bold mb-3">{study.result}</p>
                    <p className="text-white/90 mb-6">{study.metric}</p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 group-hover:gap-2 transition-all">
                      Read Full Story <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Users', value: '500+', icon: '👥' },
            { label: 'Conversations', value: '2.5M+', icon: '💬' },
            { label: 'Leads Captured', value: '125K+', icon: '🎯' },
            { label: 'Customer Satisfaction', value: '97%', icon: '⭐' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl mb-2">{stat.icon}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;