fetch("js/items.json")
    .then(response => response.json())
    .then(products => {
        const productsDev = document.getElementById("products-dev");
        allProductsJson = products;

        products.forEach(product => {
            const hasSale = product.old_price && product.old_price > product.price;
            const salePerc = hasSale ? Math.floor((product.old_price - product.price) / product.old_price * 100) : 0;

            productsDev.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>

                    ${hasSale ? `<span class="sale-percent">%${salePerc}</span>` : ''}

                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>

                    <h3 class="name-product">
                        <a href="#">${product.name}</a>
                    </h3>

                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${hasSale ? `<p class="old-price">$${product.old_price}</p>` : ''}
                    </div>
                </div>
            `;
        });
    });

// open & close filter 
const filter = document.querySelector(".filter");

function openCloseFilter() {
    filter.classList.toggle("active")
}

