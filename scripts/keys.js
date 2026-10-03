export function keys(input) {
    document.querySelectorAll('.charKey').forEach(function (keyButton) {
    keyButton.addEventListener('click', function () {
        const value = keyButton.dataset.value
        input.value += value
        input.focus()
    })
})
}

