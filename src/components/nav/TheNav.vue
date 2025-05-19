<template>
  <!-- 27391C give this color to the background of the image -->
  <nav class="navbar">
    <router-link to="/products" class="rout-link">
      <div class="company-name">GUPTA JEWELERY</div>
    </router-link>
    <div class="nav-links">
      <div class="link">
        <router-link
          :to="routerFetch === '/login' ? '/registration' : '/login'"
        >
          <span class="login-icon">👤</span>
          {{ routerFetch === "/login" ? "Register" : "login" }}
        </router-link>
      </div>

      <a href="#cart" class="link" style="">
        <span class="cart-icon">🛒</span>
        Cart
        <span class="cart-count">3</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      login: true,
    };
  },
  computed: {
    routerFetch() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.link {
  position: relative;
  color: #3c3125;
  font-family: "Cormorant Garamond", serif;
}

.rout-link {
  text-decoration: none;
  color: #3c3125;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d2c4b5;
  position: fixed;
  z-index: 100;
  width: 100%;
  /* color: white; */
  padding: 1rem 2rem;
  /* font-size: 88px; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.company-name {
  color: #3c3125;
  font-size: 2rem;
  font-family: "Cormorant Garamond", serif;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 200px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  margin-right: 150px;
}

.nav-links a {
  color: #3c3125;
  font-weight: 650;
  text-decoration: none;
  font-size: 1.3rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-links a:hover {
  color: #000;
}

.cart-icon,
.login-icon {
  margin-right: 5px;
}

.cart-count {
  background-color: #f8c93e;
  color: #333;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
}

@media (max-width: 600px) {
  .navbar {
    padding: 1rem;
  }

  .company-name {
    font-size: 1rem;
    margin-left: 5px;
  }

  .nav-links {
    gap: 1rem;
    margin-right: 25px;
    /* padding-right: 5px; */
  }
}
</style>
