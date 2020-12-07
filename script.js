var hamburger=document.querySelector(".menu-hamburger")
hamburger.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu")
    

})






//regras valores de paginas:

//valor por paginas R$ 100
//Valor do Script 10% do valor Pagina
//Valor Layout R$ 200
// Taxa urgencia 10% do valor total

document.querySelector("#quantidade").addEventListener("change",atualizaPreco )
document.querySelector("#js").addEventListener("change",atualizaPreco )
document.querySelector("#layout-sim").addEventListener("change",atualizaPreco )
document.querySelector("#layout-nao").addEventListener("change",atualizaPreco )
document.querySelector("#prazo").addEventListener("change",function (){
    const prazo =  document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML ="Prazo: " + prazo + " semanas"
    atualizaPreco()
} )

function atualizaPreco(){

const pg = document.querySelector("#quantidade").value
const temJs =  document.querySelector("#js").checked
const layoutSim =  document.querySelector("#layout-sim").checked
const layoutNao =  document.querySelector("#layout-nao").checked
const prazo =  document.querySelector("#prazo").value

let preco = pg * 100;

if(temJs) preco *= 1.1;
if(layoutSim) preco = preco + 200;
let urgencia = 1 - prazo * 0.1;
preco *= 1 + urgencia;





 document.querySelector("#preco").innerHTML ="R$ " + preco.toFixed(2);

}


