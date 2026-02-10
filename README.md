# Shelf/datetime [![CircleCI](https://app.circleci.com/pipelines/github/shelfio/datetime.svg?style=svg)](https://app.circleci.com/pipelines/github/shelfio/datetime)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Shelf dates library. Wrapper on [dayjs](https://day.js.org/) with more of date-fns API

## Install

```
$ yarn add @shelf/datetime
```

## Usage

```js
import {setGlobalLocale, formatDistance} from '@shelf/datetime';
// OR
import setGlobalLocale from '@shelf/datetime/lib/setGlobaleLocale';
import formatDistance from '@shelf/datetime/lib/formatDistance';

setGlobalLocale('uk'); // set non-default locale (default 'en')

formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 20));

setGlobalLocale('en');

formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 20)); // a few seconds ago
```

## React components

Usage:

```jsx
import {FormatTime, RelatimeTime} from '@shelf/datetime/react';

<FormatTime date={new Date()} />;
<FormatTime date="2025-01-02T03:04:05Z" />;
<FormatTime date={new Date()} format="YYYY-MM-DD HH:mm" className="text-xs" />;

<RelatimeTime date={new Date(Date.now() - 60_000)} />;
<RelatimeTime date="2025-01-02T03:03:05Z" addSuffix />;

<FormatTime date={new Date()} asChild className="text-sm">
  <time data-testid="time" />
</FormatTime>;
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
