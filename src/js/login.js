
function logartest () {
    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var validar = 0

    for (i=0; i < usuarios.length; i++) {
        if (login == usuarios[i].email && senha == usuarios[i].senha){
            validar = 1
            alert("Login efetuado com sucesso!");
            location.href = "adote.html"
            break
        }

    }
    if (validar == 0) {
        alert("Usuário ou senha incorretos!");
    }
}

var usuarios = [
    {
      "email": "jadepersiano@hotmail.com",
      "senha": "12345678"
    },
    {
        "email": "maria123@gmail.com",
        "senha": "xuxu4321"
    },
    {
        "email": "amocachorro@hotmail.com",
        "senha": "pets122"
    },
    {
        "email": "pcunha@outlook.com",
        "senha": "paulocunha1"
    },
    {
        "email": "ongfocinhodeluz@hotmail.com",
        "senha": "focinhoss00"
    }
]

  