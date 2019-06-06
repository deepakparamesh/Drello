import { EventEmitter, Injectable } from '@angular/core';
import { List } from './list/list';
import { Card } from './card/card';
import { environment } from '../environments/environment';
// import { io }  from '../../node_modules/socket.io-client/dist/socket.io.js';
declare var io;
@Injectable()
export class WebSocketService {
  socket: any;
  public onListAdd: EventEmitter<List>;
  public onCardAdd: EventEmitter<Card>;
  public onListUpdate: EventEmitter<List>;
  public onCardUpdate: EventEmitter<Card>;


  constructor() {
    this.onListAdd = new EventEmitter();
    this.onCardAdd = new EventEmitter();
    this.onListUpdate = new EventEmitter();
    this.onCardUpdate = new EventEmitter();
  }

  connect() {
    this.socket = io(environment.apiUrl);

    this.socket.on('addList', data => {
      this.onListAdd.emit(<List>data.list);
    });

    this.socket.on('addCard', data => {
      this.onCardAdd.emit(<Card>data.card);
    });

    this.socket.on('updateList', data => {
      this.onListAdd.emit(<List>data.list);
    });

    this.socket.on('updateCard', data => {
      this.onCardUpdate.emit(<Card>data.card);
    });
  }

  join(boardId: string) {
    this.socket.emit('joinBoard', boardId);
  }

  leave(boardId: string) {
    this.socket.emit('leaveBoard', boardId);
  }

  addList(boardId: string, list: List) {
    this.socket.emit('addList', { boardId: boardId, list: List });
  }

  addCard(boardId: string, card: Card) {
    this.socket.emit('addCard', { boardId: boardId, card: card });
  }

  updateList(boardId: string, list: List) {
    this.socket.emit('updateList', { boardId: boardId, list: list });
  }

  updateCard(boardId: string, card: Card) {
    this.socket.emit('updateCard', { boardId: boardId, card: card });
  }
}
