import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello and welcome to my site.';
  itemValues: string[] = ["item1", "item2", "item3"];
}
