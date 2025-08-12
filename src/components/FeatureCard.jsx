import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, features = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/30 transition-colors duration-300">
          <Icon className="h-6 w-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default FeatureCard;