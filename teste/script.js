function imprimir(n1){
    let val= document.getElementById('tela');
    val.textContent+=String(n1);
}
function metodo(metodo){
    let printar=document.getElementById('tela');
    let val=document.getElementById('tela').textContent;
    document.getElementById('n1').textContent=val;
    document.getElementById('metod').textContent=metodo;
    printar.textContent="";
    
}
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
function reset(){
    document.getElementById('tela').textContent=""
}