# intl-utils

This is an utility for internationalization of applications.

An example with NextJS will be as follows:

```
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import { useTranslation } from 'intl-utils';

import translations from './translations';

function HomePage(props: WithRouterProps) {
  const t = useTranslation(translations, props.router.locale);

  return <p>{t('Hello World')}</p>
}

export default withRouter(HomePage);
```

Where `translations.js` is as follows:

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

The structure of the file is:

```
module.exports = {
  LOCALE: {
    KEY: TRANSLATED_KEY
  }
}
```

Where _TRANSLATED_KEY_ is the translation of _KEY_ on _LOCALE_

> Please note that [intl-utils-aws-translate](https://github.com/ignaciolarranaga/intl-utils-aws-translate) can help you to automatically generate the translation files using AWS Translate.

## Release Process

- Commit your changes
- Adjust the version, e.g.: `npm version patch`
- Build `npm run build`
- Publish `npm publish`
- Push the changes e.g. `git push --tags && git push`
- Create the release in Github
