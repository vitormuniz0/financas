
class Financas {
     #saldo = 0 

    constructor(valorInput){
        this.#saldo = parseFloat(valorInput);
        saldoo.innerHTML = this.#saldo
    }

    depositarRenda(valor){
        this.#saldo += parseFloat(valor);
        saldoo.innerHTML = this.#saldo;
    }

    despesas(valor){
        if(this.#saldo >= parseFloat(valor)){
            this.#saldo -= parseFloat(valor)
            saldoo.innerHTML = this.#saldo;
            console.log("SACOU!")
        } else {
            console.log("Valor acima do Saldo")
        }
    }

    getSaldo(){
        return this.#saldo;
    }

}

let saldoo = document.getElementById("saldo")
let valordeposito = document.getElementById("inputDeposito")
let btnDeposito = document.getElementById("buttonDepositar")
let valorSaque = document.getElementById("inputSaque")
let btnSaque = document.getElementById("buttonSaque")

let financasVitor = new Financas(0)

btnDeposito.addEventListener("click" , (e) => {
    let valorInput = valordeposito.value;
    financasVitor.depositarRenda(valorInput);
    valordeposito.value = "";
})

btnSaque.addEventListener("click" , (e) => {
    let valorInput = valorSaque.value
    financasVitor.despesas(valorInput)
    valorSaque.value = "";
})

