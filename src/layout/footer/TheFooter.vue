<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <router-link to="/home">
          <div class="footer-logo">GUPTA JEWELRY</div>
        </router-link>
        <div class="footer-tagline">Timeless elegance for every occasion</div>
        <p>
          Crafting exquisite jewelry pieces since 1997. Each creation tells a
          story of artistry, passion, and meticulous attention to detail.
        </p>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" aria-label="Instagram"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" aria-label="Pinterest"
            ><i class="fab fa-pinterest-p"></i
          ></a>
          <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Necklaces</a></li>
          <li><a href="#">Rings</a></li>
          <li><a href="#">Earrings</a></li>
          <li><a href="#">Bracelets</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Customer Care</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Product Care</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Track Your Order</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>About Us</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Craftsmanship</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Ethical Sourcing</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Stay Connected</h4>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form class="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email for newsletter"
          />
          <button type="submit" aria-label="Subscribe">Subscribe</button>
        </form>
        <div class="contact-info">
          <p><strong>Customer Service:</strong> 1-800-JEWELRY</p>
          <p><strong>Email:</strong> support@guptajewelry.com</p>
          <p><strong>Hours:</strong> Mon-Fri: 9AM-6PM IST</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="payment-methods">
        <i class="fab fa-cc-visa" aria-label="Visa"></i>
        <i class="fab fa-cc-mastercard" aria-label="Mastercard"></i>
        <i class="fab fa-cc-amex" aria-label="American Express"></i>
        <i class="fab fa-cc-paypal" aria-label="PayPal"></i>
        <i class="fab fa-cc-apple-pay" aria-label="Apple Pay"></i>
      </div>
      <p>&copy; 2025 GUPTA JEWELRY. All Rights Reserved.</p>
      <!-- <p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |
        <a href="#">Accessibility</a> |
        <a href="#">Do Not Sell My Information</a>
      </p> -->
    </div>
  </footer>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  color: #4a4a4a;
  line-height: 1.6;
}

.footer-container {
  background-color: #e5e5e5;
  /* background-color: #e8c9c9; */
  padding: 60px 20px 20px;
  width: 100%;
  box-sizing: border-box;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-logo {
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;
  font-size: 26px;
  color: #333333;
  font-weight: 500;
  letter-spacing: 1px;
}

.footer-tagline {
  font-style: italic;
  margin-bottom: 20px;
  color: #4a4a4a;
  font-size: 14px;
}

.footer-section h4 {
  color: #333333;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h4::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 1px;
  background-color: #c9a57c;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #c9a57c;
}

.contact-info p {
  margin: 5px 0;
  font-size: 14px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  color: #333333;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.social-icons a:hover {
  background-color: #c9a57c;
  color: white;
  border-color: #c9a57c;
}

.newsletter-form {
  display: flex;
  margin-top: 15px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-right: none;
  font-family: inherit;
  outline: none;
}

.newsletter-form button {
  background-color: #c9a57c;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #b89266;
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
}

.payment-methods {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.payment-methods i {
  font-size: 24px;
  color: #333333;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
  }

  .footer-section {
    width: 100%;
  }
}
</style>
