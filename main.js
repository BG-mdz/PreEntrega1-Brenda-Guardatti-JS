/**obtengo los productos con fetch dede JSON */
fetch("productos.json")
    .then((response)=>{
        return response.json();
    })
    .then((responseProducts) => {
        renderProducts (responseProducts);
        showProducts();
    })

let products = [];
let cart = [];

/*CARGAR CARRITO DESDE EL LOCALSTORAGE*/
//Si hay algo en el localStorage se carga en el carrito, si no es porque esta vacio.

if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
}
//DOM mostrando los productos
const productsContainer = document.getElementById("productsContainer");

// función mostrar productos.

const renderProducts = (productsFetch) =>{
    products = productsFetch
}
const showProducts = () => {
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div class ="card">
                            <img src = "${product.img}" class = "card-img-top imageProducts" alt = "${product.name}">
                            <div>
                                <h5> ${product.name} </h5>
                                <p> ${product.price} </p>
                                <button class = "btn colorBoton" id="button${product.id}" > Agregar al Carrito </button>
                            </div>
                        </div>
                        `
        productsContainer.appendChild(card);

        //Agregar productos al carrito:
        const button = document.getElementById(`button${product.id}`);
        button.addEventListener("click", () => {
            addToCart(product.id);
        })
    })
}

showProducts();

const addToCart = (id) => {
    const productInCart = cart.find(product => product.id === id);
    if(productInCart) {
        productInCart.quantity += 1;
    } else {
        const product = products.find(product => product.id === id);

        createProductForCart(product.id, product.name, product.price, product.img)
        swal({
            title: "Genial!",
            text: "Tu producto se agrego con exito al carrito",
            icon: "success"});
    }
    totalAmount();
    localStorage.setItem("cart", JSON.stringify(cart));
}

const createProductForCart = (id, name, price, img) => {
    let newProduct = {
        id,
        name,
        price,
        quantity: 1,
        img
    }
    cart.push (newProduct);
}

//Mostrar el carrito de compras:

const cartContainer = document.getElementById("cartContainer");
const show = document.getElementById("showCart");

show.addEventListener("click", () => {
    showCart();
})

const showCart = () => {
    cartContainer.innerHTML = "";
    cart.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div class ="card">
                            <img src = "${product.img}" class = "card-img-top imgProductos" alt = "${product.name}">
                            <div>
                                <h5> ${product.name} </h5>
                                <p> ${product.price} </p>
                                <p> ${product.quantity} </p>
                                <button class = "btn colorBoton" id="remove${product.id}" > Eliminar </button>
                            </div>
                        </div>
                        `
        cartContainer.appendChild(card);

        //Eliminamos productos desde el carrito:
        const button = document.getElementById(`remove${product.id}`);
        button.addEventListener("click", () => {
            removeFromCart(product.id);
        })
    })
    totalAmount();
}

//Funcion que elimina el producto del carrito:

const removeFromCart = (id) => {
    const product = cart.find(product => product.id === id);
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    swal({
        title:"OK!",
        text: "El producto fue eliminado",
        icon: "success"});
    showCart();

    localStorage.setItem("cart", JSON.stringify(cart));
}

//Mostramos el total de la compra:

const total = document.getElementById("total");

const totalAmount = () => {
    let totalPurchase = 0;
    cart.forEach(product => {
        totalPurchase += product.price * product.quantity;
    })
    total.innerHTML = `Total: $${totalPurchase}`;
}

//Vaciar todo el carrito:

const emptyCart = document.getElementById("emptyCart");

emptyCart.addEventListener("click", () => {
    emptyAllItemsInCart();
})

const emptyAllItemsInCart = () => {
    cart = [];
    showCart();

    localStorage.clear();
}