// Lista de quotes Array de objetos (Procurar como usar Apis depois)
var generatedQuote = [
    {quote:'You cannot alter your fate. However, you can rise to meet it.',
    author:'Princess Mononoke (1997)'},
    {quote:'We each need to find our own inspiration. Sometimes it’s not easy.',
    author:'Kiki’s Delivery Service (1989)'},
    {quote:'There’s no future for people who worship the future, and forget' +
    'the past.',
    author:'From Up On Poppy Hill (2011)'},
    {quote:'No matter how many weapons you have, no matter how great your' + 
    'technology might be, the world cannot live without love!',
    author:'Castle in the Sky (1986)'}
];


// Liga os elementos do html para alterar o DOM
var insideQuote = document.querySelector('.mb-0');
var authorQuote = document.querySelector('#author');

// Lista de quotes
/*var generatedQuote = [];
generatedQuote[0] = 'You cannot alter your fate. However, you can rise to meet it.';
generatedQuote[1] = 'We each need to find our own inspiration. Sometimes it’s not easy.';
generatedQuote[2] = 'There’s no future for people who worship the future, and forget' +
'the past.';
generatedQuote[3] = 'No matter how many weapons you have, no matter how great your' + 
'technology might be, the world cannot live without love!';*/

// Primeira frase mostrada, junto do autor
insideQuote.textContent = generatedQuote[0].quote;
authorQuote.textContent = generatedQuote[0].author;

// Escutando o click no botão
var nQuote = document.getElementById('buttonNext');
nQuote.addEventListener('click', getQuote);

// Função para gerar um numero aleatorio entre os números pré-definidos
//var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
function generateRandomNumber() {
    let randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    return randomnumber;
}

// Função para gerar o quote aleatório
function getQuote() {
    random = generateRandomNumber();
    console.log(random);
    insideQuote.textContent = generatedQuote[random].quote;
    authorQuote.textContent = generatedQuote[random].author;    
}