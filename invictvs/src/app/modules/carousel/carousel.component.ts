import { Component, OnInit } from '@angular/core';

export class CarouselModel {
  image: string;
  text: string;
  size: string;

}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public carouselList: CarouselModel[]=[
    {
      image: 'assets/images/carousel/invictvs_temuco2.jpg',
      text: 'Nueva sede en Temuco',
      size: 'width: 50%;'
    },
    {
      image: 'assets/images/carousel/invictvs_temuco2.jpg',
      text: '',
      size: 'width: 50%;'
      
    },
    {
      image: 'assets/images/carousel/team.jpg',
      text: 'Se parte de nuestro equipo de competencia',
      size: 'width: 100%;'
    }
  ]

}
