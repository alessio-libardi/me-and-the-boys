module.exports = {
    purge: {
        content: ['./src/**/*.html', './src/**/*.js'],
        css: ['./src/**/*.css']
    },
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif']
            },
            colors: {
                primary: {
                    default: '#BD866B',
                    '100': '#FCF9F8',
                    '200': '#ECDDD5',
                    '300': '#DCC0B2',
                    '400': '#CCA38E',
                    '500': '#BD866B',
                    '600': '#A96B4C',
                    '700': '#86553C',
                    '800': '#633E2C',
                    '900': '#3F281C'
                }
            }

        },
    },
    variants: {},
    plugins: [],
}