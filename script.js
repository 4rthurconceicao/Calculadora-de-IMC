function Calcular() {
let nome = document.getElementById('nome')
let kg = Number(document.getElementById('peso'))
let m = Number(document.getElementById('altura'))
let IMC = kg/(m*m)

document.getElementById('res').innerHTML =  `Olá ${nome.value} o seu imc e`
if (IMC < 18.5) { 
    res.innerHTML += `${IMC.toFixed(2)} voce está com o peso adequado`
}else if (IMC >= 18.5 && IMC <= 24.9){

}else if (IMC >= 25.0 && IMC <= 29.9){

}else if (IMC >= 30.00 && IMC <= 34.9 ){

}else if (IMC >= 35.0 && IMC <= 39.9){

}else if (IMC >= 40){
    
}

}