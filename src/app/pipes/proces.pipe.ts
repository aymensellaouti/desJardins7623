import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "proces",
})
export class ProcesPipe implements PipeTransform {
  transform(value: number): number {
    return this.proces(value);
  }

  proces(x: number): number {
    console.log("in proces : ", x);
    if (x > 3) {
      return 2 * this.proces(x - 3) + this.proces(x - 2);
    } else {
      return 1;
    }
  }
}
