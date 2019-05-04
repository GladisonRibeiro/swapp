import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { PeopleResponse } from './../models/people-response';
import { PeopleService } from './../people.service';
import { People } from '../models/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  peopleResponse: Observable<PeopleResponse>;

  @Output() selectPerson = new EventEmitter();

  constructor(private pService: PeopleService) 
  { }

  ngOnInit() 
  {
    this.peopleResponse = this.pService.getPeople();
  }

  ngOnDestroy() 
  {
    
  }

  onSelectPerson(person: People) {
    this.selectPerson.next(person);
  }

  onNextPage(url) {
    this.peopleResponse = this.pService.getPeople(url);
  }

}
