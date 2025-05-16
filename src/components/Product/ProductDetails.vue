<template>
  <div class="outer-div">
    <!-- Product details container -->
    <div class="product-detail-container">
      <!-- Product gallery -->
      <div class="product-gallery">
        <div class="main-image">
          <img
            :src="currentProduct.image"
            alt="Diamond Solitaire Ring - Main View"
          />
        </div>
        <div class="thumbnail-container">
          <div class="thumbnail active">
            <img
              src="/api/placeholder/400/320"
              alt="Diamond Solitaire Ring - View 1"
            />
          </div>
          <div class="thumbnail">
            <img
              src="/api/placeholder/400/320"
              alt="Diamond Solitaire Ring - View 2"
            />
          </div>
          <div class="thumbnail">
            <img
              src="/api/placeholder/400/320"
              alt="Diamond Solitaire Ring - View 3"
            />
          </div>
          <div class="thumbnail">
            <img
              src="/api/placeholder/400/320"
              alt="Diamond Solitaire Ring - View 4"
            />
          </div>
        </div>
      </div>

      <!-- Product information -->
      <div class="product-info">
        <h1 class="product-title">{{ currentProduct.name }}</h1>
        <p class="product-subtitle">
          Timeless Elegance for Life's Special Moments
        </p>
        <div class="product-price">${{ currentProduct.price }}</div>

        <!-- <div class="product-rating">
          <div class="stars">★★★★★</div>
          <div class="review-count">(24 Reviews)</div>
        </div> -->

        <p class="product-description">
          {{ currentProduct.shortDesc }}
        </p>

        <div class="product-specs">
          <h3 class="spec-title">Specifications</h3>
          <div class="spec-list">
            <div class="spec-item">
              <div class="spec-label">Material:</div>
              <div class="spec-value">
                {{ currentProduct.shortSpecifications.Material }}
              </div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Diamond:</div>
              <div class="spec-value">
                {{ currentProduct.shortSpecifications.Diamond }}
              </div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Cut:</div>
              <div class="spec-value">
                {{ currentProduct.shortSpecifications.Cut }}
              </div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Clarity:</div>
              <div class="spec-value">
                {{ currentProduct.shortSpecifications.Clarity }}
              </div>
            </div>
            <!-- <div class="spec-item">
              <div class="spec-label">Color:</div>
              <div class="spec-value">F (Colorless)</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Setting:</div>
              <div class="spec-value">4-Prong</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Band Width:</div>
              <div class="spec-value">2mm</div>
            </div> -->
            <div class="spec-item">
              <div class="spec-label">Certificate:</div>
              <div class="spec-value">GIA Certified</div>
            </div>
          </div>
        </div>

        <div class="quantity-selector">
          <div class="quantity-label">Quantity:</div>
          <div class="quantity-controls">
            <button class="quantity-btn">-</button>
            <input type="text" class="quantity-input" value="1" readonly />
            <button class="quantity-btn">+</button>
          </div>
        </div>

        <div class="product-actions">
          <button class="btn btn-cart">Add to Cart</button>
          <button class="btn btn-wishlist">♡ Wishlist</button>
        </div>
      </div>
    </div>

    <!-- Product tabs -->
    <div class="product-tabs">
      <div class="tabs-header">
        <button class="tab-btn active" data-tab="description">
          Description
        </button>
        <button class="tab-btn" data-tab="specs">Specifications</button>
        <button class="tab-btn" data-tab="shipping">Shipping & Returns</button>
      </div>

      <!-- <div class="all-tab-contents"> -->
      <!-- Description bar -->
      <div id="description" class="tab-content active">
        <h3>Product Description</h3>
        <p>
          {{ currentProduct.longDesc.first }}
        </p>
        <p>
          {{ currentProduct.longDesc.second }}
        </p>
        <p>
          {{ currentProduct.longDesc.third }}
        </p>
        <p>
          {{ currentProduct.longDesc.fourth }}
        </p>
      </div>

      <!-- Specification bar -->
      <div id="specs" class="tab-content">
        <h3>Technical Specifications</h3>
        <ul>
          <li>
            <strong>Metal:</strong>
            {{ currentProduct.techSpecification.metal }}
          </li>
          <li>
            <strong>Diamond Weight:</strong
            >{{ currentProduct.techSpecification.diamondWeight }}
          </li>
          <li>
            <strong>Diamond Shape:</strong>
            {{ currentProduct.techSpecification.diamondShape }}
          </li>
          <li>
            <strong>Diamond Color:</strong>
            {{ currentProduct.techSpecification.diamondColor }}
          </li>
          <li>
            <strong>Diamond Clarity:</strong
            >{{ currentProduct.techSpecification.diamondClarity }}
          </li>
          <li>
            <strong>Diamond Cut Grade:</strong>
            {{ currentProduct.techSpecification.diamondCutGrade }}
          </li>
          <li>
            <strong>Diamond Polish:</strong>
            {{ currentProduct.techSpecification.diamondPolish }}
          </li>
          <li>
            <strong>Diamond Symmetry:</strong>
            {{ currentProduct.techSpecification.diamondSymmetry }}
          </li>
          <li>
            <strong>Setting Style:</strong>
            {{ currentProduct.techSpecification.settingStyle }}
          </li>
          <li>
            <strong>Band Width:</strong>
            {{ currentProduct.techSpecification.bandWidth }}
          </li>
          <li>
            <strong>Band Thickness:</strong
            >{{ currentProduct.techSpecification.bandThickness }}
          </li>
          <li>
            <strong>Ring Size Range:</strong>
            {{ currentProduct.techSpecification.ringSizeRange }}
          </li>
          <li>
            <strong>Certification:</strong>
            {{ currentProduct.techSpecification.certification }}
          </li>
          <li>
            <strong>Engraving:</strong
            >{{ currentProduct.techSpecification.engravingDescription }}
          </li>
          <li>
            <strong>Finish:</strong>
            {{ currentProduct.techSpecification.finish }}
          </li>
        </ul>
      </div>

      <!-- This is the shipping tab All if fine Don't touch it -->
      <div id="shipping" class="tab-content">
        <h3>Shipping Information</h3>
        <p><strong>Processing Time:</strong> 1-3 business days</p>
        <p>
          <strong>Standard Shipping:</strong> 3-5 business days (Free on orders
          over $500)
        </p>
        <p><strong>Express Shipping:</strong> 1-2 business days ($25)</p>
        <p>
          <strong>International Shipping:</strong> 7-14 business days (Varies by
          location)
        </p>

        <h3>Returns & Exchanges</h3>
        <p>
          We want you to be completely satisfied with your purchase. If for any
          reason you're not entirely happy, we offer:
        </p>
        <ul>
          <li>30-day return policy for full refund or exchange</li>
          <li>Free return shipping for domestic orders</li>
          <li>Lifetime warranty on all diamond jewelry</li>
          <li>Free ring resizing within 60 days of purchase</li>
        </ul>

        <p>
          <strong>Please Note:</strong> Custom or engraved items cannot be
          returned unless there is a manufacturing defect.
        </p>
      </div>
      <!-- </div> -->
    </div>

    <!-- Related products -->
    <div class="related-products">
      <h2 class="section-title">You May Also Like</h2>
      <div class="products-grid">
        <div class="product-card">
          <div class="card-image">
            <img src="/api/placeholder/400/320" alt="Diamond Halo Ring" />
          </div>
          <div class="card-info">
            <h3 class="card-title">Diamond Halo Ring</h3>
            <div class="card-price">$1,799.99</div>
            <div class="card-material">18K White Gold</div>
            <button class="card-btn">View Details</button>
          </div>
        </div>

        <div class="product-card">
          <div class="card-image">
            <img
              src="/api/placeholder/400/320"
              alt="Three-Stone Diamond Ring"
            />
          </div>
          <div class="card-info">
            <h3 class="card-title">Three-Stone Diamond Ring</h3>
            <div class="card-price">$2,499.99</div>
            <div class="card-material">Platinum</div>
            <button class="card-btn">View Details</button>
          </div>
        </div>

        <div class="product-card">
          <div class="card-image">
            <img src="/api/placeholder/400/320" alt="Diamond Eternity Band" />
          </div>
          <div class="card-info">
            <h3 class="card-title">Diamond Eternity Band</h3>
            <div class="card-price">$1,199.99</div>
            <div class="card-material">18K Rose Gold</div>
            <button class="card-btn">View Details</button>
          </div>
        </div>

        <div class="product-card">
          <div class="card-image">
            <img
              src="/api/placeholder/400/320"
              alt="Sapphire and Diamond Ring"
            />
          </div>
          <div class="card-info">
            <h3 class="card-title">Sapphire and Diamond Ring</h3>
            <div class="card-price">$1,599.99</div>
            <div class="card-material">18K White Gold</div>
            <button class="card-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["allProducts"],
  created() {
    const productId = this.$route.params.productId;
    const selectedProduct = this.allProducts.find((abc) => abc.id == productId);
    console.log(selectedProduct);
    console.log("Product:", productId);
    console.log("product injected ->" + this.allProducts);
    this.currentProduct = selectedProduct;
  },
  data() {
    return {
      currentProduct: "",
      otherProduct: "",
    };
  },
  mounted() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked button and corresponding content
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  },
};
//  Don't touch this script it is independent from vue
// Tab switching functionality
/*
document.addEventListener("DOMContentLoaded", function () {

  });

  // Thumbnail image switching
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".main-image img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Update active thumbnail
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnail.classList.add("active");

      // Update main image (in a real scenario, you would change the src)
      mainImage.src = thumbnail.querySelector("img").src;
    });
  });

  // Quantity selector functionality
  const decreaseBtn = document.querySelector(".quantity-btn:first-child");
  const increaseBtn = document.querySelector(".quantity-btn:last-child");
  const quantityInput = document.querySelector(".quantity-input");

  decreaseBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  increaseBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
  });
});
*/

