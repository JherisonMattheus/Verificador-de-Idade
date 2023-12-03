var carregar = document.querySelector('input#carregar');
var imagem = window.document.querySelector('img#imagem');
var res = document.querySelector('p#res');
carregar.addEventListener('click', clicar);
var data = new Date();
var ano = data.getFullYear();
function clicar(){
    var txta = document.querySelector('input#txta');
    var msg = document.querySelector('div#msg');
    var fano = Number(txta.value);
    if( fano == 0 || fano > 2022 ){
        window.alert('Erro de valor');
    }else{
        var idade = ano - fano;
        var masc = document.getElementsByName('masc');
        if(masc[0].checked){
            genero = 'Mulher';
        }else if(masc[1].checked){
            genero = 'Homem';
        }
    }
    if(genero == 'Mulher'){
        if(idade < 5){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/bebea.png';
        }else if(idade >= 5 && idade < 12){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/menina.png';
        }else if(idade >= 12 && idade < 22){
            res.innerHTML = `Idade calculada: ${idade} `;
            imagem.src = './src/img/adolescentea.png';
        }else if(idade >= 22 && idade < 50){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/mulher.png';
        }else if(idade >= 50){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/velha.png';
        }
    }else if(genero == 'Homem'){
        if(idade < 5){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/bebe.png';
        }else if(idade >= 5 && idade < 12){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/menino.png';

        }else if(idade >= 12 && idade < 22){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/adolescente.png';
        }else if(idade >= 22 && idade < 50){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/homem.png';
        }else if(idade >= 50){
            res.innerHTML = `Idade calculada: ${idade}`;
            imagem.src = './src/img/velho.png';
        }
    }

    
}