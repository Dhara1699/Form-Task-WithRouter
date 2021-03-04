<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ location }}</h4>

        <div class="actions">
            <router-link :to="contactDetailsLink">Contact </router-link>
            <router-link :to="contactDetailsLink">EmailId</router-link>
        </div>
    </li>
</template>

<script>
export default {
    props : ['id' , 'firstName' , 'lastName' , 'loaction', 'contact' , 'emailId' ],
    computed : {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        location() {
            return this.loaction;
        },
        contactDetailsLink() {
            return '/contact' ;
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>