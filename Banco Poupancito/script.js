class Conta {

    constructor(saldo = 0, senha = '') {
        this.saldo = saldo;
        let _senha = senha;

        this.setSenha = (novaSenha) => {
            _senha = novaSenha;
        };


        this.deposito = (valor, senha) => {

            if (senha === _senha) {
                this.saldo += valor;
                console.log("Depósito realizado com sucesso.");
            } else {
                console.log("Senha incorreta. Depósito não autorizado.");
            }

        }

        this.retirada = (valor, senha) => {
            if (senha === _senha) {
                if (valor <= this.saldo) {
                    this.saldo -= valor;
                    console.log("Retirada realizada com sucesso.");
                    return valor;
                } else {
                    console.log("Saldo insuficiente. Retirada não autorizada.");
                }
            } else {
                console.log("Senha incorreta. Retirada não autorizada.");
            }
        }
        this.getSenha = () => {
            return _senha;
        };


    }
};

const conta = new Conta();
conta.setSenha("senha123");

console.log(conta.getSenha()); // Retorna "senha123"

conta.deposito(500, 'senha123'); // Depósito realizado com sucesso.
console.log(conta.saldo); // Retorna 1500

conta.retirada(200, 'senha123'); // Retirada realizada com sucesso.
console.log(conta.saldo); // Retorna 1300
