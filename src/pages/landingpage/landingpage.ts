import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import { ListpagePage } from '../listpage/listpage';
import{User,DataService} from '../../app/data.service';
import { LoadingController } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-landingpage',
  templateUrl: 'landingpage.html',
})
export class LandingpagePage implements OnInit {

// user:User={
//   name:'prabakar',
//   age:25,
//   city:'chennai'
// }
// userId=null;
loader:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private alrtCtrl:AlertController,
              public loadingCtrl: LoadingController,
              private service:DataService) {

                this.loader = this.loadingCtrl.create({
                  content: `Please Wait...`,
              }); 
  }

  alert(message){
    this.alrtCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }

  ngOnInit(){
  }
addUser(user){
  this.loader.present();
  return this.service.addUser(user),
  this.alert("Succeess"),
  this.nav.setRoot(ListpagePage),
  this.loader.dismiss()
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingpagePage');
  }

}
