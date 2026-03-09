import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() task!: string;
  @Input() index!: number;

  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<{ index: number; task: string }>();

  isEditing: boolean = false;
  editedTask: string = '';

  onDelete() {
    this.deleteTask.emit(this.index);
  }

  startEdit() {
    this.isEditing = true;
    this.editedTask = this.task;
  }

  saveEdit() {
    this.editTask.emit({
      index: this.index,
      task: this.editedTask,
    });

    this.isEditing = false;
  }
}
