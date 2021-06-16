import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{ name }}</h1>
    <h2 [style.color]="hasError ? 'red' : 'green'">Home</h2>
    <h2 [style.color]="highlightColor">Home</h2>
    <h2 [ngStyle]="titleStyle">Home</h2>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  public name = 'medhini';
  public hasError = true;
  public highlightColor = 'orange';
  public titleStyle = { color: 'blue', fontStyle: 'italic' };

  constructor() {}

  ngOnInit() {}
}
