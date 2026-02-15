import React from 'react';

const HomePage = () => {
    return (
        <div>
            <section className="hero">
                <h1>Welcome to Artkinza</h1>
                <p>Your one-stop shop for unique art pieces</p>
                <a href="/shop" className="cta-button">Shop Now</a>
            </section>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {/* Map through featured products and render them here */}
                </div>
            </section>
            <section className="call-to-action">
                <h2>Join Our Community</h2>
                <a href="/signup" className="cta-button">Sign Up Today</a>
            </section>
        </div>
    );
};

export default HomePage;