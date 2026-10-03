export function keydownsAndCalculate (allowedKeys, resultInput, input) {
    input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
    } else if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    } else if (ev.key === 'Enter') {
        calculate()
    }
    return
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    try {
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error')
    } catch {
        resultInput.value = 'ERROR'
    }
}
}