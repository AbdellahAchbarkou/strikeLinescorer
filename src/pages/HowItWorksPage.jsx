import { motion } from 'framer-motion';
import { Phone, Download, Settings, Play, Users, Monitor } from 'lucide-react';
import Button from '../components/Button';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Reach out via WhatsApp or email to discuss your venue requirements and schedule a consultation.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Settings,
      title: 'Professional Installation',
      description: 'Our team visits your venue to install the TV Box system and configure all applications.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Download,
      title: 'App Setup',
      description: 'Install the mobile remote control app on your devices and connect to the TV Box system.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Play,
      title: 'Training & Demo',
      description: 'Learn how to use all features with hands-on training from our expert team.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: 'TV Box Applications',
      description: 'Dedicated apps for 8 Pool and Snooker scoring displayed on your venue\'s screens.',
      items: ['Real-time score tracking', 'Player name display', 'Game timer', 'Professional interface']
    },
    {
      icon: Phone,
      title: 'Mobile Remote Control',
      description: 'Control the scoreboard from anywhere in your venue using your smartphone.',
      items: ['Wireless control', 'Easy score updates', 'Player management', 'Game settings']
    },
    {
      icon: Users,
      title: 'Waiting List System',
      description: 'Manage player queues efficiently with our digital waiting list application.',
      items: ['Player registration', 'Queue management', 'Automatic notifications', 'Fair play rotation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            How <span className="text-cyan-400">It Works</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your professional scoreboard system up and running in just 4 simple steps.
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 z-0" />
                  )}
                  
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border-2 border-cyan-400">
                      <span className="text-cyan-400 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* System Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            System <span className="text-cyan-400">Components</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Venue?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of cafés and sports halls using Strikeline Scorer to enhance their customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/212123456789?text=Hello, I\'d like to see a demo of Strikeline Scorer', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;