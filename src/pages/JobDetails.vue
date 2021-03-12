<template>
  <section>
    <base-card>
      <header>Job Details</header>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="form-group">
        <label for="cname">Company Name</label><br />
        <input
          type="text"
          class="form-control"
          id="cname"
          v-model="jobData.companyName"
        />
      </div>
      <div class="form-group">
        <label for="salary">Salary</label><br />
        <input
          type="text"
          class="form-control"
          id="salary"
          v-model="jobData.salary"
        />
      </div>
      <div>
        <custom-switch v-model="customSwitch"></custom-switch>
      </div>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-button link to="/showdetails" class="btn btn-primary" prevent="submitted">
        Submit!
      </base-button>
    </base-card>
    <!-- @click.prevent="submitted"-->
  </section>
  <!---->
</template>

<script>
import Switch from "./Switch.vue";
export default {
  components: {
    customSwitch: Switch,
  },
  data() {
    return {
      jobData: {
        companyName: "",
        salary: "",
      },
      isSubmitted: false,
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
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
h3 a {
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

h2 {
  text-decoration: none;
  color: rgb(19, 133, 34);
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

<!--https://vegibit.com/vuejs-form-example/-->