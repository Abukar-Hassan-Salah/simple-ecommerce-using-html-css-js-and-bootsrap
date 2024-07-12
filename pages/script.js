let cart = [];

function addToCart(productId) {
    let quantity = document.getElementById('quantity').value;
    cart.push({ id: productId, quantity: parseInt(quantity) });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let product = getProductById(item.id);
        let itemTotal = product.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${item.quantity}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>
        `;
    });
    document.getElementById('cartTotal').innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function getProductById(id) {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
    ];
    return products.find(product => product.id === id);
}
