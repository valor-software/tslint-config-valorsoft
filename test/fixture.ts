// just dummy typescript file
import * as configuration from './configuration';
import {RuleFailure} from './language/rule/rule';

export * from './language/formatter/formatter';

export var Configuration = configuration;

export interface LintResult {
  failureCount: number;
  failures: RuleFailure[];
  format: string;
  output: string;
}
