const partners = () => {
    const cardRestaurants = document.querySelector('.cards-restaurants')


    console.log(cardRestaurants);

    const renderItems = (data) => {
        data.forEach((item) => {
            const { image, kitchen, name, price, products, stars, time_of_delivery } = item
            const a = document.createElement('a')

            a.setAttribute('href', '/restaurant.html')
            a.classList.add('card')
            a.classList.add('card-restaurant')
            a.dataset.products = products

            a.innerHTML = `
        <img src="${image}" alt="${kitchen}" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">${name}</h3>
                <span class="card-tag tag">${time_of_delivery} мин</span>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="rating">
                ${stars}
                </div>
                <div class="price">От ${price} ₽</div>
                <div class="category">${kitchen}</div>
            </div>
        </div>
        `
            a.addEventListener('click', (e) => {
                e.preventDefault();

                localStorage.setItem('restaurant', JSON.stringify(item))

                window.location.href = '/restaurant.html'
            })

            cardRestaurants.appendChild(a)
        });
    }


    fetch('https://test-2547e-default-rtdb.firebaseio.com/db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) => {
            console.log(error);
        })
}

partners()