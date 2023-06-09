import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { CvModule } from "./../cv/cv.module";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    /*
      si dans ma route j'ai des data et si dans data j'ai une propriété preload qui est true
        fait du proeladding strategy pour ce CvModule
      Sinon
        ne le preload pas
    */
    if (route.data && route.data["preload"]) {
      return load();
    }
    return of(null);
  }
}
