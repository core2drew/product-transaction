import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from './product-card.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  sizes: string[];
  data: ProductDetails[];
  selectedImage: string;
  selectedIndex: number;
  propensityValue: number;
  constructor() {}

  ngOnInit(): void {
    this.sizes = [`18" Large`, `17" Large`, `16" Medium`, `15" Small`];
    this.data = [
      {
        thumbNail: 'blue-bike-thumb.png',
        fullImage: 'blue-bike-full.png',
        propensity: 60,
      },
      {
        thumbNail: 'green-bike-thumb.png',
        fullImage: 'green-bike-full.png',
        propensity: 40,
      },
    ];
    this.selectedImage = `/assets/${this.data[0].fullImage}`;
    this.propensityValue = this.data[0].propensity;
    this.selectedIndex = 0;
  }

  prepareThumbNails(): string[] {
    return this.data.map((d) => `/assets/${d.thumbNail}`);
  }

  handleOnClickImageOption(index) {
    this.selectedImage = `/assets/${this.data[index].fullImage}`;
    this.propensityValue = this.data[index].propensity;
    this.selectedIndex = index;
  }
}
