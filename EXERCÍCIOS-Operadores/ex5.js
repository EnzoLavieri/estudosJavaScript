/*
Um usuário deseja calcular a média do gasto de litros por quilômetro de sua moto. Sendo assim, crie um algoritmo que:
1) solicite a distância (em quilômetros) percorrida; 
2) solicite a quantidade de combustível (em litros) gastos; 
3) calcule a média 
4) retorne o valor final para o usuário.
*/

const distancia = 48

const combustUsado = 5

const media = distancia / combustUsado

console.log(`Voce percorreu ${distancia}Km, usou ${combustUsado}L de combustivel e fez uma media de ${media}km/l`)