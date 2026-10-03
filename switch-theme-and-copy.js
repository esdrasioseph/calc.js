export function switchThemeAndCopy (switchTheme, main, root, copyButton, resultInput) {
    switchTheme.addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--background-color', 'rgb(220, 220, 220)')
        root.style.setProperty('--text-color', 'rgb(33,37,40)')
        root.style.setProperty('--orange-color', 'rgb(245, 117, 58)')
        root.style.setProperty('--hover-color', 'rgb(205, 205, 205)')
        root.style.setProperty('--body-color', 'rgb(65,110,159)')

        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--background-color', ' rgb(33,37,40)')
        root.style.setProperty('--text-color', 'rgb(220, 220, 220)')
        root.style.setProperty('--orange-color', 'rgb(231, 97, 35)')
        root.style.setProperty('--hover-color', 'rgb(42, 46, 49)')
        root.style.setProperty('--body-color', ' rgb(0, 0, 1)')
        

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
}