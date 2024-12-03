document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("register-telefone");
    const cnpjInput = document.getElementById("register-cnpj");
    const cepInput = document.getElementById("register-cnpj");

    // Máscara para telefone
    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            maskPhone(this);
        });
    } else {
        console.error('Elemento com id "register-telefone" não encontrado.');
    }

    // Máscara para CNPJ
    if (cnpjInput) {
        cnpjInput.addEventListener("input", function () {
            maskCNPJ(this);
        });
    } else {
        console.error('Elemento com id "register-cnpj" não encontrado.');
    }

    // Máscara para CEP
    if (cepInput) {
        cepInput.addEventListener("input", function () {
            maskCEP(this);
        });
    } else {
        console.error('Elemento com id "register-cep" não encontrado.')
    }
});

function maskPhone(input) {
    let value = input.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    input.value = value;
}

function maskCNPJ(input) {
    let cnpj = input.value.replace(/\D/g, '');
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
    input.value = cnpj;
}

function aplicarMascaraCEP(input) {
    let value = input.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    input.value = value;
}
