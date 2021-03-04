<template>
    <h2>Job Details</h2>
    <h3>
        <router-link to="/showdetails">Show All Details</router-link>
    </h3>    
</template>

<style scoped>
h3 a {
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

h2 {
    text-decoration: none;
    color: rgb(19, 133, 34);
}
</style>