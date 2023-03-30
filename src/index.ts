export interface Translations {
  [locale: string]: {
    [key: string]: string
  }
}

export const useTranslation = (translations: Translations, locale?: string) => {
  return (text: string) => {
    return locale && translations[locale] && translations[locale][text]
      ? translations[locale][text]
      : text
  }
}
