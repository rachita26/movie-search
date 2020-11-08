import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favourite-area",
  templateUrl: "./favourite-area.component.html",
  styleUrls: ["./favourite-area.component.scss"],
})
export class FavouriteAreaComponent implements OnInit {
  favouritesList: any = [];

  constructor() {}

  ngOnInit() {
    this.favouritesList = JSON.parse(localStorage.getItem("favouritesList"));
  }

  removeFavourite(index) {
    this.favouritesList.splice(index, 1);
    localStorage.setItem("favouritesList", JSON.stringify(this.favouritesList));
  }
}
