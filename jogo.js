var altura = window.innerHeight
var largura = window.innerWidth
var vidas = 1
var tempo = 10

var dificuldadeTempo = 1000

var dificuldade = window.location.search.replace('?', '')
if(dificuldade == 'bot'){
    dificuldadeTempo = 1000
}else if(dificuldade == 'random'){
    dificuldadeTempo = 750
}else if(dificuldade == 'nerd'){
    dificuldadeTempo = 500
}

function tamanhoTela(){
     altura = window.innerHeight
     largura = window.innerWidth
}

var cronometro = setInterval(function(){ 
    tempo-- 
    if(tempo < 0){
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicao(){

    if(document.getElementById('mira')){
        document.getElementById('mira').remove()
        
        if(vidas >= 3){
            window.location.href = 'gameover.html'
        }else{
            document.getElementById('c' + vidas).src = "imagens/coracao2.png"
        }
        
        vidas++
    }


    var posicaoX = Math.floor(Math.random() * largura) - 380
    var posicaoY = Math.floor(Math.random() * altura) - 380

    posicaoX = posicaoX <0 ? 0 : posicaoX
    posicaoY = posicaoY <0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)
    
    var mira = document.createElement('img')
    mira.src = 'imagens/verde.png'
    mira.className = tamanhoMira()
    mira.style.left = posicaoX + 'px'
    mira.style.top = posicaoY + 'px'
    mira.style.position = 'absolute'
    mira.id = 'mira'
    mira.onclick= function(){
            this.remove()
    }

    document.body.appendChild(mira)
}

function tamanhoMira(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mira1'
        case 1:
            return 'mira2'
        case 2:
            return 'mira3'
    }
}