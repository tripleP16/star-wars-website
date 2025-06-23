<script setup>
import AppBar from "./components/AppBar.vue";
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
#app {
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
}

nav {
  background: #2a2a2a;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.nav-button {
  background: #ffd700;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
}

.nav-button:hover {
  background: #ffed4e;
}

.nav-button.router-link-active {
  background: #ffed4e;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

main {
  padding: 2rem;
}
</style>
