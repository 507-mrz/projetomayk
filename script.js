function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "mayke brito azul")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "mayke amarelo")
  }
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
    */

  /* pegar a tag img
  substituir a imagem
  se tiver light mode, adicionar a imagem light.
  se tiver sem light mode, manter a imagem normal */
}
