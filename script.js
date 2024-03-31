function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //trocar imagem
  //se tiver light mode,oculos escuro
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mano de óculos escuro pra não ficar cegueta")
  } else {
    //se não tiver light mode,manter a atual
    img.setAttribute("src", "./assets/avatar sem óculos.png")
    img.setAttribute("alt", "Perfil normal sem óculos")
  }
}
