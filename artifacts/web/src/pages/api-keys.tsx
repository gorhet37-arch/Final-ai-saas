import React, { useState } from 'react';
import { Copy, Check, Eye, EyeOff, Trash2, Plus, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ApiKeysPage = () => {
  const [keys, setKeys] = useState([
    {
      id: 1,
      name: 'Production Key',
      key: 'sk_live_51234567890abcdefg',
      created: '2026-06-17',
      lastUsed: '2 hours ago',
      hidden: true
    }
  ]);
  const [showNewKeyForm, setShowNewKeyForm] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyKey = (id: number, key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">API Keys</h1>
              <p className="text-gray-600 mt-2">Manage your secure API keys for authentication</p>
            </div>
            <Button
              onClick={() => setShowNewKeyForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Plus size={18} />
              Create New Key
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 flex gap-4"
        >
          <Lock size={24} className="text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900">Keep your API keys secret</h3>
            <p className="text-blue-700 text-sm mt-1">
              Never share your API keys publicly or commit them to version control. Anyone with your key can access your account and incur charges.
            </p>
          </div>
        </motion.div>

        {/* API Keys List */}
        <div className="space-y-4">
          {keys.map((keyItem, index) => (
            <motion.div
              key={keyItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{keyItem.name}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Key Display */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                      <code className="text-gray-700 font-mono text-sm">
                        {keyItem.hidden
                          ? '••••••••••••••••••••••••••••••••'
                          : keyItem.key}
                      </code>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCopyKey(keyItem.id, keyItem.key)}
                          className="p-2 hover:bg-white rounded transition-colors"
                        >
                          {copiedId === keyItem.id ? (
                            <Check size={18} className="text-green-600" />
                          ) : (
                            <Copy size={18} className="text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Created</p>
                        <p className="font-medium text-gray-900">{keyItem.created}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Last Used</p>
                        <p className="font-medium text-gray-900">{keyItem.lastUsed}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-medium text-green-600">● Active</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Key Form */}
        {showNewKeyForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white border border-gray-200 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New API Key</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Key Name</label>
                <input
                  type="text"
                  placeholder="e.g., Production, Development"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowNewKeyForm(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Create Key
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ApiKeysPage;