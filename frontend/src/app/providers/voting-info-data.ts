import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class VotingInfoData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get('assets/data/precincts.json').pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    this.data = data;
    return this.data;
  }

  getCandidates() {
    return this.load().pipe(
      map((data: any) => {
        return data[0].candidates;
      })
    );
  }

  getBallots() {
    return this.load().pipe(
      map(data => {
        return data[0].ballots;
      })
    );
  }
}
