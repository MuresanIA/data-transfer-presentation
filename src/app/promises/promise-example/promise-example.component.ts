import { Component, OnInit, inject } from '@angular/core';
import { firstValueFrom, interval, lastValueFrom, take } from 'rxjs';


@Component({
  selector: 'app-promise-example',
  standalone: true,
  imports: [],
  templateUrl: './promise-example.component.html',
  styleUrl: './promise-example.component.scss'
})
export default class PromiseExampleComponent implements OnInit {
  ngOnInit(): void {
    // simple promise
    this.getDataFromSimplePromise()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error from simple promise:', error);
      });
    //first and last value promise 
    this.firstValue();
    this.lastValue();
  }

  getDataFromSimplePromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Simple Promise: Data fetched successfully');
      }, 2000);
    });
  }

  async firstValue() {
    const source$ = interval(500);
    const firstNumber = await firstValueFrom(source$);
    console.log(`The first number is: , ${firstNumber}`);

  }

  async lastValue() {
    const source$ = interval(500).pipe(take(5));
    const finalNumber = await lastValueFrom(source$);
    console.log(`The final number is ${finalNumber}`);
  }
}