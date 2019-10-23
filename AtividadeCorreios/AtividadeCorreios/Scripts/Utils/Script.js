$(document).ready(function () {
    $('input[name="bntconsultar"]').click(function () {
        var cep = $('input[name="cep"]').val();

        
        $.get("http://usysweb.com.br/api/correiosambev.php?" + cep + "/json/", function (data) {

            if (data.erro) {
                alert("Cep inválido!");
                return false;
            }

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