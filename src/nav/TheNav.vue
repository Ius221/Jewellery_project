<template>
  <nav class="navbar">
    <div class="company-name">GUPTA JEWELERY</div>
    <div class="nav-links">
      <a href="#login">
        <span class="login-icon">👤</span>
        Login
      </a>
      <a href="#cart" style="position: relative">
        <span class="cart-icon">🛒</span>
        Cart
        <span class="cart-count">3</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.company-name {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
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
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
</style>
