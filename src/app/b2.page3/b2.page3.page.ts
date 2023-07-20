import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b2.page3',
  templateUrl: './b2.page3.page.html',
  styleUrls: ['./b2.page3.page.scss'],
})
export class B2Page3Page implements OnInit {
  
  constructor(private navCtrl: NavController) { }
  
  onItemClick(item: string) {
    // Navigate to the desired page based on the clicked item
    if (item === 'Item 1') {
      this.navCtrl.navigateForward('staticrouting');
    }
    if (item === 'Item 2') {
      this.navCtrl.navigateForward('dynamicrouting');
    }
    // Add similar navigation logic for other items if needed
  }

  ngOnInit() {
  }
}
