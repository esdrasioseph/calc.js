export function keysAndClear(input) {
    document.querySelectorAll('.charKey').forEach(function (keyButton) {
    keyButton.addEventListener('click', function () {
        const value = keyButton.dataset.value
        input.value += value
    })
})

    document.getElementById('clear').addEventListener('click', function () {
        input.value = ''
        input.focus()
})
}

