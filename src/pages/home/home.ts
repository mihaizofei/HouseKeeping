import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // styleUrls: ['./home.scss']
})
export class HomePage {
  public title: string;

  constructor(public navCtrl: NavController) {
    this.title = 'Craiova';
  }

  public onSearchCity(city: string) {
    this.title = city;
    console.log(`Searching for: ${city}`);
  }

}
