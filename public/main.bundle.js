webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n\r\n\r\nnav {\r\n  background-color: #0067A3;\r\n  padding: 5px;\r\n  height: 30px;\r\n}\r\n\r\n\r\nnav a {\r\n  float: left;  \r\n  color: white; \r\n}\r\n\r\n\r\nnav a.btn {\r\n  background-color:#4590BC;\r\n  width: 80px;\r\n}\r\n\r\n\r\nnav a.logo{\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  color:#7FB2D1;\r\n  width: calc(100% - 200px);\r\n  text-align: center;\r\n  /*margin-top: -30px;*/\r\n}\r\n\r\n\r\n#content-wrapper {\r\n  width: 100%;\r\n  display: block;\r\n  height: calc(100% - 40px);\r\n  /*overflow: auto;*/\r\n  padding-top: 40px;\r\n}\r\n\r\n\r\n#disclaimer {\r\n  width: 80%;\r\n  margin: auto;\r\n  background-color: #eee;\r\n  padding: 15px;\r\n}\r\n\r\n\r\n#disclaimer h1 {\r\n  margin: 0;\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n#disclaimer .red {\r\n  color: red;\r\n}\r\n\r\n\r\n#disclaimer #closeButton {\r\n  float: right;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n<nav>\r\n    <a class=\"btn\" [routerLink]=\"['']\">|||| Boards</a>\r\n    <a class=\"logo\">Drello</a>\r\n</nav>\r\n</header>\r\n<div id=\"content-wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_service__ = __webpack_require__("./src/app/board/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card_service__ = __webpack_require__("./src/app/card/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__column_column_service__ = __webpack_require__("./src/app/column/column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__httpclient__ = __webpack_require__("./src/app/httpclient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ws_service__ = __webpack_require__("./src/app/ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__column_column_component__ = __webpack_require__("./src/app/column/column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_orderby_pipe__ = __webpack_require__("./src/app/pipes/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_where_pipe__ = __webpack_require__("./src/app/pipes/where.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: 'b/:id', component: __WEBPACK_IMPORTED_MODULE_12__board_board_component__["a" /* BoardComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__column_column_component__["a" /* ColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_14__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_orderby_pipe__["a" /* OrderBy */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_where_pipe__["a" /* Where */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__httpclient__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__ws_service__["a" /* WebSocketService */], __WEBPACK_IMPORTED_MODULE_5__board_board_service__["a" /* BoardService */], __WEBPACK_IMPORTED_MODULE_7__column_column_service__["a" /* ColumnService */], __WEBPACK_IMPORTED_MODULE_6__card_card_service__["a" /* CardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/app.module.js.map

/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#main {\r\n  min-width: 100%;\r\n  /*height: calc(100% - 90px);*/\r\n  overflow: hidden;\r\n}\r\n\r\n.board-title {\r\n  margin-left: 18px;\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.board-title span {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: white;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.board-title input {\r\n    margin: -3px -2px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.add-column {\r\n  width: 280px;\r\n  height: 40px;\r\n  background-color: #0067A3;\r\n  border-radius: 3px; \r\n  width: 270px;\r\n  margin-left: 10px;\r\n  padding: 2px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.add-column span {\r\n\tcolor: rgba(255,255,255,.7);\r\n\tline-height: 40px;\r\n\tvertical-align: middle;\r\n\tpadding: 7px;\r\n\tfont-size: 14px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.add-column input {\t\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-weight: 700;\r\n\tborder: none;\r\n\tline-height: 18px;\r\n\tpadding: 3px 5px 4px 5px;\r\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"board\" class=\"board-title\">\r\n  <span [style.display]=\"editingTilte ? 'none' : ''\" (click)=\"editTitle()\">{{ board?.title }}</span>\r\n\r\n  <input  \r\n    [style.display]=\"editingTilte ? '' : 'none' \"\r\n    (keyup)=\"blurOnEnter($event)\"\r\n    (blur)=\"updateBoard()\"\r\n    [(ngModel)]=\"board.title\" />  \r\n</div>\r\n\r\n<section *ngIf=\"board\" id=\"main\" >\r\n  <div *ngFor=\"let column of board.columns | orderBy : 'order'\" class=\"sortable-column\">\r\n    <gtm-column [column]=\"column\"\r\n        (onAddCard)=\"addCard($event)\"\r\n        [cards]=\"board.cards\">\r\n    </gtm-column>\r\n  </div>\r\n  <div class=\"add-column\"\r\n       (click)=\"enableAddColumn()\" >\r\n  \t<span [style.display]=\"addingColumn ? 'none' : ''\" >Add a list...</span>\r\n   \r\n    <input  \r\n\t    [style.display]=\"addingColumn ? '' : 'none' \"\r\n\t    (keyup)=\"addColumnOnEnter($event)\"\r\n\t    (blur)=\"addColumnOnBlur()\"\r\n\t    [(ngModel)]=\"addColumnText\" />\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_service__ = __webpack_require__("./src/app/board/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_column_service__ = __webpack_require__("./src/app/column/column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ws_service__ = __webpack_require__("./src/app/ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var curYPos = 0, curXPos = 0, curDown = false;
var BoardComponent = (function () {
    function BoardComponent(el, _ws, _boardService, _columnService, _router, _route) {
        this.el = el;
        this._ws = _ws;
        this._boardService = _boardService;
        this._columnService = _columnService;
        this._router = _router;
        this._route = _route;
        this.addingColumn = false;
        this.editingTilte = false;
        this.columnsAdded = 0;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ws.connect();
        this._ws.onColumnAdd.subscribe(function (column) {
            console.log('adding column from server');
            _this.board.columns.push(column);
            _this.updateBoardWidth();
        });
        this._ws.onCardAdd.subscribe(function (card) {
            console.log('adding card from server');
            _this.board.cards.push(card);
        });
        var boardId = this._route.snapshot.params['id'];
        //let boardId = this._routeParams.get('id');
        this._boardService.getBoardWithColumnsAndCards(boardId)
            .subscribe(function (data) {
            console.log("joining board " + boardId);
            _this._ws.join(boardId);
            _this.board = data[0];
            _this.board.columns = data[1];
            _this.board.cards = data[2];
            document.title = _this.board.title + " | Generic Task Manager";
            _this.setupView();
        });
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        console.log("leaving board " + this.board._id);
        this._ws.leave(this.board._id);
    };
    BoardComponent.prototype.setupView = function () {
        var component = this;
        setTimeout(function () {
            var startColumn;
            jQuery('#main').sortable({
                items: '.sortable-column',
                handler: '.header',
                connectWith: "#main",
                placeholder: "column-placeholder",
                dropOnEmpty: true,
                tolerance: 'pointer',
                start: function (event, ui) {
                    ui.placeholder.height(ui.item.find('.column').outerHeight());
                    startColumn = ui.item.parent();
                },
                stop: function (event, ui) {
                    var columnId = ui.item.find('.column').attr('column-id');
                    component.updateColumnOrder({
                        columnId: columnId
                    });
                }
            }).disableSelection();
            //component.bindPane();;
            window.addEventListener('resize', function (e) {
                component.updateBoardWidth();
            });
            component.updateBoardWidth();
            document.getElementById('content-wrapper').style.backgroundColor = '';
        }, 100);
    };
    BoardComponent.prototype.bindPane = function () {
        var el = document.getElementById('content-wrapper');
        el.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (curDown === true) {
                el.scrollLeft += (curXPos - e.pageX) * .25; // x > 0 ? x : 0;
                el.scrollTop += (curYPos - e.pageY) * .25; // y > 0 ? y : 0;
            }
        });
        el.addEventListener('mousedown', function (e) {
            if (e.srcElement.id === 'main' || e.srcElement.id === 'content-wrapper') {
                curDown = true;
            }
            curYPos = e.pageY;
            curXPos = e.pageX;
        });
        el.addEventListener('mouseup', function (e) {
            curDown = false;
        });
    };
    BoardComponent.prototype.updateBoardWidth = function () {
        // this.boardWidth = ((this.board.columns.length + (this.columnsAdded > 0 ? 1 : 2)) * 280) + 10;
        this.boardWidth = ((this.board.columns.length + 1) * 280) + 10;
        if (this.boardWidth > document.body.scrollWidth) {
            document.getElementById('main').style.width = this.boardWidth + 'px';
        }
        else {
            document.getElementById('main').style.width = '100%';
        }
        if (this.columnsAdded > 0) {
            var wrapper = document.getElementById('content-wrapper');
            wrapper.scrollLeft = wrapper.scrollWidth;
        }
        this.columnsAdded++;
    };
    BoardComponent.prototype.updateBoard = function () {
        if (this.board.title && this.board.title.trim() !== '') {
            this._boardService.put(this.board);
        }
        else {
            this.board.title = this.currentTitle;
        }
        this.editingTilte = false;
        document.title = this.board.title + " | Generic Task Manager";
    };
    BoardComponent.prototype.editTitle = function () {
        this.currentTitle = this.board.title;
        this.editingTilte = true;
        var input = this.el.nativeElement
            .getElementsByClassName('board-title')[0]
            .getElementsByTagName('input')[0];
        setTimeout(function () { input.focus(); }, 0);
    };
    BoardComponent.prototype.updateColumnElements = function (column) {
        var columnArr = jQuery('#main .column');
        var columnEl = jQuery('#main .column[columnid=' + column._id + ']');
        var i = 0;
        for (; i < columnArr.length - 1; i++) {
            column.order < +columnArr[i].getAttibute('column-order');
            break;
        }
        columnEl.remove().insertBefore(columnArr[i]);
    };
    BoardComponent.prototype.updateColumnOrder = function (event) {
        var _this = this;
        var i = 0, elBefore = -1, elAfter = -1, newOrder = 0, columnEl = jQuery('#main'), columnArr = columnEl.find('.column');
        for (i = 0; i < columnArr.length - 1; i++) {
            if (columnEl.find('.column')[i].getAttribute('column-id') == event.columnId) {
                break;
            }
        }
        if (i > 0 && i < columnArr.length - 1) {
            elBefore = +columnArr[i - 1].getAttribute('column-order');
            elAfter = +columnArr[i + 1].getAttribute('column-order');
            newOrder = elBefore + ((elAfter - elBefore) / 2);
        }
        else if (i == columnArr.length - 1) {
            elBefore = +columnArr[i - 1].getAttribute('column-order');
            newOrder = elBefore + 1000;
        }
        else if (i == 0) {
            elAfter = +columnArr[i + 1].getAttribute('column-order');
            newOrder = elAfter / 2;
        }
        var column = this.board.columns.filter(function (x) { return x._id === event.columnId; })[0];
        column.order = newOrder;
        this._columnService.put(column).then(function (res) {
            _this._ws.updateColumn(_this.board._id, column);
        });
    };
    BoardComponent.prototype.blurOnEnter = function (event) {
        if (event.keyCode === 13) {
            event.target.blur();
        }
    };
    BoardComponent.prototype.enableAddColumn = function () {
        this.addingColumn = true;
        var input = jQuery('.add-column')[0]
            .getElementsByTagName('input')[0];
        setTimeout(function () { input.focus(); }, 0);
    };
    BoardComponent.prototype.addColumn = function () {
        var _this = this;
        var newColumn = {
            title: this.addColumnText,
            order: (this.board.columns.length + 1) * 1000,
            boardId: this.board._id
        };
        this._columnService.post(newColumn)
            .subscribe(function (column) {
            _this.board.columns.push(column);
            console.log('column added');
            _this.updateBoardWidth();
            _this.addColumnText = '';
            _this._ws.addColumn(_this.board._id, column);
        });
    };
    BoardComponent.prototype.addColumnOnEnter = function (event) {
        if (event.keyCode === 13) {
            if (this.addColumnText && this.addColumnText.trim() !== '') {
                this.addColumn();
            }
            else {
                this.clearAddColumn();
            }
        }
        else if (event.keyCode === 27) {
            this.clearAddColumn();
        }
    };
    BoardComponent.prototype.addColumnOnBlur = function () {
        if (this.addColumnText && this.addColumnText.trim() !== '') {
            this.addColumn();
        }
        this.clearAddColumn();
    };
    BoardComponent.prototype.clearAddColumn = function () {
        this.addingColumn = false;
        this.addColumnText = '';
    };
    BoardComponent.prototype.addCard = function (card) {
        this.board.cards.push(card);
    };
    BoardComponent.prototype.foreceUpdateCards = function () {
        var cards = JSON.stringify(this.board.cards);
        this.board.cards = JSON.parse(cards);
    };
    BoardComponent.prototype.onCardUpdate = function (card) {
        this.foreceUpdateCards();
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'gtm-board',
            template: __webpack_require__("./src/app/board/board.component.html"),
            styles: [__webpack_require__("./src/app/board/board.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__board_service__["a" /* BoardService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* ColumnService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__column_column_service__["a" /* ColumnService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], BoardComponent);
    return BoardComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/board.component.js.map

/***/ }),

/***/ "./src/app/board/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient__ = __webpack_require__("./src/app/httpclient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = (function () {
    function BoardService(_http) {
        this._http = _http;
        this.apiUrl = '/board';
        this.boardsCache = [];
    }
    BoardService.prototype.getAll = function () {
        return this._http.get(this.apiUrl).map(function (res) { return res.json().data; });
    };
    BoardService.prototype.get = function (id) {
        return this._http.get(this.apiUrl + '/' + id)
            .map(function (res) { return res.json().data; });
    };
    BoardService.prototype.getBoardWithColumnsAndCards = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].forkJoin(this.get(id), this.getColumns(id), this.getCards(id));
    };
    BoardService.prototype.getColumns = function (id) {
        return this._http.get(this.apiUrl + '/' + id + '/columns')
            .map(function (res) { return res.json().data; });
    };
    BoardService.prototype.getCards = function (id) {
        return this._http.get(this.apiUrl + '/' + id + '/cards')
            .map(function (res) { return res.json().data; });
    };
    BoardService.prototype.put = function (board) {
        var body = JSON.stringify(board);
        console.log(body);
        this._http.put(this.apiUrl + '/' + board._id, body)
            .toPromise()
            .then(function (res) { return console.log(res.json()); });
    };
    BoardService.prototype.post = function (board) {
        var body = JSON.stringify(board);
        return this._http.post(this.apiUrl, body)
            .map(function (res) { return res.json().data; });
    };
    BoardService.prototype.delete = function (board) {
        this._http.delete(this.apiUrl + '/' + board._id)
            .toPromise()
            .then(function (res) { return console.log(res.json()); });
    };
    BoardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__httpclient__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__httpclient__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], BoardService);
    return BoardService;
    var _a;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/board.service.js.map

