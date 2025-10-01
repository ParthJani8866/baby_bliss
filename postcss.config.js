module.exports = {
  plugins: {
    'postcss-nesting': {}, // ✅ must come before tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
};
