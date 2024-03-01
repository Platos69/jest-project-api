import data from './data.json' assert{'type': 'json'};

const btn = document.querySelector('#login')
btn.addEventListener('click', (event)=>{
    event.preventDefault()

    let user = document.getElementById('user').value
    const password = document.getElementById('password').value
    
    const login = data.find((obj)=>obj.usuario === user.toLowerCase() && obj.senha === password)

    if(login){
        window.location = './page.html '
    }else{
        alert('usuario não encontrado')
    }
    console.log(login)
    console.log(user, password)

    
})