/***/ }),

/***/ "./src/app/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  background-color: #fff;   \r\n  text-decoration: none;\r\n  padding: 7px;\r\n  margin: 0 0 8px 0;\r\n  border-radius: 3px;\r\n  color: #4d4d4d;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  cursor: pointer;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  list-style: none;\r\n  border-bottom: solid 1px #ccc;\r\n  -webkit-transition: all;\r\n  transition: all;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 150ms;\r\n          transition-duration: 150ms;\r\n  -webkit-transition-timing-function: ease;\r\n          transition-timing-function: ease;\r\n}\r\n\r\n.card:hover{\r\n  background-color: #ddd;\r\n}\r\n\r\n.card textarea {\r\n    display: inherit;\r\n    width: 100%;\r\n    border: none;\r\n    line-height: 18px;\r\n    font-size: 14px;\r\n    resize: none;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n    line-height: 18px;\r\n    margin: -2px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"card\" \r\n    [attr.card-id]=\"card._id\"\r\n    [attr.card-order]=\"card.order\"\r\n    (click)=\"editCard()\">\r\n    <span [innerHtml]=\"card.title\" [style.display]=\"editingCard ? 'none' : ''\">\r\n    </span>\r\n    <textarea\r\n        [style.display]=\"editingCard ? '' : 'none' \"\r\n        (keydown)=\"blurOnEnter($event)\"\r\n        (blur)=\"updateCard()\"\r\n        [(ngModel)]=\"card.title\" >\r\n    </textarea>\r\n</li>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card__ = __webpack_require__("./src/app/card/card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_service__ = __webpack_require__("./src/app/card/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ws_service__ = __webpack_require__("./src/app/ws.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = (function () {
    function CardComponent(el, _ref, _ws, _cardService) {
        this.el = el;
        this._ref = _ref;
        this._ws = _ws;
        this._cardService = _cardService;
        this.editingCard = false;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */]({ enableLongStackTrace: false });
        this.cardUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ws.onCardUpdate.subscribe(function (card) {
            if (_this.card._id === card._id) {
                _this.card.title = card.title;
                _this.card.order = card.order;
                _this.card.columnId = card.columnId;
            }
        });
    };
    CardComponent.prototype.blurOnEnter = function (event) {
        if (event.keyCode === 13) {
            event.target.blur();
        }
        else if (event.keyCode === 27) {
            this.card.title = this.currentTitle;
            this.editingCard = false;
        }
    };
    CardComponent.prototype.editCard = function () {
        this.editingCard = true;
        this.currentTitle = this.card.title;
        var textArea = this.el.nativeElement.getElementsByTagName('textarea')[0];
        setTimeout(function () {
            textArea.focus();
        }, 0);
    };
    CardComponent.prototype.updateCard = function () {
        var _this = this;
        if (!this.card.title || this.card.title.trim() === '') {
            this.card.title = this.currentTitle;
        }
        this._cardService.put(this.card).then(function (res) {
            _this._ws.updateCard(_this.card.boardId, _this.card);
        });
        this.editingCard = false;
    };
    //TODO: check lifecycle
    CardComponent.prototype.ngOnDestroy = function () {
        //this._ws.onCardUpdate.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */]) === 'function' && _a) || Object)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === 'function' && _b) || Object)
    ], CardComponent.prototype, "cardUpdate", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'gtm-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ChangeDetectorRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__card_service__["a" /* CardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__card_service__["a" /* CardService */]) === 'function' && _f) || Object])
    ], CardComponent);
    return CardComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/card.component.js.map

