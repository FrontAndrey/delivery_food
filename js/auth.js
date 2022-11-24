const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonCart = document.querySelector('.button-cart');


const login = (user) => {
    buttonAuth.style.display = 'none'

    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'
    buttonCart.style.display = 'flex'

    userName.textContent = user.login

    modalAuth.style.display = 'none'
}

const logOut = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    buttonCart.style.display = 'none'

    userName.textContent = ''

    buttonAuth.style.display = 'flex'
    localStorage.removeItem('user')
    //inputLogin.value = ''
    inputPassword.value = ''
}


buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
    logOut()
});

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))

    login(user);

})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}