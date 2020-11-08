import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-search-area",
  templateUrl: "./search-area.component.html",
  styleUrls: ["./search-area.component.scss"],
})
export class SearchAreaComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  title: any;
  type: String = "All";
  movieDetails: any;
  favouritesList = [];
  showCard: Boolean = false;
  favourite: Boolean = false;

  ngOnInit() {}

  search() {
    this.favourite = false;
    this.movieService
      .getMovieDetails(this.title, this.type)
      .subscribe((res) => {
        if (res) {
          this.movieDetails = res;
          this.showCard = true;
        }
      });
  }

  addFavourite() {
    let tempFav: any = [];
    tempFav = JSON.parse(localStorage.getItem("favouritesList"));
    this.favouritesList.push(this.movieDetails);
    this.favourite = true;
    tempFav &&
      tempFav.forEach((element) => {
        this.favouritesList.push(element);
      });
    localStorage.setItem("favouritesList", JSON.stringify(this.favouritesList));
    this.favouritesList = [];
  }

  removeFavourite() {
    this.favouritesList = JSON.parse(localStorage.getItem("favouritesList"));
    this.favouritesList.splice(0, 1);
    this.favourite = false;
    localStorage.setItem("favouritesList", JSON.stringify(this.favouritesList));
    this.favouritesList = [];
  }
}
