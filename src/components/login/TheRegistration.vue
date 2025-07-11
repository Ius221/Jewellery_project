<template>
  <main>
    <!-- Loading spinner -->
    <div class="loading-container" v-if="isLoading">
      <div class="spinner"></div>
      <!-- <div class="loading-text">Loading...</div> -->
      <div class="loading-text">Please wait a while...</div>
    </div>
    <div v-if="accnCreated" class="lastOption">
      <h3 style="font-size: 24px">Account Created Successfully</h3>
      <button style="width: 55%" class="form-submit" @click="goToLogin">
        Back to login
      </button>
    </div>
    <!-- Other container -->
    <div class="signup-container" v-if="!isLoading && !accnCreated">
      <div class="signup-image"></div>

      <div class="signup-form-container">
        <div class="signup-form-header">
          <h1>Create Your Account</h1>
          <p>
            Join us to enjoy exclusive benefits and personalized shopping
            experiences
          </p>
        </div>

        <form id="signup-form" @submit.prevent="newAccountData">
          <div class="form-row">
            <div class="form-group">
              <label for="first-name">First Name *</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                v-model="firstName"
              />
            </div>

            <div class="form-group">
              <label for="last-name">Last Name *</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                v-model="lastName"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              v-model="email"
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              v-model="phone"
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                v-model="pass1"
              />
              <div class="password-requirements">
                Must be at least 8 characters with numbers
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password">Confirm Password *</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                v-model="pass2"
              />
            </div>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="newsletter" name="newsletter" checked />
            <label for="newsletter">
              Subscribe to our newsletter for exclusive offers, new collections,
              and personalized recommendations
            </label>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms">
              I agree to the <a href="#">Terms of Service</a> and
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" class="form-submit">Create Account</button>

          <div class="login-link">
            <p>
              Already have an account?
              <router-link to="/login"> Log In </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { register } from "@/AuthService";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pass1: "",
      pass2: "",
      isLoading: false,
      accnCreated: false,
    };
  },
  methods: {
    async newAccountData() {
      if (this.pass1 !== this.pass2) {
        alert("password are not same");
        return;
      }

      if (this.containNumber(this.pass1)) {
        this.isLoading = true;
        try {
          const userCredential = await register(this.email, this.pass1);
          const user = userCredential.user;

          // Store additional data in Firebase
          await setDoc(doc(db, "users", user.uid), {
            name: {
              firstName: this.firstName,
              lastName: this.lastName,
            },
            phone: this.phone,
            email: this.email,
          });

          this.isLoading = false;
          this.accnCreated = true;
        } catch (err) {
          this.isLoading = false;
          alert(err.message);
        }
      } else alert("Your password doesn't match out criteria");
    },

    //Check string is contain number or not
    containNumber(str) {
      return /\d/.test(str);
    },

    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f3ed;
}

.lastOption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-container {
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
  border-top: 6px solid #3c3125;
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

.signup-container {
  margin-top: 55px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  background-color: white;
}

.signup-image {
  flex: 1;
  background-image: url("../../assets/2149565117.jpg");
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

.signup-form-container {
  flex: 1.2;
  padding: 50px;
}

.signup-form-header {
  margin-bottom: 30px;
  text-align: center;
}

.signup-form-header h1 {
  font-size: 32px;
  font-family: "Cormorant Garamond", serif;
  color: #333333;
  font-weight: 600;
  margin-bottom: 10px;
}

.signup-form-header p {
  color: #777;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333333;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #c9a57c;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 10px;
}

.checkbox-group input[type="checkbox"] {
  margin-top: 5px;
}

.checkbox-group label {
  font-size: 14px;
  color: #4a4a4a;
}

.checkbox-group a {
  color: #c9a57c;
  text-decoration: none;
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
  margin-top: 10px;
}

.form-submit:hover {
  background-color: #b89266;
}

.alternate-auth {
  margin-top: 25px;
  text-align: center;
}

.social-signup {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-signup button {
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

.social-signup button:hover {
  background-color: #f5f5f5;
}

.social-signup button i {
  margin-right: 10px;
}

.login-link {
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}

.login-link a {
  color: #c9a57c;
  text-decoration: none;
  font-weight: 500;
}

.password-requirements {
  margin-top: 5px;
  font-size: 12px;
  color: #777;
}

.benefits-list {
  margin: 20px 0;
  padding-left: 20px;
}

.benefits-list li {
  margin-bottom: 8px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .signup-container {
    flex-direction: column;
  }

  .signup-image {
    display: none;
  }

  .signup-form-container {
    padding: 30px 20px;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
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
