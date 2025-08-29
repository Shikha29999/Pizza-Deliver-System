// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart when 'Add to Cart' button is clicked
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const pizzaId = button.getAttribute('data-pizza-id');
        const pizzaName = button.previousElementSibling.previousElementSibling.textContent;
        const pizzaPrice = parseFloat(button.nextElementSibling.textContent.replace('Price: Rs.', ''));

        addToCart(pizzaId, pizzaName, pizzaPrice);
    });
});

// Function to add item to the cart
function addToCart(pizzaId, pizzaName, pizzaPrice) {
    const existingItem = cart.find(item => item.id === pizzaId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: pizzaId, name: pizzaName, price: pizzaPrice, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${pizzaName} added to cart!`);
    renderCart();
}

// Render cart items in the cart section
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = ''; // Clear current items

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} - Rs.${item.price} x ${item.quantity}</span>
            <div class="quantity-controls">
                <button onclick="updateQuantity('${item.id}', 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 'increase')">+</button>
                <button onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `;
        cartItemsElement.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: Rs.${totalPrice.toFixed(2)}`;
}

// Update item quantity
function updateQuantity(id, action) {
    const item = cart.find(item => item.id === id);

    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    } else {
        removeFromCart(id);
        return;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Load cart items on page load
document.addEventListener('DOMContentLoaded', renderCart);
