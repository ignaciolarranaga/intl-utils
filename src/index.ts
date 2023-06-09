export interface Translations {
  [locale: string]: {
    [key: string]: string
  }
}

export type TranslateFunction = (
  text: string,
  ...customLocales: string[]
) => string

export const useTranslation = (
  translations: Translations,
  ...defaultLocales: string[]
): TranslateFunction => {
  return (text: string, ...customLocales: string[]) => {
    const locales = [
      ...(customLocales ? customLocales : []),
      ...(defaultLocales ? defaultLocales : []),
    ]

    for (const locale of locales) {
      if (translations[locale] && translations[locale][text]) {
        return translations[locale][text]
      }
    }

    return text
  }
}
