import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
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
