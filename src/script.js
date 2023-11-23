//imprime o valor selecionado na tela da calculadora.
function imprimir(n1){
    let val= document.getElementById('tela');
    val.textContent+=String(n1);
}
//seleciona o metodo do calculo, e grava o valor do primeiro numero(nummero na tela da calculadora antes do metodo ser selecionado).
function metodo(metodo){
    let printar=document.getElementById('tela');
    let val=document.getElementById('tela').textContent;
    document.getElementById('n1').textContent=val;
    document.getElementById('metod').textContent=metodo;
    printar.textContent="";
    
}
//grava o segundo numero da mesma forma que gravou o primeiro e execulta o metodo selecionado fazendo assim a soma subtração multiplicação ou divisão do numero 1 e 2.
function final(){
    let val=document.getElementById('tela');
    var n2=parseInt(document.getElementById('tela').textContent);
    let metodo=document.getElementById('metod').textContent;
    var n1=parseInt(document.getElementById('n1').textContent);
    if(metodo==1){
        val.textContent=String(n1+n2);
    }else if(metodo ==2){
        val.textContent=String(n1-n2);
    }else if(metodo ==3){
        val.textContent=String(n1*n2);
    }else if(metodo ==4){
        val.textContent=String(n1/n2);
    }
}
//limpa a tela da calculadora
function reset(){
    document.getElementById('tela').textContent=""
}