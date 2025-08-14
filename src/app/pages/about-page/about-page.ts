import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit() {
    this.title.setTitle('About Us');
    this.meta.updateTag({name: 'description', content: 'Learn more about our company, mission, and values.'});
    this.meta.updateTag({name: 'keywords', content: 'about, company, mission, values'});
    this.meta.updateTag({name:'og:title', content: 'About Us'});
  }


}
