class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    anoNascimento(){
        let anoAtual = 2024;
        return anoAtual - this.idade;
    }
}

let pessoa = new Pessoa("João", 20);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.anoNascimento())


class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return this.largura * this.altura;
    }
}

let retangulo = new Retangulo(20, 10);

console.log("Area do retangulo: " + retangulo.area());

class ContaBancaria{
    constructor(numero, saldo){
        this.numero = numero;
        this.saldo = saldo;
    }

    deposito(valor){
        if(valor > 100){
            console.log("O valor do depósito não pode ser maior do que 100");
        }
        else{
            this.saldo = this.saldo + valor;
        }
    }

    saque(valor){
        if(valor > 100){
            console.log("O valor do saque não pode ser maior do que 100");
        }else if(this.saldo == 0){
            console.log("Não é possível realizar o" 
                + " saque pois o saldo da conta é 0")
        }else if((this.saldo - valor) < 0){
            console.log("Saldo insuficiente!"
                + " O valor do saque é maior que o saldo disponível")
        }
        else{
            this.saldo = this.saldo - valor;
        }
    }
}

let conta = new ContaBancaria(1, 500);

console.log(conta);

conta.deposito(100);
console.log(conta);

conta.saque(100);

console.log(conta);

class Carro{
    constructor(modelo, marca, ano, velocidadeAtual){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(velocidade){
        this.velocidadeAtual = this.velocidadeAtual + velocidade;
    }

    frear(velocidade){
        if(this.velocidadeAtual == 0){
            console.log("O carro está parado");
        }else if((this.velocidadeAtual - velocidade) < 0){
            this.velocidadeAtual = 0;
        }else{
            this.velocidadeAtual = this.velocidadeAtual - velocidade;
        }
    }
}