import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import {
  EMPTY,
  Observable,
  catchError,
  of,
  tap,
  filter,
  map,
  shareReplay,
} from "rxjs";
import { TodoService } from "src/app/todo/service/todo.service";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  juniors$: Observable<Cv[]>;
  seniors$: Observable<Cv[]>;
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    /*     private logger: LoggerService, */
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvs$ = this.cvService.getCvs().pipe(
      shareReplay(),
      catchError((err) => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      }),
      tap((cvs) => {
        console.log(cvs);
      })
    );
    this.juniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age < 40))
    );
    this.seniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age >= 40))
    );
    /* this.logger.logger("je suis le cvComponent"); */
    this.toastr.info("Bienvenu dans notre CvTech");
    this.cvService.selectCv$.subscribe(() => {
      this.nbClickItem++;
    });
  }
}
