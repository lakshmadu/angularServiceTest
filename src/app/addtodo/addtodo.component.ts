import { Item } from './../todo/Item';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.sass']
})
export class AddtodoComponent implements OnInit {

  todos:Item[] = [];
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.items;
  }
  addItem(description: string) {
    this._todoService.addItem(description);
  }

}
