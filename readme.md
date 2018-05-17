# Welcome to the most strict tslint config ever
[![npm version](https://badge.fury.io/js/tslint-config-valorsoft.svg)](http://badge.fury.io/js/tslint-config-valorsoft) [![npm downloads](https://img.shields.io/npm/dm/tslint-config-valorsoft.svg)](https://npmjs.org/tslint-config-valorsoft)
[![Build Status](https://travis-ci.org/valor-software/tslint-config-valorsoft.svg?branch=master)](https://travis-ci.org/valor-software/tslint-config-valorsoft)
[![Dependency Status](https://david-dm.org/valor-software/tslint-config-valorsoft.svg)](https://david-dm.org/valor-software/tslint-config-valorsoft)
[![devDependency Status](https://david-dm.org/valor-software/tslint-config-valorsoft/dev-status.svg)](https://david-dm.org/valor-software/tslint-config-valorsoft#info=devDependencies)


Follow me [![twitter](https://img.shields.io/twitter/follow/valorkin.svg?style=social&label=%20valorkin)](https://twitter.com/valorkin) to be notified about new releases.

## Philosophy
- contains all rules explicitly
- almost all rules enabled

## Before install
Check version of your code editor, highly recommended to use latest version.

If you use angular-cli:
 - check that you have latest version, at least 1.0.2, and local and global versions of cli are the same.
 - disable ts lint for polyfill.ts and test.ts(in `src` folder). Add `/* tslint:disable */` at the beginning.
 For more info: https://palantir.github.io/tslint/usage/rule-flags/

## Install
1. Install package
```sh
npm install -D tslint-config-valorsoft
```
- check install log for errors and warnings about wrong versions of required packages (tslint, codelyzer etc.)
- if needed install or update required packages

* Example. You can have this situation in the end of log after installing:
```sh
npm WARN tslint-config-valorsoft@2.0.0 requires a peer of codelyzer@^3.0.0 but none was installed.
npm WARN tslint-config-valorsoft@2.0.0 requires a peer of tslint@^5.1.0 but none was installed.
```
It means that you have to update codelyzer and tslint to ^3.0.0 and ^5.1.0 versions (or higher).

2. Edit your tslint.json:
 - add `"extends": "tslint-config-valorsoft"` 
 or `"extends": ["tslint-config-valorsoft", "tslint-config-valorsoft/tslint-angular.json"],` for angular projects at the beginning, before `rulesDirectory`
 - remove all rules inside `"rules"` object
 - add your custom rules
 - add rules with editable shortname of your project.
```
"component-selector": [true, "element", "MP", "kebab-case"],
"directive-selector": [true, "attribute", "MP", "camelCase"],
"pipe-naming": [true, "camelCase", "MP"]
```
**Note**: `MP` is a placeholder, it is your prefix for components. If you don't need it you should change MP to empty string - `[true, "camelCase", ""]`

Example:
```js
// tslint.json
{
  "extends": ["tslint-config-valorsoft", "tslint-config-valorsoft/tslint-angular.json"],
  "rulesDirectory": "node_modules/codelyzer",

  "rules": {
    // your customization
    // THIS IS IMPORTANT
    // ADD THIS RULES TO YOUR `tslint.json`
    // AND CHANGE `MP` with short name of your project
    "directive-selector": [true, "attribute", "MP", "camelCase"],
    "component-selector": [true, "element", "MP", "kebab-case"],
    "pipe-naming": [true, "camelCase", "MP"]
  }
}
```

## After install
Setup lint command:
 - add `--type-check` parameter to lint command in `package.json`. Example: `"lint": "ng lint --type-check"`;

**Note**: If you have warning `Warning: Cannot read property 'some' of undefined` after running tslint, update
codelyzer and tslint to latest versions. For now they are codelyzer@^3.0.1 and tslint@^5.2.0

You could configure:
 - `ban-types` - https://palantir.github.io/tslint/rules/ban-types/
 - `ban` - https://palantir.github.io/tslint/rules/ban/
 - `import-blacklist` - https://palantir.github.io/tslint/rules/import-blacklist/

Disabled:
- `no-parameter-properties` because it is very convenient to use `constructor(private inject:Service)`
- `no-null-keyword` null should be used to clean references
- `no-require-imports` - `require` is sometimes useful
- `object-literal-sort-keys` not really useful
- `completed-docs` forcing writing a docs, usually leads to low or harmful copy paste style documentation
- `file-header` up to you
- `no-parameter-properties` reading the docs is the best way to avoid confusion
- `prefer-for-of` bad performance
- `prefer-object-spread` bad performance
- `no-magic-numbers` up to you

TBD:
- `promise-function-async` https://palantir.github.io/tslint/rules/promise-function-async/
- `strict-boolean-expressions` https://palantir.github.io/tslint/rules/strict-boolean-expressions/
- `no-boolean-literal-compare` https://palantir.github.io/tslint/rules/no-boolean-literal-compare/
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
