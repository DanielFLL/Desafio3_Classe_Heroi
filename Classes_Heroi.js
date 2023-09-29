class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    if (tipo === "mago"){
        this.ataque = "magia"
    } else if (tipo === "guerreiro"){
        this.ataque = "espada"
    } else if (tipo === "monge"){
        this.ataque = "artes marciais"
    } else if (tipo === "ninja"){
        this.ataque = "shuriken"
    }

    }

    escrever(){
        console.log(`O herói ${this.tipo} atacou usando ${this.ataque}`)
    }
}

console.log("Bem-vindo aventureiro! Escreva seu nome, idade e tipo de herói que você é! [mago, guerreiro, monge, ninja]")
console.log("")

let heroi1 = new heroi("Tobias",57,"mago")
let heroi2 = new heroi("Andrew",34,"guerreiro")
let heroi3 = new heroi("Kiki",29,"monge")
let heroi4 = new heroi("Nakayama",32,"ninja")

heroi1.escrever()
heroi2.escrever()
heroi3.escrever()
heroi4.escrever()
