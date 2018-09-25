<?php
    function peleImagens($pasta){
        $pasta = '../assets/img/avatar/' . $pasta . '/';
        $arquivos = glob("$pasta{*.jpg,*.JPG,*.png,*.gif,*.bmp}", GLOB_BRACE);
        
        echo count($arquivos);
    }

    peleImagens($_GET["pasta"]);
?>