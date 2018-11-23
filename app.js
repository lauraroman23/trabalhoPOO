//pegando os ids dos elementos html e armazenando numa variável
const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')
const btnCadastro = document.getElementById('btnCadastrar')
const div = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')
const busca = document.getElementById('txtBusca')

let lista = new Empregada();

//cadastrando os dados 
btnCadastro.addEventListener('click', (e) =>{ //evento de click
    lista.novoItem = {nome: nome.value, cpf: cpf.value, telefone: telefone.value}
    componentList2(lista.empregada)
})


let componentList2 = (items) => {
    console.log('componentList2 chamado')
    itensRenderizados.innerHTML = ''
    items.forEach((i, idx) => {
        let item = {
            name: i.nome,
            cpf: i.cpf,
            telefone: i.telefone,
            idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    }) 
}

//buscando 
busca.addEventListener('keyup', function(e) {
    let textoParaBuscar = busca.value  //pega valor que está sendo digitado
    listaFiltrada = lista.empregada.filter(function(e){
        if (e.nome.toLowerCase().includes(textoParaBuscar)) 
            return e
    })
    componentList2(listaFiltrada)
})

window.onload = () => componentList2(lista.empregada)
