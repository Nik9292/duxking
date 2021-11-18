<template>
  <div class="contacts">
    <Promo>Contacts</Promo>
    <div class="bg-blue-900">
      <div class="container flex justify-center py-12">
        <div class="w-1/2">
          <a href="#" class="block flex mb-2">
            <img src="/images/map.svg" alt="" class="w-5 mr-3">
            <p class="text-white text-xl">Netherlands, Eindhoven, Emmasingel 33-35</p>
          </a>
          <a href="#" class="block flex mb-2">
            <img src="/images/mail.svg" alt="" class="w-5 mr-3">
            <p class="text-white text-xl">eidh.veriads@gmail.com</p>
          </a>
          <a href="#" class="block flex mb-2">
            <img src="/images/phone-call.svg" alt="" class="w-5 mr-3">
            <p class="text-white text-xl">+31 00 324 4234</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Promo from '../components/Promo'

export default {
  name: 'Contacts',
  components: {
    Promo,
  }
}
</script>
