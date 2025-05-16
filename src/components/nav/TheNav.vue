<template>
  <!-- 27391C give this color to the background of the image -->
  <nav class="navbar">
    <router-link to="/products" class="rout-link">
      <div class="company-name">GUPTA JEWELERY</div>
    </router-link>
    <div class="nav-links">
      <div>
        <router-link
          :to="routerFetch === '/login' ? '/registration' : '/login'"
          style="color: #000"
        >
          <span class="login-icon">👤</span>
          {{ routerFetch === "/login" ? "Register" : "login" }}
        </router-link>
      </div>

      <a href="#cart" class="link" style="position: relative; color: black">
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
.rout-link {
  text-decoration: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d2c4b5;
  position: fixed;
  z-index: 100;
  width: 100%;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.company-name {
  color: #3c3125;
  font-size: 1.5rem;
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
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-links a:hover {
  color: #f8c93e;
}

.cart-icon,
.login-icon {
  margin-right: 5px;
}

.cart-count {
  background-color: #f8c93e;
  color: #333;
  border-radius: 50%;
  font-size: 0.7rem;
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
