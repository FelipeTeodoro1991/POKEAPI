// let axios = require('axios')
let valor
function pegaValorDiditado(){
valor = document.getElementById("valordigitado").value;     
return valor
}

async function pegaNomePokemon(){
axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then( async function main (resposta) {
        let dados = await resposta.data;
        let nomePokemon = await dados.name
        document.getElementById("nomedopokemon").innerHTML=`${nomePokemon}`
        let habilidade = await dados.abilities
        habilidade.forEach( habilidades => {console.log(habilidades.ability.name)            
        });
        let tipo = await dados.types
        tipo.forEach(tipos => {console.log(tipos.type.name)} )
        
})}

// pegaNomePokemon()