<template>
  <div id="header" class="bg-blue-800">
    <div class="container py-5 flex justify-between items-center">
      <div class="logo px-5">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" class="w-60">
        </a>
      </div>
      <button class="lg:block relative hidden w-12 h-12" :class="{'absolute z-50': open}" @click="openMenu()">
        <div class="h-2 w-full rounded-full bg-blue-500 mb-1 transition duration-300 ease-in-out" :class="{'opacity-0': open}"></div>
        <div class="h-2 w-full rounded-full bg-blue-500 relative mb-1 transition duration-300 ease-in-out" :class="{'transform rotate-45 top-3': open}"></div>
        <div class="h-2 w-full rounded-full bg-blue-500 relative mb-1 transition duration-300 ease-in-out" :class="{'transform -rotate-45': open}"></div>
      </button>
      <div id="nav" class="flex items-center lg:justify-center text-lg font-bold text-white lg:hidden lg:bg-blue-500 transition duration-300 ease-in-out" :class="{'open': open}">
        <div class="flex lg:flex-col items-center">
          <router-link to="/" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Home</router-link>
          <router-link to="/contacts" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Contacts</router-link>
          <router-link to="/play" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Play</router-link>
          <router-link to="/our-mission" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Our Mission</router-link>
          <router-link to="/privacy-policy" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Privacy Policy</router-link>
          <router-link to="/conditions" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Terms & Conditions</router-link>
          <router-link to="/cookies" class="transition duration-300 ease-in-out mr-3 border-b-2 border-transparent hover:border-yellow-500" @click="openMenu()">Cookies</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    openMenu() {
      this.open = !this.open
      document.querySelector('html').classList.toggle('overflow-hidden');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.open {
  background: rgba(69, 96, 166, 0.7);
  @apply fixed flex top-0 right-0 w-full h-full;
}
</style>
