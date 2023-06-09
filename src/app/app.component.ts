import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  Inject,
} from "@angular/core";
import { LoggerService } from "./services/logger.service";
import { LOGGER_SERVICE_TOKEN } from "./injectionTokens/inject.tokens";
import { UtilsService } from "./services/utils.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { User } from "./auth/dto/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  x = 2;
  name = "aymen";
  user: User = new User(1, "aymen@gmail.com");
  constructor(
    private utilsService: UtilsService,
    private router: Router,
    public ar: ApplicationRef,
    public cdr: ChangeDetectorRef,
    @Inject(LoggerService) private loggers: LoggerService[],
    private ngxService: NgxUiLoaderService
  ) {
    this.router.events.subscribe((event) => {
      /* Dés que tu commences ta navigation lance le loader */
      if (event instanceof NavigationStart) {
        /* this.ngxService.start(); */
      }
      /* Dés que tu termine ta navigation  le loader */
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        /* this.ngxService.stop(); */
      }
    });
    this.loggers.forEach((loggerService) => {
      loggerService.logger("From Custom provider");
    });
    console.log(this.utilsService.add(2, 5));
  }
  title = "Starting Advanced Topics";
  test() {
    console.log("Je vais retourner ", this.x);
    return this.x;
  }
}
