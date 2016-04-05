# Welcome to the most strict tslint config ever
[![npm version](https://badge.fury.io/js/tslint-config-valorsoft.svg)](http://badge.fury.io/js/tslint-config-valorsoft) [![npm downloads](https://img.shields.io/npm/dm/tslint-config-valorsoft.svg)](https://npmjs.org/tslint-config-valorsoft)
[![Build Status](https://travis-ci.org/valor-software/tslint-config-valorsoft.svg?branch=master)](https://travis-ci.org/valor-software/tslint-config-valorsoft)
[![Dependency Status](https://david-dm.org/valor-software/tslint-config-valorsoft.svg)](https://david-dm.org/valor-software/tslint-config-valorsoft)
[![devDependency Status](https://david-dm.org/valor-software/tslint-config-valorsoft/dev-status.svg)](https://david-dm.org/valor-software/tslint-config-valorsoft#info=devDependencies)

## Philosophy
- contains all rules
- almost all rules enabled
- this config is highly opinionated

## Where to use
- angular2 projects or any typescript

## Install
```sh
npm install tslint-config-valorsoft
```

```js
// tslint.json
{
  "extends": "tslint-config-valorsoft",
  "rules": {
    // your customization
  }
}
```
<!--
## What is disabled
- `no-eq-null` - duplicates `eqeqeq:smart`
- `no-restricted-imports`, `no-restricted-modules`, `no-restricted-globals` - dependant on project requirements
- `id-match` - not found any particular use of this rule, `camelCase` is enough
- `jsx-quotes` - I don't use jsx so I don't care
- `no-plusplus` - why not `++`? It's nice to use when you know what you are doing
- `no-restricted-syntax` - duplicates `no-with` and disabled functional expressions
- `no-ternary` - why not? but not nested ternary please
- `require-jsdoc`- nice thing, but hard to follow
- `spaced-comment` - nice for meaningful comments, bad for quick code commenting
- `wrap-regex` - no need
- `prefer-reflect` - compatibility is to low to use
- `newline-before-return` - TBD

## What is tweaked
- `indent` - 2 spaces rulezzz!
- `max-len` - extended to 120 chars
- `newline-per-chained-call` - extended `ignoreChainWithDepth` to 3
- `eqeqeq` - `smart` mode enabled
- `dot-location` - `property` mode enabled
- `no-implicit-coercion` - boolean implicit coercion enabled
- `func-style` - `declaration` only please
- `no-use-before-define` - usage of `function` before declarations are allowed
- `no-mixed-requires`- `grouping` and `allowCall` checks enabled
- `linebreak-style` - unix only
- `one-var` - `never` use one `var|let|const` per block
- `padded-blocks` - `never` add useless padding
- `quote-props` - quote properties only `as-needed` and `keywords`
- `no-magic-numbers` - `ignore` `-1,0,1` as most often used numbers and `ignoreArrayIndexes`, `enforceConst` are enabled
-->
## Contribution
- what I really appreciate is configs for IDEs
- to change any rule you should have strong arguments and not only opinion

## LICENSE
MIT
