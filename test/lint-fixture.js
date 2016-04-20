'use strict';

const fileName = './test/fixture.ts';

const fs = require('fs');
const path = require('path');
const Linter = require('tslint');

const config = require('../tslint.json');
const options = {
  formatter: 'verbose',
  configuration: config,
  rulesDirectory: './node_modules/codelyzer'
};
const contents = fs.readFileSync(path.resolve(fileName), 'utf8');
const ll = new Linter(fileName, contents, options);
const result = ll.lint();

/* eslint-disable */
console.log(result);
