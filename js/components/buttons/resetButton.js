import { el } from "../../functions/domUtils.js";

export function createResetButton(text = "Rensa") {
  return el("button", {
    className: "kontakt-btn kontakt-btn-reset",
    text,
    attrs: { type: "button" }
  });
}
