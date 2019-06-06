import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '../httpclient.service';
import { Board } from '../board/board';


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

  // get(id: string) {
  //   return this._http.get(this.apiUrl + )
  // }

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
