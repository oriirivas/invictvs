import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import Swiper core and required components
import SwiperCore from "swiper/core";
import { CarouselModel } from '../carousel/carousel.model';
import { MedalTableComponent } from '../medal-table/medal-table.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      'route': '',
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
      'route': '',
      'instagram': 'https://www.instagram.com/invictvspolesportdancetemuco/',
      'instagramName': '@invictvspoles...',
      'youtube':''
    },
  ]


  classData: CarouselModel[] = [
    {
      'name': 'Pole Dance',
      'background': 'assets/images/class/group.png',
      'text':'Clases de pole dance multinivelS',
    },
    {
      'name': 'Flexibilidad Multinivel',
      'background': 'assets/images/class/flex.png',
      'text':'Clase enfocada a trabajar la musculatura para mejorar la flexibilidad',
      'shortText':'Clase enfocada a trabajar la musculatura para mejorar la flexibilidad',
      'largeText':'Clase enfocada a trabajar la musculatura para mejorar la flexibilidad que luego se aplicará en el trabajo en la barra',
    },
    {
      'name': 'Pole Shoes Coreografico',
      'background': 'assets/images/class/exotic.png',
      'text':'Clase de baile en tacos con el uso de la barra',
      'shortText':'Clase de baile en tacos con el uso de la barra',
      'largeText':'Clase de baile en tacos con el uso de la barra, se enfoca principalmente a la quema de calorías a través de diversas coreografías utilizando diversos estilos musicales',
    },
    {
      'name': 'Clase online',
      'background': 'assets/images/class/online.png',
      'text':'Clase de pole dance, acondicionamiento fisico, flexibilidad y acrobacias',
    },
    {
      'name': 'Acrobacias Multinivel',
      'background': 'assets/images/class/stunts.png',
      'text':'Clase enfocada a desarrollar diversas destrezas físicas',
      'shortText':'Clase enfocada a desarrollar diversas destrezas físicas',
      'largeText':'Clase enfocada a desarrollar diversas destrezas físicas derivadas de la gimnasia artística y rítmica',
    },
    {
      'name': 'Certificaciones Invictvs ',
      'background': 'assets/images/class/certification.png',
      'text':'Curso intensivo donde se enseña principalmente diversas metodologías',
      'shortText':'Curso intensivo donde se enseña principalmente diversas metodologías',
      'largeText':'Curso intensivo donde se enseña principalmente diversas metodologías para su aplicación en el aula de clases, a cargo de los únicos Campeones Mundiales de Pole Sport en Chile',
    },
    {
      'name': 'Intensivos',
      'background': 'assets/images/class/intesive.png',
      'text':'Clases intensivas de fin de semana, a cargo del Staff de Profesionales',
      'shortText':'Clases intensivas de fin de semana, a cargo del Staff de Profesionales',
      'largeText':'Clases intensivas de fin de semana, a cargo del Staff de Profesionales del Studio, se realizan de manera esporádica con la finalidad de entretener y enseñar diversas técnicas corporales como danza, pole ,acrobacias ,etc',
    }
  ]

  instructursData: CarouselModel[] = [
    {
      'name': 'Felipe Mendoza',
      'img': 'assets/images/instructors/felipe.png',
      'background': 'assets/images/instructors/felipe_presentation.png',
      'text':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio',
      'shortText':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio',
      'largeText':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio, organizador del Chile Pole Championship y del " Encuentro Nacional de Pole and Dance ", destacada figura nacional e internacional de Pole Sport Dance, Bi- Campeón Mundial de Pole Sport, entrenador de destacadas atletas nacionales, jurado nacional e internacional de Pole Sport Dance',
      'instagram': 'https://www.instagram.com/felipemendozap/',
      'instagramName': '@felipemendozap',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/a06RMHZxPF0')
    },
    {
      'name': 'Ricardo Bustos',
      'img': 'assets/images/instructors/ricky.png',
      'background': 'assets/images/instructors/ricky_presentation.png',
      'text':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio',
      'shortText':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio',
      'largeText':'Intérprete e instructor de danza espectáculo, dueño y director de Invictvs Pole Sport Dance Studio, organizar del Chile Pole Championship y del " Encuentro Nacional de Pole and Dance ", destacada figura nacional e internacional de Pole Sport Dance, Campeón Mundial de Pole Sport, entrenador de destacadas atletas nacionales, jurado nacional e internacional de Pole Sport Dance',
      'instagram': 'https://www.instagram.com/rickii_pole/',
      'instagramName': '@rickii_pole',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OTQuB231bMc')
    },
    {
      'name': 'Carolina Luzi',
      'img': 'assets/images/instructors/caro.png',
      'background': 'assets/images/instructors/caro_presentation.png',
      'text':'Instructora de Invictvs Pole Sport Dance Studio, destacada entrenadora de diversas atletas',
      'shortText':'Instructora de Invictvs Pole Sport Dance Studio, destacada entrenadora de diversas atletas',
      'largeText':'Instructora de Invictvs Pole Sport Dance Studio, destacada entrenadora de diversas atletas de Pole Dance en Chile, destacada competidora Máster 40',
      'instagram': 'https://www.instagram.com/cayitosan/',
      'instagramName': '@cayitosan',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/w1QfNAyCoEE')
    },
    {
      'name': 'Paloma Velasco',
      'img': 'assets/images/instructors/paloma.png',
      'background': 'assets/images/instructors/paloma_presentation.png',
      'text':'Profesora de educación física, destacada atleta de Pole Sport, campeona nacional',
      'shortText':'Profesora de educación física, destacada atleta de Pole Sport, campeona nacional',
      'largeText':'Profesora de Educación Física, destacada Atleta de Pole Sport, campeona nacional de Pole Sport Dance, artista de circo, especializada en acrobacias, ex gimnasta artística, instructora de Pole Sport, entrenadora de diversas atletas chilenas de pole',
      'instagram': 'https://www.instagram.com/paloma.pole/',
      'instagramName': '@paloma.pole',
      'youtube':this.sanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/CMQUeu4iRwY')
    },
    {
      'name': 'Gretel Neira',
      'img': 'assets/images/instructors/gretel.png',
      'background': 'assets/images/instructors/gretel_presentation.png',
      'text':'Dueña y directora de Invictvs Pole Sport Dance Studio Temuco',
      'shortText':'Dueña y directora de Invictvs Pole Sport Dance Studio Temuco',
      'largeText':'Dueña y directora de Invictvs Pole Sport Dance Studio Temuco, instructora de Pole Sport Dance, destacada atleta de Pole Sport, instructora de flexibilidad',
      'instagram': 'https://www.instagram.com/greteln/',
      'instagramName': '@greteln',
      'youtube':''
    },
    {
      'name': 'Claudia Guerrero',
      'img': 'assets/images/instructors/claudia.png',
      'background': 'assets/images/instructors/claudia_presentation.png',
      'text':'Instructora on line de Invictvs Pole Sport Dance Studio',
      'shortText':'Instructora on line de Invictvs Pole Sport Dance Studio',
      'largeText':'Instructora on line de Invictvs Pole Sport Dance Studio, certificada en Pole Sport nivel básico, intermedio y avanzado, destacada atleta de Pole Sport Máster 40',
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
      'iconText': '3',
      'route': 'medals/1',
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
      'iconText': '28',
      'route': 'medals/2',
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
      'iconText': '18',
      'route': 'medals/3',
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
      'route': 'medals/4',
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
      'iconText': '1',
      'route': 'medals/5',
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
      'route': 'medals/6',
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
      'iconText': '4',
      'route': 'medals/7',
      'instagram': '',
      'instagramName': '',
      'youtube':''
    }
  ]

  eventsData: CarouselModel[] = [
    {
      'name': 'Chile pole championship',
      'background': 'assets/images/competetion/chile_pole_championship.png',
      'text':'Campeonato organizado por Invictvs Pole Sport Dance Studio desde el año 2018',
      'shortText':'Campeonato organizado por Invictvs Pole Sport Dance Studio desde el año 2018',
      'largeText':'Campeonato organizado por Invictvs Pole Sport Dance Studio desde el año 2018, tiene como finalidad clasificar a las mejores y competidoras y a  los mejores y competidores a nivel nacional para luego darles el pase directo a competir al " Panamerican Pole Championship"',
    },
    {
      'name': 'Encuento Nacional',
      'background': 'assets/images/events/nationalMeet.png',
      'text':'de Pole and Dance, organizado por Invictvs Pole Sport Dance Studio',
      'shortText':'de Pole and Dance, organizado por Invictvs Pole Sport Dance Studio',
      'largeText':'de Pole and Dance, organizado por Invictvs Pole Sport Dance Studio, tiene como finalidad reunir a diversas escuelas de todo Chile para celebrar nuestra disciplina',
    },
    {
      'name': 'Online pole championship',
      'background': 'assets/images/events/onlineChampionship.png',
      'text':'Campeonato On Line que nace de la necesidad de seguir promoviendo la actividad deportiva',
      'shortText':'Campeonato On Line que nace de la necesidad de seguir promoviendo la actividad deportiva',
      'largeText':'Campeonato On Line que nace de la necesidad de seguir promoviendo la actividad deportiva y artística de manera segura en tiempos de pandemia, teniendo su primera versión en mayo del 2020',
    },
    {
      'name': 'Showcase online',
      'background': 'assets/images/events/onlineShow.png',
      'text':'Showcase on line gratuito que se realiza para mostrar todos los avances de nuestras alumnas',
    }
  ]


}
