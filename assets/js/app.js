var umini = {
    sexo: '',
    pele: '',
    cabelo: '',
    sobranchelha: '',
    bigode: '',
    barba: '',
    tronco: '',
    perna: '',
    pes: ''
}

var urlImagens = 'http://localhost/myBuddy/assets/img/avatar/';

$(document).ready(function(){    

    $('.tabs').tabs({
        onShow: function(tab){
            if(umini.sexo != "" && umini.pele != ""){      
                let imagens = "";
                if(tab.id == 'rosto'){
                    let opcRosto1 = 'sobrancelha';                    

                    imagens += `<h6 class="center">Sobrancelha</h6>`;
                    carregaImagens(`${umini.sexo}/${opcRosto1}`).done(function(data){
                        for(var i = 1; i < parseInt(data) + 1; i++){
                            imagens += `<img class="imgOpc" onclick="escolheOpc(${i}, '${opcRosto1}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${opcRosto1}/${i}.png" />`;
                        }
                        $('.tabCorpo').html(imagens);
                    });
                    
                    if(umini.sexo == 'masculino'){
                        let opcRosto2 = 'bigode';
                        let opcRosto3 = 'barba';

                        bigode = "";
                        barba = "";

                        bigode += `<h6 class="center">Bigode</h6>`;
                        carregaImagens(`${umini.sexo}/${opcRosto2}`).done(function(data){
                            for(var i = 1; i < parseInt(data) + 1; i++){
                                bigode += `<img class="imgOpc" onclick="escolheOpc(${i}, '${opcRosto2}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${opcRosto2}/${i}.png" />`;
                            }
                            $('.tabCorpo').append(bigode);
                        });

                        barba += `<h6 class="center">Barba</h6>`;
                        carregaImagens(`${umini.sexo}/${opcRosto3}`).done(function(data){
                            for(var i = 1; i < parseInt(data) + 1; i++){
                                barba += `<img class="imgOpc" onclick="escolheOpc(${i}, '${opcRosto3}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${opcRosto3}/${i}.png" />`;
                            }
                            $('.tabCorpo').append(barba);
                        });
                    }
                }

                else if(tab.id == 'cabelo'){                                        
                    carregaImagens(`${umini.sexo}/${tab.id}`).done(function(data){
                        for(var i = 1; i < parseInt(data) + 1; i++){
                            imagens += `<img class="imgOpc" onclick="escolheOpc(${i}, '${tab.id}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${tab.id}/${i}.png" />`;
                        }
                        $('.tabCorpo').html(imagens);
                    });
                }

                else if(tab.id == "tronco"){
                    carregaImagens(`${umini.sexo}/${tab.id}`).done(function(data){
                        for(var i = 1; i < parseInt(data) + 1; i++){
                            imagens += `<img class="imgOpc" onclick="escolheOpc(${i}, '${tab.id}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${tab.id}/${i}.png" />`;
                        }
                        $('.tabCorpo').html(imagens);
                    });
                }

                else if(tab.id == "perna"){
                    carregaImagens(`${umini.sexo}/${tab.id}`).done(function(data){
                        for(var i = 1; i < parseInt(data) + 1; i++){
                            imagens += `<img class="imgOpc" onclick="escolheOpc(${i}, '${tab.id}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${tab.id}/${i}.png" />`;
                        }
                        $('.tabCorpo').html(imagens);
                    });
                }

                else if(tab.id == "pes"){
                    carregaImagens(`${umini.sexo}/${tab.id}`).done(function(data){
                        for(var i = 1; i < parseInt(data) + 1; i++){
                            imagens += `<img class="imgOpc" onclick="escolheOpc(${i}, '${tab.id}')" class="responsive-img col s3" src="${urlImagens}${umini.sexo}/${tab.id}/${i}.png" />`;
                        }
                        $('.tabCorpo').html(imagens);
                    });
                }
            }
            else {
                let mensagem = 'Favor selecionar: '
                if(umini.sexo != "")
                    mensagem += 'sexo'    
                if(umini.pele != "")
                    mensagem += ', cor da pele.'

                toastr.error(mensagem);
            }
        }
    });

    isExistsUmini();
});

