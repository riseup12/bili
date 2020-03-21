<template>
  <div class="primary-menu-itnl  d-flex jc-center ai-center">
    <div class="primaryPageTab">
      <ul class="flex-wrap">
        <li>
          <a href="//ww.bilibili.com">
            <div class="ttt"></div>
            <span class="text-black">首页</span>
          </a>
        </li>
        <li>
          <a href="//t.bilibili.com">
            <div class="ttt"></div>
            <span class="text-black">动态</span>
          </a>
        </li>
        <li>
          <a href="//www.bilibili.com/ranking">
            <div class="ttt"></div>
            <span class="text-black">排行榜</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="primaryChannelMenu">
      <div class="cc d-flex ai-center flex-wrap">
        <BMenuItem v-for="(i,index) in classify"
                   :item="i"
                   :key="index"></BMenuItem>
      </div>

    </div>
    <div class="primaryFriendshipLink d-flex ai-center flex-wrap">
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">专栏</span>
        </a>
      </div>
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">专题</span>
        </a>
      </div>
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">小黑屋</span>
        </a>
      </div>
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">活动</span>
        </a>
      </div>
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">直播</span>
        </a>
      </div>
      <div class="Friendship d-flex jc-center">
        <a href="//www.bilibili.com/read/home?spm_id_from=333.851.b_7072696d617279467269656e64736869704c696e6b.1">
          <div class="left"></div>
          <span class="text-black">音乐PLUS</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import BMenuItem from './BMenuItem'
export default {
  data () {
    return {
      classify: [
        {
          title: '动画',
          num: 468
        },
        {
          title: '番剧',
          num: 61
        },
        {
          title: '音乐',
          num: 749
        },
        {
          title: '舞蹈',
          num: 108
        },
        {
          title: '游戏',
          num: 999
        },
        {
          title: '科技',
          num: 482
        },
        {
          title: '生活',
          num: 988
        },
        {
          title: '鬼畜',
          num: 64
        },
        {
          title: '时尚',
          num: 177
        },
        {
          title: '广告',
          num: 43
        },
        {
          title: '娱乐',
          num: 839
        },
        {
          title: '影视',
          num: 702
        },
        {
          title: '广场',
          num: 555,

        },
        {
          title: '国创',
          num: 999,

        },
        {
          title: '影视',
          num: 999
        },
        {
          title: '更多',
          num: 0,
          sequare: true
        }

      ]
    }
  },
  components: {
    BMenuItem
  }
}
</script>

<style lang="scss" scoped>
.primary-menu-itnl {
  margin: 20px auto;
  width: 999px;
  height: 100px;
  .primaryPageTab {
    position: relative;
    margin-right: 15px;
    ul li {
      display: inline-block;
      width: 50px;
      height: 68px;
      .ttt {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #ff5c7c;
      }
      span {
        display: block;
        margin-top: 5px;
      }
    }
  }
  .primaryChannelMenu {
    width: 585px;
    height: 68px;
    border-left: 1px solid #bbbbbb;
    border-right: 1px solid #bbbbbb;
    .cc {
      margin-left: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .primaryFriendshipLink {
    width: 220px;
    height: 68px;
    margin-left: 15px;
    font-size: 15px;
    a {
      display: block;
      margin-right: 5px;
    }
    .Friendship {
      .left {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: rgb(72, 207, 229);
        margin-right: 5px;
      }
    }
  }
}
</style>