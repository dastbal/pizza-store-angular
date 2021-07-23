import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: string[]=[
    '../../assets/images/banner-1.jpg',
    '../../assets/images/banner-2.jpg',
    '../../assets/images/banner-1.jpg',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
