import { getLocale, setLocale } from '../localization.js';

export const locales = window.AR_MUSEUM_LANGUAGE_CONFIG?.locales || { 'en-US': 'English' };
export const getCurrentLocale = getLocale;
export const setCurrentLocale = setLocale;
