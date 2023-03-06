let grigliaDom = document.getElementById('griglia');
let button = document.getElementById('btn');
let reset = document.getElementById('reset');

button.addEventListener('click' , function(){
    let livello = parseInt(document.querySelector('#livello').value);
    grigliaDom.innerHTML='';
    for (let i = 1; i < livello + 1; i++) {
        const quadrato = creazioneQuadrato(livello);
        quadrato.addEventListener( 'click', function (){
            this.classList.toggle('clicked');
            console.log(i);
        });
        quadrato.innerHTML=i;
        
        grigliaDom.append(quadrato);
    }
})

reset.addEventListener('click' , function (){
    grigliaDom.innerHTML = '';
})


function creazioneQuadrato (livello) {
    const nuovoElemento = document.createElement('div');
    nuovoElemento.classList.add('square');
    let cellPerSide = Math.sqrt(livello);
    nuovoElemento.style.width = `calc(100% / ${cellPerSide})`;
    nuovoElemento.style.height = `calc(100% / ${cellPerSide})`;
    return nuovoElemento;
    
}