/***/ }),

/***/ "./src/app/card/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpclient__ = __webpack_require__("./src/app/httpclient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardService = (function () {
    function CardService(_http) {
        this._http = _http;
        this.apiUrl = '/card';
    }
    CardService.prototype.getAll = function () {
        return this._http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    CardService.prototype.get = function (id) {
        return this._http.get(this.apiUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    CardService.prototype.put = function (card) {
        return this._http.put(this.apiUrl + '/' + card._id, JSON.stringify(card))
            .toPromise();
    };
    CardService.prototype.post = function (card) {
        return this._http.post(this.apiUrl, JSON.stringify(card))
            .map(function (res) { return res.json().data; });
    };
    CardService.prototype.delete = function (card) {
        return this._http.delete(this.apiUrl + '/' + card._id)
            .toPromise();
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpclient__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__httpclient__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], CardService);
    return CardService;
    var _a;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/card.service.js.map

/***/ }),

/***/ "./src/app/card/card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card() {
    }
    return Card;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/card.js.map

/***/ }),

/***/ "./src/app/column/column.component.css":
/***/ (function(module, exports) {

module.exports = ".column {\r\n  background-color: #E2E4E6;\r\n  border-radius: 3px;\r\n  width: 270px;\r\n  margin-left: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  white-space: nowrap;\r\n}\r\n.column h4 {\r\n  color: #4d4d4d;\r\n  line-height: 100%;\r\n  margin-left: 10px;\r\n  margin-top: 8px;\r\n  font-weight: 700;\r\n  line-height: 18px;\r\n  font-size: 14px;\r\n  margin-bottom: 3px;\r\n  height: 18px;\r\n  width: 260px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n.column-header {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n.column .column-header input {\r\n  margin-left: 5px;\r\n  margin-top: 5px;\r\n  font-weight: 700;\r\n  border: none;\r\n  line-height: 18px;\r\n  padding: 3px 5px 4px 5px;\r\n  font-size: 14px;\r\n  border-radius: 3px;\r\n  margin-bottom: -1px;\r\n  width: calc(100% - 10px);\r\n}\r\n.add-card {\r\n  color: #999;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  margin-top: 0;\r\n  padding: 8px 10px;\r\n  cursor: pointer;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 150ms;\r\n          transition-duration: 150ms;\r\n  -webkit-transition-timing-function: ease;\r\n          transition-timing-function: ease;\r\n}\r\n.add-card:hover {\r\n  text-decoration: underline;\r\n  color: #666;\r\n  background-color: #ccc;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.add-card input {\r\n  margin-left: -5px;\r\n  line-height: 18px;\r\n  font-size: 14px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 5px 5px 4px 5px;\r\n  width: calc(100% - 10px);\r\n}\r\nul.card-list {\r\n  padding: 31px 11px 32px 9px;\r\n  margin: -26px 0 -31px 0;\r\n}\r\nul.card-list > li {\r\n  list-style: none;\r\n}"

/***/ }),

