import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() color: string =  'rgb(15%, 50%, 52%);'
  public active: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnchanges(){
    console.log(this.color)
  }
   /**
   * set days selected
   */
  public setActive(currentSection: string) {
    this.active = currentSection; 
  }

}
