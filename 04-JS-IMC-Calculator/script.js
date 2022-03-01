const calculate = document.getElementById('calcular');

const calcIMC = () => {
    const nome = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado')

    if (nome !== '' && height !== '' && weight !== '') {

    const imcValue = (weight / (height * height/10000)).toFixed(1)
    
    let classificacao = '';
        if (imcValue < 18.5) {
            classificacao = 'abaixo do peso.'
        }
        else if (imcValue < 25) {
            classificacao = 'dentro do peso ideal.'
        } else if (imcValue < 30) {
            classificacao = 'com sobrepeso.'
        } else if (imcValue < 35) {
            classificacao = 'com sobrepeso grau I.'
        } else if (imcValue < 40) {
            classificacao = 'com sobrepeso grau II.'
        } else 
            classificacao = 'com sobrepeso grau III. Cuidado!'




    result.textContent = `${nome} seu IMC é ${imcValue}kg/m2 e você está ${classificacao}`
    } else { 
        result.textContent = 'Preencha todos os campos';
    }
}

calculate.addEventListener('click', calcIMC)

// if (nome !== '' && height !== '' && weight !== '') 
// } else {

//     result.textContent = 'Preencha todos os campos';
//     }