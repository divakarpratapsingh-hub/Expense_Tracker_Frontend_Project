const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        description: "Comfortable wireless headphones with clear sound and deep bass.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        category: "Electronics",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        description: "A stylish smartwatch for fitness tracking and daily use.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        category: "Accessories",
        rating: 4.2,
        inStock: true
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1799,
        originalPrice: 2499,
        discount: 28,
        description: "Lightweight running shoes for everyday workouts.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        category: "Footwear",
        rating: 4.4,
        inStock: true
    },
    {
        id: 4,
        name: "Travel Backpack",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        description: "A spacious backpack for college and travel.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        category: "Bags",
        rating: 4.3,
        inStock: true
    },
    {
        id: 5,
        name: "Digital Camera",
        price: 15999,
        originalPrice: 18999,
        discount: 16,
        description: "Capture memorable moments with a digital camera.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        category: "Electronics",
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: "Sunglasses",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        description: "Modern sunglasses with a stylish frame.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        category: "Fashion",
        rating: 4.1,
        inStock: true
    },
    {
        id: 7,
        name: "Coffee Maker",
        price: 3499,
        originalPrice: 4499,
        discount: 22,
        description: "Prepare fresh coffee at home easily.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        category: "Home Appliances",
        rating: 4.4,
        inStock: false
    }
];

let cart = [];

// Display Products
function displayProducts() {

    let output = "";

    products.forEach(function(product) {

        output += `
        <div class="col-md-4 mb-3">
            <div class="card">

                <img src="${product.image}" class="card-img-top">

                <div class="card-body">

                    <h5>${product.name}</h5>

                    <p>${product.description}</p>

                    <p>Rating: ⭐ ${product.rating}</p>

                    <h6>₹${product.price}</h6>

                    <del>₹${product.originalPrice}</del>

                    <p class="text-success">${product.discount}% OFF</p>

                    <button class="btn btn-success"
                        onclick="addToCart(${product.id})"
                        ${!product.inStock ? "disabled" : ""}>

                        ${product.inStock ? "Add to Cart" : "Out of Stock"}

                    </button>

                </div>
            </div>
        </div>
        `;
    });

    document.getElementById("productList").innerHTML = output;
}


// Add Product to Cart
function addToCart(id) {

    let product = products.find(function(p) {
        return p.id === id;
    });

    if (!product.inStock) {
        alert("Product is out of stock!");
        return;
    }

    let item = cart.find(function(p) {
        return p.id === id;
    });

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    displayCart();
}


// Display Cart
function displayCart() {

    let output = "";
    let total = 0;

    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML =
            "Your cart is empty.";
    } else {

        cart.forEach(function(item) {

            let subtotal = item.price * item.quantity;

            total = total + subtotal;

            output += `
                <div class="cart-item">

                    <h6>${item.name}</h6>

                    <p>Price: ₹${item.price}</p>

                    <p>Quantity: ${item.quantity}</p>

                    <p>Subtotal: ₹${subtotal}</p>

                </div>
            `;
        });

        document.getElementById("cartItems").innerHTML = output;
    }

    document.getElementById("total").innerText = total;
}


// Call Function
displayProducts();