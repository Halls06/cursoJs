function calcular(){
var vel = document.getElementById('vel')
var v = Number(vel.value)
var res = document.getElementById('res')
res.innerHTML = (`<p>A sua velocidade é de<strong>${v}</strong> por excesso de Velocidade</p>`)

if (v > 60){
    res.innerHTML += ('Voce foi <strong>MULTADO</strong>')
}
res.innerHTML += ('<p>dirija sempre com o cinto de segurança</p>')
}

