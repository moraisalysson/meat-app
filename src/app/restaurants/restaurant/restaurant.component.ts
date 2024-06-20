import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'jad-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent {

  @Input() restaurant!: Restaurant;

}
