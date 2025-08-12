import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const PricingPage = () => {
  const { t, isRTL } = useLanguage();
  const features = [
    '8 Pool TV Box Application',
    'Snooker TV Box Application',
    'Arena Display System',
    'Android Remote Control App',
    'Waiting List Management',
    'Professional Installation',
    'Training & Support',
    'Lifetime Updates',
    'No Monthly Fees'
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-bl-lg font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Most Popular
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.completePackage')}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-cyan-400">5,000</span>
                <div className="text-left">
                  <span className="text-xl text-white font-semibold">MAD</span>
                  <p className="text-sm text-gray-400">{t('pricing.oneTimePayment')}</p>
                </div>
              </div>
              <p className="text-gray-300">{t('pricing.everythingIncluded')}</p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-cyan-500/20 rounded-full p-1">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full mb-4"
              onClick={() => window.open('https://wa.me/212123456789?text=Hello, I\'m interested in Strikeline Scorer', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              {t('pricing.getStartedNow')}
            </Button>

            <p className="text-center text-sm text-gray-400">
              {t('pricing.professionalInstallation')}
            </p>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('pricing.noMonthlyFees')}</h3>
              <p className="text-gray-400">{t('pricing.noMonthlyDescription')}</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('pricing.quickSetup')}</h3>
              <p className="text-gray-400">{t('pricing.quickSetupDescription')}</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('pricing.lifetimeUpdates')}</h3>
              <p className="text-gray-400">{t('pricing.lifetimeDescription')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;