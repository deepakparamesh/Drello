import {List} from '../list/list';
import {Card} from '../card/card';

export class Board {
	_id: string;
	title: string;
	_user: string;
	_lists: List[];
  cards: Card[];
}
