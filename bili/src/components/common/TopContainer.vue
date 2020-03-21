<template>
  <div class="top-container">

    <div class="be">
      <div class="top-header d-flex jc-center ia-center my-4">
        <div class="header-left ">
          <ul class="nav-link d-flex jc-center">
            <li class="nav-link-item">
              <div class="d-flex jc-center">
                <i class="home"></i>
                <a class="link"
                   href="//www.bilibili.com/">主站</a>
              </div>

            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">番剧</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">游戏中心</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">直播</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">会员购</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">漫画</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">赛事</a>
            </li>
            <li class="nav-link-item">
              <a href="#"
                 class="link">下载APP</a>
            </li>
          </ul>
        </div>
        <div class="header-input">
          <div class="nav-search">
            <for class="nav_searchform">
              <div class="nav-search-btn">
                <button type="button"
                        class="tttt"></button>
              </div>
              <input type="text"
                     class="nav-search-keyword">

            </for>
          </div>

        </div>
        <div class="header-right">
          <div class="nav-user-center">
            <ul class="nav-link d-flex jc-center">
              <li class="nav-link-item">
                <a href="#"
                   class="link">
                  <img src="../../assets/img/noface.jpg@96w_97h_1c_100q.webp"
                       alt="">
                </a>
              </li>
              <li class="nav-link-item">
                <a href="#"
                   class="link">大会员</a> </li>
              <li class="nav-link-item">
                <a href="#"
                   class="link">消息</a> </li>
              <li class="nav-link-item">
                <a href="#"
                   class="link">动态</a> </li>
              <li class="nav-link-item">
                <a href="#"
                   class="link">收藏</a></li>
              <li class="nav-link-item">
                <a href="#"
                   class="link"> 历史</a></li>
              <li class="nav-link-item">
                <a href="#"
                   class="link"> 创作中心</a></li>
              <li class="consignin">
                <span class="tougao">投稿</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div class="bottom-header"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cc: ''
    }
  }
}
</script>
<style lang="scss">
.top-container {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.37vh;
  min-width: 999px;

  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  background-image: url("../../assets/img/ed92db305ae43c7fc8a59b1789934caa2636b876.png");
  .be {
    width: 100vw;
    background: linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
}
.link {
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  white-space: nowrap;
  display: flex;
}
.nav-link-item {
  margin-right: 12px;
}
.home {
  display: inline-block;
  width: 26px;
  height: 30px;
  margin-top: -14px;
  margin-right: 8px;
  background: url(http://localhost:8080//static/img/icons.aef9bb0.png) no-repeat
    0 0;
  background-position: -845px -74px;
}

.nav-link {
  .consignin {
    .tougao {
      cursor: pointer;
      position: relative;
      color: #fff;
      font-size: 14px;
      display: block;
      width: 100px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #fb7299;
      border-radius: 2px;
      margin-left: 14px;
      margin-top: -10px;
    }
  }
}
.nav-user-center > ul > li > a > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-top: -35%;
}

.header-input {
  width: 426px;
  height: 36px;
  margin-right: 30px;
  margin-top: -10px;
  margin-left: 10px;
  .nav-search {
    position: relative;
    .nav_searchform {
      .nav-search-btn {
        position: absolute;
        right: 0;
        width: 48px;
        height: 36px;
        border: none;
        border-radius: 2px;
        background: #e7e7e7;
        line-height: 26px;
        cursor: pointer;
        .tttt {
          position: absolute;
          margin-top: 2px;
          margin-right: -5px;
          background: url(../../assets/img/icons.png) -653px -720px;
          display: block;
          right: 0;
          width: 48px;
          cursor: pointer;
          height: 36px;
          border: 0;
        }
      }
      .nav-search-keyword {
        width: 100%;
        height: 36px;
        border: none;
        box-shadow: none;
        border-radius: 2px;
        color: #999;
        font-size: 14px;
        line-height: 34px;
        transition: all 0.2s;
      }
    }
  }
}
</style>

