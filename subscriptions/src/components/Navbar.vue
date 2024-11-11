<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
      <span class="navbar-brand">Subscriptions</span>
      <ul class="nav justify-content-center">
        <li class="nav-item active" v-if="loggedIn === 'false'">
          <a class="nav-link" @click="register">Register</a>
        </li>
        <li class="nav-item" v-if="loggedIn === 'true'">
          <!-- Remove the outer <a> tag around the inner <a> -->
          <a class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </nav>
  </template>

  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  
  export default {
    name: 'Navbar',
    data() {
      return {
        loggedIn: 'false',
      };
    },
    beforeCreate() {
      this.loggedIn = firebase.auth().currentUser ? 'true' : 'false';
    },
    updated() {
      this.loggedIn = firebase.auth().currentUser ? 'true' : 'false';
    },
    mounted() {
      this.loggedIn = firebase.auth().currentUser ? 'true' : 'false';
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.loggedIn = 'false';
            this.$router.push('/');
          })
          .catch((error) => {
            alert(error.message);
            this.$router.push('/');
          });
      },
      register() {
        this.$router.push('/register');
      },
    },
  };
  </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }
  
  // Set custom nav bar colors
  .navbar-brand,
  .navbar-text,
  .navbar {
    background-color: #44515e;
    padding: 0.5em;
  
    span {
      color: #42b883;
    }
  }
  
  a {
    color: black;
    padding: 0.5em;
  
    &.router-link-exact-active {
      color: #08492c;
    }
  }
  </style>