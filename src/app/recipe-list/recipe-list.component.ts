import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: any[];

  constructor(private _recipeService : RecipeService) { }

  searchRecipes(query){
  	return this._recipeService.getRecipe(query).subscribe(
  		data => this.searchComplete(data))
  }

  getDetail(id: number) {
   //return this.route.snapshot.paramMap.get('id');
  }

  searchComplete(data) { 
  	this.recipes = data.meals;
  	console.log(data.meals);
  }

  ngOnInit() {
  }

}
