import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable, debounceTime, from, switchMap } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "src/config/routes.config";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent implements OnInit {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;

  constructor(private cvService: CvService, private router: Router) {}
  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls["name"];
    this.cvs$ = nameInput.valueChanges.pipe(
      debounceTime(500),
      switchMap((name) => this.cvService.getCvsByName(name))
    );
    this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate([APP_ROUTES.cv, cv.id])
    );
  }
}
