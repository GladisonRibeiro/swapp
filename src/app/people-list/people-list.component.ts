import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { PeopleResponse } from './../models/people-response';
import { PeopleService } from './../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  peopleResponse: Observable<PeopleResponse>;

  constructor(private pService: PeopleService) 
  { }

  ngOnInit() 
  {
    this.peopleResponse = this.pService.getPeople();
  }

  ngOnDestroy() 
  {
    
  }

}
