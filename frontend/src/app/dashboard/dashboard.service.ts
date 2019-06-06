import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '../httpclient.service';
import { Board } from '../board/board';

@Injectable()
export class DashboardService {
  apiUrl = '/board';
  boardsCache: Board[] = [];

  constructor(private _http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this._http.get(this.apiUrl).pipe(map((res: Response) => <Board[]>res.json().data));
  }

}
