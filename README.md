# eslint-config-nava

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Navanauts and beyond.

We're based on [Standard JS](http://standardjs.com/), which provides a complete node/browser/react ruleset, with a few changes:

* using `eslint-config-standard` instead of `standard`, since we want to add additional rules
* adding additional rules that either promote correctness or a higher signal-to-noise ratio
* avoiding rules that are purely stylistic in nature

[See the full Standard JS ruleset here](https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json) and the [Standard React ruleset here](https://github.com/feross/eslint-config-standard-react/blob/master/eslintrc.json).

## Installation

```
$ npm install eslint eslint-config-nava --save-dev
```
or
```
$ yarn add eslint eslint-config-nava --dev
```


## Usage

Once the `eslint-config-nava` package is installed, you can use it by specifying `nava` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "nava",
  "rules": {
    // Additional, per-project rules...
  }
}
```