/***/ "./src/app/column/column.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column\" \r\n    [attr.column-id]=\"column._id\"\r\n    [attr.column-order]=\"column.order\">\r\n    <div class=\"column-header\">\r\n        <h4 [innerHtml]=\"column.title\"\r\n            [style.display]=\"editingColumn ?'none' : '' \"\r\n            (click)=\"editColumn()\" ></h4>\r\n        <input  \r\n            [style.display]=\"editingColumn ?'' : 'none' \"\r\n            (blur)=\"updateColumnOnBlur()\"\r\n            (keyup)=\"addColumnOnEnter($event)\"\r\n            [(ngModel)]=\"column.title\" />\r\n    </div>\r\n    <ul class=\"card-list\" [attr.column-id]=\"column._id\">\r\n        <li *ngFor=\"let card of cards | where : { columnId: column._id } | orderBy : 'order'\">\r\n            <gtm-card [card]=\"card\"></gtm-card>\r\n        </li>\r\n    </ul>\r\n        <div class=\"add-card\" \r\n            (click)=\"enableAddCard()\" >\r\n            <span [style.display]=\"addingCard ? 'none' : ''\" >\r\n                Add a card...\r\n            </span>\r\n            \r\n            <input  \r\n            [style.display]=\"addingCard ? '' : 'none' \"\r\n            [attr.autofocus]=\"addingCard\"\r\n            (keyup)=\"addCardOnEnter($event)\"\r\n            (blur)=\"addCardOnBlur()\"\r\n            [(ngModel)]=\"addCardText\" />\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/column/column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column__ = __webpack_require__("./src/app/column/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_service__ = __webpack_require__("./src/app/column/column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ws_service__ = __webpack_require__("./src/app/ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_service__ = __webpack_require__("./src/app/card/card.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColumnComponent = (function () {
    function ColumnComponent(el, _ws, _columnService, _cardService) {
        this.el = el;
        this._ws = _ws;
        this._columnService = _columnService;
        this._cardService = _cardService;
        this.editingColumn = false;
        this.addingCard = false;
        this.onAddCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.cardUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    ColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupView();
        this._ws.onColumnUpdate.subscribe(function (column) {
            if (_this.column._id === column._id) {
                _this.column.title = column.title;
                _this.column.order = column.order;
            }
        });
    };
    ColumnComponent.prototype.setupView = function () {
        var component = this;
        var startColumn;
        jQuery('.card-list').sortable({
            connectWith: ".card-list",
            placeholder: "card-placeholder",
            dropOnEmpty: true,
            tolerance: 'pointer',
            start: function (event, ui) {
                ui.placeholder.height(ui.item.outerHeight());
                startColumn = ui.item.parent();
            },
            stop: function (event, ui) {
                var senderColumnId = startColumn.attr('column-id');
                var targetColumnId = ui.item.closest('.card-list').attr('column-id');
                var cardId = ui.item.find('.card').attr('card-id');
                component.updateCardsOrder({
                    columnId: targetColumnId || senderColumnId,
                    cardId: cardId
                });
            }
        });
        jQuery('.card-list').disableSelection();
    };
    ColumnComponent.prototype.updateCardsOrder = function (event) {
        var _this = this;
        var cardArr = jQuery('[column-id=' + event.columnId + '] .card'), i = 0, elBefore = -1, elAfter = -1, newOrder = 0;
        for (i = 0; i < cardArr.length - 1; i++) {
            if (cardArr[i].getAttribute('card-id') == event.cardId) {
                break;
            }
        }
        if (cardArr.length > 1) {
            if (i > 0 && i < cardArr.length - 1) {
                elBefore = +cardArr[i - 1].getAttribute('card-order');
                elAfter = +cardArr[i + 1].getAttribute('card-order');
                newOrder = elBefore + ((elAfter - elBefore) / 2);
            }
            else if (i == cardArr.length - 1) {
                elBefore = +cardArr[i - 1].getAttribute('card-order');
                newOrder = elBefore + 1000;
            }
            else if (i == 0) {
                elAfter = +cardArr[i + 1].getAttribute('card-order');
                newOrder = elAfter / 2;
            }
        }
        else {
            newOrder = 1000;
        }
        var card = this.cards.filter(function (x) { return x._id === event.cardId; })[0];
        var oldColumnId = card.columnId;
        card.order = newOrder;
        card.columnId = event.columnId;
        this._cardService.put(card).then(function (res) {
            _this._ws.updateCard(_this.column.boardId, card);
        });
    };
    ColumnComponent.prototype.blurOnEnter = function (event) {
        if (event.keyCode === 13) {
            event.target.blur();
        }
    };
    ColumnComponent.prototype.addColumnOnEnter = function (event) {
        if (event.keyCode === 13) {
            this.updateColumn();
        }
        else if (event.keyCode === 27) {
            this.cleadAddColumn();
        }
    };
    ColumnComponent.prototype.addCard = function () {
        var _this = this;
        this.cards = this.cards || [];
        var newCard = {
            title: this.addCardText,
            order: (this.cards.length + 1) * 1000,
            columnId: this.column._id,
            boardId: this.column.boardId
        };
        this._cardService.post(newCard)
            .subscribe(function (card) {
            _this.onAddCard.emit(card);
            _this._ws.addCard(card.boardId, card);
        });
    };
    ColumnComponent.prototype.addCardOnEnter = function (event) {
        if (event.keyCode === 13) {
            if (this.addCardText && this.addCardText.trim() !== '') {
                this.addCard();
                this.addCardText = '';
            }
            else {
                this.clearAddCard();
            }
        }
        else if (event.keyCode === 27) {
            this.clearAddCard();
        }
    };
    ColumnComponent.prototype.updateColumn = function () {
        var _this = this;
        if (this.column.title && this.column.title.trim() !== '') {
            this._columnService.put(this.column).then(function (res) {
                _this._ws.updateColumn(_this.column.boardId, _this.column);
            });
            this.editingColumn = false;
        }
        else {
            this.cleadAddColumn();
        }
    };
    ColumnComponent.prototype.cleadAddColumn = function () {
        this.column.title = this.currentTitle;
        this.editingColumn = false;
    };
    ColumnComponent.prototype.editColumn = function () {
        this.currentTitle = this.column.title;
        this.editingColumn = true;
        var input = this.el.nativeElement
            .getElementsByClassName('column-header')[0]
            .getElementsByTagName('input')[0];
        setTimeout(function () { input.focus(); }, 0);
    };
    ColumnComponent.prototype.enableAddCard = function () {
        this.addingCard = true;
        var input = this.el.nativeElement
            .getElementsByClassName('add-card')[0]
            .getElementsByTagName('input')[0];
        setTimeout(function () { input.focus(); }, 0);
    };
    ColumnComponent.prototype.updateColumnOnBlur = function () {
        if (this.editingColumn) {
            this.updateColumn();
            this.clearAddCard();
        }
    };
    ColumnComponent.prototype.addCardOnBlur = function () {
        if (this.addingCard) {
            if (this.addCardText && this.addCardText.trim() !== '') {
                this.addCard();
            }
        }
        this.clearAddCard();
    };
    ColumnComponent.prototype.clearAddCard = function () {
        this.addingCard = false;
        this.addCardText = '';
    };
    ColumnComponent.prototype.onCardUpdate = function (card) {
        this.cardUpdate.emit(card);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__column__["a" /* Column */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__column__["a" /* Column */]) === 'function' && _a) || Object)
    ], ColumnComponent.prototype, "column", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', Array)
    ], ColumnComponent.prototype, "cards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ColumnComponent.prototype, "onAddCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === 'function' && _c) || Object)
    ], ColumnComponent.prototype, "cardUpdate", void 0);
    ColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'gtm-column',
            template: __webpack_require__("./src/app/column/column.component.html"),
            styles: [__webpack_require__("./src/app/column/column.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ws_service__["a" /* WebSocketService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__column_service__["a" /* ColumnService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__column_service__["a" /* ColumnService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__card_card_service__["a" /* CardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__card_card_service__["a" /* CardService */]) === 'function' && _g) || Object])
    ], ColumnComponent);
    return ColumnComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/column.component.js.map

