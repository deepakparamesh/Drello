import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '../httpclient.service';
import { Board } from '../board/board';
import { List } from '../list/list';
import { Card } from '../card/card';



@Injectable()
export class ListService {
  apiUrl = '/lists';

  constructor(private _http: HttpClient, private http: Http) {
  }


  getAll() {
    return this._http.get(this.apiUrl).pipe(
      map( (res: Response) => {
       return <List[]>res.json();
      }));
  }

  get(id: string) {
    return this._http.get(this.apiUrl + '/get/' + id).pipe(map((res: Response) => {
      return <List[]>res.json();
    }));
  }

  put(list: List) {
    return this._http
      .put(this.apiUrl + '/' + list._id, JSON.stringify(list))
      .toPromise();
  }

  post(list: List) {
    return this._http.post(this.apiUrl, JSON.stringify(list))
    .pipe(map((res: Response) => {
      return <List>res.json();
    }));
  }

  delete(list: List) {
    return this._http.delete(this.apiUrl + '/' + list._id)
      .toPromise();
  }

  getCards(id: string) {
    // return this._http.get(this.apiUrl + '/' + id + '/cards')
    //   .map(res => <Card[]>res.json().data);
  }
}
