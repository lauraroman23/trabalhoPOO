class Store {
    
    constructor (){
        this.store = "empregada";
    }
    
    //converte strings em objetos javascript
    __parse(d){
        return JSON.parse(d);
    }
    
    //converte objetos javascript em string 
    _stringify(d){
        return JSON.stringify(d);
    }
    
    get empregada() {
        return this.__parse(localStorage.getItem(this.store)) || [];
    }
    
    set novoItem(item){
        let empregada = this.empregada
        let res = empregada.push(item) 
        localStorage.setItem(this.store, this._stringify(empregada))
        return res
    }
    
    editar(idx, prop, value){  //índice, campo, valor
        let empregada = this.empregada
        let res = (empregada[idx][prop] = value);
        localStorage.setItem(this.store, this._stringify(empregada))
        return res
    }
    
    set excluir(idx){
        let empregada = this.empregada
        let res = empregada.splice(idx, 1)
        localStorage.setItem("empregada", this._stringify(empregada))
        return res
    }
}

