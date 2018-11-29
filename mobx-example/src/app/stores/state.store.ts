
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/Item';

@Injectable()
export class State {
    @observable items: Item[] = [];
    message: string;

    @action addItem(item: Item) {
      this.items.push(item);
    }

    @computed get total() {
      return this.items.reduce((c, n) => c + n.value, 0);
    }

    constructor() {
      autorun(() => {
        console.log(this.message);
      })
    }

}