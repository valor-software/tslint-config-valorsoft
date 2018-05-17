// just dummy typescript file
import { Component, ElementRef, OnInit } from '@angular/core';

const num = 1;
let me: {};

export interface LintResult {
  failureCount: number;
  format: string;
  output: string;
}

@Component({
  selector: 'sg-codelyzer',
  template: `
    <h1>Hello {{ name }}!</h1>
  `
})
class CodelyzerComponent implements OnInit {
  name = 'World';
  field = true;
  private readonly _field: boolean;

  constructor(public test: ElementRef) {}

  ngOnInit(): void {
    console.log('Initialized');
  }
}
