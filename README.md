# intl-utils

This is an utility for internationalization of applications.

An example with NextJS will be as follows:
```
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import { useTranslation } from 'intl-utils';

import translations from './index.translations';

function HomePage(props: WithRouterProps) {
  const t = useTranslation(translations, props.router.locale);

  return <p>{t('Hello World')}</p>
}

export default withRouter(HomePage);
```

Where `index.translations` is as follows:
```
/* spellchecker: disable */
module.exports = {
  "es": {
    "Hello World": "Hola mundo"
  },
  "fr": {
    "Hello World": "Bonjour le monde"
  },
  "it": {
    "Hello World": "Ciao mondo"
  },
  "pt": {
    "Hello World": "Olá, mundo"
  }
}
```
