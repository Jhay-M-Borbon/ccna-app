import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { interval } from 'rxjs';
  
@Component({
  selector: 'app-button3',
  templateUrl: './button3.page.html',
  styleUrls: ['./button3.page.scss'],
})
export class Button3Page implements OnInit {
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
        this.navCtrl.navigateForward('basictopology');
      }
      if (item === 'Item 2') {
        this.navCtrl.navigateForward('configuration');
      }
      if (item === 'Item 3') {
        this.navCtrl.navigateForward('configuration');
      }
      // Add similar navigation logic for other items if needed
    }
  ngOnInit() {
  }

}
