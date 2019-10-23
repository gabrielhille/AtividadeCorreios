$(document).ready(function () {
    $('input[name="BTN"]').click(function () {

      var codigo = $('input[name="codigo"]').val(data.codigo);
      var valor = $('input[name="valor"]').val(data.valor);
      var prazoentrega = $('input[name="prazoentrega"]').val(data.prazoentrega);
      var cepori = $('input[name="cepori"]').val(data.localidade);
      var cepdes = $('input[name="cepdes"]').val(data.uf);
      var peso = $('input[name="peso"]').val(data.unidade);
      var comprimento = $('input[name="comprimento"]').val(data.ibge);
      var formato = $('input[name="formato"]').val(data.gia);
      var altura = $('input[name="altura"]').val(data.gia);
      var larfura = $('input[name="largura"]').val(data.gia);
      var diametro = $('input[name="diametro"]').val(data.gia);
      var maopropria = $('input[name="maopropria"]').val(data.gia);
      var valordeclarado = $('input[name="valordeclarado"]').val(data.gia);
      var avisorecebimento = $('input[name="avisorecebimento"]').val(data.gia);


        $.get("http://usysweb.com.br/api/correiosambev.php?nCdServico=04014", function (data) {

            $('input[name="codigo"]').val(data.codigo);
            $('input[name="valor"]').val(data.valor);
            $('input[name="prazoentrega"]').val(data.prazoentrega);
            $('input[name="cepori"]').val(data.cepori);
            $('input[name="cepdes"]').val(data.cepdes);
            $('input[name="peso"]').val(data.peso);
            $('input[name="comprimento"]').val(data.comprimento);
            $('input[name="formato"]').val(data.formato);
            $('input[name="altura"]').val(data.altura);
            $('input[name="largura"]').val(data.largura);
            $('input[name="diametro"]').val(data.diametro);
            $('input[name="maopropria"]').val(data.maopropria);
            $('input[name="valordeclarado"]').val(data.valordeclarado);
            $('input[name="avisorecebimento"]').val(data.avisorecebimento);


        });
    });
});