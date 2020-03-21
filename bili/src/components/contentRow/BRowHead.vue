<template>
  <div class="title d-flex jc-between">
    <div class="title-icon d-flex ai-center">
      <span class="icon"
            :class="category"></span>
      <i style="font-style:normal;font-size:20px;">{{title}}</i>
    </div>
    <div class="title-r d-flex jc-center">
      <div class="btn d-flex">
        <i class="btn-icon"></i>
        换一换
      </div>
      <div class="btn d-flex">
        更多
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: String
    }
  },
  // douga 动画,bangumi 番剧, music 音乐,dance 舞蹈,game 游戏,technology  科技,life 生活,kichiku 鬼畜,fashion 时尚,ad 广告,ent  娱乐, movie 电影, teleplay TV剧
  computed: {
    title () {
      let title = '未知标题';
      if (this.category) {
        switch (this.category) {
          case 'douga':
            title = '动画'
            break
          case 'bangumi':
            title = '番剧'
            break
          case 'music':
            title = '音乐'
            break
          case 'dance':
            title = '舞蹈'
            break
          case 'game':
            title = '游戏'
            break
          case 'technology':
            title = '科技'
            break
          case 'life':
            title = '生活'
            break
          case 'kichiku':
            title = '鬼畜'
            break
          case 'fashion':
            title = '时尚'
            break
          case 'ad':
            title = '广告'
            break
          case 'ent':
            title = '娱乐'
            break
          case 'movie':
            title = '电影'
            break
          case 'teleplay':
            title = 'TV剧'
            break
          default:
            title = "未知标题"
        }
      }
      return title
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  width: 710px;
  height: 36px;
  align-items: center;
  .title-icon {
    .icon {
      display: inline-block;
      background: url(../../assets/img/icons.png) no-repeat 0 0;

      margin-right: 10px;
      width: 36px;
      height: 36px;
      &.douga {
        background-position: -141px -908px;
      }
      &.bangumi {
        background-position: -141px -140px;
      }
      &.music {
        background-position: -141px -266px;
      }
      &.dance {
        background-position: -141px -461px;
      }
      &.game {
        background-position: -141px -203px;
      }
      &.technology {
        background-position: -141px -525px;
      }
      &.life {
        background-position: -141px -970px;
      }
      &.kichiku {
        background-position: -141px -332px;
      }
      &.fashion {
        background-position: -141px -718px;
      }
      &ad {
        background-position: -141px -1228;
      }
      &.ent {
        background-position: -141px -1032px;
      }
      &.movie {
        background-position: -141px -396px;
      }
      &.teleplay {
        background-position: -141px -845px;
      }
      i {
        display: inline-block;
        height: 36px;
      }
    }
  }
  .title-r {
    font-size: 15px;
    .btn {
      border: 1px solid #d3d3d3;
      height: 22px;
      border-radius: 2px;
      align-items: center;
      margin-right: 15px;
      padding: 0 5px;
      .btn-icon {
        margin-right: 10px;
        width: 12px;
        height: 13px;
        display: inline-block;

        background: url(../../assets/img/icons.png) -475px -89px no-repeat;
      }
    }
  }
}
</style>