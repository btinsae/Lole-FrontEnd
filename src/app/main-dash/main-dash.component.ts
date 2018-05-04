import { Component } from '@angular/core';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  cards = [
    { title: 'Request', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Product', cols: 1, rows: 1 },
    { title: 'Sales', cols: 1, rows: 1 }
  ];
}
