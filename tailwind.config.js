module.exports = {
    purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
    darkMode: false, // or 'media' or 'class'
    // mode: 'jit',
    theme: {
      extend: {
        colors: {
          orange: '#F47B20',
          lightorange: '#FF8736',
          lightgreen: '#29F377'
        },
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
      extend: {
        textColor: ['focus-visible'],
        ringColor: ['focus-visible'],
        ringWidth: ['focus-visible']
      },
    },
    plugins: [],
  }