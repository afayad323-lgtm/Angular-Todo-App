import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-totdo-input',
  imports: [FormsModule],
  templateUrl: './totdo-input.html',
  styleUrl: './totdo-input.css',
})
export class TotdoInput {
  newTask: string = '';

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = '';
    }
  }
}
