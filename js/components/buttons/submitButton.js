import { el } from "../../functions/domUtils.js";

export function createSubmitButton(text = "Skicka") {
  return el("button", {
    className: "kontakt-btn kontakt-btn-submit",
    text,
    attrs: { type: "submit" }
  });
}
