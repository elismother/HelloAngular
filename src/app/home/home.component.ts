import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardList: any[] = [
    {
      title: "Card One",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"  
    },
    {
      title: "Card Two",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "http://via.placeholder.com/640x360"  
  
    },
    {
      title: "Card Three",
      text: "This is a body of a card and I am making this up.",
      imgSrc: "http://via.placeholder.com/640x360"  
    }
  ];
}
