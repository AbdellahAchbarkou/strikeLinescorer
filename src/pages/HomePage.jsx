import { motion } from 'framer-motion';
import { Play, Target, Smartphone, Monitor, Users, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Monitor,
      title: '8 Pool & Snooker Apps',
      description: 'Professional TV Box applications for accurate scoring and game management.',
      features: ['Real-time score tracking', 'Professional tournament modes', 'Customizable display themes']
    },
    {
      icon: Smartphone,
      title: 'Mobile Remote Control',
      description: 'Intuitive Android app for seamless game control from anywhere in your venue.',
      features: ['Wireless connectivity', 'User-friendly interface', 'Quick score updates']
    },
    {
      icon: Users,
      title: 'Player Management',
      description: 'Advanced waiting list and arena display system for efficient player rotation.',
      features: ['Queue management', 'Player notifications', 'Tournament brackets']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('home.heroTitle')}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  {t('home.getStartedToday')}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <ImageSwiper />
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.completeSystem')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('home.systemDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('home.whyChoose')}
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  t('home.benefits.oneTime'),
                  t('home.benefits.professional'),
                  t('home.benefits.easyInstall'),
                  t('home.benefits.support'),
                  t('home.benefits.updates')
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t('home.viewPricing')}
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t('home.learnMore')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-600/20 to-slate-800/50 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5000 MAD</div>
                  <div className="text-gray-300 mb-4">{t('home.oneTimePayment')}</div>
                  <div className="text-sm text-gray-400">{t('home.completeIncluded')}</div>
                </div>
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
              {t('home.readyToUpgrade')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.upgradeDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="xl" className="w-full sm:w-auto">
                  {t('home.requestInstallation')}
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                {t('home.scheduleDemo')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Modern billiard hall with professional lighting'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Elegant pool table in upscale venue'
    },
    {
      url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Professional snooker table setup'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Sports café with multiple pool tables'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Billiard club interior with scoreboard displays'
    },
    {
      url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Tournament-ready venue with digital scoring'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
      <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Overlay Content */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Professional Billiard Venues</h3>
          <p className="text-gray-300 text-sm">{images[currentIndex].alt}</p>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? 'bg-cyan-400'
                  : 'bg-slate-400 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;