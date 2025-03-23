let cartCount = 0;
let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
    const cartCounter = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".product button");
    const cartList = document.createElement("div");
    cartList.className = "cart-list";
    document.body.appendChild(cartList);

    const checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.className = "checkout-btn";
    checkoutButton.style.display = "none";
    document.body.appendChild(checkoutButton);

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector("p").textContent;
            
            cartItems.push({ name: productName, price: productPrice });
            cartCount++;
            cartCounter.textContent = cartCount;
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        cartList.innerHTML = "<h2>Cart Items</h2>";
        cartItems.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = `${item.name} - ${item.price}`;
            cartList.appendChild(itemElement);
        });
        
        if (cartItems.length > 0) {
            checkoutButton.style.display = "block";
        } else {
            checkoutButton.style.display = "none";
        }
    }
checkoutButton.addEventListener("click", () => {
    let totalAmount = cartItems.reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, "")), 0);
    
    const paymentMethodInput = prompt("Choose Payment Method: PayPal, Stripe, Razorpay");
    if (!paymentMethodInput) {
        alert("No payment method selected!");
        return;
    }
    const paymentMethod = paymentMethodInput.toLowerCase();
    let paymentLink = "";

    if (paymentMethod === "paypal") {
        paymentLink = `https://www.paypal.com/`;
    } else if (paymentMethod === "stripe") {
        paymentLink = `https://www.stripe.com/`;
    } else if (paymentMethod === "razorpay") {
        paymentLink = `https://www.razorpay.com/`;
    } else {
        alert("Invalid Payment Method! Please try again.");
        return;
    }
    
    window.open(paymentLink, "_blank");  // New tab me open hoga
});

});

