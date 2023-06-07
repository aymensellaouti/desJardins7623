import { Component } from "@angular/core";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-master-liste",
  templateUrl: "./master-liste.component.html",
  styleUrls: ["./master-liste.component.css"],
})
export class MasterListeComponent {
  cvs: Cv[] = [];
  constructor(
    private router: Router,
    private activtedRoute: ActivatedRoute,
    private cvService: CvService,
    private toastr: ToastrService
  ) {
    this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate([cv.id], {
        relativeTo: this.activtedRoute,
      })
    );
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
  }
}
