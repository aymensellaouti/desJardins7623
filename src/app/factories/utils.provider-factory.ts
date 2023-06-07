import { MathematiqueService } from "../services/mathematique.service";
import { UtilsService } from "../services/utils.service";

export const createUtilsServiceFactory = (): UtilsService => {
  return new UtilsService();
};
export const createMathServiceFactory = (): MathematiqueService => {
  return new MathematiqueService();
};
