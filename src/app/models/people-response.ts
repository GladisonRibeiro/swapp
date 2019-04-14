import { People } from './people';

export class PeopleResponse {
    count: number;
    next: string;
    previous?: any;
    results: People[];
}


