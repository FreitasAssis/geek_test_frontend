<template>
  <div id="app">
    <b-navbar toggleable="md" variant="faded" class="mb-4 row justify-content-center">
      <b-navbar-brand>
        <router-link to="/">GeekHunter</router-link>
      </b-navbar-brand>

      <b-navbar-nav>
        <router-link to="/jobs" class="text_purple">Vagas</router-link>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

