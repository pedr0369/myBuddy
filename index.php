<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>V.0.0.1</title>

    <link rel="stylesheet" href="assets/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/node_modules/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="assets/node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <script src="assets/node_modules/jquery//dist//jquery.min.js"></script>
    <script src="assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="assets/js/app.js"></script>    
</head>
<body>
    
    <div class="container">
        <h3 class="text-center">Monte seu Avatar</h3>
        <div class="col-sm-6 quadroAvatar">
            <div class="avatar">
                <img src="assets/img/avatar/masculino/corpo/1.png" class="img img-responsive">                
            </div>
        </div>

        <div class="col-sm-6 etapa etapa1">
            <p class="text-center">Qual o sexo do seu avatar?</p>
            <button class="pull-left btn btn-primary col-xs-5" onclick="etapa1('masculino')">Masculino</button>
            <button class="pull-left btn btn-success col-xs-5 col-xs-offset-2" onclick="etapa1('feminino')">Feminino</button>
        </div>

        <div class="col-sm-6 etapa etapa2">
            <p class="text-center">Qual o tipo de rosto do seu avatar?</p>
            <div id="rostoOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa3">
            <p class="text-center">Qual o tipo de cabelo do seu avatar?</p>
            <div id="cabeloOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa4">
            <p class="text-center">Qual o tipo de sobrancelha do seu avatar?</p>
            <div id="sobrancelhaOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa5">
            <p class="text-center">Qual o tipo de bigode do seu avatar?(Opcional)</p>
            <div id="bigodeOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa6">
            <p class="text-center">Qual o tipo de barba do seu avatar?(Opcional)</p>
            <div id="barbaOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa7">
            <p class="text-center">Qual o tipo de roupa do seu avatar?</p>
            <div id="troncoOpc"></div>
        </div>
        
        <div class="col-sm-6 etapa etapa8">
            <p class="text-center">Qual o tipo de calça do seu avatar?</p>
            <div id="pernaOpc"></div>
        </div>

        <div class="col-sm-6 etapa etapa9">
            <p class="text-center">Qual o tipo de calçado do seu avatar?</p>
            <div id="peOpc"></div>
        </div>
    </div>

</body>
</html>