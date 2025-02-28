import { Component } from '@angular/core';
import { IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.component.html',
  //styleUrls: ['example.component.css'],
  imports: [IonToggle],
})
export class ToggleComponent {}