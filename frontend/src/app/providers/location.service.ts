import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  data: any;

  constructor(public http: HttpClient, public user: UserData, private authService: AuthService) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get('/voter/locations').pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    this.data = data;
    return this.data;
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  setLocation(location: any) {
    const user = this.authService.getCurrentUserValue();
    user.preferredvotinglocation = location;
    user.currentLocation = location;
    this.http.put('/acounts/user/', user).subscribe(
      user => {
        this.authService.setUser(user);
      },
      err => console.error(err)
    );
  }
}
