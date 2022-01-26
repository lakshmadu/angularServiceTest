import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];



  constructor() { }

  get items(){
    if(this.filter==='all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter == 'done'? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  deleteItem(description: string){
    let index = this.allItems.findIndex(x=>x.description===description);
    console.log("hello");
    this.allItems.splice(index,1);
    
  }
}
