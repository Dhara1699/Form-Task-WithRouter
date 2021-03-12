<template>
  <section>
    <base-card>
      <h1>
        <base-button link to="/personal">LOGIN</base-button>
      </h1>
    </base-card>
  </section>
</template>


<style scoped>
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
</style>