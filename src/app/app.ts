import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'todoApp';
}
