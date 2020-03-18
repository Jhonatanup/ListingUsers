import api from './services/api'

class App {
    constructor(){
        this.users = [];
        this.formEl = document.getElementById('user-form');
        this.inputEl= document.querySelector('input[name=user]')
        this.listEL = document.getElementById('user-list');
        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addUsers(event);
    }

    async addUsers(event){
        event.preventDefault();

        const userInput = this.inputEl.value;
        if(userInput.length === 0)
            return;

        this.setLoading();    
        try {
        const response = await api.get(`/users/${userInput}`)
        console.log(response.data)
        let { name, bio, avatar_url, html_url } = response.data;
        if(bio === null){
            bio = 'usuario não possui descrição';
            console.log(bio);
        }
            
        this.users.push({
            name,
            bio,
            avatar_url,
            html_url,
        });
        console.log(this.users);
        this.inputEl.value = '';
        this.render();
        } catch(err){
            alert('O usuario não foi encontrado!');
        }
        this.setLoading(false);
    }
    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.setAttribute('id', 'load')
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('load').remove();
        }
    }

    render(){
        this.listEL.innerHTML = '';
        this.users.forEach( user => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', user.avatar_url);
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(user.name));
            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(user.bio))
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', user.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));
            let itemEl = document.createElement('li');
            itemEl.appendChild(imgEl);
            itemEl.appendChild(titleEl);
            itemEl.appendChild(descriptionEl);
            itemEl.appendChild(linkEl);

            this.listEL.appendChild(itemEl);
        })
    }
    
}
new App();

// class Api{
//     static async getUserInfo(username){
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         }catch(err){
//             console.warn('Erro na API')
//         }
//     }
// }
// Api.getUserInfo('jhonatanup')