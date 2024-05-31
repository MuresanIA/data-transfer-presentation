import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  standalone: true,
  imports: [],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.scss'
})
export default class ObservableExampleComponent implements OnInit {
  observable = new Observable((subscriber) => {
    subscriber.next(1),
      subscriber.next(2),
      subscriber.next(3),

      setTimeout(() => {
        subscriber.next(4),
          subscriber.complete()
      }, 1000);
  })
  ngOnInit(): void {
    console.log('Just before subscribe');
    this.observable.subscribe({
      next(x) {
        console.log(`Got value ${x}`);
      },
      error(err) {
        console.error(`Something went wrong ${err}`)
      },
      complete() {
        console.log('done');

      }
    })
    console.log('After subscribe');
  }

}
