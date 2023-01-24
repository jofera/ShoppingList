import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://i.blogs.es/8968d6/risotto-a-los-cuatro-quesos/840_560.jpg'),
    new Recipe('A Test Recipe', 'This is a simply test', 'https://i.blogs.es/8968d6/risotto-a-los-cuatro-quesos/840_560.jpg')
  ];

  constructor(){
     
  }

  ngOnInit(): void {
    
  }
}
