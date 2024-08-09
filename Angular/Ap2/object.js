// Factory Function
var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

var maria = criarPessoa("Maria", 20)
console.log(maria)

// Constructor Function
var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

var carlos = {};
Pessoa.call(carlos, "Carlos", 25)
console.log(carlos);