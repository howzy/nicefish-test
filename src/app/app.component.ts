import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import './operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //
  }
}
