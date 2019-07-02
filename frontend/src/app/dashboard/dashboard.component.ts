import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BoardService} from '../board/board.service';
import {Board} from '../board/board'
import { AppService } from 'app/app.service';

@Component({
  selector: 'gtm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  boards: Board[];
  username: string;

  constructor(private _bs: BoardService,
      private _router: Router,
      private appService: AppService) { }

  ngOnInit() {
    this.appService.currentUsername.subscribe(username => {
      this.username = username;
      this.boards = [];
      this._bs.getAll(this.username).subscribe((boards: Board[]) => {
        this.boards = boards;
      });
      setTimeout(function () {
        document.getElementById('content-wrapper').style.backgroundColor = "#fff";
      }, 0);
    });
  }

  public addBoard(){
    console.log('Adding new board');
    this._bs.post(<Board>{
      title: "New board",
      _user: this.username })
      .subscribe((board: Board) => {
        this._router.navigate(['/b', board._id]);
        console.log('new board added');
    });
  }

}