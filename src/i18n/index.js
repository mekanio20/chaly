import { createI18n } from "vue-i18n";

const messages = {
  tm: {},
  ru: {},
  en: {},
};

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});