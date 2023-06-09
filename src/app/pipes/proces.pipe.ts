import { Pipe, PipeTransform } from "@angular/core";
import memo from "memo-decorator";
@Pipe({
  name: "proces",
})
export class ProcesPipe implements PipeTransform {
  @memo()
  transform(value: number): number {
    return this.proces(value);
  }
  @memo()
  proces(x: number): number {
    console.log("in proces : ", x);
    if (x > 3) {
      return 2 * this.proces(x - 3) + this.proces(x - 2);
    } else {
      return 1;
    }
  }
}
