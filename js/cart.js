const cart = () => {
    const buttonCart = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')

    buttonCart.addEventListener('click', () => {
        modalCart.classList.toggle('is-open')
    })

    close.addEventListener('click', () => {
        modalCart.classList.toggle('is-open')
    })

}

cart()