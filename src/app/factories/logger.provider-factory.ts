import { Logger2Service, LoggerService } from "../services/logger.service";

export const createLoggerServiceFactory = (): LoggerService => {
  return new LoggerService();
};

export const createLogger2ServiceFactory = (): Logger2Service => {
  return new Logger2Service();
};
