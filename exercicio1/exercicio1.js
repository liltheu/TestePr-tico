/* Primeiramente como temos apenas dez simbolos existentes em nosso alfabeto de 0 a 9,
independente de 1 a 1000 os numeros são os mesmo associarei os numeros as palavras. */

var numerosPalavra = {0 : 'zero' , 1: 'um', 2: ' dois ' , 3: 'três' , 4: 'quatro' , 5: " cinco ", 6: ' seis ', 7 : ' sete ', 8 : ' oito ', 9 : ' nove '};
var aux = 0;
/*Depois preciso separar os numeros, para que na conversão por extenso, eu consiga passar um por um no meu dicionario. */
function splitToDigit(n){
    return [...n + ''].map(Number)
  }

/* Agora que já tenho, os numeros associados a sua respectiva palavra, e caso eu tenha mais de um, eu posso passar um a um ao meu dicionario,
agora basta contar todas letras e soma-las a uma variavel para apresentar */


for (let j = 1; j <= 1000; j++) {
    numeros = splitToDigit(j)
    for (let i = 0; i < numeros.length; i++) {
       var palavra = numerosPalavra[numeros[i]];  
       var tamanho = palavra.length;   
       aux = aux + tamanho ;
    };   
}
console.log(aux)