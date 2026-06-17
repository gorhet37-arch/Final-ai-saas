import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            NexusAI
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Conversations Into
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Revenue
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Meet customers exactly where they are. NexusAI's intelligent chat assistant captures leads, books appointments, and answers questions 24/7.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Start Free Trial <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              <span>5 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 p-2 shadow-2xl"
        >
          <div className="bg-white rounded-xl p-8 h-96 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
              <p>AI Chat Widget Preview</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Business Outcomes */}
      <section id="features" className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
            <p className="text-xl text-gray-600">Drive results that matter to your bottom line</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'More Leads',
                description: 'Capture website visitors with intelligent conversations before they leave'
              },
              {
                icon: Users,
                title: 'More Appointments',
                description: 'Automatically qualify leads and book meetings directly in your calendar'
              },
              {
                icon: Zap,
                title: 'Instant Response Times',
                description: '24/7 AI availability means no more missed opportunities or delayed responses'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <item.icon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$99',
                description: 'Perfect for small businesses',
                features: ['Up to 100 conversations/month', 'Basic AI responses', 'Email support']
              },
              {
                name: 'Professional',
                price: '$199',
                description: 'For growing teams',
                features: ['Up to 1,000 conversations/month', 'Advanced AI + Lead capture', 'Priority support', 'Analytics'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: '$299',
                description: 'For serious revenue',
                features: ['Unlimited conversations', 'Custom AI training', 'CRM integration', 'Dedicated support']
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-xl p-8 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                    : 'bg-white border border-gray-200 text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 text-sm ${ plan.highlighted ? 'text-blue-100' : 'text-gray-600' }`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${ plan.highlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700' }`}>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to capture every opportunity?</h2>
          <p className="text-xl mb-8 text-blue-100">Join hundreds of businesses turning conversations into revenue</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;