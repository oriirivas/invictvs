import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public active: string = 'Inicio'

  constructor() { }

  ngOnInit(): void {
  }

  public sectionList: string[] = [
    'Inicio',
    'Instructores',
    'Medallero',
    'Eventos'
  ];

   /**
   * set days selected
   */
  public setActive(currentSection: string) {
    this.active = currentSection; 
  }

}
