import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './list/list';

@Component({
  selector: 'app-roott',
  imports: [List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP');
}
