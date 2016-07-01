import { Component, ViewEncapsulation } from "@angular/core";
import { TodoService } from "./../../../service/index";

@Component({
    selector: 'todo',
    encapsulation: ViewEncapsulation.None,
    providers: [TodoService],
    styles: [require('./Todo.scss')],
    template: require('./Todo.html')
})
export class TodoComponent {

    public todoList:Array<any>;
    public newTodoText:string = '';

    constructor( private todoService:TodoService) {
        this.todoList = this.todoService.getTodoList();

        // this.todoList.forEach((item) => {
        //     item.color = this.getRandomColor();
        // });
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
            });
            this.newTodoText = '';
        }
    }

    // private getRandomColor() {
    //     let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);
    //     var i = Math.floor(Math.random() * (colors.length - 1));
    //     return colors[i];
    // }
}
