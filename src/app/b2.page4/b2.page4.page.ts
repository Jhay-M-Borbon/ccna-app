import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b2.page4',
  templateUrl: './b2.page4.page.html',
  styleUrls: ['./b2.page4.page.scss'],
})
export class B2Page4Page implements OnInit {
  
  constructor(private navCtrl: NavController) { }
  
  onItemClick(item: string) {
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
    if (item === 'Item 4') {
      this.navCtrl.navigateForward('b1.page4');
    }
    // Add similar navigation logic for other items if needed
  }

  ngOnInit() {
  }
}
