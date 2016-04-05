'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const stripComments = require('strip-json-comments');

const config = JSON.parse(stripComments(readFile('.eslintrc.json')));
const rulesInConfig = Object.keys(config.rules);
const rulesInEslint = fs.readdirSync('./node_modules/eslint/lib/rules');

describe('valor config rules set', () => {
  it('should contain same amount of rules', () => {
    expect(rulesInConfig.length).to.be.equal(rulesInEslint.length);
  });
  it('should contain all rules', () => {
    rulesInEslint.forEach(rule => {
      expect(rulesInConfig).to.contains(path.basename(rule, '.js'));
    });
  });
});

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}
