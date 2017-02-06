# eslint-config-nava

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Navanauts and beyond.


## Installation

```
$ npm install --save-dev eslint @navahq/eslint-config-nava
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

### Using the `nava` config with `eslint:recommended`

It's suggested to use the `nava` ruleset alongside the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/).

To use in conjunction with ESLint's recommended rule set, extend them both, making sure to list `nava` last:

```js
{
  "extends": ["eslint:recommended", "nava"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
