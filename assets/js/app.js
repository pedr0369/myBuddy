let etapas = [    
    {etapa: 1, pasta: "cabelo", opcional: false },
    {etapa: 2, pasta: "sobrancelha", opcional: false },
    {etapa: 3, pasta: "bigode", opcional: true },
    {etapa: 4, pasta: "barba", opcional: true },
    {etapa: 5, pasta: "tronco", opcional: false },
    {etapa: 6, pasta: "perna", opcional: false },
    {etapa: 7, pasta: "pes", opcional: false },
];

let selecionadoOpcional = false;
let selecionadoPele = false;

function escolheSexo(sexo){
    $('.sexoOpc').hide();
    $('.peleOpc').show();
    
    $.ajax({
        url: `http://localhost/myBuddy/steps/pele.php?pasta=pele`,
        method: 'GET',
        success: function(data){
            let conteudo = `<p class="text-center">Qual a cor da pele do seu avatar?</p>`;
            conteudo += `<div class="row">`;
            for(let i = 0; i < data; i++){
                conteudo += `<div class="col-sm-3" onclick="selecionaPele(this, '${sexo}', 'pele')">
                    <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/pele/${i +1}.png'>
                </div>`;
            }
            conteudo += `</div><div class="row col-sm-4 col-sm-offset-4 btn btn-primary" onclick="confirmaPele('${sexo}');">Confirmar</div>`;
            $(`.peleOpc`).html(conteudo);
        }
    });
}

function selecionaPele(e, sexo, pasta){
    let caminho = $(e).find('img').attr('src');
    let escolha = caminho.substr(caminho.lastIndexOf('/') + 1, caminho.lastIndexOf('.'));
    selecionadoPele = true;
    $('.avatar').html(`
        <img class="img img-responsive" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/corpo/${escolha}'>
        <img class="img img-responsive" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/rosto/${escolha}'>
    `);
}

function confirmaPele(sexo){
    $('.peleOpc').hide();
    $('#etapaContent').show();

    if(selecionadoPele)
        etapa(sexo, 1, etapas[0].pasta);
    else
        alert('Selecione uma cor de pele');
}

function selecionaImagem(e, pasta){
    let imagens = document.querySelectorAll('.avatar img');
    imagens.forEach(function(i){
        let caminho = $(i).attr('src');   
        if(caminho.indexOf(pasta) != -1)
            $(i).remove();        
    });
    selecionadoOpcional = true;
    let caminho = $(e).find('img').attr('src');
    $('.avatar').append(`<img src="${caminho}" class="img img-responsive">`);    
}

function confirmar(sexo, etapaAtual, pasta){    
    if(!etapas[etapaAtual - 2].opcional){
        if(!selecionadoOpcional){
            alert('É necessário escolher uma imagem.');
            etapa(sexo, etapaAtual - 1, etapas[etapaAtual-2].pasta);
        }
        else
            etapa(sexo, etapaAtual, pasta);
    }
    else
        etapa(sexo, etapaAtual, pasta);
}

function etapa(sexo, etapaAtual, pasta){    
    let ultimaEtapa = false;
    selecionadoOpcional = false;
    
    if(etapaAtual == etapas.length)
        ultimaEtapa = true;

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let conteudo = `<p class="text-center">Qual o tipo de ${etapas[etapaAtual - 1].pasta} do seu avatar?</p>`;
            conteudo += `<div class="row">`;
            for(let i = 0; i < data; i++){
                conteudo += `<div class="col-sm-3" onclick="selecionaImagem(this, '${pasta}')">
                    <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
                </div>`;
            }

            if(!ultimaEtapa){
                conteudo += `</div><div class="row col-sm-3 col-sm-offset-3 btn btn-primary" onclick="confirmar('${sexo}', ${etapaAtual + 1}, '${etapas[etapaAtual].pasta}');">Confirmar</div>`;
                if((etapaAtual - 1) > 0)
                    conteudo += `<div class="row col-sm-3 col-sm-offset-1 btn btn-default" onclick="etapa('${sexo}', ${etapaAtual - 1}, '${etapas[etapaAtual - 2].pasta}');">Voltar</div>`;            
            }
            else
                conteudo += `</div><div class="row col-sm-4 col-sm-offset-4 btn btn-primary">Encerrar</div>`;

            $(`#etapaContent`).html(conteudo);
        }
    });
}