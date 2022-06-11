var CadastroOng = [{
    "nome": "Ong Adotar",
    "diretor": "Isabela Santos",
    "cnpj": "00.000.000/0001-00",
    "telefone": "(31) 99999-9999",
    "email": "ongadotar@email.com.br",
    "estado": "Minas Gerais",
    "cidade": "Belo Horizonte",
    "endereco": [{
        "rua": "Cocaia",
        "numero": 78,
        "bairro": "Castelo"
    }],
    "pix": "00.000.000/0001-00",
    "tipoConta": "Corrente",
    "banco": "Bando do Brasil",
    "agencia": 432,
    "conta": 12345
}];

function ExibirCadastro(){

    var textoHTML = "";

    for (let x = 0; x < CadastroOng.length; x++){
        
        textoHTML += `Ong: ${CadastroOng[x].nome} <br>
        Diretor: ${CadastroOng[x].diretor} <br>
        CNPJ: ${CadastroOng[x].cnpj} <br>
        Telefone: ${CadastroOng[x].telefone} <br>
        e-mail: ${CadastroOng[x].email} <br>
        Estado: ${CadastroOng[x].estado} <br>
        Cidade: ${CadastroOng[x].cidade} <br>`;

        for (let y = 0; y < CadastroOng[x].endereco.length; y++){

            textoHTML += `<p>Endereço: 
                             Rua ${CadastroOng[x].endereco[y].rua}, Numero ${CadastroOng[x].endereco[y].numero}, 
                             Bairro ${CadastroOng[x].endereco[y].bairro}<\p>`;
        }

        textoHTML += `Chave pix: ${CadastroOng[x].pix} <br>
                      Tipo de conta: ${CadastroOng[x].tipoConta} <br>
                      Banco: ${CadastroOng[x].banco} <br>
                      Agencia: ${CadastroOng[x].agencia} <br>
                      Conta: ${CadastroOng[x].conta} <br><br><br>`;
    }

    var tela = document.getElementById('dados');
    tela.innerHTML = textoHTML;
}