<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'user' }">User</router-link> |
    <router-link :to="{ name: 'testview' }">Test Boostrap</router-link>
  </nav>
</template>

<style>
nav {
  padding: 30px;
  background-color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #ddd;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
