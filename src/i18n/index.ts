// eslint-disable-next-line import/order,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/order
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import vi from './locales/vi';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
};

export default I18n;
