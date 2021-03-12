<template>
  <section>
    <base-card>
      <header>Registration Form Details</header>
    </base-card>
  </section>
  <section>
   <!-- <personal-details />
    <contact-details />
    <job-details /> -->
    <base-card>
      <div class="card" v-if="isSubmitted">
        <div class="card-body">
          <p>
            First Name :<b>{{ personalData.firstname }}</b>
          </p>
          <p>
            Last Name :<b>{{ personalData.lastname }}</b>
          </p>

          <p>
            Satisfaction: <b>{{ personalData.satisfaction }}</b>
          </p>
          <p>Checkbox Options:</p>
          <ul>
            <li v-for="item in checkboxOptions" :key="item">
              <b>{{ item }}</b>
            </li>
          </ul>
          <p>
            Gender: <b>{{ radioBoxOption }}</b>
          </p>
          <p>
            Mail: <b>{{ userData.email }}</b>
          </p>
          <p>
            Password: <b>{{ userData.password }}</b>
          </p>
          <p>
            Contact Number : <b>{{ userData.phoneNumber }}</b>
          </p>
          <p style="white-space: pre">
            Address: <b>{{ address }}</b>
          </p>
          <p>
            Priority: <b>{{ selectedState }}</b>
          </p>
          <p>
            City: <b>{{ selectedCity }}</b>
          </p>
          <p>
            Switched: <b>{{ customSwitch }}</b>
          </p>
          <p>
            CompanyName : <b>{{ jobData.companyName }}</b>
          </p>
          <p>
            Salary : <b>{{ jobData.salary }}</b>
          </p>
        </div>
      </div>
    </base-card>
  </section>
  <section>
    <base-card>
      <h1>
        <base-button link to="/registraion">LOGOUT</base-button>
      </h1>
    </base-card>
  </section>
</template>

<script>
/*import PersonalDetails from "./PersonalDetails.vue";
import ContactDetails from "./ContactDetails.vue";
import JobDetails from "./JobDetails.vue";
export default {
  components: {
    PersonalDetails,
    ContactDetails,
    JobDetails,
  },
};*/
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

h1 a {
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
  text-decoration: none;
  color: rgb(19, 133, 34);
}
</style>