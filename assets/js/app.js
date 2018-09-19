$(document).ready(function(){
    
});

function etapa1(nome){
    $('.etapa1').hide(); 
    etapa2('masculino');   
}

function etapa2(sexo){
    $('.etapa2').show();
    let pasta = "rosto";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let rostos = "";
            rostos += `<div class="row">`;
            for(let i = 0; i < data; i++){
            rostos += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            rostos += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa3('${sexo}')">Confirmar</div></div>`;
            $('#rostoOpc').html(rostos);
        }
    });
}

function etapa3(sexo){
    $('.etapa2').hide();
    $('.etapa3').show();
    let pasta = "cabelo";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let cabelos = "";
            cabelos += `<div class="row">`;
            for(let i = 0; i < data; i++){
                cabelos += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            cabelos += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa4('${sexo}')">Confirmar</div></div>`;
            $('#cabeloOpc').html(cabelos);
        }
    });
}

function etapa4(sexo){
    $('.etapa3').hide();
    $('.etapa4').show();
    let pasta = "sobrancelha";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let sobrancelhas = "";
            sobrancelhas += `<div class="row">`;
            for(let i = 0; i < data; i++){
                sobrancelhas += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            sobrancelhas += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa5('${sexo}')">Confirmar</div></div>`;
            $('#sobrancelhaOpc').html(sobrancelhas);
        }
    });
}

function etapa5(sexo){
    $('.etapa4').hide();
    $('.etapa5').show();
    let pasta = "bigode";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let bigodes = "";
            bigodes += `<div class="row">`;
            for(let i = 0; i < data; i++){
                bigodes += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            bigodes += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa6('${sexo}')">Confirmar</div></div>`;
            $('#bigodeOpc').html(bigodes);
        }
    });
}

function etapa6(sexo){
    $('.etapa5').hide();
    $('.etapa6').show();
    let pasta = "barba";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let barbas = "";
            barbas += `<div class="row">`;
            for(let i = 0; i < data; i++){
                barbas += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            barbas += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa7('${sexo}')">Confirmar</div></div>`;
            $('#barbaOpc').html(barbas);
        }
    });
}

function etapa7(sexo){
    $('.etapa6').hide();
    $('.etapa7').show();
    let pasta = "tronco";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let troncos = "";
            troncos += `<div class="row">`;
            for(let i = 0; i < data; i++){
                troncos += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            troncos += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa8('${sexo}')">Confirmar</div></div>`;
            $('#troncoOpc').html(troncos);
        }
    });
}

function etapa8(sexo){
    $('.etapa7').hide();
    $('.etapa8').show();
    let pasta = "perna";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let pernas = "";
            pernas += `<div class="row">`;
            for(let i = 0; i < data; i++){
                pernas += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            pernas += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa9('${sexo}')">Confirmar</div></div>`;
            $('#pernaOpc').html(pernas);
        }
    });
}

function etapa9(sexo){
    $('.etapa8').hide();
    $('.etapa9').show();
    let pasta = "pes";

    $.ajax({
        url: `http://localhost/myBuddy/steps/etapa.php?sexo=${sexo}&pasta=${pasta}`,
        method: 'GET',
        success: function(data){
            let pes = "";
            pes += `<div class="row">`;
            for(let i = 0; i < data; i++){
                pes += `<div class="col-sm-2" onclick="selecionaImagem(this, '${pasta}')">
                <img class="img img-responsive img-thumbnail imageOpt" src='http://localhost/myBuddy/assets/img/avatar/${sexo}/${pasta}/${i +1}.png'>
            </div>`;
            }
            pes += `</div><div class="row"><div class="col-sm-4 col-sm-offset-4 btn btn-primary" onclick="etapa9('${sexo}')">Confirmar</div></div>`;
            $('#peOpc').html(pes);
        }
    });
}

function selecionaImagem(e, pasta){
    let imagens = document.querySelectorAll('.avatar img');
    imagens.forEach(function(i){
        let caminho = $(i).attr('src');   
        if(caminho.indexOf(pasta) != -1){
            $(i).remove();
        }
    });

    let caminho = $(e).find('img').attr('src');
    $('.avatar').append(`<img src="${caminho}" class="img img-responsive">`);
}