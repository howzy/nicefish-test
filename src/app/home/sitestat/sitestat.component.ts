import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitestat',
  templateUrl: './sitestat.component.html',
  styleUrls: ['./sitestat.component.css']
})
export class SitestatComponent implements OnInit {
  currentTime: Date = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
