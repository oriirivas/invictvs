import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { MedalTableComponent } from './modules/medal-table/medal-table.component';
import { EventsComponent } from './modules/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './modules/carousel/carousel.component';

import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MedalTableComponent,
    EventsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
