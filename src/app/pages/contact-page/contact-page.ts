import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit() {
    this.title.setTitle('Contact Us');
    this.meta.updateTag({name: 'keywords', content: 'about, company, contact, values'});
    this.meta.updateTag({name:'og:title', content: 'Contact Us'});
  }

}
