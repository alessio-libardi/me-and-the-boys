module.exports = {
    purge: process.env.NODE_ENV === 'development' ? false : {
        content: ['./src/**/*.html', './src/**/*.js'],
        css: ['./src/**/*.css']
    },
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}