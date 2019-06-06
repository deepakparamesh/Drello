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

  post(board: Board) {
    const body = JSON.stringify(board);

    return this._http.post(this.apiUrl + '/create', body).pipe(map((res: Response) => {
      return <Board>res.json();
    }));
  }
}
