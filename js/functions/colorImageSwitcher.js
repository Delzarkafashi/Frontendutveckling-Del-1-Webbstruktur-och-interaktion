const KNOWN_COLORS = ["röd", "svart", "vit"];

function buildImagePathFromColor(baseImagePath, newColor) {
  const lastSlash = baseImagePath.lastIndexOf("/");
  const dir = baseImagePath.slice(0, lastSlash + 1);  
  const file = baseImagePath.slice(lastSlash + 1);     

  const dotIndex = file.lastIndexOf(".");
  const name = file.slice(0, dotIndex);            
  const ext  = file.slice(dotIndex);                 
  let baseName = name;

  for (const c of KNOWN_COLORS) {
    if (name.includes(c)) {
      baseName = name.replace(c, newColor);
      break;
    }
  }

  return dir + baseName + ext;
}

export function setupColorImageSwitcher(cardElement, product) {
  const imgEl = cardElement.querySelector(".bild-klader img");
  const colorButtons = cardElement.querySelectorAll(".farg-btn");
  if (!imgEl || !colorButtons.length) return;

  colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;                     
      const nextSrc = buildImagePathFromColor(product.image, color);
      imgEl.src = nextSrc;                                
      imgEl.alt = `${product.name} ${color}`;           
    });
  });
}
