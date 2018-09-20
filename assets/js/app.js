let etapas = [
    {etapa: 1, pasta: "rosto", opcional: false },
    {etapa: 2, pasta: "cabelo", opcional: false },
    {etapa: 3, pasta: "sobrancelha", opcional: false },
    {etapa: 4, pasta: "bigode", opcional: true },
    {etapa: 5, pasta: "barba", opcional: true },
    {etapa: 6, pasta: "tronco", opcional: false },
    {etapa: 7, pasta: "perna", opcional: false },
    {etapa: 8, pasta: "pes", opcional: false },
];

function etapa1(nome){
    $('.sexoOpc').hide();
    etapa('masculino', 1, etapas[0].pasta);
}

function selecionaImagem(e, pasta){
    let imagens = document.querySelectorAll('.avatar img');
    imagens.forEach(function(i){
        let caminho = $(i).attr('src');   
        if(caminho.indexOf(pasta) != -1)
            $(i).remove();        
    });

    let caminho = $(e).find('img').attr('src');
    $('.avatar').append(`<img src="${caminho}" class="img img-responsive">`);
}

function etapa(sexo, etapaAtual, pasta){
    let ultimaEtapa = false;

    if(etapaAtual == etapas.length)
         ultimaEtapa = true;

    $.ajax({
        url: `http://localhost:82/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let conteudo = `<p class="text-center">Qual o tipo de ${etapas[etapaAtual - 1].pasta} do seu avatar?</p>`;
            conteudo += `<div class="row">`;
            for(let i = 0; i < data; i++){
                conteudo += `<div class="col-sm-3" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost:82/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            if(!ultimaEtapa)
                conteudo += `</div><div class="row col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa('${sexo}', ${etapaAtual + 1}, '${etapas[etapaAtual].pasta}');">Confirmar</div>`;            
            else
                conteudo += `</div><div class="row col-sm-4 col-sm-offset-4 btn btn-primary">Encerrar</div>`;           
            $(`#etapaContent`).html(conteudo);
        }
    });
}