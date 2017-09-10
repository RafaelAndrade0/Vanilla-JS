var entryNumber = document.getElementById('inputNumber');
//console.log(entryNumber);

// Ouvindo por eventos no input
entryNumber.addEventListener('input', convertValues);

// Enquanto não houver input os cards com as conversões ficam invisiveis
document.getElementById('output').style.visibility = 'hidden';

function convertValues() {

    // Como entrou na função houve input e os cards de conversão ficam visiveis
    document.getElementById('output').style.visibility = 'visible';

    let inputValue = document.getElementById('inputNumber').value;
    console.log(inputValue);
    
    let quilo = 0;
    // Convertendo para quilogramas
    quilo = (inputValue/1000);
    document.getElementById('kilosP').innerHTML = quilo + ' kg';

    let libra = 0;
    // Convertendo para libras
    libra = (inputValue * 0.0022046);
    document.getElementById('librasP').innerHTML = libra + ' lb';
}