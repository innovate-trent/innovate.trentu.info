module.exports = {
    purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
    darkMode: false, // or 'media' or 'class'
    // mode: 'jit',
    theme: {
      extend: {
        fontFamily: {
          'noto': ['Noto Sans', 'sans-serif'],
          'heading': ['Staatliches', 'monospace'],
        },

        minHeight: (theme) => ({
          ...theme('spacing')
        }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }