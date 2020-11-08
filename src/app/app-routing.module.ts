import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavouriteAreaComponent } from "./favourite-area/favourite-area.component";
import { SearchAreaComponent } from "./search-area/search-area.component";

const routes: Routes = [
  {
    path: "search",
    component: SearchAreaComponent,
  },
  {
    path: "favourite",
    component: FavouriteAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
