var itensPrateleira;
var totalItems = $('.carousel-item').length;

function carouselConfigurar(){

    let li = $('#prateleira-carousel li');

    if( window.innerWidth>=992 ){
        itensPrateleira = 4;
    }else if( window.innerWidth>=768 && window.innerWidth<992 ){
        itensPrateleira = 3;
    }else if( window.innerWidth>=576 && window.innerWidth<768 ){
        itensPrateleira = 2;
    }else{
        itensPrateleira = 1;
    }

    for(let i=0; i<itensPrateleira; i++){
        li.eq(i).removeClass('d-none');
        li.eq(i).children().addClass('active');
    }
    for(let i=itensPrateleira; i<totalItems;i++){
        li.eq(i).addClass('d-none');
        li.eq(i).children().removeClass('active');
    }

}

function carouselSlide(event){
    
    let ul = $('#prateleira-carousel ul');
    let li = $('#prateleira-carousel li');
    let direction = event.target.className.split("-")[2];
	let carouselLastItemHidden = li.eq( totalItems - 1 );
	let carouselLastItemActive = li.eq( itensPrateleira - 1 );
	let carouselFirstItemActive = li.eq( 0 );
    let carouselFirstItemHidden = li.eq( itensPrateleira );
    
	if(direction == 'next'){
        carouselFirstItemActive.children().removeClass('active');
        carouselFirstItemActive.addClass('d-none');
        carouselFirstItemActive.appendTo(ul);
        carouselFirstItemHidden.removeClass('d-none');
		carouselFirstItemHidden.children().addClass('active');
	}else{
        carouselLastItemActive.children().removeClass('active');
        carouselLastItemActive.addClass('d-none');
        carouselLastItemHidden.prependTo(ul);
        carouselLastItemHidden.removeClass('d-none');
		carouselLastItemHidden.children().addClass('active');
    }
}

export { carouselConfigurar, carouselSlide };
