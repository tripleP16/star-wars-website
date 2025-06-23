<template>
  <v-app-bar flat>
    <v-container class="d-flex align-center justify-space-between" fluid>
      <div class="d-flex align-center">
        <span class="text-h5 font-weight-bold">Star Wars Explorer</span>
      </div>
      <div class="d-flex align-center gap">
        <v-btn variant="text" to="/inhabitants" class="mx-2" exact
          >People</v-btn
        >
        <v-btn variant="text" to="/planets" class="mx-2" exact>Planets</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup></script>

<style scoped>
.gap > * + * {
  margin-left: 12px;
}
</style>
