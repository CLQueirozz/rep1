let contagem= 0;

document.getElementById("decremento").onclick = function(){
contagem-=1;
document.getElementById("bob").innerHTML = contagem;

}
document.getElementById("incremento").onclick= function(){
    contagem++;
    document.getElementById("bob").innerHTML = contagem;

}
document.getElementById("reset").onclick= function(){
    contagem=0;
    document.getElementById("bob").innerHTML = contagem;
    
}