/***/ }),

/***/ "./src/app/column/column.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpclient__ = __webpack_require__("./src/app/httpclient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnService = (function () {
    function ColumnService(_http) {
        this._http = _http;
        this.apiUrl = '/column';
    }
    ColumnService.prototype.getAll = function () {
        return this._http.get(this.apiUrl)
            .map(function (res) { return res.json().data; });
    };
    ColumnService.prototype.get = function (id) {
        return this._http.get(this.apiUrl + '/' + id)
            .map(function (res) { return res.json().data; });
    };
    ColumnService.prototype.getCards = function (id) {
        return this._http.get(this.apiUrl + '/' + id + '/cards')
            .map(function (res) { return res.json().data; });
    };
    ColumnService.prototype.put = function (column) {
        return this._http
            .put(this.apiUrl + '/' + column._id, JSON.stringify(column))
            .toPromise();
    };
    ColumnService.prototype.post = function (column) {
        ;
        return this._http.post(this.apiUrl, JSON.stringify(column))
            .map(function (res) { return res.json().data; });
    };
    ColumnService.prototype.delete = function (column) {
        return this._http.delete(this.apiUrl + '/' + column._id)
            .toPromise();
    };
    ColumnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpclient__["a" /* HttpClient */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__httpclient__["a" /* HttpClient */]) === 'function' && _a) || Object])
    ], ColumnService);
    return ColumnService;
    var _a;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/column.service.js.map

