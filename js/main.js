let grigliaDom = document.getElementById('griglia');

for (let i = 1; i < 101; i++) {
    console.log(i);
    
    const quadrato = creazioneQuadrato();
    
    quadrato.addEventListener( 'click', function (){
        this.classList.toggle('clicked');
    });

    grigliaDom.append(quadrato);
}

function creazioneQuadrato () {
    const nuovoElemento = document.createElement('div');
    nuovoElemento.classList.add('square');
    return nuovoElemento;
}