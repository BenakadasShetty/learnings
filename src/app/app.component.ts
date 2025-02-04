import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Benaka Shetty Congratulations ..';
  points = [
    'Girish Adiga',
    'Sunil Salian',
    'Prakash Devadiga'
    'Ganesh Puttur'
    'Ramesh Shetty'
    'Nandakishore'
    'Leeladhar'
    "Lathesh shetty"
   ];
}
