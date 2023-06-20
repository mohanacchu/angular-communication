import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public sharedData = new Subject();


  constructor() { }

  sendData(data : any) {
    this.sharedData.next(data);
  }

  receiveData() {
    return this.sharedData.asObservable();
  }
}
