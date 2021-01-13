<template>
  <div id="app">
    <b-navbar toggleable="md" variant="faded" class="mb-4 mt-2 row justify-content-around">
      <router-link to="/">Início</router-link>
      <router-link to="/jobs" class="text_purple">Vagas</router-link>
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

