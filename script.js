
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true
        });

        // Store functionality
        class Store {
            constructor() {
                this.products = [];
                this.cart = [];
            }

            addProduct(product) {
                this.products.push(product);
                this.renderProducts();
            }

            renderProducts() {
                const container = document.querySelector('.store-container');
                container.innerHTML = this.products.map(product => `
                    <div class="product-card" data-aos="fade-up">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-content">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p>Price: $${product.price}</p>
                            <button onclick="store.addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                `).join('');
            }

            addToCart(productId) {
                const product = this.products.find(p => p.id === productId);
                if (product) {
                    this.cart.push(product);
                    this.updateCart();
                }
            }

            updateCart() {
                // Update cart UI
                console.log('Cart updated:', this.cart);
            }
        }

        const store = new Store();

        // Example product
        store.addProduct({
            id: 1,
            name: 'Traditional Fabric Bag',
            description: 'Handmade bag using traditional African fabrics',
            price: 29.99,
            image: '/api/placeholder/300/300'
        });

        // Form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Contact form submitted');
        });

        document.getElementById('donateForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle donation
            console.log('Donation submitted');
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });
