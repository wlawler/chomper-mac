import { Component } from '@angular/core';
import { Focus} from './focus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chompermac';
  focuses = [
    new Focus(1, 'Grocery navigation'),
    new Focus(2, 'Recipe Discovery'), 
    new Focus(3, 'Nutrition Tracking'), 
    new Focus(4, 'Cost Calcution'), 
    new Focus(5, 'Ingredient Availibility')
  ]
}
