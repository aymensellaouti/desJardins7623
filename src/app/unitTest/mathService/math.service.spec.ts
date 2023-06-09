import { LoggerService } from "src/app/services/logger.service";
import { MathService } from "./math.service";

let loggerServiceSpy: LoggerService;
let mathService: MathService;
fdescribe("MathService", () => {
  beforeAll(() => {
    /* Arrange */
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["logger"]);
    mathService = new MathService(loggerServiceSpy);
  });
  it("should work", () => {
    // Todo : Test if the service is well instanciated
    expect(1).toBe(1);
  });
  it("should add two numbers", () => {
    /* Todo:
    Arrange
    Act
    Assert
    */
    /* Act */
    const spyAdd = spyOn(mathService, "add");
    spyAdd.and.callThrough();
    const result = mathService.add(1, 2);
    /* Assert */
    expect(spyAdd.calls.count()).toBe(1);
    expect(result).toBe(3);
  });
  it("should substract two numbers", () => {
    /* Act */
    const result = mathService.substract(1, 2);
    /* Assert */
    expect(result).toBe(-1);
  });
});
