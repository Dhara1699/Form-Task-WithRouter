<template>
    <h2>
        <router-link to="/contact">Personal Details</router-link>
    </h2>
    <ul v-if="hasDetails">
      <personal v-for="detail in loginDetails" 
                :key="detail.id"
                :id="detail.id"
                :first-name="detail.firstName"
                :last-name="detail.lastName"
                :loaction="detail.location"
                >
      </personal> 
    </ul> 
    <h3 v-else>No Details Founds</h3>
   
</template>

<script>
import Personal from '../components/Personal.vue';

export default {
  components : { Personal },
  computed : {
    loginDetails() {
      return this.$store.getters['detailshow/details'];
    },
    hasDetails() {
      return this.$store.getters['detailshow/details'];
    }
  }
}
</script>


<style scoped>
h2 a {
  text-decoration: none;
  color: #740c62;
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
</style>