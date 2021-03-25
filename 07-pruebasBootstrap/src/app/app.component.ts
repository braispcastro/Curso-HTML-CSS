import { Component, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('slider')
  slider!: ElementRef;
  
  title = 'pruebasBootstrap';

  constructor() {}

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit');

    var carousel = new Carousel(this.slider.nativeElement, {
      interval: 3000
    });
    
    carousel.cycle();

  }
  
}
