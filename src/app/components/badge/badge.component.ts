import { Component } from '@angular/core';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-badge',
  templateUrl: 'badge.component.html',
//   styleUrls: ['bagde.component.css'],
  imports: [IonBadge, IonItem, IonLabel, IonList],
})
export class BagdeComponent {}