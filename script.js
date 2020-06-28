// let axios = require('axios')
let valor
function pegaValorDiditado() {
    valor = document.getElementById("valordigitado").value;
    return valor
}

async function pegaNomePokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(async function main(resposta) {
            let dados = await resposta.data;
            let nomePokemon = await dados.name;
            document.getElementById("nomedopokemon").innerHTML = `${nomePokemon.toUpperCase()}`;
            let lista = document.querySelector("#habilidade");
            let habilidade = dados.abilities.map( abili => `<p>${ abili.ability.name}</p>`);
            lista.innerHTML = habilidade.join('')
            // habilidade.forEach((hb, i) => {
            //     let habilidades = hb.ability.name;
            //     let elementoPai =  document.getElementById("habilidade").innerHTML = `<p>${habilidades}</>`
            //     let criaTag = document.createElement('p')
            //     let criartexto = criaTag.innerHTML=`${habilidades}`;
            //     elementoPai.appendChild(criaTag);
            // });
            let tipo = await dados.types
            tipo.forEach((tp, i) => {
                let tipos = tp.type.name
                document.getElementById(`tipo${i}`).innerHTML = `${tipos}`
                let imagem = dados.sprites.front_default
                document.getElementById('imagem').src = `${imagem}`
                console.log(imagem)
            })

        })
}



// pegaNomePokemon()