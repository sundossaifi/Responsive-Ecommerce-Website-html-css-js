//open & close cart
const cart = document.querySelector(".cart");

function openCart() {
    cart.classList.add("active")
}

function closeCart() {
    cart.classList.remove("active")
}

// add items to cart 
let allProductsJson;

let buttonRefs = {};

const itemsInCart = document.querySelector(".items-in-cart");
const priceCarTotal = document.querySelector(".price-cart-total");
const countItem = document.querySelector(".count-item");
const priceCartHeader = document.querySelector(".price-cart-header");
const countItemCart = document.querySelector(".count-item-cart");

let productCart = [];

function addToCart(id, btn) {
    let product = allProductsJson.find(item => item.id === id);
    if (!productCart.find(item => item.id === id)) {
        productCart.push(product);
        btn.classList.add("active");
        buttonRefs[id] = btn;
        getCartItems();
    }
}

function getCartItems() {
    let items_c = "";
    let cartTotalPrice = 0;
    productCart.map(product => {
        items_c += `
            <div class="item-cart">
                <img src="${product.img}" alt="">
                <div class="content">
                    <h4>${product.name}</h4>
                    <p class="price-cart">$${product.price}</p>
                </div>
                <button onclick="removeItemFromCart(${product.id})" class="delete-item"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        cartTotalPrice += product.price;
    })
    itemsInCart.innerHTML = items_c;
    priceCartHeader.innerHTML = `$${cartTotalPrice}`;
    priceCarTotal.innerHTML = `$${cartTotalPrice}`;
    countItem.innerHTML = productCart.length;
    countItemCart.innerHTML = `(${productCart.length} items in cart)`
}

function removeItemFromCart(id) {
    productCart = productCart.filter(product => product.id !== id);

    if (buttonRefs[id]) {
        buttonRefs[id].classList.remove("active");
        delete buttonRefs[id];
    }

    getCartItems();
}

// end cart functionality

// back to top js

const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

//open & close menu
const menu = document.getElementById("menu");

function openMenu() {
    menu.classList.add("active")
}

function closeMenu() {
    menu.classList.remove("active")
}


//Change item image 
const bigImage = document.getElementById("big-img");

function changeItemImage(img) {
    bigImage.src = img;
}
