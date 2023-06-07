import { MathematiqueService } from "../services/mathematique.service";
import { UtilsService } from "../services/utils.service";

export const createUtilsServiceFactory = (
  mathService: MathematiqueService
): UtilsService => {
  return new UtilsService(mathService);
};
export const createMathServiceFactory = (): MathematiqueService => {
  return new MathematiqueService();
};
