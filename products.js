let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}


var eletronico = "Eletrônico"
var escola = "Escolar"

function listarPorCategoria(categoria) {
    
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].categoria == categoria) {
            console.log(produtos[i])
        }
    }
} 
listarPorCategoria(eletronico);
listarPorCategoria(escola);


function listarPorValor(min, max) {
    
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].valor >= min && produtos[i].valor <= max) {
            console.log(produtos[i])
        }
    }
} 

listarPorValor(0, 1000)
listarPorValor(0, 10)
listarPorValor(1000, 2000)

