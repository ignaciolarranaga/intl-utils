import { useTranslation } from '.'

const SAMPLE_TRANSLATIONS = {
  /* spellchecker: disable */
  es: {
    Hello: 'Hola',
    'e.g. +1 305 509 6995': 'ej. +54 9 11 1234 5678',
    'e.g. +1 305 509 1234': 'ej. +54 9 11 1234 1234',
  },
  'es-UY': {
    Hello: 'Hola',
    'e.g. +1 305 509 6995': 'ej. +598 1234 5678',
  },
  it: {
    Hello: 'Ciao',
    'e.g. +1 305 509 6995': 'ej. +39 1234 567890',
  },
  /* spellchecker: enable */
}

describe('t', () => {
  it('must get the translation in the default locale when not override', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es')

    expect(t('Hello')).toBe('Hola') // spellchecker: disable-line
  })

  it('must get the translation in the provided locale when overridden', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es')

    expect(t('Hello', 'it')).toBe('Ciao') // spellchecker: disable-line
  })

  it('must get the original text when no translation is found because the key was not defined', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es')

    expect(t('Hello World')).toBe('Hello World')
  })

  it('must get the original text when no translation is found because the locale is not defined', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'pt')

    expect(t('Hello')).toBe('Hello')
  })

  it('must get the es-UY translation because it is first in the order', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es-UY', 'es')

    expect(t('e.g. +1 305 509 6995')).toBe('ej. +598 1234 5678')
  })

  it('must get the es-UY translation because it is first in the order of the override - with no defaults', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS)

    expect(t('e.g. +1 305 509 6995', 'es-UY', 'es')).toBe('ej. +598 1234 5678')
  })

  it('must get the es-UY translation because it is first in the order of the override - with a different default', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es')

    expect(t('e.g. +1 305 509 6995', 'es-UY', 'es')).toBe('ej. +598 1234 5678')
  })

  it('must get the es translation because there is no es-UY translation', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es-UY', 'es')

    expect(t('e.g. +1 305 509 1234')).toBe('ej. +54 9 11 1234 1234')
  })

  it('must get the original text because there is no translation in any of the locales', () => {
    // Arrange
    const t = useTranslation(SAMPLE_TRANSLATIONS, 'es-UY', 'es')

    expect(t('Hello World')).toBe('Hello World')
  })
})
