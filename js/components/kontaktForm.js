import { el } from "../functions/domUtils.js";
import { isValidEmail } from "../functions/validators.js";

import { createSubmitButton } from "./buttons/submitButton.js";
import { createResetButton } from "./buttons/resetButton.js";

import {
  setInvalid,
  showStatus,
  clearStatus,
  validateName,
  validateEmail,
  validateMessage,
  validateAll
} from "../functions/kontaktFormHelpers.js";

function mountKontaktForm(root) {
  root.innerHTML = "";

  const card = el("section", { className: "kontakt-card" });

  const title = el("h1", { text: "Kontakta oss" });
  const intro = el("p", {
    className: "kontakt-help",
    text: "Fyll i formuläret så återkommer vi."
  });

  const form = el("form", { attrs: { novalidate: "true" } });

  // ===== Namn =====
  const nameRow = el("div", { className: "kontakt-row" });
  const nameLabel = el("label", {
    className: "kontakt-label",
    text: "Namn",
    attrs: { for: "kontakt-name" }
  });
  const nameInput = el("input", {
    className: "kontakt-input kontakt-input-name",
    attrs: {
      id: "kontakt-name",
      name: "name",
      type: "text",
      placeholder: "Ditt namn",
      autocomplete: "name"
    }
  });
  const nameError = el("div", {
    className: "kontakt-error",
    text: "Skriv minst 2 tecken."
  });
  nameRow.append(nameLabel, nameInput, nameError);

  // ===== E-post =====
  const emailRow = el("div", { className: "kontakt-row" });
  const emailLabel = el("label", {
    className: "kontakt-label",
    text: "E-post",
    attrs: { for: "kontakt-email" }
  });
  const emailInput = el("input", {
    className: "kontakt-input kontakt-input-email",
    attrs: {
      id: "kontakt-email",
      name: "email",
      type: "email",
      placeholder: "namn@exempel.se",
      autocomplete: "email"
    }
  });
  const emailError = el("div", {
    className: "kontakt-error",
    text: "Skriv en giltig e-postadress."
  });
  emailRow.append(emailLabel, emailInput, emailError);

  // ===== Ämne =====
  const topicRow = el("div", { className: "kontakt-row" });
  const topicLabel = el("label", {
    className: "kontakt-label",
    text: "Ämne",
    attrs: { for: "kontakt-topic" }
  });

  const topicSelect = el("select", {
    className: "kontakt-select kontakt-select-topic",
    attrs: { id: "kontakt-topic", name: "topic" }
  });

  const topics = [
    { value: "", label: "Välj ämne..." },
    { value: "support", label: "Support" },
    { value: "samarbete", label: "Samarbete" },
    { value: "annat", label: "Annat" }
  ];

  topics.forEach((t) => {
    topicSelect.append(el("option", { text: t.label, attrs: { value: t.value } }));
  });

  const topicHelp = el("div", {
    className: "kontakt-help",
    text: "Välj vad ditt ärende gäller."
  });

  topicRow.append(topicLabel, topicSelect, topicHelp);

  // ===== Meddelande =====
  const msgRow = el("div", { className: "kontakt-row" });
  const msgLabel = el("label", {
    className: "kontakt-label",
    text: "Meddelande",
    attrs: { for: "kontakt-message" }
  });

  const msgTextarea = el("textarea", {
    className: "kontakt-textarea kontakt-textarea-message",
    attrs: {
      id: "kontakt-message",
      name: "message",
      rows: "5",
      placeholder: "Skriv ditt meddelande..."
    }
  });

  const msgError = el("div", {
    className: "kontakt-error",
    text: "Skriv minst 10 tecken."
  });

  const counter = el("div", { className: "kontakt-help", text: "0 tecken" });

  msgRow.append(msgLabel, msgTextarea, msgError, counter);

  // ===== Actions (wrapper direkt här) =====
  const actions = el("div", { className: "kontakt-actions" });
  const submitBtn = createSubmitButton();
  const resetBtn = createResetButton();
  actions.append(submitBtn, resetBtn);

  // ===== Status =====
  const status = el("div", { className: "kontakt-status" });

  // Sätt ihop allt
  form.append(nameRow, emailRow, topicRow, msgRow, actions);
  card.append(title, intro, form, status);
  root.append(card);

  // ===== Events =====
  nameInput.addEventListener("input", () => {
    validateName(nameInput, nameRow);
    clearStatus(status);
  });

  emailInput.addEventListener("input", () => {
    validateEmail(emailInput, emailRow, isValidEmail);
    clearStatus(status);
  });

  msgTextarea.addEventListener("input", () => {
    counter.textContent = `${msgTextarea.value.length} tecken`;
    validateMessage(msgTextarea, msgRow);
    clearStatus(status);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    counter.textContent = "0 tecken";
    setInvalid(nameRow, false);
    setInvalid(emailRow, false);
    setInvalid(msgRow, false);
    clearStatus(status);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ok = validateAll(
      { nameInput, nameRow, emailInput, emailRow, msgTextarea, msgRow },
      isValidEmail
    );

    if (!ok) {
      showStatus(status, "❌ Kontrollera fälten markerade i rött.");
      return;
    }

    const data = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      topic: topicSelect.value,
      message: msgTextarea.value.trim(),
      createdAt: new Date().toISOString()
    };

    console.log("Kontaktform data:", data);
    showStatus(status, `✅ Tack ${data.name}! Vi hör av oss snart.`);

    form.reset();
    counter.textContent = "0 tecken";
    setInvalid(nameRow, false);
    setInvalid(emailRow, false);
    setInvalid(msgRow, false);
  });
}

// Auto-init
const kontaktRoot = document.querySelector("#kontakt-app");
if (kontaktRoot) {
  mountKontaktForm(kontaktRoot);
}