/***/ }),

/***/ "./src/app/column/column.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Column; });
var Column = (function () {
    function Column() {
    }
    return Column;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/column.js.map

/***/ }),

/***/ "./src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SOCKET_URL; });
// export const ROOT_URL: string = "";
// export const ROOT_URL: string = "http://localhost:3000/";
// export const ROOT_URL: string = "https://shielded-bastion-10626.herokuapp.com";
        var ROOT_URL = "https://drelloclone.herokuapp.com/";
var SOCKET_URL = "https://drelloclone.herokuapp.com/";
//# sourceMappingURL=D:/Drello/drello/frontend/src/constants.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.boards-wrapper {\r\n  padding: 2em;\r\n  background-color: white;\r\n  min-height: calc(100% - 4em);\r\n  display: inline-block;\r\n}\r\n\r\nh2 { \r\n  color: #333;\r\n  font-weight: 700; \r\n  /*font: 14px \"Helvetica Neue\",Arial,Helvetica,sans-serif; */\r\n  line-height: 20px;\r\n  font-size: 12pt;\r\n}\r\n\r\n.board {\r\n  background-color: #0079BF;\r\n  height: 72px;\r\n  width: 280px;\r\n  color: white;\r\n  float: left;\r\n  margin-right: 16px;\r\n  margin-bottom: 16px;\r\n  text-align: left;\r\n  padding: 9pt 8px;\r\n  border-radius: 3px;\r\n  text-decoration: none;\r\n}\r\n\r\n.board .title {\r\n  font-weight: 700; \r\n  /*font: 14px \"Helvetica Neue\",Arial,Helvetica,sans-serif; */\r\n  line-height: 20px;\r\n  font-size: 12pt;\r\n}\r\n\r\n.add-board {\r\n  background-color: #e2e4e6;\r\n  color: #8c8c8c;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"boards-wrapper\">\r\n<h2>Boards</h2>\r\n<div id=\"boards\">\r\n  <a class=\"board\" *ngFor=\"let board of boards\" [routerLink]=\"['/b', board._id]\">\r\n    <span class=\"title\">{{board?.title}}</span>\r\n  </a>\r\n  <a href=\"#\" class=\"board add-board\" (click)=\"addBoard()\">\r\n    <span class=\"title\">Create a new board...</span>\r\n  </a>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board_service__ = __webpack_require__("./src/app/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_bs, _router) {
        this._bs = _bs;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boards = [];
        this._bs.getAll().subscribe(function (boards) {
            _this.boards = boards;
        });
        setTimeout(function () {
            document.getElementById('content-wrapper').style.backgroundColor = "#fff";
        }, 100);
    };
    DashboardComponent.prototype.addBoard = function () {
        var _this = this;
        console.log('Adding new board');
        this._bs.post({ title: "New board" })
            .subscribe(function (board) {
            _this._router.navigate(['/b', board._id]);
            console.log('new board added');
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'gtm-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/dashboard.component.js.map

/***/ }),

/***/ "./src/app/httpclient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClient = (function () {
    function HttpClient(_http) {
        this._http = _http;
        this.rootUrl = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ROOT_URL */];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = { headers: this.headers };
    }
    HttpClient.prototype.get = function (url, options) {
        url = this.handleUrl(url);
        return this._http.get(url, options || this.options);
    };
    HttpClient.prototype.post = function (url, body, options) {
        url = this.handleUrl(url);
        return this._http.post(url, body, options || this.options);
    };
    HttpClient.prototype.put = function (url, body, options) {
        url = this.handleUrl(url);
        return this._http.put(url, body, options || this.options);
    };
    HttpClient.prototype.delete = function (url, options) {
        url = this.handleUrl(url);
        return this._http.delete(url, options || this.options);
    };
    HttpClient.prototype.handleUrl = function (url) {
        if (!this.checkUrlExternal(url)) {
            if (url.charAt(0) == '/')
                url = url.substring(1);
            url = this.rootUrl + url;
        }
        return url;
    };
    HttpClient.prototype.checkUrlExternal = function (url) {
        return /^(?:[a-z]+:)?\/\//i.test(url);
    };
    HttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpClient);
    return HttpClient;
    var _a;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/httpclient.js.map

