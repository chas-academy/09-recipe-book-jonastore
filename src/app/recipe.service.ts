import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http'; //remove headers=
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private query: string;
  private API_URL: string = environment.RECIPE_API_URL; //just put url here?
  private URL: string = this.API_URL + '?c=';

  constructor(private _http : Http) { }

  getRecipe(query) {
  	return this._http.get(this.URL + query).map(res => res.json());  //change URL to SEARCH_URL or something
  }

}
