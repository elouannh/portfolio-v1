import { createI18n } from 'vue-i18n'

import * as en from './languages/en.json';
import * as fr from './languages/fr.json';
import * as ja from './languages/ja.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: en,
    fr: fr,
    ja: ja,
  },
});

export default i18n;