/***/ }),

/***/ "./src/app/pipes/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderBy = (function () {
    function OrderBy() {
        this.tmp = [];
    }
    OrderBy._orderByComparator = function (a, b) {
        if (!a && !b)
            return 0;
        if (a === b)
            return 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        this.tmp.length = 0;
        if (!Array.isArray(input))
            return input;
        var arr = [];
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                arr = !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                arr = input.sort(function (a, b) {
                    return !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            arr = input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
        (_a = this.tmp).push.apply(_a, arr);
        return this.tmp;
        var _a;
    };
    OrderBy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({ name: 'orderBy', pure: false }), 
        __metadata('design:paramtypes', [])
    ], OrderBy);
    return OrderBy;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/orderby.pipe.js.map

/***/ }),

/***/ "./src/app/pipes/where.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Where; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Where = (function () {
    function Where() {
        this.tmp = [];
    }
    Where._whereComparer = function (a, b) {
        if (a && b) {
            for (var p in b) {
                if (a[p] != b[p])
                    return false;
            }
            return true;
        }
        return false;
    };
    Where.prototype.transform = function (input, args) {
        this.tmp.length = 0;
        // let [clauses] = args; // Unexpectedly undefined
        // console.log(clauses);
        if (input) {
            (_a = this.tmp).push.apply(_a, input.filter(function (item) { return Where._whereComparer(item, args); }));
        }
        return this.tmp;
        var _a;
    };
    Where = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({ name: 'where', pure: false }), 
        __metadata('design:paramtypes', [])
    ], Where);
    return Where;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/where.pipe.js.map

