import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Board } from '../board/board';
import { BoardService } from './board.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../ws.service';
import { ListService } from '../list/list.service';
import { List } from '../list/list';

declare var jQuery: any;
const curYPos = 0,
      curXPos = 0,
      curDown = false;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  board: Board;
  addingList = false;
  addListText: string;
  editingTilte = false;
  currentTitle: string;
  boardWidth: number;
  listsAdded = 0;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _ws: WebSocketService,
              private _boardService: BoardService,
              private _listService: ListService,
              private el: ElementRef
              ) { }

  ngOnInit() {
    this._ws.connect();
    this._ws.onListAdd.subscribe(list => {
      this.board._lists.push(list);
      this.updateBoardWidth();
    });

    this._ws.onCardAdd.subscribe(card => {
      this.board.cards.push(card);
    });
    const boardId = this._route.snapshot.params['id'];

    this._boardService.getBoardWithListsAndCards(boardId).subscribe(data => {
      console.log(data);
      this._ws.join(boardId);

      this.board = data[0]['result'];

      document.title = 'Drello';
      this.setupView();
    });
  }

  ngOnDestroy() {
    this._ws.leave(this.board._id);
  }

  setupView() {
    const component = this;
    setTimeout(function () {
      let startList;
      jQuery('#main').sortable({
        items: '.sortable-list',
        handler: '.header',
        connectWith: '#main',
        placeholder: 'list-placeholder',
        dropOnEmpty: true,
        tolerance: 'pointer',
        start: function (event, ui) {
          ui.placeholder.height(ui.item.find('.list').outerHeight());
          startList = ui.item.parent();
        },
        stop: function (event, ui) {
          const listId = ui.item.find('.list').attr('list-id');
          component.updateListOrder({
            listId: listId
          });
        }
      }).disableSelection();

      window.addEventListener('resize', function (e) {
        component.updateBoardWidth();
      });
      component.updateBoardWidth();
      document.getElementById('content-wrapper').style.backgroundColor = '';
    }, 100);
  }

  updateListOrder(event) {
    let i = 0,
      elBefore = -1,
      elAfter = -1,
      newOrder = 0;
    const listEl = jQuery('#main'),
          listArr = listEl.find('.list');

    for (i = 0; i < listArr.length - 1; i++) {
      if (listEl.find('.list')[i].getAttribute('list-id') === event.listId) {
        break;
      }
    }

    if (i > 0 && i < listArr.length - 1) {
      elBefore = +listArr[i - 1].getAttribute('list-order');
      elAfter = +listArr[i + 1].getAttribute('list-order');

      newOrder = elBefore + ((elAfter - elBefore) / 2);
    } else if (i === listArr.length - 1) {
      elBefore = +listArr[i - 1].getAttribute('list-order');
      newOrder = elBefore + 1000;
    } else if (i === 0) {
      elAfter = +listArr[i + 1].getAttribute('list-order');
      newOrder = elAfter / 2;
    }

    const list = this.board._lists.filter(x => x._id === event.listId)[0];
    list.order = newOrder;
    this._listService.put(list).then(res => {
      this._ws.updateList(this.board._id, list);
    });
  }

  updateBoardWidth() {
    this.boardWidth = ((this.board._lists.length + 1) * 200) + 10;

    if (this.boardWidth > document.body.scrollWidth) {
      document.getElementById('main').style.width = this.boardWidth + 'px';
    } else {
      document.getElementById('main').style.width = '100%';
    }

    if (this.listsAdded > 0) {
      const wrapper = document.getElementById('content-wrapper');
      wrapper.scrollLeft = wrapper.scrollWidth;
    }

    this.listsAdded++;
  }

  editTitle() {
    this.currentTitle = this.board.title;
    this.editingTilte = true;

    const input = this.el.nativeElement
      .getElementByClassName('board-title')[0]
      .getElementByTagName('input')[0];

    setTimeout( function() { input.focus(); }, 0);
  }

  blurOnEnter($event) {
    if ($event.keyCode === 13) {
      $event.target.blur();
    }
  }

  updateBoard() {
    if (this.board.title && this.board.title.trim() !== '') {
      console.log('im perfect' + this.board);
      this._boardService.put(this.board);
    } else {
      this.board.title = this.currentTitle;
    }
    this.editingTilte = false;
    document.title = this.board.title + ' | Drello';
  }

  updateListElements(list: List) {
    const listArr = jQuery('#main .list');
    const listEl = jQuery('#main .list[listid=' + list._id + ']');
    let i = 0;
    for ( ; i < listArr.length - 1; i++) {
      // tslint:disable-next-line:no-unused-expression
      list.order < +listArr[i].getAttribute('list-order');
      break;
    }

    listEl.remove().insertBefore(listArr[i]);
  }

  enableAddList() {
    this.addingList = true;
    const input = jQuery('.add-list')[0]
    .getElementByTagName('input')[0];

    setTimeout(() => {input.focus(); }, 0);
  }

  addList() {
    const newList = <List>{

    };
  }
}
