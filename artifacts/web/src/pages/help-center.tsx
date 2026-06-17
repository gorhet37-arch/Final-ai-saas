import React from 'react';
import { useState } from 'react';
import { ChevronDown, Search, MessageSquare, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        { id: 1, title: 'How to set up your first widget', views: '2.3K' },
        { id: 2, title: 'Understanding API keys', views: '1.8K' },
        { id: 3, title: 'Choosing the right plan', views: '4.2K' }
      ]
    },
    {
      id: 'integration',
      title: 'Integration',
      icon: '🔌',
      articles: [
        { id: 1, title: 'Installing on WordPress', views: '3.1K' },
        { id: 2, title: 'Shopify integration guide', views: '2.9K' },
        { id: 3, title: 'React/Next.js setup', views: '1.5K' }
      ]
    },
    {
      id: 'features',
      title: 'Features',
      icon: '⭐',
      articles: [
        { id: 1, title: 'Lead capture best practices', views: '2.7K' },
        { id: 2, title: 'Custom AI training', views: '1.2K' },
        { id: 3, title: 'CRM integrations', views: '3.4K' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: '🔧',
      articles: [
        { id: 1, title: 'Widget not showing on my site', views: '5.6K' },
        { id: 2, title: 'API key authentication errors', views: '2.1K' },
        { id: 3, title: 'Billing and subscription issues', views: '1.9K' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Help Center</h1>
          <p className="text-lg text-blue-100 mb-8">Find answers, guides, and support</p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Quick Help */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: MessageSquare,
              title: 'Contact Support',
              description: 'Chat with our support team',
              action: 'Start Chat'
            },
            {
              icon: TrendingUp,
              title: 'Video Tutorials',
              description: 'Learn from step-by-step guides',
              action: 'Watch Now'
            },
            {
              icon: AlertCircle,
              title: 'Status Page',
              description: 'Check system status and updates',
              action: 'View Status'
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Icon size={32} className="mx-auto text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Button variant="outline" size="sm">{item.action}</Button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Articles</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-gray-600" />
                </motion.div>
              </button>

              {/* Articles */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: expandedCategory === category.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 divide-y divide-gray-200">
                  {category.articles.map((article) => (
                    <a
                      key={article.id}
                      href="#"
                      className="flex items-center justify-between p-6 hover:bg-blue-50 transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </p>
                        <p className="text-sm text-gray-600">{article.views} views</p>
                      </div>
                      <ChevronDown size={18} className="text-gray-400 rotate-270 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-lg text-blue-100 mb-8">Our support team is here to help you succeed</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;