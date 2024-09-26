// script.js

// Função para validação do Login
function validarLogin() {
    const email = document.getElementById('emailLogin');
    const senha = document.getElementById('senhaLogin');

    if (!validarEmail(email) || !validarCampoTexto(senha)) {
        return false;
    }

    alert('Login realizado com sucesso!');
    return true;
}

// Função para validação do Cadastro
function validarCadastro() {
    const nome = document.getElementById('nomeCadastro');
    const sobrenome = document.getElementById('sobrenomeCadastro');
    const email = document.getElementById('emailCadastro');
    const senha = document.getElementById('senhaCadastro');
    const confirmarSenha = document.getElementById('confirmarSenha');

    if (!validarCampoTexto(nome) || !validarCampoTexto(sobrenome) || !validarEmail(email) || !validarCampoTexto(senha)) {
        return false;
    }

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem. Por favor, confirme sua senha.');
        confirmarSenha.focus();
        return false;
    }

    alert('Cadastro realizado com sucesso!');
    return true;
}

// Função para tratamento de "Esqueci minha senha"
function esqueciSenha() {
    const email = prompt('Por favor, insira o seu e-mail para redefinir a senha:');

    if (!validarEmail({ value: email })) {
        alert('Por favor, insira um e-mail válido.');
    } else {
        alert('Instruções para redefinir sua senha foram enviadas para o seu e-mail.');
    }
}

// Funções de validação reutilizadas
function validarCampoTexto(campo) {
    if (!campo.value.trim()) {
        alert(`Por favor, preencha o campo ${campo.name}.`);
        campo.focus();
        return false;
    }
    return true;
}

function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email.value)) {
        alert('Por favor, insira um e-mail válido.');
        email.focus();
        return false;
    }
    return true;
}
