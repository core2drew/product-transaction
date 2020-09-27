import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction-card.model';
@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent implements OnInit {
  constructor() {}
  transactions: Transaction[];
  ngOnInit(): void {
    this.transactions = [
      {
        itemName: 'Item 1',
        price: 200,
        date: '2020-01-17',
      },
      {
        itemName: 'Item 2',
        price: 150,
        date: '2020-05-17',
      },
      {
        itemName: 'Item 2A',
        price: 150,
        date: '2020-06-16',
      },
      {
        itemName: 'Item 2B',
        price: 200,
        date: '2020-06-16',
      },
      {
        itemName: 'Item 2C',
        price: 400,
        date: '2020-06-16',
      },
      {
        itemName: 'Item 3',
        price: 400,
        date: '2020-11-17',
      },
      {
        itemName: 'Item 4 ',
        price: 300,
        date: '2020-12-17',
      },
    ];
  }
}
