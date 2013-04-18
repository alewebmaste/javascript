$(document).ready(function () {

    //Dimensiona o tamanho total da div total-fotos dinamicamente
    var calc = $(".total-fotos img").length;
    var tamanhoFoto = 534;
    var tamanhoTotal = (calc * tamanhoFoto);
    var cont = 1;

    $(".total-fotos").width(tamanhoTotal);
    $(".num-foto").append("Foto " + cont + " / " + calc);

    //Funcionamento das setas
    var proximo = 0;

    $(".seta-proximo").click(function () {
        $(".seta-anterior").show();
        $(".total-fotos").animate({ "left": proximo - tamanhoFoto });
        proximo = proximo - tamanhoFoto;

        cont++;

        $(".num-foto").empty();
        $(".num-foto").append("Foto " + cont + " / " + calc);

        if (cont == calc) {
            $(".seta-proximo").hide();
        };


    });

    $(".seta-anterior").click(function () {
        $(".seta-proximo").show();
        $(".total-fotos").animate({ "left": proximo + tamanhoFoto });
        proximo = proximo + tamanhoFoto;
        cont--;

        $(".num-foto").empty();
        $(".num-foto").append("Foto " + cont + " / " + calc);

        if (cont == 1) {
            $(".seta-anterior").hide();
        };        
    });

    //Dimensiona o tamanho total da div thumbs dinamicamente
    var totalThumbs = $(".thumbs img").length;
    $(".thumbs").css("width", totalThumbs * 94);

    //Funcionamento das setas thumbs
    var proximoThumbs = 0;
    var contThumbs = 8;
    var tamanhoThumbs = 752;

    $(".seta-proximo-thumb").click(function () {
        $(".mask").hide();
        $(".seta-anterior-thumb").show();
        $(".seta-anterior-thumb").css("display", "inline-block");
        $(".thumbs").animate({ "left": proximoThumbs - tamanhoThumbs });


        proximoThumbs -= tamanhoThumbs;
        contThumbs += 8;

        if (totalThumbs <= contThumbs) {
            $(this).hide();
        };
    });

    $(".seta-anterior-thumb").click(function () {
        $(".seta-proximo-thumb").show();
        $(".thumbs").animate({ "left": proximoThumbs + tamanhoThumbs });

        proximoThumbs += tamanhoThumbs;
        contThumbs -= 8;

        if (proximoThumbs == 0) {
            $(this).hide();
            $(".mask").show();
        };
    });


    var mapaImg = 0;
    $(".total-fotos img").each(function () {
        $(this).attr({ "rel": mapaImg });
        mapaImg++;
    });

    var mapaImgThumbs = 0;
    $(".thumbs a").each(function () {
        $(this).attr({ "rel": mapaImgThumbs });
        mapaImgThumbs++;
    });

    $(".thumbs a").click(function () {

        $(".num-foto").empty();
        $(".num-foto").append("Foto " + cont + " / " + calc);

        if ($(this).attr("rel") > 0) {
            $(".seta-anterior").show();
        }

        else {
            $(".seta-anterior").hide();
        }

        if ($(this).attr("rel") == totalThumbs - 1) {
            $(".seta-proximo").hide();
        }

        else {
            $(".seta-proximo").show();
        }

        $(".total-fotos").animate({ "left": ($(this).attr("rel") * -tamanhoFoto) });
        proximo = ($(this).attr("rel") * -tamanhoFoto);
        cont = ($(this).attr("rel"));
        cont++;
        $(".num-foto").empty();
        $(".num-foto").append("Foto " + cont + " / " + calc);                      
    });
});
