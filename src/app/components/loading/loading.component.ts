import { Component } from '@angular/core';
import { IonButton, IonLoading } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
  //styleUrls: ['example.component.css'],
  imports: [IonButton, IonLoading],
})
export class LoadingComponent {}