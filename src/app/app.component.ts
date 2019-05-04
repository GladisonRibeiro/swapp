import { Component } from '@angular/core';

import { People } from './models/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personSelected: People;
  title = 'swapp';


  onSelectPerson(person: People) {
    this.personSelected = person;
  }
}
