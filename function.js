function entrar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if(email =='' || senha ==''){
        alert('[ERRO] Campos inválidos!');
        return false;
    }else{
        alert('Conectado com sucesso!')
    }
}