const divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", changeBg);
}

function changeBg() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
