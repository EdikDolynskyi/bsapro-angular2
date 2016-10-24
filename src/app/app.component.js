import { Component } from '@angular/core';
import { TodoService } from './todo/todo.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	providers:  [ TodoService ]
})

export class AppComponent {
}