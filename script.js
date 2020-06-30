// let axios = require('axios')


var pokemon = {};


function pegaValorDiditado() {
    const valor = document.getElementById("valordigitado").value;
    pegaNomePokemon(valor)
}
let nome = "";
let habilidade = "";
let tipo = "";
let id = "";

function pegaNomePokemon(valor) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(function(resposta) {
            pokemon = resposta.data;
            let dados =  resposta.data;
            let nomePokemon =  dados.name;
            // nome.push(nomePokemon);
            document.getElementById("nomedopokemon").innerHTML = `${nomePokemon.toUpperCase()}`;
            setaHabilidades(dados.abilities);
            setaTipo(dados.types);
            setaDetalhesHabilidades(dados.abilities);
            setaImagem(dados.sprites.front_default);
                    
        })
}

function setaHabilidades(abilities) {
    let lista = document.querySelector("#habilidade");
    let habilidade = abilities.map(abili => `<p>${abili.ability.name}</p>`);
    lista.innerHTML = habilidade.join('');
}

function setaTipo(tipo) {
    tipo.forEach((tp, i) => {
        let tipos = tp.type.name;
        document.getElementById(`tipo${i}`).innerHTML = `${tipos}`;
        
    });
}

function setaImagem(imagem) {
    document.getElementById('imagem').src = `${imagem}`;
}

function setaDetalhesHabilidades(detalhesHabilidades) {
    detalhesHabilidades.forEach((dh, i) => {
        let retornaUrl = dh.ability.url;
        axios.get(`${retornaUrl}`).then(dh => {
            let descricaoHabilidades = dh.data.effect_entries;
            descricaoHabilidades.forEach((hd, i) => {
                let linguagem = hd.language.name;
                let descricao = hd.effect;
                if (linguagem == "en") {
                    
                }
            });
        });
    });
}

function salvaPokemon() {
    var pokemonSalvo = {nome: '', tipos: [], habilidades: []}
    pokemonSalvo.nome = pokemonSalvo.name
    console.log(pokemon)
    window.localStorage.setItem("salvaPokemon", JSON.stringify(pokemonSalvo));
}
   

// console.log(nome)

// // var fs = 'readFileSync';
// var fs = 'pokeagenda.json';
// // var arquivoSerializado = fs.readFileSync(caminhoDoArquivo);
// var arquivoDeserializado =[];
// // arquivoDeserializado.push(JSON.parse(arquivoSerializado));

// console.log(arquivoDeserializado);

// var pokeBola = {} //cria objeto carro 
// pokeBola.nome = nome //istancia cor como propriedade do pokeBola
// pokeBola.habilidade = habilidade //istancia modelo como propriedade do pokeBola
// pokeBola.tipo = tipo //istancia marca como propriedade do carro  
// pokeBola.id = id //istancia o id do pokeBola
// var objetoSerializado = JSON.stringify(pokeBola) // serializa o arquivo
// fs.writeFileSync(caminhoDoArquivo,objetoSerializado)// parametro 1 informa a pasta destino, parametro 2 informa o arquivo a ser enviado

//async function salvaPokemon(){ // função para salvar os dados na pokeagenda 
//  var salvandoNomePokemon = document.getElementById("nomePokemon"); //salva o nome do pokemon 
//var salvandoHabilidadePokemon = document.getElementById("habilidade");
//var salvandoTipoPokemon = document.getElementById("tipo");
//var salvandoDetalhesPokemon = document.getElementById("detalhesHabilidades");    
//var salvandoDescricaoPokemon = document.getElementById("descricaoHabilidades");   
//var dados = JSON.parse(localStorage.getItem("pokeagenda"));
//if (dados == null){
//localStorage.setItem("pokeagenda", "[]");
//dados = [];        
//}
//var salvaRegistroPokemon = {
//  nome: salvandoNomePokemon.value,
//habilidade: salvandoHabilidadePokemon.value,
//tipo: salvandoTipoPokemon.value,
//detalhes: salvandoDetalhesPokemon.value,
//descricao: salvandoDescricaoPokemon.value
//}

//dados.push(salvaRegistroPokemon);
//localStorage.setItem("pokeagenda", JSON.stringify(dados));
//salvandoNomePokemon.value = "";
//salvandoHabilidadePokemon.value = "";
//salvandoTipoPokemon.value = "";
//salvandoDetalhesPokemon.value = "";
//salvandoDescricaoPokemon.value = "";

//console.log(salvaRegistroPokemon)

//}












