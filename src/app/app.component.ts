import { Component, Inject } from "@angular/core";
import { LoggerService } from "./services/logger.service";
import { LOGGER_SERVICE_TOKEN } from "./injectionTokens/inject.tokens";
import { UtilsService } from "./services/utils.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private utilsService: UtilsService,
    @Inject(LoggerService) private loggers: LoggerService[]
  ) {
    this.loggers.forEach((loggerService) => {
      loggerService.logger("From Custom provider");
    });
    console.log(this.utilsService.add(2, 5));
  }
  title = "Starting Advanced Topics";
}
