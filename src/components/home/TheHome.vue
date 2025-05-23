<template>
  <main>
    <div class="outer-container">
      <div class="insert-image"></div>
    </div>

    <!-- Featured Collection -->
    <section class="featured">
      <div class="container">
        <h2 class="section-title">New Arrivals</h2>
        <div class="featured-grid">
          <div class="featured-item">
            <img
              src="https://img.freepik.com/free-photo/fashionable-modern-rococo-style_23-2151916460.jpg?uid=R188010037&ga=GA1.1.132238538.1746964161&semt=ais_hybrid&w=740"
              alt="Diamond Pendant"
            />
            <span class="badge">New</span>
            <div class="featured-info">
              <h3 class="featured-title">Celestial Diamond Pendant</h3>
              <p class="featured-price">$1,299.00</p>
              <a href="#" class="btn">Add to Cart</a>
            </div>
          </div>
          <div class="featured-item">
            <img src="../../assets/na_2.jpg" alt="Gold Bracelet" />
            <span class="badge">New</span>
            <div class="featured-info">
              <h3 class="featured-title">Twisted Gold Bracelet</h3>
              <p class="featured-price">$899.00</p>
              <a href="#" class="btn">Add to Cart</a>
            </div>
          </div>
          <div class="featured-item">
            <img src="../../assets/na_3.jpg" alt="Sapphire Earrings" />
            <span class="badge">New</span>
            <div class="featured-info">
              <h3 class="featured-title">Sapphire Halo Earrings</h3>
              <p class="featured-price">$1,499.00</p>
              <a href="#" class="btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bestsellers Section -->
    <section class="bestsellers">
      <div class="container">
        <h2 class="section-title">Bestsellers</h2>
        <div class="bestsellers-wrapper">
          <div class="bestseller-card">
            <div class="bestseller-img">
              <img
                src="https://img.freepik.com/free-photo/front-view-couple-holding-hands_23-2149480042.jpg?uid=R188010037&ga=GA1.1.132238538.1746964161&semt=ais_hybrid&w=740"
                alt="Diamond Ring"
              />
            </div>
            <div class="bestseller-content">
              <h3 class="bestseller-title">Eternal Promise Diamond Ring</h3>
              <div class="bestseller-rating">★★★★★</div>
              <p class="bestseller-price">$2,499.00</p>
              <a href="#" class="btn">View Details</a>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-img">
              <img src="../../assets/bs_2.jpg" alt="Pearl Necklace" />
            </div>
            <div class="bestseller-content">
              <h3 class="bestseller-title">Ocean Treasures Pearl Necklace</h3>
              <div class="bestseller-rating">★★★★★</div>
              <p class="bestseller-price">$1,899.00</p>
              <a href="#" class="btn">View Details</a>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-img">
              <img src="../../assets/bs_3.jpg" alt="Emerald Bracelet" />
            </div>
            <div class="bestseller-content">
              <h3 class="bestseller-title">
                Enchanted Garden Emerald Bracelet
              </h3>
              <div class="bestseller-rating">★★★★★</div>
              <p class="bestseller-price">$2,199.00</p>
              <a href="#" class="btn">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">Shop By Category</h2>
        <div class="category-grid">
          <div class="category-box">
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-female-wearing-beautiful-silver-ring_181624-27773.jpg?uid=R188010037&ga=GA1.1.132238538.1746964161&semt=ais_hybrid&w=740"
              alt="Rings"
            />

            <div class="category-content">
              <h3 class="category-title">Rings</h3>
              <router-link class="btn" to="/rings"> Explore </router-link>
            </div>
          </div>
          <div class="category-box">
            <img
              src="https://img.freepik.com/premium-photo/necklace-with-gold-chain-necklace_788415-7692.jpg?uid=R188010037&ga=GA1.1.132238538.1746964161&semt=ais_hybrid&w=740"
              alt="Necklaces"
            />
            <div class="category-content">
              <h3 class="category-title">Necklaces</h3>
              <a href="#" class="btn">Explore</a>
            </div>
          </div>
          <div class="category-box">
            <img
              src="https://img.freepik.com/free-photo/long-earring-with-violet-precious-stones-hang-from-woman-s-ear_8353-5042.jpg?uid=R188010037&ga=GA1.1.132238538.1746964161&semt=ais_hybrid&w=740"
              alt="Earrings"
            />
            <div class="category-content">
              <h3 class="category-title">Earrings</h3>
              <a href="#" class="btn">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jewelry Care Tips -->
    <section class="jewelry-care">
      <div class="container">
        <h2 class="section-title">Jewelry Care Tips</h2>
        <div class="care-tips-container">
          <div class="care-tip">
            <div class="tip-icon">💧</div>
            <h3>Water Exposure</h3>
            <p>
              Remove jewelry before swimming or bathing to prevent damage and
              tarnishing.
            </p>
          </div>
          <div class="care-tip">
            <div class="tip-icon">✨</div>
            <h3>Regular Cleaning</h3>
            <p>
              Clean your jewelry with a soft cloth and mild soap to maintain its
              brilliance.
            </p>
          </div>
          <div class="care-tip">
            <div class="tip-icon">🧴</div>
            <h3>Chemical Contact</h3>
            <p>
              Keep jewelry away from perfumes, lotions, and household chemicals.
            </p>
          </div>
          <div class="care-tip">
            <div class="tip-icon">🧰</div>
            <h3>Proper Storage</h3>
            <p>Store pieces separately to prevent scratching and tangling.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon">💎</div>
            <h3 class="feature-title">Premium Quality</h3>
            <p>
              We source only the finest materials and gemstones for our jewelry
              pieces, ensuring unparalleled quality.
            </p>
          </div>
          <div class="feature-box">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-title">Lifetime Warranty</h3>
            <p>
              All our pieces come with a lifetime warranty, giving you peace of
              mind with your purchase.
            </p>
          </div>
          <div class="feature-box">
            <div class="feature-icon">🎁</div>
            <h3 class="feature-title">Elegant Packaging</h3>
            <p>
              Each jewelry piece comes in luxurious packaging, perfect for
              gifting or treasuring yourself.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="review-container">
          <div class="review-grid">
            <div class="review">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">
                "The engagement ring I purchased exceeded all my expectations.
                The quality and craftsmanship are outstanding, and my fiancée
                absolutely loves it!"
              </p>
              <p class="reviewer">- Simran Gupta</p>
            </div>

            <div class="review">
              <div class="review-stars">★★★★★</div>
              <p class="review-text">
                "I've been a loyal customer for years. Their jewelry pieces are
                unique, elegant, and always receive compliments whenever I wear
                them."
              </p>
              <p class="reviewer">- Zoya Khan</p>
            </div>

            <div class="review">
              <div class="review-stars">★★★★☆</div>
              <p class="review-text">
                "Beautiful craftsmanship and excellent customer service. The
                personalized attention made shopping for an anniversary gift a
                breeze."
              </p>
              <p class="reviewer">- Ritika Sen</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Post -->
    <section class="instagram-gallery">
      <div class="container">
        <div class="gallery-intro">
          <h2 class="section-title">Follow Us On Instagram</h2>
          <p>Share your moments wearing our jewelry with #GuptaJewelry</p>
        </div>
        <div class="gallery-images">
          <div class="gallery-item">
            <img src="../../assets/ig_1.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../assets/ig_2.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../assets/ig_3.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../assets/ig_4.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../assets/ig_5.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../../assets/ig_6.jpg" alt="Instagram Post" />
            <div class="gallery-overlay">
              <div class="gallery-icon">♥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.outer-container {
  margin-top: -30px;
}

