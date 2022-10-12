let button = document.querySelector("#button");
button.onclick = function(){
    let nome = document.querySelector("#nome").value;
    let dataNasc = document.querySelector("#dataNascimento").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let radios = document.querySelectorAll(".sexo");
    
    console.log(radios);

    let sexo = "";
    
    for (let i = 0; i < 2; i++) {
        if (radios[i].checked) {
            sexo = radios[i].id;
        }
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    altura /= 100;

    let imc = peso / (altura * altura);

    imc = Math.floor(imc);

    let condicao = "";

    if(imc<18.5){
        condicao = "Abaixo do peso";
    }else if(imc<25){
        condicao = "Peso Normal";
    }else if(imc<30){
        condicao = "Sobrepeso";
    }else if(imc<35){
        condicao = "Obesidade grau I";
    }else if(imc<49){
        condicao = "Obesidade grau II";
    }else
        condicao = "Obesidade grau III";

    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let tx = document.createTextNode(nome);
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(dataNasc);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(peso);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(altura);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(sexo);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(imc);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tx = document.createTextNode(condicao);
    td = document.createElement("td");
    td.append(tx);
    tr.append(td);

    tbody.append(tr);

    return false;
}

//  IMC = Peso ÷ (Altura × Altura)