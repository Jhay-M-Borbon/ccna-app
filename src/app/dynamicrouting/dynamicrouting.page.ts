import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dynamicrouting',
  templateUrl: './dynamicrouting.page.html',
  styleUrls: ['./dynamicrouting.page.scss'],
})
export class DynamicroutingPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  onItemClick(item: string) {
    // Navigate to the desired page based on the clicked item
    if (item === 'Item 1') {
      this.navCtrl.navigateForward('rip');
    }
    if (item === 'Item 2') {
      this.navCtrl.navigateForward('ospf');
    }
    if (item === 'Item 3') {
      this.navCtrl.navigateForward('eigrp');
    }
    if (item === 'Item 4') {
      this.navCtrl.navigateForward('bgp');
    }
    // Add similar navigation logic for other items if needed
  }

  ngOnInit() {
  }

}
