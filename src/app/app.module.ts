import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddtodoComponent } from './addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
