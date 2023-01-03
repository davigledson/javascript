const barraDePesquisa=document.getElementById('bp')
const labelbp = document.getElementById('labelbp')

function Aumentar(){
    barraDePesquisa.style.background ='aqua';
        barraDePesquisa.style.width='50%';
}
labelbp.addEventListener('click',Aumentar);
