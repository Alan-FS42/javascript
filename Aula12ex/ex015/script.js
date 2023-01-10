function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                
            } else if (idade >= 10 && idade < 21) {
                //Jovem

            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        } else {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade >= 10 && idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }


}