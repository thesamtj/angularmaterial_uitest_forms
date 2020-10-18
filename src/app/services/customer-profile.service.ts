import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileService {
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get('data/customers.json').pipe(delay(2000)) as Observable<
      Customer[]
    >;
  }
}
