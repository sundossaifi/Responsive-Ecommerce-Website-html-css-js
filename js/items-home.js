fetch("js/items.json")
    .then(response => response.json())
    .then(products => {
        const swiperItemsSale = document.getElementById("swiper-items-sale");
        const otherProductsSwiper = document.getElementById("other-products-swiper");
        const otherProductsSwiper2 = document.getElementById("other-products-swiper2");
         
        allProductsJson = products;

        products.map(product => {
            if(product.old_price) {
                const salePerc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                swiperItemsSale.innerHTML += `
                <div class="product swiper-slide">
                        <div class="icons">
                            <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale-percent">%${salePerc}</span>
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
                            <p class="old-price">$${product.old_price}</p>
                        </div>
                </div>
                `
            }
        })

        products.map(product => {
                otherProductsSwiper.innerHTML += `
                <div class="product swiper-slide">
                        <div class="icons">
                            <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
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
                        </div>
                </div>
                `
        })
        
        products.map(product => {
                otherProductsSwiper2.innerHTML += `
                <div class="product swiper-slide">
                        <div class="icons">
                            <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
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
                        </div>
                </div>
                `
        })
    })