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
  ...defaultLocales: (string | undefined)[]
): TranslateFunction => {
  return (text: string, ...customLocales: (string | undefined)[]) => {
    const locales: string[] = [
      ...((customLocales
        ? customLocales.filter(locale => locale != undefined)
        : []) as string[]),
      ...((defaultLocales
        ? defaultLocales.filter(locale => locale != undefined)
        : []) as string[]),
    ]

    for (const locale of locales) {
      if (translations[locale] && translations[locale][text]) {
        return translations[locale][text]
      }
    }

    return text
  }
}
