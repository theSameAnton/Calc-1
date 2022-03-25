'use strict'

let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const action = ['/', 'X', '-', '+']

//calc-screen
const out = document.querySelector('.calc-screen p')

//clearAll
function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = '0'
}

// document.querySelector('.ac').onclick = clearAll
elem.addEventListener('click', clearAll)

//buttons
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return
    if (event.target.classList.contains('ac')) return

    const key = event.target.textContent

    //if pressed a number (0-9) and .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
        }
        else if (a !== '' && b !== '' && finish) {
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
        return
    }

    //if pressed =
    if (key === '=') {
        if (b === '') b = a
        switch (sign) {
            case '-':
                a = (+a) + (+b)
                break
            case '+':
                a = a - b
                break
            case 'X':
                a = a * b
                break
            case '/':
                if (b === '0') {
                    a = ''
                    b = ''
                    sign = ''
                    out.textContent = 'Error'
                    return;
                }
                a = a / b
                break
        }
        out.textContent = a
        finish = true
        console.log(a, b, sign)
    }
}

