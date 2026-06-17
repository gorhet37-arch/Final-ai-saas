import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, MessageSquare, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      label: 'Conversations',
      value: '1,248',
      change: '+12.5%',
      positive: true,
      icon: MessageSquare,
      color: 'blue'
    },
    {
      label: 'Leads Captured',
      value: '324',
      change: '+8.2%',
      positive: true,
      icon: Users,
      color: 'green'
    },
    {
      label: 'Appointments Booked',
      value: '87',
      change: '+23.1%',
      positive: true,
      icon: Calendar,
      color: 'purple'
    },
    {
      label: 'Estimated Revenue',
      value: '$12,840',
      change: '+15.3%',
      positive: true,
      icon: DollarSign,
      color: 'amber'
    }
  ];

  const topPages = [
    { name: '/products', conversations: 342, leads: 87, conversion: '25.4%' },
    { name: '/pricing', conversations: 298, leads: 63, conversion: '21.1%' },
    { name: '/contact', conversations: 245, leads: 92, conversion: '37.6%' },
    { name: '/services', conversations: 198, leads: 54, conversion: '27.3%' },
    { name: '/about', conversations: 165, leads: 28, conversion: '17.0%' }
  ];

  const recentConversations = [
    { id: 1, visitor: 'John Smith', page: '/pricing', sentiment: 'positive', time: '2 min ago', status: 'active' },
    { id: 2, visitor: 'Sarah Johnson', page: '/products', sentiment: 'neutral', time: '5 min ago', status: 'completed' },
    { id: 3, visitor: 'Mike Wilson', page: '/contact', sentiment: 'positive', time: '12 min ago', status: 'converted' },
    { id: 4, visitor: 'Emma Davis', page: '/services', sentiment: 'negative', time: '18 min ago', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your performance overview.</p>
            </div>
            <div className="flex gap-2">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses: Record<string, string> = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              amber: 'bg-amber-100 text-amber-600'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight size={16} />
                    <span className="text-sm font-semibold">{stat.change}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Conversations Trend</h3>
              <span className="text-sm text-gray-600">Last 7 days</span>
            </div>
            <div className="h-64 flex items-end justify-around gap-3 bg-gray-50 rounded-lg p-6">
              {[65, 78, 72, 89, 95, 82, 88].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height * 2}px` }}
                    transition={{ delay: i * 0.1 }}
                    className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                  />
                  <span className="text-xs text-gray-600 mt-2">Day {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 p-8"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Conversion Insights</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">Lead Rate</p>
                  <p className="font-bold text-gray-900">25.9%</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '25.9%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">Booking Rate</p>
                  <p className="font-bold text-gray-900">6.9%</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '6.9%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">Response Rate</p>
                  <p className="font-bold text-gray-900">87.3%</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '87.3%' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-8 mb-12"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-6">Top Performing Pages</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Page</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Conversations</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Leads</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">{page.name}</td>
                    <td className="py-4 px-4 text-right text-gray-600">{page.conversations}</td>
                    <td className="py-4 px-4 text-right text-gray-600">{page.leads}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                        <ArrowUpRight size={16} />
                        {page.conversion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Conversations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl border border-gray-200 p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Conversations</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {recentConversations.map((conv) => {
              const statusColors: Record<string, string> = {
                active: 'bg-blue-100 text-blue-700',
                completed: 'bg-gray-100 text-gray-700',
                converted: 'bg-green-100 text-green-700'
              };

              return (
                <div key={conv.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {conv.visitor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{conv.visitor}</p>
                      <p className="text-sm text-gray-600">{conv.page} • {conv.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[conv.status]}`}>
                      {conv.status.charAt(0).toUpperCase() + conv.status.slice(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;