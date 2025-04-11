document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('show');
        });
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Product Filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productGrid = document.querySelector('.product-grid');
    
    // Sample product data (in a real app, this would come from a database)
    const products = [
        {
            id: 1,
            name: 'Penetration Grade Bitumen 60/70',
            category: 'bitumen',
            description: 'Standard paving grade bitumen suitable for road construction in tropical climates.',
            price: '₦250,000 per ton',
            image: 'images/products/bitumen-60-70.jpg'
        },
        {
            id: 2,
            name: 'Polymer Modified Bitumen',
            category: 'bitumen',
            description: 'Enhanced bitumen with improved elasticity and resistance to deformation.',
            price: '₦350,000 per ton',
            image: 'images/products/polymer-bitumen.jpg'
        },
        {
            id: 3,
            name: 'Cationic Bitumen Emulsion',
            category: 'emulsion',
            description: 'Fast-setting emulsion for surface dressing and tack coats.',
            price: '₦180,000 per drum',
            image: 'images/products/cationic-emulsion.jpg'
        },
        {
            id: 4,
            name: 'Anionic Bitumen Emulsion',
            category: 'emulsion',
            description: 'Slow-setting emulsion for mixing with aggregates in cold mixes.',
            price: '₦170,000 per drum',
            image: 'images/products/anionic-emulsion.jpg'
        },
        {
            id: 5,
            name: 'Bitumen Anti-Stripping Agent',
            category: 'additives',
            description: 'Improves adhesion between bitumen and aggregates in wet conditions.',
            price: '₦85,000 per liter',
            image: 'images/products/anti-stripping.jpg'
        },
        {
            id: 6,
            name: 'Oxidized Bitumen 85/25',
            category: 'bitumen',
            description: 'Industrial grade bitumen for waterproofing and roofing applications.',
            price: '₦280,000 per ton',
            image: 'images/products/oxidized-bitumen.jpg'
        },
        {
            id: 7,
            name: 'Bitumen Emulsifier',
            category: 'additives',
            description: 'Chemical for producing bitumen emulsions in various grades.',
            price: '₦120,000 per liter',
            image: 'images/products/emulsifier.jpg'
        },
        {
            id: 8,
            name: 'Cutback Bitumen MC-30',
            category: 'bitumen',
            description: 'Medium-curing cutback bitumen for prime coats and cold weather applications.',
            price: '₦220,000 per ton',
            image: 'images/products/cutback-bitumen.jpg'
        }
    ];
    
    // Function to display products
    function displayProducts(category = 'all') {
        productGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
    
    // Initialize with all products
    displayProducts();
    
    // Add click event to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
        }
    ,}