import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, interval, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName=new Subject<string>()
  
  myIntervalObs = interval(1000);
  myNewCustomIntervlObs = Observable.create((observer: any) => {
    let count = 0;
    setInterval(() => {
      observer.next(count)
      if (count > 3) {
        observer.complete();
      }
      if (count > 4) {
        observer.error(new Error('This is an custom error thrown by me!!'));
      }
      count++;
    }, 1000)
  })

  myAdvanceObservable = new Subject();
  myAdvanceObservableTwo = new BehaviorSubject('hello');
  filterMyCustomObservable() {
    const newlyFilterObservable = this.myNewCustomIntervlObs.pipe(
      filter((data: any) => {
        return data != 0
      }),
      map((data: any) => {
        return data + ' is current number'
      })

    )
    return newlyFilterObservable
  }

  constructor() { }
}
