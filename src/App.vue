<script setup>
import UsersView from "./views/UsersView.vue";
</script>

<template>
  <div class="wrapper">
    <header>
      <h1>Infinite scroll using skeleton loading</h1>
    </header>

    <main>
      <div class="content">
        <UsersView></UsersView>
      </div>
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap");

*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
}

html {
  color: #444;
  font-size: 62.5%;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Nunito", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  line-height: 1.2;
}

p {
  margin: 0 0 30px;
  color: #666666;
}

a {
  color: #e76c67;
  text-decoration: none;
}

header {
  padding: 2rem 2rem 4rem;
}

h1 {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
