import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  private _pageTitle = new BehaviorSubject<string>('Equator Financial Advisory')
  pageTitle = this._pageTitle.asObservable();
  constructor() { }

  updateTitle(title: string) {
    this._pageTitle.next(title);
  }
}
