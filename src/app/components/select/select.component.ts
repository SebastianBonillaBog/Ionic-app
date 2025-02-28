import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  //styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption, IonText],
})
export class SelectComponent {}