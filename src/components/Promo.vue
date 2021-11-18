<template>
  <div class="promo h-80">
      <div class="promo-image h-full w-full flex items-center justify-center">
        <h1 class="text-white text-5xl font-black uppercase">
          <slot></slot>
        </h1>
      </div>
  </div>
</template>
<style scoped lang="scss">
  .promo {
    background: url("/images/promo.jpg") center;
    background-size: cover;
    .promo-image {
      background: rgba(28, 25, 25, 0.6);
    }
  }
</style>
