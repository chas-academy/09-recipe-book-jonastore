import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
