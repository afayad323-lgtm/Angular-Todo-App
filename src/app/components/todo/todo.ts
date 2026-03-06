import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks: string[] = [];
  newtask: string = '';

  addTask() {
    if (this.newtask.trim() !== '') {
      this.tasks.push(this.newtask);
      this.newtask = '';
    }
  }
  deleteTask(index:number){
    this.tasks.splice(index,1)
  }
}
