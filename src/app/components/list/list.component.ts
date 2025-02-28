import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  //styleUrls: ['list.component.css'],
  imports: [IonItem, IonLabel, IonList, ButtonComponent],
})
export class ListComponent {}