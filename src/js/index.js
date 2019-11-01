import * as jQuery from './jquery.js';
import toggleImagemProduto from './toggleImg.js';
import { carouselConfigurar, carouselSlide } from './carousel.js';
import { zoom, zoomOut } from './zoom.js';
import { mostrarAvisoSacola, mostrarAvisoDesejo } from './aviso.js';

(function init(){
	
	carouselConfigurar();
	window.addEventListener("resize",carouselConfigurar);
	
	$('.produto-zoom').on("mousemove",zoom);
	$('#overlay').on("mouseleave",zoomOut);

	$('#adicionar-sacola').on("click",mostrarAvisoSacola);
	$('.lista-desejo i').on("click",mostrarAvisoDesejo);
	$('.lista-desejo p').on("click",mostrarAvisoDesejo);

	$('.thumb').on("click",toggleImagemProduto);
	
	$('.carousel-control-next-icon').on("click",carouselSlide);
	$('.carousel-control-prev-icon').on("click",carouselSlide);

})();