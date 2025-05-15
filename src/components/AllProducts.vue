<template>
  <div class="outer-div">
    <div class="product-container">
      <template v-for="(product, ind) in dummyProduct" :key="ind">
        <div class="product-card">
          <div class="product-image">
            <img :src="product.image" alt="Diamond Engagement Ring" />
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-description">
              {{ product.desc }}
            </p>
            <div class="product-details">
              <span class="product-price">${{ product.price }}</span>
              <span class="product-material">{{ product.material }}</span>
            </div>
            <div class="product-buttons">
              <button class="btn btn-details">Show Details</button>
              <button class="btn btn-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dummyProduct: [
        {
          id: 0,
          image:
            "https://www.withclarity.com/cdn/shop/articles/SOLITAIRE_ENGAGEMENT_RINGS.jpg?v=1697178742",
          name: "Diamond Solitaire Ring",
          desc: "Elegant solitaire ring featuring a brilliant-cut diamond set in a timeless four-prong setting. Perfect for engagements or special occasions.",
          price: "1,299.99",
          material: "18K White Gold",
        },
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/21235148/pexels-photo-21235148/free-photo-of-silver-pendant-with-an-emerald.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          name: "Freshwater Pearl Necklace",
          desc: "Stunning strand of lustrous freshwater pearls, hand-selected for their exceptional quality and matched for uniform color and size.",
          price: "499.99",
          material: "Natural Pearls",
        },
        {
          id: 2,
          image:
            "https://i.etsystatic.com/14533306/r/il/116d90/4411460223/il_1080xN.4411460223_8u0j.jpg",
          name: "Twisted Gold Bracelet",
          desc: "Elegantly twisted gold bracelet with a secure lobster clasp. Versatile design perfect for daily wear or special occasions.",
          price: "799.99",
          material: "14K Gold",
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/21235147/pexels-photo-21235147/free-photo-of-close-up-of-golden-earrings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          name: "Sapphire Drop Earrings",
          desc: "Exquisite drop earrings featuring oval blue sapphires surrounded by a halo of brilliant diamonds, creating a captivating sparkle.",
          price: "1,499.99",
          material: "Platinum",
        },
      ],
    };
  },
  created() {
    console.log(this.mainObject);
  },
};
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
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
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
}

.product-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
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