.insert-image {
  height: 925px;
  background-repeat: no-repeat;
  background-image: url("../../assets/image.png");
  background-color: #c6cbcb;
}
a {
  text-decoration: none;
  color: inherit;
}
.reviews {
  background-color: #fff;
  padding: 80px 0;
  margin-top: 60px;
}

.review-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Jewelry Care Tips */
.jewelry-care {
  padding: 80px 0;
  background-color: #faf7f5;
}

.care-tips-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.care-tip {
  text-align: center;
  padding: 30px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.care-tip:hover {
  transform: translateY(-10px);
}

.tip-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.care-tip h3 {
  font-family: "Cormorant Garamond", serif;
  margin-bottom: 15px;
  font-size: 24px;
}

.care-tip p {
  color: #666;
  font-size: 14px;
}

.care-tips-more {
  text-align: center;
  margin-top: 20px;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.review {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.review-stars {
  color: #ffc107;
  font-size: 20px;
  margin-bottom: 15px;
}

.review-text {
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.reviewer {
  font-weight: 600;
  font-size: 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  background-color: #d2c4b5;
  color: #3c3c3c;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
}

.btn:hover {
  background-color: #b08b63;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  /* font-family: "Cinzel", serif; */
  font-family: "Sorts Mill Goudy", serif;

  /*  */
  /* font-family: "Cormorant Garamond", serif; */
  text-align: center;
  margin-bottom: 40px;
  font-size: 42px;
  letter-spacing: 1px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #c9a57c;
}

/* Main Content Styles */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(" ") center/cover no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

/* Featured Collection */
.featured {
  padding: 80px 0;
  background-color: #f5f0eb;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.featured-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.featured-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.featured-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.5s ease;
}

.featured-item:hover img {
  transform: scale(1.05);
}

.featured-info {
  padding: 20px;
  background-color: #fff;
}

.featured-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 26px;
  margin-bottom: 10px;
}

.featured-price {
  font-size: 18px;
  color: #3c3c3c;
  margin-bottom: 15px;
  font-weight: 400;
}

.badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #c9a57c;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
}

/* Bestsellers Section */
.bestsellers {
  padding: 80px 0;
  background-color: #faf7f5;
}

.bestsellers-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.bestseller-card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.bestseller-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.bestseller-img {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.bestseller-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bestseller-card:hover .bestseller-img img {
  transform: scale(1.1);
}

.bestseller-content {
  padding: 20px;
  text-align: center;
}

.bestseller-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.bestseller-price {
  color: #3c3c3c;
  /* font-family: "Cormorant Garamond", serif; */

  /* font-weight: bold; */
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.bestseller-rating {
  color: #ffc107;
  margin-bottom: 15px;
}

/* Categories Section */
.categories {
  padding: 80px 0;
  background-color: #f5f0eb;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-box {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
}

.category-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.category-box:hover img {
  transform: scale(1.1);
}

.category-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  transition: all 0.3s ease;
}

.category-box:hover .category-content {
  padding-bottom: 40px;
}

.category-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  margin-bottom: 10px;
}

/* Testimonials Section */
.testimonials {
  padding: 80px 0;
  background-color: #faf7f5;
}

.testimonial-slider {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.testimonial-slide {
  text-align: center;
  padding: 40px 20px;
}

.testimonial-text {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
}

.testimonial-author {
  font-weight: 600;
  color: #c9a57c;
}

/* Special Offers */
.special-offers {
  padding: 80px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(" ") center/cover no-repeat;
  color: #fff;
  text-align: center;
}

.offer-countdown {
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.countdown-box {
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.countdown-number {
  font-size: 30px;
  font-weight: bold;
}

.countdown-label {
  font-size: 14px;
  text-transform: uppercase;
}

/* Why Choose Us */
.why-us {
  padding: 80px 0;
  background-color: #f5f0eb;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-box {
  text-align: center;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #faf7f5;
  transition: all 0.3s ease;
}

.feature-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 40px;
  color: #c9a57c;
  margin-bottom: 20px;
}

.feature-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 26px;
  margin-bottom: 15px;
}

/* Newsletter */
.newsletter {
  padding: 60px 0;
  background-color: #f5f0eb;
  text-align: center;
}

.newsletter-form {
  max-width: 600px;
  margin: 30px auto 0;
  display: flex;
}

.newsletter-input {
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.newsletter-btn {
  padding: 15px 25px;
  background-color: #c9a57c;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background-color: #b08b63;
}
/* Instagram Gallery */
.instagram-gallery {
  padding: 60px 0;
}

.gallery-intro {
  text-align: center;
  margin-bottom: 30px;
}

.gallery-intro h2 {
  margin-bottom: 15px;
}

.gallery-intro p {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
}

.gallery-images {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-icon {
  color: #fff;
  font-size: 24px;
}
/* Responsive Styles */
@media screen and (max-width: 768px) {
  .why-us {
    display: none;
  }
  .testimonials {
    display: none;
  }
  .instagram-gallery {
    display: none;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .offer-countdown {
    gap: 10px;
  }

  .countdown-box {
    width: 60px;
    height: 60px;
  }

  .countdown-number {
    font-size: 24px;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input {
    border-right: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .newsletter-btn {
    border-radius: 4px;
  }
}
@media (max-width: 600px) {
  .insert-image {
    display: none;
  }
}
</style>
