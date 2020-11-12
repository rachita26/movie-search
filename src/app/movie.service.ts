import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getDetailsByType(query, type?) {
    return this.http.get(
      `https://www.omdbapi.com/?s=${query}&apikey=d3a560c&type=${type}`
    );
  }
}
