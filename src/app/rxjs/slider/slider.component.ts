import { Component, Input } from "@angular/core";
import { map, startWith, take, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() time = 1000;
  @Input() paths = ["as.jpg", "404.png", "cv.png", "tim_logo.png"];
  @Input() size = 100;
  /* => 0, 1, 2, 3, 4, 5, 6, 7  */
  images$ = timer(0, this.time).pipe(
    map((indice) => this.paths[indice % this.paths.length]),
    /* => "as.jpg", "404.png", "cv.png", "tim_logo.png",  "as.jpg", "404.png", "cv.png", "tim_logo.png" */
    startWith(this.paths[0])
    /* take(3) */
  );
}
