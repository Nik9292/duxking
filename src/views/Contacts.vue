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
          <a href="#" class="block flex mb-6">
            <img src="/images/phone-call.svg" alt="" class="w-5 mr-3">
            <p class="text-white text-xl">+31 00 324 4234</p>
          </a>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6270d9dfad3af567737c34c0ca463ef8f0d568f4a0ceae4da200179d6eb2f4a9&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>
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
