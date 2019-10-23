$(document).ready(function () {
    $('input[name="BTN"]').click(function () {
        $.getJSON("http://usysweb.com.br/api/correiosambev.php?nCdServico=04014", function (data) {

            $('input[name="codigo"]').val(data.codigo);
            $('input[name="valor"]').val(data.valor);
            $('input[name="prazoentrega"]').val(data.prazoentrega);
            $('input[name="cepori"]').val(data.localidade);
            $('input[name="uf"]').val(data.uf);
            $('input[name="unidade"]').val(data.unidade);
            $('input[name="ibge"]').val(data.ibge);
            $('input[name="gia"]').val(data.gia);
        });
    });
});