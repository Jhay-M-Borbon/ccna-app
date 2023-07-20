import { Component,   } from '@angular/core';
import { NavController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: Date = new Date();
  currentTime: Date = new Date();
 
  today : number = Date.now()
  
  constructor(private navCtrl: NavController) {

    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  onButton1Click() {
    // Logic for button 1 click
    this.navCtrl.navigateForward('button1');
  }

  onButton2Click() {
    // Logic for button 2 click
    this.navCtrl.navigateForward('button2');
  }

  onButton3Click() {
    // Logic for button 3 click
    this.navCtrl.navigateForward('button3');
  }

  onExitClick() {
    // Exit the application
    App.exitApp();
  }
}

