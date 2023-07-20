import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-b2.page6',
  templateUrl: './b2.page6.page.html',
  styleUrls: ['./b2.page6.page.scss'],
})
export class B2Page6Page implements OnInit {

  
  constructor(private navCtrl: NavController) { }
    
    onItemClick(item: string) {
      // Navigate to the desired page based on the clicked item
      if (item === 'Item 1') {
        this.navCtrl.navigateForward('vlans');
      }
      if (item === 'Item 2') {
        this.navCtrl.navigateForward('inter-vlan-trunking');
      }
      if (item === 'Item 3') {
        this.navCtrl.navigateForward('hsrp');
      }
      if (item === 'Item 4') {
        this.navCtrl.navigateForward('stp');
      }
      if (item === 'Item 5') {
        this.navCtrl.navigateForward('etherchannel');
      }
      // Add similar navigation logic for other items if needed
    }
  ngOnInit() {
  }

}


