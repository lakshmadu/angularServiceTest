import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  title = 'todo';  

  public todos = [] as Item [];
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.items;
  }  

  deleteItem(description: string){
    let index = this.todos.findIndex(x=>x.description===description);
    this.todos.splice(index,1);
  }

}
