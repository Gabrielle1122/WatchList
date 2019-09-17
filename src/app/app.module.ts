import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item/media-item.component";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from "./media-item-form/media-item-form.component";
import { lookupListToken, lookupLists } from "./providers";

@NgModule({
  //all of these can be set up as an array

  //the declarations property is used to make components, directives
  //pipes available to your module, that don't come from another module
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  //imports property is used to bring in other angular modules
  //your module will need
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: lookupListToken,
      useValue: lookupLists
    }
  ],
  //the bootstrap property is used for a root module, and will let angular knnow
  //which component or components will be the starting points for the bootstrap process
  //entry point for your app code
  bootstrap: [AppComponent]
})
export class AppModule {}
