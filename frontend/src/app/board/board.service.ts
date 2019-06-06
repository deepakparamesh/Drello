import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '../httpclient.service';
import { Board } from '../board/board';
import { List } from '../list/list';
import { Card } from '../card/card';


@Injectable()
export class BoardService {
  apiUrl = '/boards';
  boardCache: Board[] = [];

  constructor(private _http: HttpClient, private http: Http) {

  }

  getAll(userObj): Observable<any>  {
    return this._http.post(this.apiUrl + '/get', userObj).pipe(map((res: Response) => {
      return <Board[]>res.json();
    }));
  }

  get(id: string) {
    return this._http.get(this.apiUrl + '/get/' + id).pipe(map((res: Response) => {
      return <Board[]>res.json();
    }));
  }

  getLists(id: string) {
    const boardObj = { board_id: id };
    return this._http.post('/lists/get' , boardObj).pipe(map((res: Response) => {
      return <List>res.json();
    }));
  }

  getCards(id: string) {
    const boardObj = { board_id: id };
    return this._http.post('/cards/get', boardObj).pipe(map((res: Response) => {
      return <Card>res.json();
    }));
  }

  getBoardWithListsAndCards(id: string) {
    return forkJoin( this.get(id), this.getLists(id), this.getCards(id));
  }

  post(board: Board) {
    const body = JSON.stringify(board);
    return this._http.post(this.apiUrl + '/create', body).pipe(map((res: Response) => {
      return <Board>res.json();
    }));
  }

  put(board: Board) {
    const body = JSON.stringify(board);
    console.log(body);
    this._http.put(this.apiUrl + '/edit/' + board._id, body)
      .toPromise()
      .then(res => console.log(res.json()));
  }

  delete(board: Board) {
    this._http.delete(this.apiUrl + '/delete/' + board._id)
      .toPromise()
      .then(res => console.log(res.json()));
  }
}
