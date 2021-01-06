import { Component, OnInit } from '@angular/core';
import { CarouselModel } from '../carousel/carousel.model';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.css']
})
export class MedalsComponent implements OnInit {

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


  data: CarouselModel[] = [ 
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/chilean_pole_sport.jpg',
      'text':'Chilean pole sport championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '25'
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/chile_pole_championship.png',
      'text':'Chile pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '21'
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/panamerican_pole.png',
      'text':'Panamerican pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '34'
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/amateur.png',
      'text':'Amateur pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '3'
    },
    {
      'name': 'Elevate pole championship',
      'img': '',
      'background': 'assets/images/competetion/elevate.jpg',
      'text':'Elevate pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '12'
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/exoctic_doll.png',
      'text':'Exotic doll',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '1'
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/en_equilibrio.jpg',
      'text':'En Equilibrio pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '7'
    }
  ]

}
