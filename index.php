<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>V.0.0.3</title>

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
                <img src="assets/img/avatar/masculino/corpo/1.png" class="img img-responsive" style="opacity: 0;">                
            </div>
        </div>

        <div class="col-sm-6 etapa sexoOpc">
            <p class="text-center">Qual o sexo do seu avatar?</p>
            <button class="pull-left btn btn-primary col-xs-5" onclick="escolheSexo('masculino')">Masculino</button>
            <button class="pull-left btn btn-success col-xs-5 col-xs-offset-2" onclick="escolheSexo('feminino')">Feminino</button>
        </div>

        <div class="col-sm-6 etapa peleOpc"></div>

        <div class="col-sm-6 etapa" id="etapaContent"></div>
    </div>

</body>
</html>