<template>
  <div class="cc d-flex jc-center">
    <div class="banner">
      <div class="topic-preview-wrapper">
        <div class="topic-preview-list-wrapper">
          <ul class="topic-preview"
              style="widht:500%"
              ref="banner">
            <BannerItem v-for="(item,index) in bannerlist"
                        :banner="item"
                        :key="index"></BannerItem>
          </ul>
        </div>

        <div class="s-bottom">
          <div class="title"
               v-if="bannerlist[count]">
            <span class="">
              <img src="//static.hdslb.com/images/base/ad.png"
                   style="width: 32px; height: 20px: margin-left: 5px;vertical-align: middle;"
                   v-if="bannerlist[count].is_ad">
              <a :href="bannerlist[count].url"
                 target="_blank">{{ bannerlist[count].name }}</a>
            </span>
          </div>
          <ul class="slide-bar">
            <li :class="{on:count==index}"
                v-for="(item,index) in bannerlist"
                @click="cutItem(index)"
                :key="index"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import BannerItem from './BannerItem'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      count: 0,
      show: false,
      interval: Function

    }
  },
  components: {
    BannerItem
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'bannerlist'
    ])
  },

  mounted () {

    this.startInterval()
    this.$store.dispatch('bannerlist')

  },
  methods: {
    cutItem (index) {
      this.count = index
      let distance = -100 * this.count
      let left = distance + "%"
      this.$refs.banner.style.marginLeft = left
      clearInterval(this.interval)
      this.startInterval()
    },
    startInterval () {
      this.interval = setInterval(() => {
        this.count++
        if (this.count === 5) {
          this.count = 0
        }
        let distance = -100 * this.count
        let left = distance + "%"
        if (this.$refs.banner) {
          this.$refs.banner.style.marginLeft = left
        }
      }, 4000)
    }

  }
}
</script>
<style lang="scss" scoped>
.cc {
  margin-bottom: 50px;
}
.banner {
  width: 999px;
  .topic-preview-wrapper {
    position: relative;
    width: 459px;
    height: 202px;
    .topic-preview-list-wrapper {
      overflow: hidden;
      border-radius: 4px;
      .topic-preview {
        width: 500%;
        height: 100%;
        transition: 0.2s;
      }
    }
    .s-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
      background: linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.1) 20%,
        rgba(0, 0, 0, 0.2) 35%,
        rgba(0, 0, 0, 0.5) 65%,
        rgba(0, 0, 0, 0.66)
      );
      border-radius: 0 0 4px 4px;
      .title {
        position: absolute;
        bottom: 0;
        left: 20px;
        top: 0;
        height: 35px;
        line-height: 35px;
        width: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
        font-size: 14px;
        a {
          color: #fff;
        }
      }
      .slide-bar {
        position: absolute;
        right: 5px;
        bottom: 5px;
        overflow: hidden;
        padding: 2px 5px;
        li {
          float: left;
          cursor: posinter;
          width: 18px;
          height: 18px;
          margin: 2px 2px;
          background: url(../../../assets/img/icons.png) -855px -790px no-repeat;
          &:hover {
            background-position: -919px -790px;
          }
          &.on {
            background-position: -855px -727px;
          }
        }
      }
    }
  }
}
</style>
