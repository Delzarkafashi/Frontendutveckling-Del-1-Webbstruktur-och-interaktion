// vilka färgord vi känner igen i filnamnet
const KNOWN_COLORS = ["röd", "svart", "vit"];

function buildImagePathFromColor(baseImagePath, newColor) {
  // splitta upp i mapp + filnamn
  const lastSlash = baseImagePath.lastIndexOf("/");
  const dir = baseImagePath.slice(0, lastSlash + 1);   // t.ex. "assets/images/"
  const file = baseImagePath.slice(lastSlash + 1);     // t.ex. "Vinterstövlar röd.png"

  // splitta upp filnamnet i namn + ändelse
  const dotIndex = file.lastIndexOf(".");
  const name = file.slice(0, dotIndex);                // "Vinterstövlar röd"
  const ext  = file.slice(dotIndex);                   // ".png"

  let baseName = name;

  // byt ut färgordet i namnet mot newColor (röd/svart/vit)
  for (const c of KNOWN_COLORS) {
    if (name.includes(c)) {
      baseName = name.replace(c, newColor);
      break;
    }
  }

  // sätt ihop full sökväg igen
  return dir + baseName + ext;
}

export function setupColorImageSwitcher(cardElement, product) {
  // bild-elementet i just det här kortet
  const imgEl = cardElement.querySelector(".bild-klader img");
  // alla färgknappar i kortet
  const colorButtons = cardElement.querySelectorAll(".farg-btn");
  if (!imgEl || !colorButtons.length) return;

  colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;                      // t.ex. "svart"
      const nextSrc = buildImagePathFromColor(product.image, color); // räkna ut ny bild-path
      imgEl.src = nextSrc;                                  // byt bild
      imgEl.alt = `${product.name} ${color}`;               // uppdatera alt-text
    });
  });
}
