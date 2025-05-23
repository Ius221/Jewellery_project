<template>
  <div class="outer-div">
    <div class="product-container">
      <template v-for="(product, ind) in allProducts" :key="ind">
        <div class="product-card">
          <div class="product-image">
            <img :src="product.image" alt="Diamond Engagement Ring" />
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-description">
              {{ product.outerDesc }}
            </p>
            <div class="product-details">
              <span class="product-price">$ {{ product.price }}</span>
              <span class="product-material">{{ product.material }}</span>
            </div>
            <div class="product-buttons">
              <router-link :to="'/rings/' + product.id">
                <button class="btn btn-details">Show Details</button>
              </router-link>
              <button class="btn btn-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <!-- <product-details /> -->
  </div>
</template>

<script>
export default {
  inject: ["allProducts"],
};
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1300px;
  margin: 100px auto;
  /* margin-bottom: 100px; */
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 20px;
}

.product-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  height: 100px;
  line-height: 1.4;
}

.product-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.product-price {
  /* font-family: "Cormorant Garamond", serif;  */
  margin-left: 2px;
  font-size: 1.2rem;
  font-weight: normal;
  color: #333;
}

.product-material {
  font-size: 0.9rem;
  color: #666;
  background-color: #f5f5f5;
  padding: 3px 8px;
  border-radius: 4px;
}

.product-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;
}

.btn-details {
  background-color: #f5f5f5;
  color: #333;
}

.btn-details:hover {
  background-color: #e5e5e5;
}

.btn-cart {
  background-color: #f8c93e;
  color: #333;
}

.btn-cart:hover {
  background-color: #e8b82e;
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

  .product-container {
    grid-template-columns: 1fr;
  }
}
</style>
