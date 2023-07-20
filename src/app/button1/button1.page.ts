import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.page.html',
  styleUrls: ['./button1.page.scss'],
})
export class Button1Page {
  currentDate: Date = new Date();
  currentTime: Date = new Date();

  constructor(private navCtrl: NavController) {
    // Update current time every second
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  onItemClick(item: string) {
    // Handle item click event here
    console.log(`Clicked: ${item}`);

    // Navigate to the desired page based on the clicked item
    if (item === 'Item 1') {
      this.navCtrl.navigateForward('b1.page1');
    }
    if (item === 'Item 2') {
      this.navCtrl.navigateForward('b1.page2');
    }
    if (item === 'Item 3') {
      this.navCtrl.navigateForward('b1.page3');
    }
    // Add similar navigation logic for other items if needed
  }
}
