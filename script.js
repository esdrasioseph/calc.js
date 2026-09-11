const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('resultInput')
const copyButton = document.getElementById('copyToClipboard')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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

const switchTheme = document.getElementById('themeSwitcher')

switchTheme.addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--background-color', 'rgb(220, 220, 220)')
        root.style.setProperty('--text-color', 'rgb(33,37,40)')
        root.style.setProperty('--green-color', 'rgb(80, 230, 100)')
        root.style.setProperty('--hover-color', 'rgb(205, 205, 205)')

        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--background-color', ' rgb(33,37,40)')
        root.style.setProperty('--text-color', 'rgb(220, 220, 220)')
        root.style.setProperty('--green-color', 'rgb(77,255,146)')
        root.style.setProperty('--hover-color', 'rgb(42, 46, 49)')

        main.dataset.theme = 'dark'
    }
})

copyButton.addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})