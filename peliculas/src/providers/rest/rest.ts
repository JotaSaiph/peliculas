import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  num: String;
  apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=6eb8f75b76dd7a332993ed9423c8a9d4&query=';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getMovies() {
    return new Promise(resolver => {
      this.http.get(this.apiUrl + this.num).subscribe(data => {
        resolver(data);
      }, err => {
        console.log(err);
      });
    });
  }



}
