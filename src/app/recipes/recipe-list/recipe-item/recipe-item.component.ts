import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input("aliasRecipe") recipe!: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();
  onSelect() {
    this.selectedRecipe.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
