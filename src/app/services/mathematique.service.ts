import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MathematiqueService {
  add(x: number, y: number): number {
    console.log("in Mathematique");

    return x + y;
  }
}
