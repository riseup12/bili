<template>
  <li class="banner-item"
      v-if="banner">
    <a :href="banner.url"
       class="b-link"
       target="_blank">
      <img :src="banner.pic">
    </a>
  </li>
</template>
<script>
export default {
  props: {
    banner: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-item {
  width: 459px;
  height: 202px;
  float: left;
  overflow: hidden;
  .b-link {
    color: #ffff;
    width: 100%;
    height: 100%;
    img {
      width: 459px;
      height: 202px;
    }
  }
}
</style>