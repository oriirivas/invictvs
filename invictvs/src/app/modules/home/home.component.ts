import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import Swiper core and required components
import SwiperCore from "swiper/core";
import { CarouselModel } from '../carousel/carousel.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public active: string = 'Inicio'

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }


  sedeData: CarouselModel[] = [ 
    {
      'name': 'Santiago',
      'img': '',
      'background': 'assets/images/carousel/invictvs_temuco2.jpg',
      'text':'Carlos Silva vildosola 9073 Local 22, La Reina. info@invictvs.cl ',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/invictvspolesportdancestudio/',
      'instagramName': '@invictvspoles...',
      'youtube':''
    },
    {    
      'name': 'Temuco',
      'img': '',
      'background': 'assets/images/carousel/invictvs_temuco2.jpg',
      'text':'Valle de Notros 02797. infotemuco@invictvs.cl',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/invictvspolesportdancetemuco/',
      'instagramName': '@invictvspoles...',
      'youtube':''
    },
  ]


  classData: CarouselModel[] = [ 
    {
      'name': 'Pole Dance',
      'img': '',
      'background': 'assets/images/class/group.png',
      'text':'Pole dance multinivel',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {    
      'name': 'Flexibilidad',
      'img': '',
      'background': 'assets/images/class/flex.png',
      'text':'Clase de tortura donde lloras pero eres feliz de pagarla',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': 'Pole Exotic',
      'img': '',
      'background': 'assets/images/class/exotic.png',
      'text':'Una clase llena de sensualidad y cardio mucho cardio',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {    
      'name': 'Clase online',
      'img': '',
      'background': 'assets/images/class/online.png',
      'text':'Clase de pole dance, acondicionamiento fisico, flexibilidad y acrobacias',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': 'Acrobacias',
      'img': '',
      'background': 'assets/images/class/stunts.png',
      'text':'Clase donde te sentiras toda una gimnasta',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {    
      'name': 'Certificad',
      'img': '',
      'background': 'assets/images/class/certification.png',
      'text':'Certificación basica, intermadias, online o presencial',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': 'Intensivo',
      'img': '',
      'background': 'assets/images/class/intesive.png',
      'text':'Intensivos online o presencial',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    }
  ]

  instructursData: CarouselModel[] = [ 
    {
      'name': 'Felipe Mendoza',
      'img': 'assets/images/instructors/felipe.png',
      'background': 'assets/images/instructors/felipe_presentation.png',
      'text':'Instructor de pole sport y pole shoes en santiago',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/felipemendozap/',
      'instagramName': '@felipemendozap',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/a06RMHZxPF0')
    },
    {
      'name': 'Ricardo Bustos',
      'img': 'assets/images/instructors/ricky.png',
      'background': 'assets/images/instructors/ricky_presentation.png',
      'text':'Instructor de pole sport y flexibilidad en santiago',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/rickii_pole/',
      'instagramName': '@rickii_pole',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OTQuB231bMc')
    },
    {
      'name': 'Carolina Luzi',
      'img': 'assets/images/instructors/caro.png',
      'background': 'assets/images/instructors/caro_presentation.png',
      'text':'Instructor de pole sport en santiago',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/cayitosan/',
      'instagramName': '@cayitosan',
      'youtube':''
    },
    {
      'name': 'Paloma Velasco',
      'img': 'assets/images/instructors/paloma.png',
      'background': 'assets/images/instructors/paloma_presentation.png',
      'text':'Instructor de pole sport y paradas de mano en santiago',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/paloma.pole/',
      'instagramName': '@paloma.pole',
      'youtube':''
    },
    {
      'name': 'Gretel Neira',
      'img': 'assets/images/instructors/gretel.png',
      'background': 'assets/images/instructors/gretel_presentation.png',
      'text':'Instructor de pole sport en temuco',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/greteln/',
      'instagramName': '@greteln',
      'youtube':''
    },
    {
      'name': 'Claudia Guerrero',
      'img': 'assets/images/instructors/claudia.png',
      'background': 'assets/images/instructors/claudia_presentation.png',
      'text':'Instructor de pole sport en temuco',
      'icon': '',
      'iconText': '',
      'instagram': 'https://www.instagram.com/claudiaguerreroperi/',
      'instagramName': '@claudiaguerreroperi',
      'youtube':''
    }

  ]

  medalData: CarouselModel[] = [ 
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/chilean_pole_sport.jpg',
      'text':'Chilean pole sport championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '25',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/chile_pole_championship.png',
      'text':'Chile pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '21',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/panamerican_pole.png',
      'text':'Panamerican pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '34',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/amateur.png',
      'text':'Amateur pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '3',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/elevate.jpg',
      'text':'Elevate pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '12',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/exoctic_doll.png',
      'text':'Exotic doll',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '1',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': '',
      'img': '',
      'background': 'assets/images/competetion/en_equilibrio.jpg',
      'text':'En Equilibrio pole championship',
      'icon': '<i class="fas fa-medal"></i>',
      'iconText': '7',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    }
  ]

  eventsData: CarouselModel[] = [ 
    {
      'name': 'Chilean pole championship',
      'img': '',
      'background': 'assets/images/competetion/chile_pole_championship.png',
      'text':'La mas importante competencia realizada en chile',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {    
      'name': 'Encuento nacional de pole dance',
      'img': '',
      'background': 'assets/images/events/nationalMeet.png',
      'text':'Una iniciativa de la invicyvs para juntar a todas las academias del pais en un solo escenario',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': 'Online pole championship',
      'img': '',
      'background': 'assets/images/events/onlineChampionship.png',
      'text':'Competencia de modalidad online',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    },
    {
      'name': 'Shows online de pole',
      'img': '',
      'background': 'assets/images/events/onlineShow.png',
      'text':'Muestras de coreografias realizadas por nuestras alumnas',
      'icon': '',
      'iconText': '',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    }
  ]


}
