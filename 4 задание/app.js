const photo = ['photki/mem.jpg', 'photki/mem2.jpg', 'photki/mem3.jpg']; 
let getphoto = 0; 

function sle() {
  getphoto = (getphoto + 1) % photo.length; 
  document.getElementById('gallery').src = photo[getphoto]; 
}
function pre() {
  getphoto = (getphoto - 1 + photo.length) % photo.length; 
  document.getElementById('gallery').src = photo[getphoto]; 
}