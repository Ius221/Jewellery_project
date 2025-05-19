<template>
  <div>
    <main>
      <!-- Loading spinner -->
      <div class="loading-container" v-if="isLoading">
        <div class="spinner"></div>
        <div class="loading-text">Please wait a while...</div>
      </div>
      <div v-if="goHome" class="lastOption">
        <h3 style="font-size: 24px">Login Successfully</h3>
        <button style="width: 65%" class="form-submit" @click="goToHome">
          Go to Home
        </button>
      </div>
      <div class="login-container" v-if="!isLoading && !goHome">
        <div class="login-image"></div>

        <div class="login-form-container">
          <div class="login-form-header">
            <h1 class="page-title">Welcome Back</h1>
            <p>Please enter your credentials to access your account</p>
          </div>

          <form id="login-form" @submit.prevent="formSubmit">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                v-model="email"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                v-model="password"
              />
            </div>

            <div class="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" class="form-submit">Log In</button>
            <div class="create-account">
              <p>
                Don't have an account?
                <router-link to="/registration"> Create Account </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { login } from "@/AuthService";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      goHome: false,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    async formSubmit() {
      this.isLoading = true;

      try {
        await login(this.email, this.password);
        this.isLoading = false;
        this.goHome = true;
      } catch (err) {
        this.isLoading = false;
        alert("Login Failed");
      }
      console.log("Email:", this.email, typeof this.email);

      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
.admin-login {
  background-color: #804e2d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f3ed;
}
.lastOption {
  margin-top: 250px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container {
  margin-top: 65px;
  width: 100%;
  max-width: 900px;
  display: flex;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  background-color: white;
}

.login-image {
  flex: 1;
  background-image: url("../../assets/10060.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 30px;
}

.image-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 4px;
  color: white;
  width: 100%;
}

.image-overlay h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
}

.login-form-container {
  flex: 1;
  padding: 50px;
}

.login-form-header {
  margin-bottom: 40px;
  text-align: center;
}

.login-form-header h1 {
  font-size: 32px;
  font-family: "Cormorant Garamond", serif;
  color: #333333;
  font-weight: 600;
  margin-bottom: 10px;
}

.login-form-header p {
  color: #777;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333333;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #c9a57c;
}

.forgot-password {
  text-align: right;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 25px;
}

.forgot-password a {
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-password a:hover {
  color: #c9a57c;
}

.form-submit {
  background-color: #c9a57c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.form-submit:hover {
  background-color: #b89266;
}

.alternate-auth {
  margin-top: 25px;
  text-align: center;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-login button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.social-login button:hover {
  background-color: #f5f5f5;
}

.social-login button i {
  margin-right: 10px;
}

.create-account {
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}

.create-account a {
  color: #c9a57c;
  text-decoration: none;
  font-weight: 500;
}

.footer-container {
  background-color: #f9f3ed;
  padding: 60px 20px 20px;
  width: 100%;
  box-sizing: border-box;
}

.loading-container {
  margin-top: 250px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 6px solid #3498db;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 18px;
  color: #333;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Footer styles omitted for brevity - same as in the previous artifact */

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login-image {
    display: none;
  }

  .login-form-container {
    padding: 30px 20px;
  }

  .nav-container {
    flex-direction: column;
    padding: 10px 20px;
  }

  .nav-links {
    margin: 15px 0;
    justify-content: center;
  }

  .nav-links li {
    margin: 0 10px;
  }

  .nav-icons {
    justify-content: center;
  }
}
</style>
