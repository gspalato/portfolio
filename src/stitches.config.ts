import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: 'gs',
    tokens: {
        colors: {
            $backgroundColor: '$black',

            $black: '#000000',
            $disabledgray: '#98989d',
            $vividblue: '#06f',
            $vividgreen: '#28cd41',

            $spectrumGradient: `linear-gradient(94.75deg,
                rgb(5, 157, 255) 0%,
                rgb(101, 73, 213) 43.66%,
                rgb(227, 63, 161) 64.23%,
                rgb(246, 79, 86) 80.09%,
                rgb(251, 83, 67) 83.76%,
                rgb(253, 123, 66) 100%)`,
        },
        fonts: {
            $paragraphFont: '$helveticaNeue',

            $helveticaNeue: 'Helvetica Neue, apple-system, sans-serif',
            $inter: 'Inter, apple-system, sans-serif',
            $roboto: 'Roboto, apple-system, sans-serif',
        }
    },
    breakpoints: {},
    utils: {
        linearGradient: (config) => (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
    },
});