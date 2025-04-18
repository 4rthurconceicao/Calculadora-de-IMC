function Calcular (){
let nome = document.getElementById('nome')
let kg = Number(document.getElementById('peso'))
let m = Number(document.getElementById('altura'))
let IMC = kg (m*m)
document.getElementById('res').innerHTML =  `Olá ${nome.value} o seu imc e`
if (IMC >= 18.55 && IMC <= 24.9) { 
    +=innerHTML = `${IMC} voce está com o peso adequado`
}

}