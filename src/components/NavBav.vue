<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/testview">Test Boostrap</router-link>
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
