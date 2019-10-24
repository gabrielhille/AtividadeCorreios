$(document).ready(function () {
    $('input[id=Submit1]').click(function () {

        var codigo = $('input[name="codigo"]').val();
        var senha = $('input[name="valor"]').val();
        var servicos = $('input[name="prazoentrega"]').val();
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

        var urlMontada = 'http://usysweb.com.br/api/correiosambev.php?' + "&nCdEmpresa=" + codigo + "&sDsSenha=" + senha + "&nCdServico=" + servicos +
            "&sCepOrigem=" + cepori + "&sCepDestino=" + cepdes + "&nVlPeso=" + peso + "&nCdFormato=" + formato + "&nVlComprimento=" + comprimento + "&nVlAltura=" + altura +
            "&nVlLargura=" + largura + "&nVlDiametro=" + diametro + "&sCdMaoPropria=" + maopropria + "&nVlValorDeclarado=" + valordeclarado + "&sCdAvisoRecebimento=" + avisorecebimento;

        $.get(urlMontada, function (tipo) {
            alert("O preco desse pedido será:" +sser);




        });       
    });           
});                  
                  
                  
                  
                  