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
        let nomePokemon = await dados.name;
        document.getElementById("nomedopokemon").innerHTML=`${nomePokemon.toUpperCase()}`;
        let habilidade = await dados.abilities;
        habilidade.forEach( (hb,i) => {let habilidades = hb.ability.name;  
            document.getElementById(`habilidade${i}`).innerHTML = `${habilidades}`;          
        });
        let tipo = await dados.types
        tipo.forEach((tp,i) => {let tipos = tp.type.name
            document.getElementById(`tipo${i}`).innerHTML = `${tipos}`
        
        } )
        
})}

// pegaNomePokemon()