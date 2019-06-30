import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.currentUsername.subscribe(username => {
      if (!username) {
        const user = prompt('Enter an existing or new username', '');
        if (user === '' || user === null) {
          this.username = 'public';
          localStorage.setItem('username', 'public');
          this.appService.changeUsername(this.username);
        } else {
          this.username = user;
          localStorage.setItem('username', user);
          this.appService.changeUsername(this.username);
        }
      } else {
        this.username = username;
      }
    });

  }

  openModal() {
    const username = prompt('Enter an existing or new username', '');
    if (username === '' || username === null) {
      this.username = 'public';
      localStorage.setItem('username', 'public');
      this.appService.changeUsername(this.username);
    } else {
      this.username = username;
      localStorage.setItem('username', username)
      this.appService.changeUsername(username);
    }
  }

}
