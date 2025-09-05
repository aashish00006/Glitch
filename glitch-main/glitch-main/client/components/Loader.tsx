import { motion } from 'framer-motion';

const Loader = () => {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'In the middle of every difficulty lies opportunity. - Albert Einstein',
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    'The best way to predict the future is to create it. - Peter Drucker',
    'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
    'The harder I work, the luckier I get. - Samuel Goldwyn',
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div 
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="glitch-text text-glitch-primary"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span aria-hidden="true">glitch</span>
          glitch
          <span aria-hidden="true">glitch</span>
        </motion.div>
        
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-muted-foreground font-medium">
            {randomQuote}
          </p>
        </motion.div>

        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-glitch-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;