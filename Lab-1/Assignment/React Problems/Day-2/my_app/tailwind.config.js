module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: 0.7 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounceIn: 'bounceIn 0.6s ease-in-out',
      },
    },
  },
};
