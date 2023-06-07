import { Injectable } from "@angular/core";
import { MathematiqueService } from "./mathematique.service";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor(private mathService: MathematiqueService) {}
  add(x: number, y: number): number {
    return this.mathService.add(x, y);
  }
}
