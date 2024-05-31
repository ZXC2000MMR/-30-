function toggleTheme()
{
let black = document.getElementById("temaizm")

if(black.getAttribute('class') == "light-mode")
{
black.removeAttribute("class")
black.setAttribute("class","grey-mode")
black.style.backgroundColor = "grey"
}
else if(black.getAttribute('class') == "grey-mode")
{
black.removeAttribute("class")
black.setAttribute("class","light-mode")
black.style.backgroundColor = "white"
}
}