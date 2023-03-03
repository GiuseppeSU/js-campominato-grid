let grigliaDom = document.getElementById('griglia');
let button = document.getElementById('btn');
button.addEventListener('click' , function(){
    for (let i = 1; i < 101; i++) {
        const quadrato = creazioneQuadrato();
        quadrato.addEventListener( 'click', function (){
            this.classList.toggle('clicked');
            console.log(i);
        });
        quadrato.innerHTML=i;
        
        grigliaDom.append(quadrato);
    }
})


function creazioneQuadrato () {
    const nuovoElemento = document.createElement('div');
    nuovoElemento.classList.add('square');
    return nuovoElemento;
    
}
