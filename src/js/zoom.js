const img = document.getElementById('foto-principal');
const overlay = document.getElementById('overlay');
  
function zoomOut() {
	overlay.classList.add('d-none');
}

function zoom(event){

	overlay.classList.remove('d-none');
	overlay.style.backgroundImage = "url('" + img.src + "')";
	overlay.style.backgroundSize = (img.width * 1.5) + "px " + (img.height * 1.5) + "px";

	overlay.addEventListener("mousemove", moverOverlay);
	img.addEventListener("mousemove", moverOverlay);

	overlay.addEventListener("touchmove", moverOverlay);
    img.addEventListener("touchmove", moverOverlay);

}

function moverOverlay(){

	event.preventDefault();
	
	let pos = posicaoCursor(event);
	
	let posX = pos.x - ( overlay.offsetWidth / 2 );
	let posY = pos.y - ( overlay.offsetHeight / 2 );

	// Impedir que overlay ultrapasse área de zoom
    if (posX > img.width - overlay.offsetWidth) {posX = img.width - overlay.offsetWidth;}
    if (posX < 0) {posX = 0;}
    if (posY > img.height - overlay.offsetHeight) {posY = img.height - overlay.offsetHeight;}
	if (posY < 0) {posY = 0;}
	
	// Mover overlay
	overlay.style.left = posX + "px";
	overlay.style.top = posY + "px";
	
	// Alterar posição do background
	overlay.style.backgroundPosition = "-" + (posX * 1.5) + "px -" + (posY * 1.5) + "px";
  }

function posicaoCursor(event) {

	var bounderImg, x = 0, y = 0;

	event = event || window.event;
	
    // Capta posição x e y da imagem
	bounderImg = img.getBoundingClientRect();

    // Calcula x e y em relação à imagem
    x = event.pageX - bounderImg.left;
	y = event.pageY - bounderImg.top;
	
    // Considera scroll na página
    x = x - window.pageXOffset;
	y = y - window.pageYOffset;
	
    return {x : x, y : y};
}
export { zoom, zoomOut } ;