// const changeButton = document.querySelector(".tabs-header");
// changeButton.addEventListener("click", () => {
//   console.log("you clicked me");
// });
</script>

<style scoped>
.outer-div {
  margin-top: 100px;
}

/* Product details container */
.product-detail-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Product images gallery */
.product-gallery {
  padding: 30px;
}

.main-image {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.thumbnail {
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s ease;
}

.thumbnail.active {
  border: 2px solid #f8c93e;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product information */
.product-info {
  padding: 30px;
}

.product-title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
}

.product-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.product-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.stars {
  color: #f8c93e;
  font-size: 1.2rem;
  margin-right: 10px;
}

.review-count {
  color: #666;
  font-size: 0.9rem;
}

.product-description {
  margin-bottom: 25px;
  color: #444;
  line-height: 1.8;
}

.product-specs {
  margin-bottom: 30px;
}

.spec-title {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.spec-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.spec-item {
  display: flex;
  align-items: baseline;
}

.spec-label {
  font-weight: bold;
  color: #666;
  width: 100px;
  flex-shrink: 0;
}

.spec-value {
  color: #333;
}

.quantity-selector {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.quantity-label {
  margin-right: 15px;
  font-weight: bold;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-btn {
  background: #f5f5f5;
  border: none;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.quantity-btn:hover {
  background: #e5e5e5;
}

.quantity-input {
  width: 50px;
  height: 35px;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;
  font-size: 1rem;
}

.product-actions {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-cart {
  background-color: #f8c93e;
  color: #333;
  flex: 2;
}

.btn-cart:hover {
  background-color: #e8b82e;
}

.btn-wishlist {
  background-color: #f5f5f5;
  color: #333;
  flex: 1;
}

.btn-wishlist:hover {
  background-color: #e5e5e5;
}

/* Product tabs */
.product-tabs {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.tab-btn {
  padding: 15px 30px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  color: #333;
  border-bottom: 3px solid #f8c93e;
}

.tab-content {
  display: none;
  padding: 20px 0;
}

.tab-content.active {
  display: block;
}

.tab-content h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.tab-content p,
.tab-content li {
  margin-bottom: 10px;
  line-height: 1.8;
}

.tab-content ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

/* Related products */
.related-products {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #f8c93e;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .card-image img {
  transform: scale(1.05);
}

.card-info {
  padding: 15px;
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.card-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-material {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 10px;
}

.card-btn {
  width: 100%;
  padding: 8px 0;
  background: #f8c93e;
  color: #333;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card-btn:hover {
  background: #e8b82e;
}

/* Responsive design */
@media (max-width: 900px) {
  .product-detail-container {
    grid-template-columns: 1fr;
  }

  .spec-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 1rem;
  }

  .company-name {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .product-gallery {
    padding: 15px;
  }

  .product-info {
    padding: 15px;
  }

  .main-image {
    height: 300px;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .product-price {
    font-size: 1.5rem;
  }

  .tabs-header {
    overflow-x: auto;
    white-space: nowrap;
  }

  .tab-btn {
    padding: 15px 20px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
