export function clear (input) {
     document.getElementById('clear').addEventListener('click', function () {
        input.value = ''
        input.focus()
})
}