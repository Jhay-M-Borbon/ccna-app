import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.page.html',
  styleUrls: ['./button2.page.scss'],
})
export class Button2Page {
  currentDate: Date = new Date();
  currentTime: Date = new Date();
  
  constructor(private navCtrl: NavController) {
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }
  

  onItemClick(item: string) {
    // Handle item click event here
    console.log(`Clicked: ${item}`);

    // Navigate to the desired page based on the clicked item
    if (item === 'Item 1') {
      this.navCtrl.navigateForward('b2.page1');
    }
    if (item === 'Item 2') {
      this.navCtrl.navigateForward('b2.page2');
    }
    if (item === 'Item 3') {
      this.navCtrl.navigateForward('b2.page3');
    }
    if (item === 'Item 4') {
      this.navCtrl.navigateForward('b2.page4');
    }
    if (item === 'Item 5') {
      this.navCtrl.navigateForward('b2.page5');
    }
    if (item === 'Item 6') {
      this.navCtrl.navigateForward('b2.page6');
    }
    if (item === 'Item 7') {
      this.navCtrl.navigateForward('b2.page7');
    }
    if (item === 'Item 8') {
      this.navCtrl.navigateForward('b2.page8');
    }
    if (item === 'Item 9') {
      this.navCtrl.navigateForward('b2.page9');
    }
    // Add similar navigation logic for other items if needed
  }
}
