

function cadastrar(){
    var nomecad = document.getElementById('nomecadastro').value;
    var senhacad = document.getElementById('senhacadastro').value;

    if(nomecad && senhacad){
        var usuarios = JSON.parse(localStorage.getItem('usuario')) || {};
        usuarios[nomecad] = senhacad;
        localStorage.setItem('usuario',JSON.stringify(usuarios));
        alert('Cadastro realizado com sucesso')
        window.location.href = "login.html";
    }else{
        alert('Por favor, preencha todos os campos')
    }
}

function login(){
    var nomedig = document.getElementById('username').value;
    var senhadig = document.getElementById('password').value;
    var usuarios = JSON.parse(localStorage.getItem('usuario')) || {};

    var senhasalva = usuarios[nomedig];

    if(senhadig === senhasalva ){
        alert(`Seja Bem vindo(a) ${nomedig}!`)
        window.location.href = "terceirapagina.html"
    }else{
        alert('Os dados estão incorretos')
    }
}