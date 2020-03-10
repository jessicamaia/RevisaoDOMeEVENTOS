
document.getElementById("bt").addEventListener("click", function () {
    const msg= document.getElementById("mensagem_erro");
    var lista = document.getElementById("ListaTarefas");
    var texto = document.getElementById("TextoNovo");
    var li = document.createElement("li");
    var input= document.createElement("input");
    var Feitos= document.getElementById("Feitos");

    if(texto.value==""){
        return;

    }

    input.type="checkbox";
    li.append(input);
    li.append(texto.value);
    lista.append(li);
    texto.value="";
    texto.focus();

    input.addEventListener("click", function(){
        Feitos.append(li);
    });

    input.addEventListener("click", function(){
        input.type="hidden";
        Feitos.append(li);
    
        let BtExcluir = document.createElement("button");
        BtExcluir.type="button";
        let x= document.createTextNode("Excluir")

    
        BtExcluir.append(x);
        li.append(BtExcluir);

        BtExcluir.addEventListener("click", function(){
            Feitos.removeChild(li);

        });

 });

});

 