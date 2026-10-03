import { keydownsAndCalculate } from "./keysdowns-and-calculate.js"
import { keysAndClear } from "./keys-and-clear.js"
import { switchThemeAndCopy } from "./switch-theme-and-copy.js"


const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('resultInput')
const copyButton = document.getElementById('copyToClipboard')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const switchTheme = document.getElementById('themeSwitcher')

keysAndClear(input)
keydownsAndCalculate(allowedKeys, resultInput, input)
switchThemeAndCopy(switchTheme, main, root, copyButton, resultInput)


