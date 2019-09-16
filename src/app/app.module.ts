import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

@NgModule({
  //all of these can be set up as an array

  //the declarations property is used to make components, directives
  //pipes available to your module, that don't come from another module
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent],
  //imports property is used to bring in other angular modules
  //your module will need
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //the bootstrap property is used for a root module, and will let angular knnow
  //which component or components will be the starting points for the bootstrap process
  //entry point for your app code
  bootstrap: [AppComponent]
})
export class AppModule {}
