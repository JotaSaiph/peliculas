import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  getMovies() {


  }
}


