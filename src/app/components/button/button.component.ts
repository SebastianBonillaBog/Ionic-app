import { Component } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  //styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, LoadingComponent],
})
export class ButtonComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ heart });
  }
}