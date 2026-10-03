export function calculate(input,resultInput) {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    try {
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error')
    } catch {
        resultInput.value = 'ERROR'
    }

    input.focus()
}