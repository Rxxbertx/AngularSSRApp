import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css'
})
export class PricingPage implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit() {
    this.title.setTitle('Price');
    this.meta.updateTag({name:'og:title', content: 'Price'});
  }

}
