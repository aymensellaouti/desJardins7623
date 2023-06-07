import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const LOGGER_SERVICE_TOKEN = new InjectionToken<LoggerService>(
  "LOGGER_SERVICE_TOKEN"
);

export const UUID_PROVIDER = new InjectionToken<() => string>("UUID_PROVIDER");
