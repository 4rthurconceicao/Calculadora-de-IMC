function Calcular() {
  let res = document.getElementById('res')
  let nome = document.getElementById('nome')
  let fsex = document.getElementsByName('radsex')
  let genero = ''
  let kg = Number(document.getElementById('peso').value)
  let m = Number(document.getElementById('altura').value)

  if (isNaN(kg) || isNaN(m) || kg <= 0 || m <= 0) {
    window.alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  if (fsex[0].checked) {
    genero = 'homem';
  } else if (fsex[1].checked) {
    genero = 'mulher'
  } else {
    window.alert("Por favor, selecione o sexo.");
    return;
  }
  let IMC = kg / (m * m)

  document.getElementById('res').innerHTML = `Olá ${nome.value} o seu IMC kg e `
  let img = document.getElementById('foto')

  //teste logico
  if (IMC < 18.5) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o magreza`
    if (genero === 'homem') {
      img.src = 'imagem/Homem-abaixo do peso.png'
      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-abaixo do peso.png'
      img.style.display = 'block';
     
    }
    
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o peso ideal`
    if (genero === 'homem') {
      img.src = 'imagem/Homem-peso adequado.png'
      
      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-Peso adequado.png'

      img.style.display = 'block';
    }
  } else if (IMC >= 25.0 && IMC <= 29.9) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o Sobrepeso`
    if (genero === 'homem') {
      img.src = 'imagem/Homem-sobrepeso.png'

      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-sobrepeso.png'

      img.style.display = 'block';
    }
  } else if (IMC >= 30.00 && IMC <= 34.9) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o Obesidade grau 1 `
    if (genero === 'homem') {
      img.src = 'imagem/Homem-Obesidade grau 1.png'

      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-obesidade grau 1.png'

      img.style.display = 'block';
    }
  } else if (IMC >= 35.0 && IMC <= 39.9) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o Obesidade grau 2`
    if (genero === 'homem') {
      img.src = 'imagem/homem-Obesidade grau 2.png'

      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-obesidade grau 2.png'

      img.style.display = 'block';
    }
  } else if (IMC >= 40) {
    res.innerHTML += `${IMC.toFixed(2)} voce está com o Obesidade grau 3`
    if (genero === 'homem') {
      img.src = 'imagem/Homem-obesidade grau 3.png'

      img.style.display = 'block';
    } else {
      img.src = 'imagem/Mulher-obesidade grau 3.png'

      img.style.display = 'block';
    }
  }

}