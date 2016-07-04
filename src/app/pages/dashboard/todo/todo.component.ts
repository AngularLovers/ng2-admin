import {Component, ViewEncapsulation} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

import {TodoService} from './todo.service';

@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  providers: [TodoService],
  styles: [require('./todo.scss')],
  template: require('./todo.html')
})
export class Todo {

  public dashboardColors = this.baConfig.get().colors.dashboard;

  public todoList:Array<any>;
  public newTodoText:string = '';

  constructor(private baConfig:BaThemeConfigProvider, private todoService:TodoService) {
    this.todoList = this.todoService.getTodoList();

    this.todoList.forEach((item) => {
      item.color = this.getRandomColor();
    });
  }

  getNotDeleted() {
    return this.todoList.filter((item:any) => {
      return !item.deleted
    })
  }

  addToDoItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.todoList.unshift({
        text: this.newTodoText,
        color: this.getRandomColor(),
      });
      this.newTodoText = '';
    }
  }

  private getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
