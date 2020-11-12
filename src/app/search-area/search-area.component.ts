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
  type: String = "movie";
  movieDetails: any;
  favouritesList = [];
  showCard: Boolean = false;
  favourite;

  ngOnInit() {}

  search() {
    this.favourite = false;
    this.movieService
      .getDetailsByType(this.title, this.type)
      .subscribe((res: any) => {
        if (res) {
          this.movieDetails = res.Search;
          this.favourite = new Array(this.movieDetails.length).fill(false);
          this.showCard = true;
        }
      });
  }

  addFavourite(index) {
    let tempFav: any = [];
    tempFav = JSON.parse(localStorage.getItem("favouritesList"));
    this.favouritesList.push(this.movieDetails[index]);
    this.favourite[index] = true;
    tempFav &&
      tempFav.forEach((element) => {
        this.favouritesList.push(element);
      });
    localStorage.setItem("favouritesList", JSON.stringify(this.favouritesList));
    this.favouritesList = [];
  }

  removeFavourite(item, index) {
    this.favouritesList = JSON.parse(localStorage.getItem("favouritesList"));
    let spliceIndex = this.favouritesList.findIndex(
      (el) => el.imdbID == item.imdbID
    );
    this.favouritesList.splice(spliceIndex, 1);
    this.favourite[index] = false;
    localStorage.setItem("favouritesList", JSON.stringify(this.favouritesList));
    this.favouritesList = [];
  }
}
