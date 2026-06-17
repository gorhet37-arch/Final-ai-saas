import React, { useState } from 'react';
import { Settings, Bell, Lock, CreditCard, Users, HelpCircle, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs } from '@/components/ui/tabs';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: Settings },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'team', label: 'Team', icon: Users }
  ];

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account, billing, and preferences</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Profile */}
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Company Name</label>
                      <input
                        type="text"
                        defaultValue="Acme Inc"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <Button onClick={handleSave} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                  <h3 className="text-lg font-bold text-red-900 mb-2">Danger Zone</h3>
                  <p className="text-red-700 mb-6">Irreversible actions</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
                </div>
              </motion.div>
            )}

            {/* Billing */}
            {activeTab === 'billing' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Current Plan */}
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Current Plan</h3>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">Professional</p>
                      <p className="text-gray-600 mt-1">$199/month • Renews on July 17, 2026</p>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                  <div className="space-y-3">
                    {['Up to 1,000 conversations/month', 'Advanced AI + Lead capture', 'Priority support', 'Real-time analytics'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={18} className="text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Method</h3>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 text-white mb-6">
                    <p className="text-sm text-gray-300 mb-2">Visa</p>
                    <p className="text-2xl tracking-wider">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-300 mt-4">Expires 08/26</p>
                  </div>
                  <Button variant="outline">Update Payment Method</Button>
                </div>
              </motion.div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Email Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'New Leads', description: 'Get notified when new leads are captured' },
                      { label: 'Appointment Booked', description: 'Receive alerts for scheduled appointments' },
                      { label: 'System Updates', description: 'Stay informed about product improvements' },
                      { label: 'Weekly Summary', description: 'Get your performance report every Monday' }
                    ].map((notif, i) => (
                      <label key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">{notif.label}</p>
                          <p className="text-sm text-gray-600">{notif.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Password</h3>
                  <Button variant="outline">Change Password</Button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Two-Factor Authentication</h3>
                  <p className="text-gray-600 mb-6">Add an extra layer of security to your account</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Enable 2FA</Button>
                </div>
              </motion.div>
            )}

            {/* Team */}
            {activeTab === 'team' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Team Members</h3>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Invite Team Member</Button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'John Doe', email: 'john@example.com', role: 'Owner', status: 'Active' },
                      { name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' }
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{member.role}</p>
                          <p className="text-sm text-green-600">{member.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;