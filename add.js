// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart function (triggered on add-to-cart button click in order.html)
function addToCart(pizzaId, pizzaName, pizzaPrice) {
    const existingItem = cart.find(item => item.id === pizzaId);

    if (existingItem) {
        // Increase quantity if item already in cart
        existingItem.quantity++;
    } else {
        // Add new item to cart
        cart.push({ id: pizzaId, name: pizzaName, price: pizzaPrice, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${pizzaName} added to cart!`);
}

// Render cart items on cart.html
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = ''; // Clear existing cart items

    let totalPrice = 0;

    // Generate HTML for each item in the cart
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <div class="quantity-controls">
                <button onclick="updateQuantity('${item.id}', 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 'increase')">+</button>
                <button onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `;
        cartItemsElement.appendChild(cartItem);

        // Calculate total price
        totalPrice += item.price * item.quantity;
    });

    // Update total price in the cart summary
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Update item quantity in cart
function updateQuantity(id, action) {
    const item = cart.find(item => item.id === id);

    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    } else if (action === 'decrease' && item.quantity === 1) {
        removeFromCart(id);
        return;
    }

    // Save updated cart to localStorage and re-render
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Initialize cart rendering when cart.html loads
document.addEventListener('DOMContentLoaded', renderCart);
