import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

let todosUrl = 'app/todo/todos.json';

@Injectable()
export class TodoService {
	constructor(http: Http){
		this.http = http;
	}

	getTodos(){
		return this.http.get(todosUrl)
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError)
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