<template>
  <li class="m-i"
      :class="classes">
    <a href=""
       class="i-link d-flex jc-center ai-center">
      <em class="text-black">{{item.title}}</em>
      <div class="v-num"
           v-if="showNum">
        <span class="addnew_1 text-white">{{item.num}}</span>
      </div>
    </a>
  </li>
</template>
<script>
export default {
  data () {
    return {
      classes: {
        home: this.item.home,
        sequare: this.item.sequare,
        live: this.item.live
      }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    showNum () {
      if (this.item.home || this.item.sequare || this.item.live) {
        return false
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.m-i {
  float: left;
  position: relative;
  font-size: 14px;
  display: block;
  margin-bottom: 16px;
  margin-right: 10px;
  em {
    font-style: normal;
    text-align: center;
    font-style: normal;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
  }

  .sequare {
    margin: 0 12px 0 14px;
  }
}

.addnew_1 {
  background: #73c9e5;
  display: inline-block;
  width: 27px;
  height: 11.75px;
  font-size: 11px;
  text-align: center;
  margin-left: 5px;
  border-radius: 2px;
}
</style>