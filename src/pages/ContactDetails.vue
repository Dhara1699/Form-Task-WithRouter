<template>
    <h2>
        <router-link to="/job">Contact Details</router-link>
    </h2>
    <div>
      <h3 v-for="contacts in contact" :key="contacts.id">{{ contacts.contact }}</h3>
    </div>
    <div>
      <h3 v-for="emails in emailId" :key="emails.id">{{ emails.emailId }}</h3>
    </div>
</template>

<script>
export default {
  computed : {
    contact() {
      return this.$store.getters['detailshow/details'];
    },
    emailId() {
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

div {
  margin: 1rem 0;
  border: 1px solid #08237a;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color:rgb(81, 205, 50);
}
</style>