/***/ }),

/***/ "./src/app/ws.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = (function () {
    function WebSocketService() {
        this.onColumnAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onCardAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onColumnUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onCardUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        this.socket = io(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* SOCKET_URL */]);
        this.socket.on('addColumn', function (data) {
            _this.onColumnAdd.emit(data.column);
        });
        this.socket.on('addCard', function (data) {
            _this.onCardAdd.emit(data.card);
        });
        this.socket.on('updateColumn', function (data) {
            _this.onColumnUpdate.emit(data.column);
        });
        this.socket.on('updateCard', function (data) {
            _this.onCardUpdate.emit(data.card);
        });
    };
    WebSocketService.prototype.join = function (boardId) {
        this.socket.emit('joinBoard', boardId);
    };
    WebSocketService.prototype.leave = function (boardId) {
        this.socket.emit('leaveBoard', boardId);
    };
    WebSocketService.prototype.addColumn = function (boardId, column) {
        this.socket.emit('addColumn', { boardId: boardId, column: column });
    };
    WebSocketService.prototype.addCard = function (boardId, card) {
        this.socket.emit('addCard', { boardId: boardId, card: card });
    };
    WebSocketService.prototype.updateColumn = function (boardId, column) {
        this.socket.emit('updateColumn', { boardId: boardId, column: column });
    };
    WebSocketService.prototype.updateCard = function (boardId, card) {
        this.socket.emit('updateCard', { boardId: boardId, card: card });
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], WebSocketService);
    return WebSocketService;
}());
//# sourceMappingURL=D:/Drello/drello/frontend/src/ws.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Drello/drello/frontend/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Drello/drello/frontend/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Drello/drello/frontend/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map