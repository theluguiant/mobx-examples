import { Component, ViewEncapsulation } from '@angular/core';
import { observable, action, computed, autorun } from 'mobx';
import { State } from './stores/state.store';
import { Item } from './interfaces/Item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  name = 'Angular 4';
  value = 0;
  lastId = 0;

  state = new State();

  constructor() {
    const item = new Item({
      id: 1, 
      name: new Date().getTime().toString(),
      value: 5
    })
    this.state.addItem(item);
  }

  getTotal() {
    alert(this.state.total);
  }

  addItem() {
    const item = new Item({
      id: this.lastId, 
      name: new Date().getTime().toString(),
      value: this.value
    })
    this.state.addItem(item);
    this.value = 0;
    this.lastId++;
  }
}
