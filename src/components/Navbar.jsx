import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Target, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { currentLanguage, changeLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'AR', name: 'العربية', flag: '🇲🇦' }
  ];

  const handleLanguageChange = (language) => {
    changeLanguage(language.code);
    setLanguageOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.features'), path: '/features' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.howItWorks'), path: '/how-it-works' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Target className="h-10 w-10 text-cyan-400" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {t('nav.getStarted')}
            </Link>

            <div className={`relative ${isRTL ? 'ml-4' : ''}`}>
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <span className="text-lg">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50`}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} ${
                        currentLanguage === language.code ? 'bg-slate-700 text-cyan-400' : 'text-gray-300'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-slate-700'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-3 mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.getStarted')}
            </Link>

            <div className="px-3 py-2 border-t border-slate-700">
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-400 text-sm font-medium">Language</span>
                <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} ${
                        currentLanguage === language.code
                          ? 'bg-slate-700 text-cyan-400'
                          : 'text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      <span className="text-sm">{language.flag}</span>
                      <span className="text-xs font-medium">{language.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;