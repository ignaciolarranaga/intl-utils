export interface Translations {
  [locale: string]: {
    [key: string]: string
  }
}

export type TranslateFunction = (text: string, customLocale?: string) => string

export const useTranslation = (
  translations: Translations,
  defaultLocale?: string
): TranslateFunction => {
  return (text: string, customLocale?: string) => {
    const locale = customLocale || defaultLocale
    return locale && translations[locale] && translations[locale][text]
      ? translations[locale][text]
      : text
  }
}
