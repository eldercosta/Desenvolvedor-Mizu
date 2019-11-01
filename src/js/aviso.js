// Função para mostrar aviso de Compra
function mostrarAvisoSacola(produto){
    let aviso = document.getElementById("aviso");
    let conteudo = document.createElement('p');

    aviso.classList.remove("d-none");
    aviso.classList.add("aviso-sacola");
    conteudo.textContent = 'Adicionado à Sacola';

    document.getElementById("aviso-content").append(conteudo);

    setTimeout(fecharAvisoCompra,1250);
    setTimeout(limparConteudoAviso,1250);
    
}

function mostrarAvisoDesejo(produto){
    let aviso = document.getElementById("aviso");
    let conteudo = document.createElement('p');

    aviso.classList.remove("d-none");
    aviso.classList.add("aviso-desejo");
    conteudo.textContent = 'Adicionado à Desejos';

    document.getElementById("aviso-content").append(conteudo);

    setTimeout(fecharAvisoCompra,1250);
    setTimeout(limparConteudoAviso,1250);
}

function limparConteudoAviso(){

    let aviso = document.getElementById("aviso");
    let conteudo = $('#aviso-content p');

    aviso.classList.remove("aviso-desejo","aviso-sacola");  
    conteudo.remove();
}

// Função para fechar aviso de Compra
function fecharAvisoCompra(){

    document.getElementById("aviso").classList.add("d-none");
}

export { mostrarAvisoSacola, mostrarAvisoDesejo };