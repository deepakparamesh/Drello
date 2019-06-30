import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  username: string = localStorage.getItem('username');
  private usernameSource = new BehaviorSubject(this.username);
  currentUsername = this.usernameSource.asObservable();

  constructor() { }

  setUsername(username) {
    localStorage.setItem('username', username)
    this.usernameSource.next(username);
  }

  getUsername() {
    this.username = localStorage.getItem('username');
    this.usernameSource.next(this.username);
    return this.username;
  }

  changeUsername(username) {
    this.usernameSource.next(username);
  }

  // usernameUpdate() {
  //   this.usernameSource.next()
  // }

}
