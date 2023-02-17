class Product{
    constructor (id,name,price,img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = 1
    }
}

const raspberryCandle = new Product (1,"Frambuesa", 300,"assets/imagenes/Frambuesa-500.png");
const blueberryCandle = new Product (2, "Arandano", 120,"assets/imagenes/Arandanos-500.png");
const appleCandel = new Product (3, "ManzanaCanela", 1000,"assets/imagenes/manzana-canela-500.png");
const vanillaCandle = new Product (4, "Vainilla", 400,"assets/imagenes/Vainilla-500.png");
const sofa = new Product (5, "sillon", 50000,"assets/imagenes/Vainilla-500.png");
const vase = new Product (6, "jarron", 700,"assets/imagenes/Vainilla-500.png");

/**ARRAY de OBJETOS */
const products = [raspberryCandle, blueberryCandle, appleCandel, vanillaCandle, sofa, vase];
console.log(products);

let cart = [];

/*CARGAR CARRITO DESDE EL LOCALSTORAGE*/
//Si hay algo en el localStorage se carga en el carrito, si no es porque esta vacio.

if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
}
//DOM mostrando los productos
const productsContainer = document.getElementById("productsContainer");

// función mostrar productos.

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
        cart.push(product);
        swal({
            title: "Genial!",
            text: "Tu producto se agrego con exito al carrito",
            icon: "success"});
    }
    totalAmount();
    localStorage.setItem("cart", JSON.stringify(cart));
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

    localStorage.setItem("cart", JSON.stringify(carrito));
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