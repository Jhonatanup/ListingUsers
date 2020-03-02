class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor(){
        super();
    
    this.usuario = 'Jhonatan';
    }
    showUser(){
        console.log(this.usuario);
    }

}
const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('novo to-do');
}
minhaLista.showUser();