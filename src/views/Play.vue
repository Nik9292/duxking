<template>
  <div class="contacts">
    <Promo>Play</Promo>
    <div class="bg-blue-900">
      <div class="container flex flex-col items-center py-12">
        <div class="description-game w-9/12 mx-auto flex items-center mb-6" v-for="(item, index) in 6" :key="item">
          <div>
            <div class="rounded-full w-24 h-24 flex items-center justify-center bg-gray-900 text-white mr-6">
              <span class="text-3xl font-black">{{ index + 1}}</span>
            </div>
          </div>
          <div class="bg-gray-900 flex">
            <div class="max-w-10 h-full">
              <img src="/images/bandits.jpg" alt="">
            </div>
            <div class="p-5 text-white">
              <h3 class="font-bold text-xl">Banditos</h3>
              <p class="text-lg">Banditos game is free video slot based on exciting wild west world. Trеasures, duels
                with pistols and wildlife — enjoy this wonderful adventure and get a lot of emotions!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="container py-10">
        <p class="text-lg text-white text-justify">wildz casino, ideal casino, casino ideal, casino bonus, no deposit
          bonus casino, no deposit casino, casino slots, win casino, casino games, free casino games, gaming club casino,
          free casino slots, club player casino, mobile casino, casino live, casino sites, free casino slot games, free
          casino, vip casino, best casino, poker casino, top casino, casino action, sloto cash casino, facebook casino
          games, play live casino, exclusive casino, best casino sites, the casino 2020, super casino, casino offers,
          indian casino, jackpot city casino, myjackpotcasino, jackpot casino, jackpot cash casino, jackpot party casino,
          jackpot city online casino, all jackpots casino, jackpot wheel casino, jackpot mobile casino, jackpot capital
          casino, jonny jackpot casino, jackpot city casino mobile online, jackpot party casino facebook, cherry jackpot
          casino, new casino, new no deposit casino, new casino no deposit bonus, new casino sites, new casino games
          free, new vegas casino, online casino, casino online, live casino, best online casino, online casino bonus,
          new online casinos, online casino real money, online casino games, live casino online, online casino no deposit
          bonus, top online casinos, online casino no deposit, free online casino, casino slots online, free online
          casino games, online casino real money no deposit, real online casino, win real money online casino for free,
          virtual casino, online casino free bonus no deposit, bet online casino, best online casino real money, best
          online casinos that payout, win real money online casino</p>
      </div>
    </div>
  </div>
</template>
<script>
import Promo from '../components/Promo'

export default {
  name: 'Play',
  components: {
    Promo,
  }
}
</script>
