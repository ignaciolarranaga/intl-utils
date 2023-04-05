export interface Translations {
  [locale: string]: {
    [key: string]: string
  }
}

export const useTranslation = (
  translations: Translations,
  defaultLocale?: string
) => {
  return (text: string, customLocale?: string) => {
    const locale = customLocale || defaultLocale
    return locale && translations[locale] && translations[locale][text]
      ? translations[locale][text]
      : text
  }
}
