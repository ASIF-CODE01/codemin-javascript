<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clothing Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Fashion Hub</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Cart (<span id="cart-count">0</span>)</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="products">
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="T-Shirt">
            <h2>Stylish T-Shirt</h2>
            <p>Price: ₹499</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    </section>
    
    <script src="script.js"></script>
</body>
</html>
