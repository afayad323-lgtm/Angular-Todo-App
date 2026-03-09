import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoList } from '../todo-list/todo-list';
import { TotdoInput } from '../totdo-input/totdo-input';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoList, TotdoInput],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  editTask(data: { index: number; task: string }) {
    this.tasks[data.index] = data.task;
  }
}
