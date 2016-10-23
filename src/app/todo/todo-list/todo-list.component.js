import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'app/todo/todo.service';

@Component({
	selector: 'todo-list',
	templateUrl: 'app/todo/todo-list/todo-list.component.html',
	styleUrls: ['app/todo/todo-list/todo-list.component.css']
	//providers:  [ TodoService ]
})

export class TodoListComponent implements OnInit{
  constructor(todoService: TodoService){
  	this.todoService = todoService;
  	this.todos = [];
  }

  ngOnInit(){
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  onTodoDeleted(todo){
	this.todoService.deleteTodo(todo);
  }
}