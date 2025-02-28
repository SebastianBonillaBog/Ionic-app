import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BagdeComponent } from '../components/badge/badge.component';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, BagdeComponent, ToggleComponent,CardComponent],
})
export class Tab1Page {
  constructor() {}
}
