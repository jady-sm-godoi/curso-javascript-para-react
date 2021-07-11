import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import CardGame from './src/components/CardGame'

const $root = document.querySelector("#root")

$root.textContent = 'Jady Sobjak de Mello Godoi'

const $htmlCardGame = CardGame()
// console.log($htmlCardGame)
$root.insertAdjacentHTML("afterend", $htmlCardGame)