<template>
  <base-card>
    <section>
      <header>Contact Details</header>
    </section>
  </base-card>
  <section>
    <base-card>
      <div class="form-group">
        <label for="email">Your Email Address</label><br />
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="userData.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Enter Password</label><br />
        <input
          type="password"
          id="password"
          class="form-control"
          v-model.lazy="userData.password"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Contact Number</label><br />
        <input
          type="text"
          id="phoneNumber"
          class="form-control"
          v-model="userData.phoneNumber"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label><br />
        <textarea
          id="address"
          rows="5"
          cols="50"
          class="form-control"
          v-model="address"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="state">State</label><br />
        <select id="state" class="form-control" v-model="selectedState">
          <option v-for="state in states" :key="state">{{ state }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="state">City</label><br />
        <select id="state" class="form-control" v-model="selectedCity">
          <option v-for="city in cities" :key="city">{{ city }}</option>
        </select>
      </div>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-button link to="/job">Next</base-button>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../components/UI/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      userData: {
        email: "",
        password: "",
        phoneNumber: "",
      },
      address: "Enter Your Address....",
      selectedState: "Gujarat",
      selectedCity: "Ahmedabad",
      states: ["Gujarat", "Delhi", "Karnataka"],
      cities: ["Ahmedabad", "Rajkot", "Gurugram", "Manglore", "Bangluru"],
    };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #12aa26;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: x-large;
}
h2 a {
  text-decoration: none;
  color: #d62cba;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #087c3a;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: rgb(81, 205, 50);
}
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  font-family: Georgia, "Times New Roman", Times, serif;
}
label {
  font-weight: bold;
  display: inline-block;
  width: 15rem;
  text-align: center;
}
input {
  font: inherit;
  padding: 0.15rem;
}
</style>