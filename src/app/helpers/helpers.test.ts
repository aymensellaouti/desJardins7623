import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

export function getElementByAttribut(
  el: DebugElement,
  attribut: string
): DebugElement {
  return el.query(By.css(`[data-testid=${attribut}]`));
}
