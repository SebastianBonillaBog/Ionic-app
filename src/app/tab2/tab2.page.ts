import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { ListComponent } from '../components/list/list.component';
import { SelectComponent } from '../components/select/select.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,ToggleComponent,ListComponent, SelectComponent]
})
export class Tab2Page {

  constructor() {}

}
