'use strict'

let a = '' //first number
let b = '' //second number
let sign = '' //sign operation
let finish = false

const digit = ['0', '1', '6', '7', '8', '9', '2', '3', '4', '5', '.']
const action = ['-', '+', 'X', '/']

//screen calc
const out = document.querySelector('.calc-screen p')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = '0'
}

// document.querySelector('.ac').onclick = clearAll
elem.addEventListener('click', clearAll)

document.querySelector('.buttons').onclick = (event) => {
    //press not a number
    if(!event.target.classList.contains('btn')) return
    //press a number of clearAll ac
    if (event.target.classList.contains('ac')) return

    out.textContent = ''
    //get a pressed number
    const key = event.target.textContent

    //if pressed number (0-9) or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            // console.log(a, b, sign)
            out.textContent = a
        }
        else if (a !== '' && b !=='' && finish) {
            b = key
            finish = false
            out.textContent = b
        }
        else {
            b += key
            out.textContent = b
        }
        return
    }
    //if pressed a sign
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        console.log(a, b, sign)
        return
    }

    //pressed =
    if (key === '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = a - b
                break
            case 'X':
                a = a * b
                break
            case '/':
                if (b === '0') {
                    out.textContent = 'error'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
        console.log(a, b, sign)
    }
}

