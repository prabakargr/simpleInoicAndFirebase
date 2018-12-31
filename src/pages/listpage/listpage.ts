import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import{User,DataService} from '../../app/data.service';
import { LandingpagePage } from '../landingpage/landingpage';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ListpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpage',
  templateUrl: 'listpage.html',
})
export class ListpagePage implements OnInit {
  users:User[];
loader:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private service:DataService,
              private alrtCtrl:AlertController,
              public loadingCtrl: LoadingController,
              private nav:Nav
              ) {
                this.loader = this.loadingCtrl.create({
                  content: `Please Wait...`,
              }); 
  }
  ngOnInit(){
    this.service.getUsers().subscribe(res=>{
      this.users=res
    })
  }
  alert(message){
    this.alrtCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }
  remove(user){
    this.loader.present();
    this.service.removeUser(user.id)
    this.ngOnInit();
    this.loader.dismiss();
    this.alert('Deleted')
    
  }
  ionViewDidLoad() {  }
  goHome(){
    this.nav.setRoot(LandingpagePage)
  }
}
