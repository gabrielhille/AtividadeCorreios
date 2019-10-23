$(document).ready(function () {
    $('input[name="BTN"]').click(function () {

        var codigo = $('input[name="codigo"]').val();
        var valor = $('input[name="valor"]').val();
        var prazoentrega = $('input[name="prazoentrega"]').val();
        var cepori = $('input[name="cepori"]').val();
        var cepdes = $('input[name="cepdes"]').val();
        var peso = $('input[name="peso"]').val();
        var comprimento = $('input[name="comprimento"]').val();
        var formato = $('input[name="formato"]').val();
        var altura = $('input[name="altura"]').val();
        var largura = $('input[name="largura"]').val();
        var diametro = $('input[name="diametro"]').val();
        var maopropria = $('input[name="maopropria"]').val();
        var valordeclarado = $('input[name="valordeclarado"]').val();
        var avisorecebimento = $('input[name="avisorecebimento"]').val();


        $.get("http://usysweb.com.br/api/correiosambev.php?" + codigo + valor + prazoentrega + cepori + cepdes + peso + comprimento + formato + altura + largura + diametro + maopropria + valordeclarado + avisorecebimento, function (data) {


                  
                  
        });       
    });           
});               
                  
                  
                  
                  
                  
                  
                  