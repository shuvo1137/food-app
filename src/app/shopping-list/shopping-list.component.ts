import { Component, OnInit } from "@angular/core";
import { Ingredient } from "./Shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [ShoppingService],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  constructor(private shopping: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients=this.shopping.ingredients;
  }
}
