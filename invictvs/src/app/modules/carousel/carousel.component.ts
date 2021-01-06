import { Component, Input, OnInit } from '@angular/core';
import { CarouselModel } from './carousel.model';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() data: CarouselModel | undefined;
  @Input() title: string ='';
  constructor() { }

  ngOnInit(): void {
  }

  breakPoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: -50
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 60
    }
  }

}
