import { Component, Input, OnInit } from '@angular/core';
import { CarouselModel } from './carousel.model';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() data: CarouselModel[] | undefined;
  @Input() title: string ='';
  @Input() color: string ='rgb(15%, 50%, 52%);';
  @Input() slidesPerView: number = 4;
  @Input() spaceBetween: number = 60;

  showMoreList=[]
  breakPoints={}
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.breakPoints = {
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
        slidesPerView: this.slidesPerView,
        spaceBetween: this.spaceBetween
      }
    }

  }

  showMore(index: number){
    if(this.showMoreList.includes(this.data[index].name)){
      this.data[index].text = this.data[index].shortText
      this.showMoreList = this.showMoreList.filter(item => item !== this.data[index].name)
    }else{
      this.showMoreList.push(this.data[index].name)
      this.data[index].text = this.data[index].largeText
    }
  }

}
