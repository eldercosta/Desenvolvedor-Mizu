function toggleImagemProduto(event){

    // Remove seleção das thumbs não selecionadas e acrescenta seleção a si própria
    $('.thumb-selecionada').removeClass('thumb-selecionada');
    $(this).addClass('thumb-selecionada');
  
    // Capta ID da thumb e formata path para trocar a foto principal
    let urlThumb = event.target.src.split( "/" );
    let thumbImage = urlThumb[ urlThumb.length - 1 ];
    let thumbImageSplit = thumbImage.split( "-" );
    let thumbID = thumbImageSplit[ thumbImageSplit.length -1 ];
    let fotoPath = "src/assets/images/foto-" + thumbID;
  
    //Atribui src da thumb selecionada
    $('#foto-principal').attr( 'src', fotoPath );
}

export default toggleImagemProduto;