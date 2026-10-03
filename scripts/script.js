import { keydowns} from "./keysdown.js"
import { clear } from "./clear.js"
import { keys } from "./keys.js"
import { switcher } from "./theme.js"
import { copy } from "./copy.js"
import { calculate } from "./calculate.js"


const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('resultInput')
const copyButton = document.getElementById('copyToClipboard')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const switchTheme = document.getElementById('themeSwitcher')

keys(input)
clear(input)
keydowns(allowedKeys, input, resultInput)
switcher(switchTheme, main, root)
copy(copyButton, resultInput)

document.getElementById('equal').addEventListener('click', function (){
    calculate(input, resultInput)
})

