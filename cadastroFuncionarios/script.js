class Funcionario {
    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    updateInfo(novosValores) {
        this.nome = novosValores.nome || this.nome;
        this.idade = novosValores.idade || this.idade;
        this.salario = novosValores.salario || this.salario;

        return {
            nome: this.nome,
            idade: this.idade,
            salario: this.salario
        };
    }


}

class Gerente extends Funcionario {
    constructor(nome, idade, salario, departamento) {
        super(nome, idade, salario);
        this.departamento = departamento;
    }

    updateDepartamento(novoValor) {
        this.departamento = novoValor.departamento || this.departamento;
        return {
            departamento: this.departamento,

        };
    }
};

class Programador extends Funcionario {

    constructor(nome, idade, salario, linguagem) {
        super(nome, idade, salario);
        this.linguagem = linguagem;
    }

    updateLinguagem(novoValor){
        this.linguagem = novoValor.linguagem || this.linguagem;

        return{
           linguagem: this.linguagem,
        };
    }
}

// Atualizando os atributos da classe Funcionario
const funcionario1 = new Funcionario("João", 30, 2000);
console.log(funcionario1.updateInfo({ nome: "Maria", salario: 2500 })); 

// Atualizando os atributos da classe Gerente
const gerente1 = new Gerente("Carlos", 40, 5000, "Vendas");
console.log(gerente1.updateInfo({ idade: 45 })); 
console.log(gerente1.updateDepartamento({ departamento: "Marketing" })); 

// Atualizando os atributos da classe Programador
const programador1 = new Programador("Ana", 25, 3000, "JavaScript");
console.log(programador1);
console.log(programador1.updateInfo({ salario: 3500 })); 
console.log(programador1.updateLinguagem({ linguagem: "Python" })); 
console.log(programador1);
