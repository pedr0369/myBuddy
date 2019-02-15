<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Umini V.0.2.0</title>

    <link rel="stylesheet" href="assets/css/materialize.min.css">
    <link rel="stylesheet" href="assets/css/toastr.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    
    <div class="row">
        <h3 class="center-align">Monte seu Avatar</h3>
        <div class="col s4 quadroAvatar">
            <!-- Avatar montado -->
            <div class="avatar"></div>
        </div>

        <div class="col s8 etapa sexoOpc">
            <!-- Opções de sexo -->
            <div class="row">
                <button class="waves-effect waves-light btn col s5 col m3 col l2 offset-m3 offset-l4" onclick="escolheSexo('masculino')">Masculino</button>
                <button class="waves-effect waves-light btn col s5 col m3 col l2" onclick="escolheSexo('feminino')">Feminino</button>
                <button class="waves-effect waves-light btn col s2 col m3 offset-m3 col l2 offset-l1" onclick="resetaUmini()">Resetar</button>
            </div>

            <div class="peleOpc"></div>

            <!-- Abas de opções de montagem do Umini -->
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s2"><a class="active" href="#rosto">Rosto</a></li>
                    <li class="tab col s2"><a href="#cabelo">Cabelo</a></li>
                    <li class="tab col s2"><a href="#tronco">Tronco</a></li>
                    <li class="tab col s2"><a href="#perna">Perna</a></li>
                    <li class="tab col s2"><a href="#pes">Pés</a></li>                    
                </ul>
            </div>
            <div id="rosto" class="col s12"><div class="tabCorpo"></div></div>
            <div id="cabelo" class="col s12"><div class="tabCorpo"></div></div>
            <div id="tronco" class="col s12"><div class="tabCorpo"></div></div>         
            <div id="perna" class="col s12"><div class="tabCorpo"></div></div>
            <div id="pes" class="col s12"><div class="tabCorpo"></div></div>            
        </div>
    </div>

    <script src="assets/node_modules/jquery//dist//jquery.min.js"></script>
    <script src="assets/js/materialize.min.js"></script>
    <script src="assets/js/toastr.min.js"></script>
    <script src="assets/js/app.js?1"></script>    

</body>
</html>