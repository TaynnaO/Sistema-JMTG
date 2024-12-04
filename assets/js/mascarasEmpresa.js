document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById('Nome');
    const cnpjInput = document.getElementById('CNPJ');
    const telefoneInput = document.getElementById('Telefone');
    const emailInput = document.getElementById('Email');
    const confirmarEmailInput = document.getElementById('confirmarEmail');
    const senhaInput = document.getElementById('Senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    const mensagemErroNome = document.getElementById('mensagemErroNome');
    const mensagemErroEmailDiferente = document.getElementById('mensagemErroEmailDiferente');
    const mensagemErroSenhaDiferente = document.getElementById('mensagemErroSenhaDiferente');

    // Função de máscara para CNPJ
    function maskCNPJ(value) {
        return value.replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
                    .slice(0, 14);
    }

    // Função de máscara para telefone
    function maskTelefone(value) {
        return value.replace(/\D/g, '')
                    .replace(/^(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2')
                    .slice(0, 15);
    }

    // Aplicar máscara de CPF
    cnpjInput.addEventListener('input', function () {
        this.value = maskCNPJ(this.value);
    });

    // Aplicar máscara de telefone
    telefoneInput.addEventListener('input', function () {
        this.value = maskTelefone(this.value);
    });

    // Validação e formatação do nome
    function validarNome(Nome) {
        const regex = /^[a-zA-Zà-úÀ-Ú\s]+$/; // Permitir letras e espaços
        return regex.test(Nome);
    }

    function capitalizeWords(text) {
        return text.replace(/\b\w/g, char => char.toUpperCase());
    }

    nomeInput.addEventListener('input', function () {
        let nome = nomeInput.value;

        // Remove caracteres inválidos, permitindo apenas letras e espaços
        Nome = Nome.replace(/[^a-zA-Zà-úÀ-Ú\s]/g, '');

        // Validação de erro
        if (!validarNome(Nome)) {
            mensagemErroNome.textContent = 'O nome deve conter apenas letras e espaço entre palavras.';
            nomeInput.setCustomValidity('O nome deve conter apenas letras e espaço entre palavras.');
        } else {
            mensagemErroNome.textContent = '';
            nomeInput.setCustomValidity('');
        }
        
        nomeInput.value = capitalizeWords(Nome);
    });

    // Validação para e-mails iguais
    function removerEspacosEmail(Email) {
        return Email.replace(/\s/g, ''); // Remove espaços em branco
    }
    
    function validarEmailsIguais() {
        if (emailInput.value !== confirmarEmailInput.value) {
            mensagemErroEmailDiferente.textContent = 'Os emails não coincidem.';
            confirmarEmailInput.setCustomValidity('Os emails não coincidem.');
        } else {
            mensagemErroEmailDiferente.textContent = '';
            confirmarEmailInput.setCustomValidity('');
        }
    }

    emailInput.addEventListener('input', function () {
        emailInput.value = removerEspacosEmail(emailInput.value);
        validarEmailsIguais();
    });

    confirmarEmailInput.addEventListener('input', function () {
        confirmarEmailInput.value = removerEspacosEmail(confirmarEmailInput.value);
        validarEmailsIguais();
    });

    // Validação para senhas iguais
    function validarSenhasIguais() {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            mensagemErroSenhaDiferente.textContent = 'As senhas não coincidem.';
            confirmarSenhaInput.setCustomValidity('As senhas não coincidem.');
        } else {
            mensagemErroSenhaDiferente.textContent = '';
            confirmarSenhaInput.setCustomValidity('');
        }
    }

    senhaInput.addEventListener('input', validarSenhasIguais);
    confirmarSenhaInput.addEventListener('input', validarSenhasIguais);

    // Validação final do formulário
    function validarFormulario() {
        if (!validarNome(nomeInput.value)) {
            alert('Nome inválido.');
            return false;
        }

        if (emailInput.value !== confirmarEmailInput.value) {
            alert('Os emails não coincidem.');
            return false;
        }

        if (senhaInput.value !== confirmarSenhaInput.value) {
            alert('As senhas não coincidem.');
            return false;
        }

        return true; // Se tudo estiver correto, o formulário será enviado
    }
});