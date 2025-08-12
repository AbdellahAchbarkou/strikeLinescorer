import { motion } from 'framer-motion';
import { Monitor, Smartphone, Users, Settings, Wifi, Trophy, Clock, BarChart3 } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const FeaturesPage = () => {
  const { t, isRTL } = useLanguage();

  const mainFeatures = [
    {
      icon: Monitor,
      title: t('features.poolApp.title'),
      description: t('features.poolApp.description'),
      features: t('features.poolApp.features')
    },
    {
      icon: Trophy,
      title: t('features.snookerApp.title'),
      description: t('features.snookerApp.description'),
      features: t('features.snookerApp.features')
    },
    {
      icon: Smartphone,
      title: t('features.remoteControl.title'),
      description: t('features.remoteControl.description'),
      features: t('features.remoteControl.features')
    },
    {
      icon: Users,
      title: t('features.arenaDisplay.title'),
      description: t('features.arenaDisplay.description'),
      features: t('features.arenaDisplay.features')
    },
    {
      icon: Clock,
      title: t('features.waitingList.title'),
      description: t('features.waitingList.description'),
      features: t('features.waitingList.features')
    },
    {
      icon: Settings,
      title: t('features.systemConfig.title'),
      description: t('features.systemConfig.description'),
      features: t('features.systemConfig.features')
    }
  ];

  const technicalFeatures = [
    {
      icon: Wifi,
      title: t('features.wirelessConnectivity.title'),
      description: t('features.wirelessConnectivity.description')
    },
    {
      icon: BarChart3,
      title: t('features.analyticsReports.title'),
      description: t('features.analyticsReports.description')
    }
  ];

  return (
    <div className={`pt-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="text-cyan-400">Feature Set</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover all the powerful features that make Strikeline Scorer the ultimate scoreboard solution for professional billiard venues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Five essential applications working together to create the perfect scoring environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced technical features that ensure reliable and professional operation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Venues Choose <span className="text-cyan-400">Our System</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2">Professional Accuracy</h3>
                  <p className="text-gray-400">Tournament-grade scoring precision that eliminates disputes and ensures fair play.</p>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2">Enhanced Customer Experience</h3>
                  <p className="text-gray-400">Modern digital displays and organized queue management improve customer satisfaction.</p>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2">Operational Efficiency</h3>
                  <p className="text-gray-400">Streamlined operations with automated scoring and player management reduce staff workload.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-600/20 to-slate-800/50 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Complete System Package</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5000 MAD</div>
                  <div className="text-gray-300">One-time purchase</div>
                </div>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    All 5 applications included
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Professional installation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Staff training included
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Ongoing support
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/10 to-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See These Features in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demonstration and see how Strikeline Scorer can transform your venue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="xl" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;