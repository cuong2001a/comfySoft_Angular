import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  public href: string = '';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.href = this.route.url.slice(8);
    console.log('this.href.slice(7); :', this.href.slice(7));
  }
}
