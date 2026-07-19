const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        image: "https://via.placeholder.com/250"
    }
];

let cartCount = 0;

const productList = document.getElementById("product-list");

products.forEach(product => {
    productList.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    `;
});

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}