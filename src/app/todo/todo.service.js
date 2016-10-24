import { Injectable } from '@angular/core';
import { todos } from 'app/shared/todo.data';

let todosUrl = 'app/todo/todos.json';

@Injectable()
export class TodoService {

	getTodos(){
		return new Promise(resolve => setTimeout(() => resolve(todos), 1000));
	}

	getTodo(id){
		return Promise.resolve(todos.find(todo => todo.id === +id)); 
	}

	addTodo(todo){ 
		todos.push(todo);
	}

	deleteTodo(todo){
		let index = todos.indexOf(todo);
		if (index > -1) {
			todos.splice(index, 1);
		}
	}

	handleError(error){
		console.log('Ops, Error', error);
		return Promise.reject(error.message || error);
	}
};