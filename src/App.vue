<template>
  <div id="app">
    <h3>
      <nav>
        <router-link to="/"><b style="set-font">Introduction</b></router-link>
        <img style="width: 30px; height: 30px; margin-left: 20px;  margin-right: 20px" src="static/logo.png">
        <router-link to="/type">Personalities</router-link>
      </nav>
    </h3>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Martel+Sans");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #99a9bf;
}
.set-font{
    font-family: "Martel Sans";
    font-size: 20em;
  }
</style>
