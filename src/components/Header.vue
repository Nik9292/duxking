<template>
  <div id="header" class="bg-blue-800">
    <div class="container py-5 flex justify-between items-center">
      <div class="logo px-5">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" class="w-60">
        </a>
      </div>
      <div id="nav" class="flex items-center text-lg font-bold text-white">
        <router-link to="/" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Home</router-link>
        <router-link to="/contacts" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Contacts</router-link>
        <router-link to="/play" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Play</router-link>
        <router-link to="/our-mission" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Our Mission</router-link>
        <router-link to="/privacy-policy" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Privacy Policy</router-link>
        <router-link to="/conditions" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Terms & Conditions</router-link>
        <router-link to="/cookies" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500">Cookies</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
