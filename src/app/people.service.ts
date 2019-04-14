import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { PeopleResponse } from './models/people-response';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) 
  { 

  }

  getPeople(): Observable<any> {
    return this.http
      .get<PeopleResponse>(`${this.url}people`);
  }

}
