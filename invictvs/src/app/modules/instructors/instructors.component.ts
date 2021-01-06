import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

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

  data = [ 
    {
      'name': 'Felipe Mendoza',
      'img': 'assets/images/instructors/felipe.png',
      'background': 'assets/images/instructors/felipe_presentation.png',
      'text':'Instructor de pole sport y pole shoes en santiago'
    },
    {
      'name': 'Ricardo Bustos',
      'img': 'assets/images/instructors/ricky.png',
      'background': 'assets/images/instructors/ricky_presentation.png',
      'text':'Instructor de pole sport y flexibilidad en santiago'
    },
    {
      'name': 'Carolina Luzi',
      'img': 'assets/images/instructors/caro.png',
      'background': 'assets/images/instructors/caro_presentation.png',
      'text':'Instructor de pole sport en santiago'
    },
    {
      'name': 'Paloma no se oops',
      'img': 'assets/images/instructors/paloma.png',
      'background': 'assets/images/instructors/paloma_presentation.png',
      'text':'Instructor de pole sport y paradas de mano en santiago'
    },
    {
      'name': 'Gretel Neira',
      'img': 'assets/images/instructors/gretel.png',
      'background': 'assets/images/instructors/gretel_presentation.png',
      'text':'Instructor de pole sport en temuco'
    },
    {
      'name': 'Claudia Guerrero',
      'img': 'assets/images/instructors/claudia.png',
      'background': 'assets/images/instructors/claudia_presentation.png',
      'text':'Instructor de pole sport en temuco'
    }

  ]

}
