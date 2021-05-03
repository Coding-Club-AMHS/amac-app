import {createContext} from 'react';

export const themes = {
    light: {
        backgroundCream: '#fff6e6',
        backgroundYellow: '#FFD865',
        backgroundBlue: '#eeeeff',
        defaultYellow: '#E0BE36',
        highlightYellowLight: '#FFE595',
        highlightYellowMediumLight: '#FFDF7F',
        highlightYellowMedium: '#FFDC75',
        highlightYellowDark: '#FFD865',
        highlightBlue: '#B5D9F0',
        menuLetters: '#83B7FF',
        menuHighlights: '#145EA0',
        titleColor: '#002443',
        borderColor: '#dec3c3',
        
    },
    dark: {
        backgroundCream: '#241800',
        backgroundYellow: '#332d25',
        backgroundBlue: '#101026',
        highlightYellowLight: '#FFE595',
        highlightYellowMediumLight: '#FFDF7F',
        highlightYellowMedium: '#FFDC75',
        highlightYellowDark: '#FFD865',
        highlightBlue: '#145EA0',
        menuLetters: '#83B7FF',
        menuHighlights: '#145EA0',
        titleColor: '#002443'
    },
};

export const ThemeContext = createContext(themes.light);

