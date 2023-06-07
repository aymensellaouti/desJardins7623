import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";

@Injectable({
  providedIn: "root",
})
export class DetailCvResolverResolver implements Resolve<Cv> {
  constructor(private cvService: CvService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cv> {
    return this.cvService.getCvById(+route.params["id"]);
  }
}
