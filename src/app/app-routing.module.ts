import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'button1',
    loadChildren: () => import('./button1/button1.module').then( m => m.Button1PageModule)
  },
  {
    path: 'button2',
    loadChildren: () => import('./button2/button2.module').then( m => m.Button2PageModule)
  },
  
  {
    path: 'b1.page1',
    loadChildren: () => import('./b1.page1/b1.page1.module').then( m => m.B1Page1PageModule)
  },
  {
    path: 'b1.page2',
    loadChildren: () => import('./b1.page2/b1.page2.module').then( m => m.B1Page2PageModule)
  },
  {
    path: 'b1.page3',
    loadChildren: () => import('./b1.page3/b1.page3.module').then( m => m.B1Page3PageModule)
  },
  {
    path: 'b2.page1',
    loadChildren: () => import('./b2.page1/b2.page1.module').then( m => m.B2Page1PageModule)
  },
  {
    path: 'b2.page2',
    loadChildren: () => import('./b2.page2/b2.page2.module').then( m => m.B2Page2PageModule)
  },
  {
    path: 'b2.page3',
    loadChildren: () => import('./b2.page3/b2.page3.module').then( m => m.B2Page3PageModule)
  },
  {
    path: 'b2.page4',
    loadChildren: () => import('./b2.page4/b2.page4.module').then( m => m.B2Page4PageModule)
  },
  {
    path: 'b2.page5',
    loadChildren: () => import('./b2.page5/b2.page5.module').then( m => m.B2Page5PageModule)
  },
  {
    path: 'b2.page6',
    loadChildren: () => import('./b2.page6/b2.page6.module').then( m => m.B2Page6PageModule)
  },
  {
    path: 'b2.page7',
    loadChildren: () => import('./b2.page7/b2.page7.module').then( m => m.B2Page7PageModule)
  },
  {
    path: 'b2.page8',
    loadChildren: () => import('./b2.page8/b2.page8.module').then( m => m.B2Page8PageModule)
  },
  {
    path: 'b2.page9',
    loadChildren: () => import('./b2.page9/b2.page9.module').then( m => m.B2Page9PageModule)
  },
  {
    path: 'staticrouting',
    loadChildren: () => import('./staticrouting/staticrouting.module').then( m => m.StaticroutingPageModule)
  },
  {
    path: 'dynamicrouting',
    loadChildren: () => import('./dynamicrouting/dynamicrouting.module').then( m => m.DynamicroutingPageModule)
  },
  {
    path: 'rip',
    loadChildren: () => import('./rip/rip.module').then( m => m.RipPageModule)
  },
  {
    path: 'ospf',
    loadChildren: () => import('./ospf/ospf.module').then( m => m.OSPFPageModule)
  },
  {
    path: 'eigrp',
    loadChildren: () => import('./eigrp/eigrp.module').then( m => m.EIGRPPageModule)
  },
  {
    path: 'bgp',
    loadChildren: () => import('./bgp/bgp.module').then( m => m.BGPPageModule)
  },
  {
    path: 'ospfipv4',
    loadChildren: () => import('./ospfipv4/ospfipv4.module').then( m => m.OSPFIPv4PageModule)
  },
  {
    path: 'ospfipv6',
    loadChildren: () => import('./ospfipv6/ospfipv6.module').then( m => m.OSPFIPv6PageModule)
  },
  {
    path: 'vlans',
    loadChildren: () => import('./vlans/vlans.module').then( m => m.VLANsPageModule)
  },
  {
    path: 'inter-vlan-trunking',
    loadChildren: () => import('./inter-vlan-trunking/inter-vlan-trunking.module').then( m => m.InterVlanTrunkingPageModule)
  },
  {
    path: 'hsrp',
    loadChildren: () => import('./hsrp/hsrp.module').then( m => m.HSRPPageModule)
  },
  {
    path: 'stp',
    loadChildren: () => import('./stp/stp.module').then( m => m.STPPageModule)
  },
  {
    path: 'etherchannel',
    loadChildren: () => import('./etherchannel/etherchannel.module').then( m => m.ETHERCHANNELPageModule)
  },
  {
    path: 'p2p',
    loadChildren: () => import('./p2p/p2p.module').then( m => m.P2pPageModule)
  },
  {
    path: 'gre',
    loadChildren: () => import('./gre/gre.module').then( m => m.GrePageModule)
  },
  {
    path: 'qos',
    loadChildren: () => import('./qos/qos.module').then( m => m.QosPageModule)
  },
  {
    path: 'button3',
    loadChildren: () => import('./button3/button3.module').then( m => m.Button3PageModule)
  },
  {
    path: 'basictopology',
    loadChildren: () => import('./basictopology/basictopology.module').then( m => m.BasictopologyPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

