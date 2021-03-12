<template>
  <section>
    <base-card>
      <header>Personal Details</header>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="form-group">
        <label for="name">First Name</label><br />
        <input
          type="text"
          id="firstname"
          class="form-control"
          v-model="personalData.firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label><br />
        <input
          type="text"
          id="lastname"
          class="form-control"
          v-model="personalData.lastname"
        />
      </div>
      <div class="form-group">
        <label for="satisfaction">Satisfaction (10 for best, 1 for worst)</label
        ><br />
        <input
          min="1"
          max="10"
          type="number"
          id="satisfaction"
          class="form-control"
          v-model.number="personalData.satisfaction"
        />
      </div>
      <div class="form-group">
        <label for="cricket">
          <input
            type="checkbox"
            id="cricket"
            value="cricket"
            v-model="checkboxOptions"
          />Cricket
        </label>
        <br />
        <label for="football">
          <input
            type="checkbox"
            id="football"
            value="football"
            v-model="checkboxOptions"
          />Football
        </label>
      </div>
      <label for="male">
        <input type="radio" id="male" value="Male" v-model="radioBoxOption" />
        Male </label
      ><br />
      <label for="female">
        <input
          type="radio"
          id="female"
          value="Female"
          v-model="radioBoxOption"
        />
        Female
      </label>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-button link to="/contact">Next</base-button>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../components/UI/BaseCard.vue";
export default {
  components: { BaseCard },
  computed: {
    loginDetails() {
      return this.$store.getters["detailshow/details"];
    },
    hasDetails() {
      return this.$store.getters["detailshow/details"];
    },
  },
  data() {
    return {
      personalData: {
        firstname: "",
        lastname: "",
        satisfaction: 10,
      },
      checkboxOptions: [],
      radioBoxOption: "Male",
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
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
