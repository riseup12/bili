<template>
  <div class="contentRow d-flex jc-center">
    <div class="b-section-body">
      <div class="b-l">
        <!-- 标题 -->
        <BRowHead :category="category"></BRowHead>
        <!-- 内容 -->
        <div class="body">
          <BRowItem v-for="(item,index) in row"
                    :item="item"
                    :key="index"></BRowItem>
        </div>
      </div>
      <div class="b-r">
        <div class="r-title d-flex jc-between">
          <div>排行榜</div>
          <div class="btn d-flex">更多</div>
        </div>

        <BRowRankBody :categoryId="categoryId"></BRowRankBody>

      </div>
    </div>
  </div>

</template>
<script>
import BRowHead from './BRowHead'
import BRowRankBody from './BRowRankBody'
import BRowItem from './BRowItem'
import { mapGetters } from 'vuex'
export default {
  props: {
    category: {
      type: String
    },
    row: {
      type: Array
    },
    categoryId: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'ranks',
      'rank'
    ])
  },
  components: {
    BRowItem,
    BRowRankBody,
    BRowHead
  }
}

</script>
<style lang="scss" scoped>
.contentRow {
  width: 100vw;
}
.b-section-body {
  width: 999px;
  .b-l {
    float: left;
    width: 710px;
    margin-bottom: 50px;

    .body {
      width: 710px;
      height: 360px;
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-between;
    }
  }
  .b-r {
    float: right;
    width: 265px;
    height: 412px;
    min-height: 360px;
    margin-bottom: 50px;
    .r-title {
      padding-top: 8px;
      font-size: 20px;
      .btn {
        font-size: 15px;
        align-items: center;
        border: 1px solid #d3d3d3;
        height: 22px;
        border-radius: 2px;
        align-items: center;
        margin-right: 15px;
        padding: 0 5px;
      }
    }
  }
}
</style>