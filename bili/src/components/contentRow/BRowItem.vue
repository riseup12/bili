<template>

  <div class="body-content-item">
    <a :href="hreflink">
      <div class="ship">
        <img v-lazy="item.pic"
             style="width:170px;height:96px;">
      </div>
      <div class="ship-title">
        <span>{{item.title}}</span>
      </div>
      <div class="up-title">
        <i class="up-icon"></i>
        {{item.stat.reply}}
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object }
  },
  computed: {
    hreflink () {
      return 'http://www.bilibili.com/video/av' + this.item.aid
    }
  }
}
</script>
<style lang="scss" scoped>
.body-content-item {
  width: 170px;
  height: 170px;
  margin-top: 10px;
  .ship {
    width: 170px;
    height: 96px;
  }
  .ship-title {
    box-sizing: border-box;
    width: 170px;
    height: 40px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    margin-bottom: 8px;
    padding-right: 12px;
    line-height: 20px;
    border-radius: 2px;
  }
  .up-title {
    color: rgb(201, 201, 201);
    font-size: 12px;
    .up-icon {
      display: inline-block;

      width: 12px;
      height: 12px;
      background: url(../../assets/img/icons.png) no-repeat -282px -90px;
    }
    width: 170px;
    height: 16px;
  }
}
</style>