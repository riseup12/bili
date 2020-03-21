<template>
  <div class="b-body">
    <div class="r-li-body">
      <div class="r-list-wrapper"
           ref="listWrapper">
        <ul class="rlist"
            v-if="true">
          <li :class="{n:index===0}"
              v-for="(item,index) in rank.list"
              :key="index">

            <i class="number"
               :class="{n: index === 0 || index === 1 || index === 2}">
              {{index + 1}}
            </i>

            <div class="preview">
              <a href="/video/av921860/"
                 :title="item.title"
                 target="_blank">
                <div class="imgtt d-flex jc-between"
                     v-if="index===0">
                  <img v-if="index===0"
                       :src="item.pic"
                       loaded="loaded"
                       style="opacity:1;width:112px;height:63px;">
                  <a href="/video/av9211860/"
                     style="width:110px;height:63px"
                     :title="item.title+item.pts"
                     target="_blank">
                    <div class="title t"
                         style="width:110px;height:40px; overflow: hidden;font-size:14px;color:black;line-height:20px">{{item.title}}</div>
                    <div class="i">
                      <b class="pts"
                         style="width:103px;height:14px;font-size:12px;"
                         :title="item.pts"> 综合评分:{{item.pts}}
                      </b>
                    </div>
                  </a>
                </div>

              </a>
            </div>
            <a href="/video/av9211860/"
               class="rl-info"
               :title="item.title+item.pts"
               target="_blank">
              <div class="tt"
                   v-if="!(index===0)"
                   style="width:235px;height:20px; overflow: hidden;font-size:14px;color:black;line-height:20px">{{item.title}}</div>

            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { contentrankApi } from '../../api'
export default {
  data () {
    return {
      threeDayData: {},
      rank: {}
    }
  },
  props: {
    categoryId: { type: Number },

  },
  mounted () {
    this.getrankData()
  },
  methods: {
    getrankData () {
      let param = {
        categoryId: this.categoryId
      }

      contentrankApi.contentrank(param).then((response) => {
        this.threeDayData = response.hot
        this.rank = this.threeDayData
      })

    }
  }
}
</script>
<style lang="scss" scoped>
.b-body {
  clear: both;
  width: 265px;
  height: 350px;
  i {
    font-style: normal;
    font-weight: bold;
  }
  .r-li-body {
    zoom: 1;
    overflow: hidden;
    .r-list-wrapper {
      width: 200%;
      margin-left: 0%;
      overflow: hidden;
      .rlist {
        padding-bottom: 15px;
        padding-top: 20px;
        min-height: 278px;
        max-height: 288px;
        width: 50%;
        float: left;
        overflow: hidden;
        li {
          overflow: hidden;
          margin-top: 20px;
          position: relative;
          padding-left: 25px;

          img {
            display: block;
            margin: 0 auto;
          }
          &:first-child {
            margin: 0;
          }
          .number {
            position: absolute;
            color: #fff;
            height: 18px;
            line-height: 17px;
            top: 0;
            left: 0;
            font-size: 12px;
            min-width: 12px;
            text-align: center;
            background-color: #b8c0cc;
            z-index: 20;
            border-radius: 4px;
            padding: 0 3px 0 3px;
            font-weight: bloder;
            &.n {
              background-color: #f25d8e;
            }
            .preview {
              margin-right: 5px;
              width: 80px;
              height: 50px;
              float: left;
              display: none;
              border-radius: 4px;
              overflow: hidden;
            }
            .rl-info {
              float: left;

              .tt {
                font-size: 14px;
                color: black;
                width: 20px;
                line-height: 17px;
                height: 18px;
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
                color: #222;
              }
              .i {
                margin-top: 5px;
                display: none;
                overflow: hidden;
                b {
                  padding-left: 13px;
                  font-family: "microsoft yahei", simahei;
                  line-height: 12px;
                  color: #99a2aa;
                  height: 12px;
                  float: left;
                  &.pts {
                    padding: 0;
                  }
                  &.on {
                    .t {
                      height: 36px;
                      line-height: 18px;
                      margin-top: -3px;
                      width: 150px;
                      padding: 0;
                    }
                    .i {
                      display: block;
                    }
                    .preview {
                      display: block;
                    }
                  }
                  &:hover {
                    .t {
                      color: #00a1b6;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>