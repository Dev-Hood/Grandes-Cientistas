var i=1;
var local='./img/';
setInterval(() => {
    let nomeVetor= ['-Albert Einstein','-Marie Curie','-Charles Darwin',
    '-Stephen Hawking','-Max Planck','-Isaac Newton','-Louis Pasteur','-Thomas Edison',
    '-Werner Heisenberg','-Galileu Galilei','-Carl Sagan','-Pitágoras','-Nikola Tesla','Dentre outros...',];
    
    let imgCientistaVetor=['albert-einstein.jpg','marie-curie.png','charles-darwin.jpg','stephen-hawking.png'
    ,'max-planck.png','isaac-newton.png','louis-pasteur.png','thomas-edison.png','wener-heisenberg.png'
    ,'galileu-galilei.png','carl-sagan.jpg','pitagoras.png','nikola-tesla.jpg',' '];

    let nomeCientista = document.querySelector('#cientista-nome');
    let imgCientista= document.querySelector('#img-cientista');
    nomeCientista.innerText=nomeVetor[i];
    if(nomeVetor[i]=='Dentre outros...'){
        imgCientista.style.display='none';
    }
    else{
        imgCientista.style.display='';
        imgCientista.setAttribute('src',`${local}${imgCientistaVetor[i]}`)
    }
    i++;
    
    if(i==nomeVetor.length){
        i=0;
    }
}, 5000); 
