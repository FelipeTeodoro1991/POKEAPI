// let axios = require('axios')
let valor
function pegaValorDiditado() {
    valor = document.getElementById("valordigitado").value;
    return valor
}
let nome = "";
let habilidade = "";
let tipo = "";
let id = "";

async function pegaNomePokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(async function main(resposta) {
            let dados = await resposta.data;
            let nomePokemon = await dados.name;
            nome.push(nomePokemon);
            document.getElementById("nomedopokemon").innerHTML = `${nomePokemon.toUpperCase()}`;
            let lista = document.querySelector("#habilidade");
            let habilidade = dados.abilities.map( abili => `<p>${ abili.ability.name}</p>`);
            lista.innerHTML = habilidade.join('')
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

console.log(nome)

// var fs = 'readFileSync';
var fs = 'pokeagenda.json';
// var arquivoSerializado = fs.readFileSync(caminhoDoArquivo);
var arquivoDeserializado =[];
// arquivoDeserializado.push(JSON.parse(arquivoSerializado));

console.log(arquivoDeserializado);

var pokeBola = {} //cria objeto carro 
pokeBola.nome = nome //istancia cor como propriedade do pokeBola
pokeBola.habilidade = habilidade //istancia modelo como propriedade do pokeBola
pokeBola.tipo = tipo //istancia marca como propriedade do carro  
pokeBola.id = id //istancia o id do pokeBola
var objetoSerializado = JSON.stringify(pokeBola) // serializa o arquivo
fs.writeFileSync(caminhoDoArquivo,objetoSerializado)// parametro 1 informa a pasta destino, parametro 2 informa o arquivo a ser enviado

