import { calculate } from "./calculate.js"

export function keydowns (allowedKeys, input, resultInput) {
    input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
    } else if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    } else if (ev.key === 'Enter') {
        calculate(input, resultInput)
    }
    return
})
}