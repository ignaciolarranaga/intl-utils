import { useTranslation } from '.';

const SAMPLE_TRANSLATIONS = {
  /* spellchecker: disable */
  es: {
    'Hello': 'Hola'
  }
  /* spellchecker: enable */
}

it("must get the translation in the provided locale", () => {
  // Arrange
  const t = useTranslation(SAMPLE_TRANSLATIONS, 'es');

  expect(t('Hello')).toBe('Hola'); // spellchecker: disable-line
});

it("must get the original text when no translation is found because the key was not defined", () => {
  // Arrange
  const t = useTranslation(SAMPLE_TRANSLATIONS, 'es');

  expect(t('Hello World')).toBe('Hello World');
});

it("must get the original text when no translation is found because the locale is not defined", () => {
  // Arrange
  const t = useTranslation(SAMPLE_TRANSLATIONS, 'pt');

  expect(t('Hello')).toBe('Hello');
});
