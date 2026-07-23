import { Component } from '@angular/core';
import { TasksCounter } from './tasks-counter/tasks-counter';
import { TasksCreate } from './tasks-create/tasks-create';
import { TasksList } from './tasks-list/tasks-list';

export interface Task {
  title: string;
}

@Component({
  selector: 'app-tasks',
  imports: [TasksCounter, TasksList, TasksCreate],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  addTask() {}
}
