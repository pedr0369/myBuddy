<?php
    function carregaImagens($sexo, $pasta){
        $pasta = '../assets/img/avatar/' . $sexo . '/' . $pasta . '/';
        $arquivos = glob("$pasta{*.jpg,*.JPG,*.png,*.gif,*.bmp}", GLOB_BRACE);
        
        echo count($arquivos);
    }

    carregaImagens($_GET["sexo"], $_GET["pasta"]);
?>