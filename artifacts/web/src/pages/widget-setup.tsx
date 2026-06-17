import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy, Check, Code2, Smartphone, Globe, ShoppingCart, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const WidgetSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [copiedApiKey, setCopiedApiKey] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const steps = [
    { number: 1, title: 'Create API Key', icon: '🔑' },
    { number: 2, title: 'Customize AI', icon: '⚙️' },
    { number: 3, title: 'Install Widget', icon: '💻' },
    { number: 4, title: 'Test Chat', icon: '✅' },
    { number: 5, title: 'Go Live', icon: '🚀' }
  ];

  const platforms = [
    { id: 'html', name: 'HTML Website', icon: Globe, description: 'Paste script tag' },
    { id: 'react', name: 'React/Next.js', icon: Zap, description: 'NPM package' },
    { id: 'wordpress', name: 'WordPress', icon: Settings, description: 'Plugin install' },
    { id: 'shopify', name: 'Shopify', icon: ShoppingCart, description: 'App store' },
    { id: 'custom', name: 'Custom', icon: Code2, description: 'API integration' }
  ];

  const estimatedSetupTime = '5-10 minutes';
  const apiKey = 'sk_live_51234567890abcdefg';

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={32} className="text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">API Key Generated</h3>
                  <p className="text-green-700 mb-4">Your secure API key has been created. Store it safely.</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-green-200 flex justify-between items-center">
                    <code className="text-gray-700 font-mono text-sm">{apiKey}</code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(apiKey);
                        setCopiedApiKey(true);
                        setTimeout(() => setCopiedApiKey(false), 2000);
                      }}
                      className="ml-2 p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      {copiedApiKey ? <Check size={20} className="text-green-600" /> : <Copy size={20} className="text-gray-600" />}
                    </button>
                  </div>
                  <p className="text-xs text-green-600 mt-2">✓ Copied to clipboard</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <label className="block text-sm font-bold text-gray-900 mb-2">AI Assistant Name</label>
                <input
                  type="text"
                  placeholder="e.g., Sarah"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <label className="block text-sm font-bold text-gray-900 mb-2">Assistant Role</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sales Representative</option>
                  <option>Customer Support</option>
                  <option>Appointment Scheduler</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <label className="block text-sm font-bold text-gray-900 mb-2">Custom Instructions</label>
              <textarea
                placeholder="Describe how your AI should behave and what it should help customers with..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedPlatform === platform.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <platform.icon
                    size={32}
                    className={`mx-auto mb-2 ${
                      selectedPlatform === platform.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  />
                  <p className="font-semibold text-sm text-gray-900">{platform.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{platform.description}</p>
                </button>
              ))}
            </div>

            {selectedPlatform && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-white font-mono text-sm">Installation Code</p>
                  <button
                    onClick={() => {
                      const code = getInstallationCode(selectedPlatform);
                      navigator.clipboard.writeText(code);
                      setCopiedApiKey(true);
                      setTimeout(() => setCopiedApiKey(false), 2000);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedApiKey ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                <pre className="text-gray-300 text-xs overflow-x-auto">
                  <code>{getInstallationCode(selectedPlatform)}</code>
                </pre>
              </motion.div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 text-center">
              <Zap size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Test Your Widget</h3>
              <p className="text-gray-600 mb-6">Visit your website and click the chat widget in the bottom right corner</p>
              <div className="bg-white p-4 rounded-lg border border-blue-200 inline-block">
                <p className="text-sm text-gray-700">💬 Click the widget to start a test conversation</p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-xl border border-green-200">
              <CheckCircle2 size={64} className="mx-auto text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">You're Live! 🎉</h3>
              <p className="text-green-700 mb-6">Your AI chat widget is now active on your website and capturing leads 24/7</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Real-time Analytics</p>
                  <p className="text-sm text-gray-600">Track conversations and engagement</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Lead Capture</p>
                  <p className="text-sm text-gray-600">Automatically collect visitor info</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">CRM Sync</p>
                  <p className="text-sm text-gray-600">Send leads to your CRM instantly</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Widget Setup</h1>
              <p className="text-gray-600 mt-1">Estimated time: {estimatedSetupTime}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Step {currentStep} of 5</div>
              <Progress value={(currentStep / 5) * 100} className="mt-2 w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Step Indicators */}
        <div className="flex justify-between mb-12">
          {steps.map((step, index) => (
            <motion.button
              key={step.number}
              onClick={() => setCurrentStep(step.number)}
              className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${
                step.number <= currentStep ? 'opacity-100' : 'opacity-50'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  step.number < currentStep
                    ? 'bg-green-600 text-white'
                    : step.number === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.number < currentStep ? <CheckCircle2 size={24} /> : step.icon}
              </div>
              <span className={`text-xs font-semibold hidden md:block ${
                step.number <= currentStep ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{steps[currentStep - 1].title}</h2>
            {renderStepContent()}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <Button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            variant="outline"
            disabled={currentStep === 1}
            className="px-8"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
            className="px-8 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {currentStep === 5 ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

function getInstallationCode(platform: string): string {
  const codes: Record<string, string> = {
    html: `<script>
  (function() {
    const script = document.createElement('script');
    script.src = 'https://nexusai.app/widget.js';
    script.async = true;
    script.onload = function() {
      window.NexusAI.init({
        apiKey: 'sk_live_1234567890',
        position: 'bottom-right'
      });
    };
    document.head.appendChild(script);
  })();
</script>`,
    react: `import { NexusAI } from 'nexusai-react';

export default function App() {
  return (
    <div>
      <NexusAI apiKey="sk_live_1234567890" />
      {/* Your app content */}
    </div>
  );
}`,
    wordpress: `// 1. Go to Plugins > Add New
// 2. Search for "NexusAI"
// 3. Click Install > Activate
// 4. Go to Settings > NexusAI
// 5. Paste your API Key`,
    shopify: `// 1. Open Shopify App Store
// 2. Search for NexusAI
// 3. Click "Add app"
// 4. Authorize the app
// 5. Follow setup wizard`,
    custom: `const nexusai = require('nexusai-sdk');

const client = new nexusai.Client({
  apiKey: 'sk_live_1234567890'
});

await client.widget.initialize({
  position: 'bottom-right'
});`
  };
  return codes[platform] || '';
}

export default WidgetSetup;