import React, { useState } from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 99 : 990,
      description: 'Perfect for small businesses',
      cta: 'Start Free Trial',
      highlighted: false,
      features: [
        { name: 'Up to 100 conversations/month', included: true },
        { name: 'Basic AI responses', included: true },
        { name: 'Email support', included: true },
        { name: 'Basic analytics', included: false },
        { name: 'Custom AI training', included: false },
        { name: 'API access', included: false }
      ]
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? 199 : 1990,
      description: 'For growing teams',
      cta: 'Start Free Trial',
      highlighted: true,
      popular: true,
      features: [
        { name: 'Up to 1,000 conversations/month', included: true },
        { name: 'Advanced AI + Lead capture', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Advanced analytics & dashboards', included: true },
        { name: 'Custom AI training', included: false },
        { name: 'API access', included: false }
      ]
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 299 : 2990,
      description: 'For serious revenue',
      cta: 'Contact Sales',
      highlighted: false,
      features: [
        { name: 'Unlimited conversations', included: true },
        { name: 'Advanced AI + Lead capture', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Advanced analytics & dashboards', included: true },
        { name: 'Custom AI training & fine-tuning', included: true },
        { name: 'Full API access & webhooks', included: true }
      ]
    }
  ];

  const faqs = [
    {
      q: 'Can I change plans anytime?',
      a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 14-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes! All plans include a 14-day free trial. No credit card required to get started.'
    },
    {
      q: 'Do you offer discounts for annual billing?',
      a: 'Yes! Save 15% with annual billing. Your price is locked in for the entire year.'
    },
    {
      q: 'Can I get a custom plan?',
      a: 'Absolutely! Contact our sales team for enterprise or custom pricing options.'
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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-12"
          >
            Choose the plan that fits your business. Always pay for what you use.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-lg"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Save 15%</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl md:scale-105'
                  : 'bg-white border border-gray-200 text-gray-900 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Info */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                  {billingCycle === 'annual' && (
                    <p className={`text-sm mt-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                      Only ${(plan.price / 12).toFixed(0)}/month billed annually
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Button
                  className={`w-full mb-8 py-3 font-semibold flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={20} className={plan.highlighted ? 'text-green-300' : 'text-green-600'} />
                      ) : (
                        <X size={20} className={plan.highlighted ? 'text-red-300' : 'text-gray-400'} />
                      )}
                      <span className={`text-sm ${feature.included ? '' : plan.highlighted ? 'text-blue-200 line-through' : 'text-gray-500 line-through'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-blue-300 transition-colors"
              >
                <summary className="font-semibold text-gray-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-400">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your sales?</h2>
          <p className="text-lg text-blue-100 mb-8">Start your 14-day free trial today. No credit card required.</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold text-lg">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;