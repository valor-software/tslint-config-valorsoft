// skip deprecated
'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const changeCase = require('change-case');
const stripComments = require('strip-json-comments');

const config = JSON.parse(stripComments(readFile('./tslint.json')));
const ngConfig = JSON.parse(stripComments(readFile('./tslint-angular.json')));
const rulesInConfig = [...Object.keys(config.rules), ...Object.keys(ngConfig.rules)];

// todo: hack for deprecated rules
// rulesInConfig.push('no-unused-variable');

const rulesInCodelyzer = fs.readdirSync('./node_modules/codelyzer')
  .filter(fileName => /Rule\.js/.test(fileName))
  .map(fileName => path.basename(fileName, 'Rule.js'))
  .map(fileName => changeCase.paramCase(fileName));

const rulesInTslint = fs.readdirSync('./node_modules/tslint/lib/rules')
  .filter(fileName => path.extname(fileName) === '.js')
  .map(fileName => path.basename(fileName, 'Rule.js'))
  .map(fileName => changeCase.paramCase(fileName));

describe('valor config rules set', () => {
  xit('should contain same amount of rules from tslint core', () => {
    expect(rulesInConfig.length).to.be
      .equal(rulesInTslint.length + rulesInCodelyzer.length);
  });
  it('should not contain extra rules', () => {
    const hash = rulesInConfig.reduce((memo, value) => {
      if (memo[value]) {
        console.log(`duplicate ${value}`)
      }
      memo[value] = true;
      return memo;
    }, {});
    rulesInTslint.forEach(v => hash[v] = false);
    rulesInCodelyzer.forEach(v => hash[v] = false);
    const extraRules = rulesInConfig.filter(v => hash[v]);
    if (extraRules.length) {
      console.log(extraRules);
    }
    expect(extraRules.length).to.be.equal(0);
  });
  it('should contain all rules from tslint core', () => {
    const missingRules = [];
    rulesInTslint.forEach(rule => {
      if (rulesInConfig.indexOf(rule) === -1) {
        missingRules.push(rule);
      }
    });
    if (missingRules.length !== 0) {
      throw new Error(missingRules.join(', '));
    }
  });
  it('should not contain deprecated rules', () => {
    const deprecatedRules = [];
    rulesInConfig.forEach(rule => {
      if (rulesInTslint.indexOf(rule) === -1 && rulesInCodelyzer.indexOf(rule) === -1) {
        deprecatedRules.push(rule);
      }
    });
    if (deprecatedRules.length !== 0) {
      throw new Error(deprecatedRules);
    }
  });
  xit('should contain all rules from codelyzer', () => {
    const missingRules = [];
    rulesInCodelyzer.forEach(rule => {
      // expect(rulesInConfig).to.contains(rule);
      if (rulesInConfig.indexOf(rule) === -1) {
        missingRules.push(rule);
      }
    });
    if (missingRules.length !== 0) {
      throw new Error(missingRules.join(', '));
    }

    // rulesInCodelyzer.forEach(rule => {
    //   expect(rulesInConfig).to.contains(rule);
    // });
  });
});

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}
