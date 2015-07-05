# ember-lodash

This ember addon allows consumption of the [lodash](https://lodash.com/) library (its [ES6 module variant](https://github.com/lodash/lodash/tree/es)) in [ember-cli](http://ember-cli.com) apps.

## Use

First you install this addon 

```sh
# ember-cli > 0.2.3
ember install ember-lodash
# ember-cli <= 0.2.3
ember install:addon ember-lodash
```
And then in your ember.js app, you can import individual lodash modules freely

```js
import _string from 'lodash/string';

let truncatedString = _string.trunc(rawString);
```

Additionally, if you wish to work with the entire lodash library on a single namespace, you have the option of importing that as well

```js
import _ from 'lodash/lodash';

let truncatedString = _.trunc(rawString);
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
