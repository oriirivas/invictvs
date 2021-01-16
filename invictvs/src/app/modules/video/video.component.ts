import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() title: string ='Videos';
  @Input() color: string ='rgb(161, 81, 133)';
  
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  breakPoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: -60,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }

  data = [ 
    {
      'name': 'Felipe Mendoza',
      'text':'Pan American Pole Championship 2017 3rd lugar Pole Stars',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pNwy8m6sWs4')
    },
    {
      'name': 'Ricardo Bustos',
      'text':'Pan American Pole Championship 2017 2nd lugar Pole Stars',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OTQuB231bMc')
    },
    {
      'name': 'Costanza Riquelme',
      'text':'panamerican pole championship 2019 1er lugar Juvenil',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dqIUXoo-kkk')
    },
    {
      'name': 'Invictvs Fantasía Bollywood',
      'text':'Encuentro Nacional Pole and Dance 2019',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ZZpUkbUj8zY')
    },
    {
      'name': 'Felipe Mendoza',
      'text':'Pan American Pole Championship 2018 2nd lugar Pole Stars',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/a06RMHZxPF0')
    },
    {
      'name': 'Ricardo Bustos',
      'text':'Presentacion de jurado en el Paraguay Pole Championship 2019',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bTrF0hnRn7Q')
    },
    {
      'name': 'Sandra Loyola ',
      'text':'Chile  pole championship 2019 1er lugar Amateur I ',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/GZvipj_idKU')
    },
    {
      'name': 'Ana Maria Papic',
      'text':'Pan American Pole Championship 2019 1er lugar Master 40',
      'video':this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/NIkcTPjxnag')
    }
  ]

}
