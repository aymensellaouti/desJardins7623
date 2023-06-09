import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../auth/dto/user.model";

@Component({
  selector: "app-test-on-push",
  templateUrl: "./test-on-push.component.html",
  styleUrls: ["./test-on-push.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TestOnPushComponent {
  @Input() name = "";
  @Input() user: User = new User(1, "");
  data = [1, 2, 3, 5, 9, 12, 12, 5];
  constructor() {
    setTimeout(() => {
      this.name += "j ajoute du neuf";
      console.log("cc je vais changer name :D");
    }, 1000);
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
