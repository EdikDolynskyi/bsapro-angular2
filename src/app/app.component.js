import { Component } from '@angular/core';
import { LoggerService } from './shared/logger.service';
import { TodoService } from './todo/todo.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	providers:  [ LoggerService, TodoService ]
})

export class AppComponent {
  constructor(logger: LoggerService){
    this.logger = logger;
  }
}