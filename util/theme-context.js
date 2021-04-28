import {createContext} from 'react';

export const themes = {
    light: {
        backgroundYellow: '#FFD865',
        backgroundBlue: '#EEEEFF',
        highlightYellowLight: '#FFE595',
        highlightYellowMediumLight: '#FFDF7F',
        highlightYellowMedium: '#FFDC75',
        highlightYellowDark: '#FFD865',
        highlightBlue: '#B5D9F0',
        menuLetters: '#83B7FF',
        menuHighlights: '#145EA0',
        titleColor: '#002443'
    },
    dark: {
        backgroundYellow: '#332d25',
        backgroundBlue: '#292533',
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

