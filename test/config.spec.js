'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const changeCase = require('change-case');
const stripComments = require('strip-json-comments');

const config = JSON.parse(stripComments(readFile('./tslint.json')));
const rulesInConfig = Object.keys(config.rules);

const rulesInCodelyzer = fs.readdirSync('./node_modules/codelyzer/src')
  .filter(fileName => /Rule\.ts/.test(fileName))
  .map(fileName => path.basename(fileName, 'Rule.ts'))
  .map(fileName => changeCase.paramCase(fileName));

const rulesInTslint = fs.readdirSync('./node_modules/tslint/lib/rules')
  .filter(fileName => path.extname(fileName) === '.js')
  .map(fileName => path.basename(fileName, 'Rule.js'))
  .map(fileName => changeCase.paramCase(fileName));

describe('valor config rules set', () => {
  it('should contain same amount of rules from tslint core', () => {
    expect(rulesInConfig.length).to.be
      .equal(rulesInTslint.length + rulesInCodelyzer.length);
  });
  it('should contain all rules from tslint core', () => {
    rulesInTslint.forEach(rule => {
      expect(rulesInConfig).to.contains(rule);
    });
  });
  it('should contain all rules from codelyzer', () => {
    rulesInCodelyzer.forEach(rule => {
      expect(rulesInConfig).to.contains(rule);
    });
  });
});

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}
