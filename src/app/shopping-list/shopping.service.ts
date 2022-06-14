import { Injectable } from "@angular/core";
import { Ingredient } from "./Shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient("apple", 5),
    new Ingredient("banana", 15),
  ];

  constructor() {}
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
