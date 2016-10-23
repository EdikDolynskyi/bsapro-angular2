import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'app/todo/todo.model';
import { TodoService } from 'app/todo/todo.service';

@Component({
	selector: 'todo-form',
	templateUrl: 'app/todo/todo-form/todo-form.component.html',
	styleUrls: ['app/todo/todo-form/todo-form.component.css']
	//providers: [TodoService]
})

export class TodoFormComponent {
	@Output() added = new EventEmitter();
	
	constructor(todoService: TodoService){
		this.todoService = todoService;
		this.todoService.order = 1;
		console.log(this.todoService);
	}

	addTodo(title){
		let todo = new Todo(title);
		this.todoService.addTodo(todo);
	}
}