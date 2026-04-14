let whint = document.getElementById('dark-mode')
let barra = document.getElementById('operador-inicial')
let valorAtual
let ValorGuardado = ''
let active = false
let guardaOperador = null
let valueCor = false

function activeDarkMode() {
    if (valueCor === false) {
        whint.style.color = 'var(--color-clear)'
        valueCor = true
        document.body.classList.add('dark')
    } else {
        whint.style.color = 'var(--color-clear)'
        console.log('teste2')
        valueCor = false
        document.body.classList.remove('dark')
    }
}

function escolherNumero(numero) {
    if (active) {
        active = false
        barra.innerHTML = '0'
        barra.innerHTML = numero
    } else {
        if (barra.innerHTML === '0') {
            valorAtual = ''
        } else {
            valorAtual = barra.innerHTML
        }
        barra.innerHTML = valorAtual + numero
    }

}

function OperatorNumer(operador) {
    if (barra.innerHTML > '0') {
        let valorAtual = barra.innerHTML
        ValorGuardado = valorAtual
        active = true
        guardaOperador = operador
    }
}

function calcular() {
    if (ValorGuardado) {
        let num1 = Number(ValorGuardado)
        let num2 = Number(barra.innerHTML)
        let total

        let ops = guardaOperador

        if (ops === '+') {
            total = num1 + num2
        }
        else if (ops === '-') {
            total = num1 - num2
        }
        else if (ops === '*') {
            total = num1 * num2
        }
        else if (ops === '/') {
            total = num1 / num2
        }
        ValorGuardado = ''
        active = false
        guardaOperador = null
        barra.innerHTML = Number(total).toLocaleString('pt-BR')
    }
}

function limpar(option) {

    if (option === 'C') {
        barra.innerHTML = '0'
        ValorGuardado = ''
        active = false
        guardaOperador = null
    }

    else if (option === 'CE') {
        barra.innerHTML = '0'
    }

}