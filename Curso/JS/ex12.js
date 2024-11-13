/*var agora = new Date()
var hora = agora.getHours() //hora do meu pc
var data = agora.getDate() // add Data dia
var ano = agora.getFullYear() // add Ano
var mes = agora.getMonth()
console.log(`Agora são exatamente ${hora} horas. Hoje é ${data} ${mes} ${ano}`)

if (hora < 12){
    console.log('Bom dia')
} else if (hora <= 12) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}*/

var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
}