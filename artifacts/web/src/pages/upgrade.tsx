import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X, ChevronRight } from 'lucide-react';

const UpgradePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'professional',
      name: 'Professional',
      price: 199,
      current: false,
      features: [
        { name: 'Up to 1,000 conversations/month', available: true },
        { name: 'Advanced AI + Lead capture', available: true },
        { name: 'Priority support', available: true },
        { name: 'Advanced analytics', available: true },
        { name: 'Custom AI training', available: false },
        { name: 'API access', available: false }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      current: false,
      featured: true,
      features: [
        { name: 'Unlimited conversations', available: true },
        { name: 'Advanced AI + Lead capture', available: true },
        { name: 'Dedicated support', available: true },
        { name: 'Advanced analytics', available: true },
        { name: 'Custom AI training', available: true },
        { name: 'Full API access', available: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Upgrade Your Plan</h1>
          <p className="text-gray-600 mt-1">Unlock more features and scale your business</p>
        </div>
      </div>

      {/* Current Plan Info */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12"
        >
          <p className="text-blue-900">
            <span className="font-bold">Current Plan:</span> Starter ($99/month) — Next billing date: July 17, 2026
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`rounded-xl border-2 p-8 cursor-pointer transition-all ${
                selectedPlan === plan.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              } ${plan.featured ? 'md:ring-2 md:ring-blue-600 md:ring-offset-0' : ''}`}
            >
              {plan.featured && (
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  ⭐ Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Upgrading to ${plan.name}...`);
                }}
                className={`w-full mb-6 py-3 font-semibold ${
                  selectedPlan === plan.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Upgrade Now
              </Button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {feature.available ? (
                      <Check size={18} className="text-green-600 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-400 flex-shrink-0" />
                    )}
                    <span className={feature.available ? 'text-gray-900' : 'text-gray-500 line-through'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upgrade Details</h3>
          <div className="space-y-4">
            {[
              {
                q: 'When will I be charged?',
                a: 'Your upgrade will be effective immediately. The difference between your current plan and the new plan will be prorated and charged today.'
              },
              {
                q: 'Can I downgrade later?',
                a: 'Yes, you can downgrade at any time. Your new rate will apply at the next billing cycle.'
              },
              {
                q: 'Do I get a refund if I downgrade?',
                a: 'If you downgrade within 14 days, we\'ll refund the difference. After 14 days, changes apply at the next billing cycle.'
              }
            ].map((item, i) => (
              <details key={i} className="border-b border-gray-200 pb-4 last:border-0 cursor-pointer">
                <summary className="font-semibold text-gray-900 flex items-center justify-between">
                  {item.q}
                  <ChevronRight size={18} />
                </summary>
                <p className="text-gray-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpgradePage;