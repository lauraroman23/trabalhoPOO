class Empregada extends Store{
    
    constructor() {
        super();
    }
    
    //renderizando elementos na tela
    renderItem (item) {
        let template = `
        <div>
        <img src="img/perfil.png" id="img"><p>
        
        <input id="input" type="text" data-index="${item.idx}" value="${item.name}"> 
        <label>
            <button id="editar">Editar</button>
        </label><p></p>


        <input id="input_cpf" type="text" data-index="${item.idx}" value="${item.cpf}">
        <label>
            <button id="editar_cpf">Editar</button>
        </label><p></p>


        <input id="input_telefone" type="text" data-index="${item.idx}" value="${item.telefone}">
        <label>
            <button id="editar_telefone">Editar</button>
        </label>
        
        <p>
        <button class="excluir">Excluir</button>
        </div>
        `
        
        
       // retornando elementos html
      let itemHTML = document.createRange().createContextualFragment(template)
      
      
      //excluindo elementos
        itemHTML.querySelector('.excluir').addEventListener('click', () => {
            lista.excluir = item.idx
            componentList2(lista.empregada)  
        })
        
      
        let inputDesc = itemHTML.querySelector('#input')
        let inputCPF = itemHTML.querySelector('#input_cpf')
        let inputTelefone = itemHTML.querySelector('#input_telefone')
        
        
        //editando nome
        itemHTML.querySelector('#editar').addEventListener('click', (e) => {
            var novoValor = inputDesc.value
            var idx = inputDesc.getAttribute('data-index')
            lista.editar(idx, 'nome', novoValor)
            componentList2(lista.empregada)
        })
        
        //editando cpf
        itemHTML.querySelector('#editar_cpf').addEventListener('click', (e) => {
            var novoValor = inputCPF.value
            var idx = inputCPF.getAttribute('data-index')
            lista.editar(idx, 'cpf', novoValor)
            componentList2(lista.empregada)
        })
        
        //editando telefone
        itemHTML.querySelector('#editar_telefone').addEventListener('click', (e) => {
            var novoValor = inputTelefone.value
            var idx = inputTelefone.getAttribute('data-index')
            lista.editar(idx, 'telefone', novoValor)
            componentList2(lista.empregada)
        })
        
        
        return itemHTML //Retorna a estutura html
    
    }

}