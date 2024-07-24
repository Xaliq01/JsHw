let wdt1 = document.getElementById('Menu1')
 

function Slide1(){
    wdt1.style.right ='-250px'
    console.log('HELLO')
    // wdt1.classList.toggle('right1')
    
}
function Slide2(){
    wdt1.style.right = '0px'
}
function glav(){


let div = document.getElementById('div')
let Width = document.getElementById('A1').value
let Height = document.getElementById('A2').value
let Bg = document.getElementById('A3').value
let Br = document.getElementById('A4').value
let Float = document.getElementById('A5').value
let Color = document.getElementById('A6').value
let BgPos = document.getElementById('A7').value
let BgSize = document.getElementById('A8').value
let Done = document.getElementById('A9').value
let İmg = document.getElementById('A10').value
div.style.width = Width
div.style.height = Height
div.style.backgroundColor = Bg
div.style.borderRadius = Br
div.style.float = Float
div.style.color = Color
div.style.backgroundPosition = BgPos
div.style.backgroundSize = BgSize
div.style.backgroundImage = İmg

}
