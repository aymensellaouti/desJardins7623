import { Injectable, inject } from "@angular/core";
import { MathematiqueService } from "./mathematique.service";
import { MathService } from "../unitTest/mathService/math.service";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor() {}
  mathService: MathematiqueService = inject(MathematiqueService);
  add(x: number, y: number): number {
    return this.mathService.add(x, y);
  }
}
