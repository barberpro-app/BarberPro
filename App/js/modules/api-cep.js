document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");

    // Adicionar evento para buscar o CEP ao sair do campo ou ao digitar
    cepInput.addEventListener("blur", function () {
        const cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        
        if (cep.length === 8) { // Valida se o CEP tem 8 dígitos
            buscarEndereco(cep);
        } else {
            alert("Digite um CEP válido com 8 dígitos.");
        }
    });
});

function buscarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preencher os campos do formulário com os dados retornados
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
        .catch(error => {
            console.error("Erro ao buscar o endereço:", error);
            alert("Não foi possível buscar o endereço. Tente novamente.");
        });
}
