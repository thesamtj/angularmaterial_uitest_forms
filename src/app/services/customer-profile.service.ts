import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {

  constructor(private http: HttpClient) {
    getAllCustomers(): Observable<Customer[]> {
      return this.http.get('customers.json').pipe(delay(2000)) as Observable<Customer[]>;
    }
  }
}