/*
    Função que determina o sexo do umini 
*/
function escolheSexo(opc)
{
    if(umini.sexo != '' && opc != umini.sexo){
        let confirma = confirm('Deseja realmente trocar o sexo do seu Umini?');
        if(confirma)
            resetaUmini();        
        else
            return;      
    }

    umini.sexo = opc;

    $('.peleOpc').show();
    $('.peleOpc').addClass('col s12 corPeleCampo');
    carregaImagens('pele').done(function(data){
        let imagens = 'Cor da pele: ';
        for(var i = 1; i < parseInt(data) + 1; i++){
            imagens += `<img class="imgPele" width="32px" height="32px" src="${urlImagens}pele/${i}.png" onclick="escolhePele(${i})" />`;
        }
        $('.peleOpc').html(imagens);
    });
}

/*
    Função responsável por preencher o objeto de pele com a imagem escolhida
*/
function escolhePele(opc){
    umini.pele = opc + '.png';
    $('.peleOpc').hide();

    montaUmini();
}

/*
    Função responsável de montar o objeto do umini
*/
function escolheOpc(opc, parte){
    if(parte == 'cabelo')
        umini.cabelo = opc + '.png';

    if(parte == 'sobrancelha')
        umini.sobrancelha = opc + '.png';

    if(parte == 'bigode')
        umini.bigode = opc + '.png';

    if(parte == 'barba')
        umini.barba = opc + '.png';

    if(parte == 'tronco')
        umini.tronco = opc + '.png';

    if(parte == 'perna')
        umini.perna = opc + '.png';

    if(parte == 'pes')
        umini.pes = opc + '.png';

    localStorage.umini = JSON.stringify(umini);
    montaUmini();
}

/*
    Função que pega o json do umini e monta na tela o boneco
*/
function montaUmini()
{
    let sexo = "";
    let imagens = "";

    //console.log(umini);

    for(var u in umini){
        if(umini[u] != ''){
            if(u == "sexo")
                sexo = umini[u];

            if(u == "pele"){
                imagens += `<img style="z-index: 1; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/corpo/${umini[u]}" />`;
                imagens += `<img style="z-index: 2; height: 350px; position: absolute;" class="col s4" src="${urlImagens}rosto/${umini[u]}" />`;                
            }

            if(u == "cabelo"){                
                imagens += `<img style="z-index: 3; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/cabelo/${umini[u]}" />`;
                if(sexo == 'feminino')
                    imagens += `<img style="z-index: -1; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/cabeloTras/${umini[u]}" />`;
            }

            if(u == "sobrancelha")
                imagens += `<img style="z-index: 4; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/sobrancelha/${umini[u]}" />`;

            if(u == "bigode")
                imagens += `<img style="z-index: 4; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/bigode/${umini[u]}" />`;
                
            if(u == "barba")
                imagens += `<img style="z-index: 4; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/barba/${umini[u]}" />`;

            if(u == "tronco")
                imagens += `<img style="z-index: 3; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/tronco/${umini[u]}" />`;

            if(u == "perna")
                imagens += `<img style="z-index: 2; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/perna/${umini[u]}" />`;

            if(u == "pes")
                imagens += `<img style="z-index: 1; height: 350px; position: absolute;" class="col s4" src="${urlImagens}${sexo}/pes/${umini[u]}" />`;
        }
    }
    $('.avatar').html(imagens);
}

/*
    Função ajax que retorna quantidade de imagens numa pasta
*/
function carregaImagens(pasta)
{
    return $.get(`http://localhost/myBuddy/steps/pele.php?pasta=${pasta}`);
}

/*
    Função que reseta todas opções já escolhidas para o Umini
*/
function resetaUmini(){
    for(var u in umini){
        umini[u] = "";
    };
    $('.tabCorpo').html('');
    localStorage.removeItem("umini");
    montaUmini();
}

function isExistsUmini(){
    if(localStorage.umini){
        umini = JSON.parse(localStorage.umini);
        console.log(umini);
        montaUmini();
    }
}