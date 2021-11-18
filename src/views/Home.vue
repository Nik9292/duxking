<template>
  <div id="home">
    <div class="promo">
      <div class="container flex justify-center items-center py-36">
        <div class="m-auto text-white leading-none text-center">
          <h1 class="uppercase mb-5 text-5xl font-black">Best videogames totally free!</h1>
          <h2 class="mb-5 text-white text-3xl">Please check our Privacy Policy and Terms & Conditions</h2>
          <div>
            <button class="button transition duration-300 ease-in-out bg-blue-800 border-2 border-blue-800 hover:text-white hover:bg-gray-900 hover:border-white text-white mr-6">SIGN UP</button>
            <button class="button transition duration-300 ease-in-out bg-white border-2 border-white text-blue-900 hover:bg-gray-900 hover:text-white">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blue-800">
      <div class="container py-16 text-white">
        <h2 class="text-2xl font-black text-center uppercase mb-3">Disclaimer</h2>
        <p class="text-lg leading-1 text-center">There is no real money gaming or betting on this website. All games are social casino games and so no real
          prizes will be issued. This website is simply a portal to access social casino games for free and we take no
          responsibility for the games content. Please contact us if you believe that any game causes offence and/or harm.
          This website is about entertainment above all else. Have fun and play as much as you like. Please remember that
          winning at these games does not mean you will have any future wins at any "real stakes" gambling games.</p>
      </div>
    </div>
    <div class="bg-blue-900">
      <div class="container py-16 text-white">
        <h2 class="text-4xl font-black text-center uppercase mb-3 leading-none">Free social casino games</h2>
        <p class="text-lg text-center">Get Virtual Welcome bonus after Sign Up</p>
      </div>
    </div>
    <div class="games bg-blue-800">
      <div class="container py-10 flex flex-wrap">
        <a href="#" class="game-card block mb-10 w-1/3 px-2" v-for="item in 6" :key="item.id">
          <div class="w-full mb-3">
            <img src="/images/bandits.jpg" alt="" class="w-full">
          </div>
          <h3 class="text-white text-xl text-center">Banditos</h3>
        </a>
      </div>
    </div>
    <div class="bg-blue-900">
      <div class="container py-16 text-white">
        <h2 class="text-4xl font-black text-center uppercase mb-3 leading-none">New slot machine games - play for free</h2>
        <p class="text-lg text-center">Virtual Bоnus Wheel spins every 4 hours. Spice things up with MORE CHILLI slots</p>
      </div>
    </div>
    <div class="games bg-blue-800">
      <div class="container py-10 flex flex-wrap">
        <a href="#" class="game-card block mb-10 w-1/3 px-2" v-for="item in 6" :key="item.id">
          <div class="w-full mb-3">
            <img src="/images/bandits.jpg" alt="" class="w-full">
          </div>
          <h3 class="text-white text-xl text-center">Banditos</h3>
        </a>
      </div>
    </div>
    <div class="bg-blue-900">
      <div class="container text-white py-10">
        <h2 class="text-3xl font-black uppercase mb-1 leading-none">Free Social Online Casino</h2>
        <p class="text-lg mb-4">Get Achievements, Invitе Friends And Play Online For Free </p>
        <h2 class="text-3xl font-black uppercase mb-1 leading-none">High performance graphics</h2>
        <p class="text-lg mb-6">All games optimized for mobile device, Mac OS, Windows, Linux. Register and enjоy
          our best casino games.</p>
        <div class="flex">
          <img src="/images/android.svg" alt="Android" class="mr-3">
          <img src="/images/apple.svg" alt="Apple" class="mr-3">
          <img src="/images/linux.svg" alt="Linux" class="mr-3">
          <img src="/images/windows.svg" alt="Windows" class="mr-3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped lang="scss">
  .promo {
    background: url("/images/promo.jpg");
    background-size: cover;
    .button {
      @apply rounded-full px-16 py-3 uppercase font-bold text-xl;
    }
  }
</style>
