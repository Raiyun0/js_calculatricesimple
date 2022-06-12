const btnNumbers = document.querySelectorAll('.btn_number');
const btnOperations = document.querySelectorAll('.btn_op');
const inputCalc = document.getElementById('calc');
const btnEqual = document.getElementById('btn_equal');
const btnClear = document.getElementById('btn_clear');

let nb1 = '';
let nb2 = '';
let typeOp = '';

let opChoice = false;
let nbChoice = false;

btnNumbers.forEach(nb => {
    nb.addEventListener('click', (e) => {
        nbChoice = true;
        const nb = e.currentTarget.textContent;g
        if (opChoice == false) {
            nb1 += nb;
        } else {
            nb2 += nb;
            nbChoice=false;
        }
        inputCalc.value += nb;

    })
})

btnOperations.forEach(op => {
    op.addEventListener('click', (e) => {
        if (nbChoice == true) {
            opChoice = true;

            const op1 = e.currentTarget.textContent;
            inputCalc.value += op1;
            typeOp = op1;
        }
    })
})


const calculate = function () {
    inputCalc.value += '=';
    let result = 0;
    switch (typeOp) {
        case '+':
            result = Number(nb1) + Number(nb2);
            break;
        case '-':
            result = Number(nb1) - Number(nb2);
            break;
        case '*':
            result = Number(nb1) * Number(nb2);
            break;
        case '/':
            result = Number(nb1) / Number(nb2);

            break;

        default:
            break;

    }
    inputCalc.value += result;
}

const clearscreen = function () {
    inputCalc.value = '';
    nb1 = '';
    nb2 = '';
    typeOp = '';
    opChoice = false;
    nbChoice = false;

}