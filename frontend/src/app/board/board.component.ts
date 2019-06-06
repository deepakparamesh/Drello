import { Component, OnInit } from '@angular/core';
import { Board } from '../board/board';
import { BoardService } from './board.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

declare var jquery: any;
const curYPos = 0,
      curXPos = 0,
      curDown = false;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;

  constructor(private _router: Router,
              private _rotue: ActivatedRoute) { }

  ngOnInit() {
    const boardId = this._rotue.snapshot.params['id'];
  }

}
