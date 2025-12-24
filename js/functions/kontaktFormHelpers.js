export function setInvalid(row, invalid) {
  row.classList.toggle("kontakt-invalid", invalid);
}

export function showStatus(statusEl, text) {
  statusEl.textContent = text;
  statusEl.classList.add("kontakt-show");
}

export function clearStatus(statusEl) {
  statusEl.textContent = "";
  statusEl.classList.remove("kontakt-show");
}

export function validateName(nameInput, nameRow) {
  const ok = nameInput.value.trim().length >= 2;
  setInvalid(nameRow, !ok);
  return ok;
}

export function validateEmail(emailInput, emailRow, isValidEmailFn) {
  const ok = isValidEmailFn(emailInput.value);
  setInvalid(emailRow, !ok);
  return ok;
}

export function validateMessage(msgTextarea, msgRow) {
  const ok = msgTextarea.value.trim().length >= 10;
  setInvalid(msgRow, !ok);
  return ok;
}

export function validateAll({ nameInput, nameRow, emailInput, emailRow, msgTextarea, msgRow }, isValidEmailFn) {
  const a = validateName(nameInput, nameRow);
  const b = validateEmail(emailInput, emailRow, isValidEmailFn);
  const c = validateMessage(msgTextarea, msgRow);
  return a && b && c;
}
