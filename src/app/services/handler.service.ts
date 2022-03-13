import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Contact {
  name: string;
  age?: string;
  contactNumber: string;
  companyName?: string;
  netSalary?: string;
  workingSince?: string;
  currentLoansEmi?: string;
  requiredLoanAmount?: string;
  location?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HandlerService {
  private _pageTitle = new BehaviorSubject<string>(
    'Equator Financial Advisory'
  );
  pageTitle = this._pageTitle.asObservable();
  constructor(private http: HttpClient) {}

  updateTitle(title: string) {
    this._pageTitle.next(title);
  }

  sendEnquiry(contact: Contact) {
    return this.http.post(
      `${environment.serverUrl}/mail/send-enquiry`,
      contact
    );
  }
}
