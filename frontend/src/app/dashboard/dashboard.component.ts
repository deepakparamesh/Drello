import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from '../board/board';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boards: Board[];
  constructor(private boardService:  BoardService,
    private _router: Router) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards() {
    const userObj = {username: 'deepak'};
    this.boardService.getAll(userObj).subscribe((boards: Board[]) => {
      this.boards = boards;
    });
  }

  public addBoard() {
    const boardObj = { title: 'New Board',
                       _user: 'deepak' };

    this.boardService.post(<Board>boardObj)
      .subscribe((board: Board) => {
        this._router.navigate(['b', board['result']._id]);
      });
  }

}
