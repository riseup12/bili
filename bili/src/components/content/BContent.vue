<template>
  <div>
    <Banner></Banner>
    <div v-for="(row,index) in rows"
         :id="row.b_id"
         :key="index">
      <BContentRow :category="row.category"
                   :categoryId="row.categoryId"
                   :row="row.item"></BContentRow>
    </div>

  </div>
</template>
<script>
import Banner from './banner/Banner'
import BContentRow from '../contentRow/BContentRow'
export default {
  props: {
    rows: { type: Array }
  },
  components: {
    Banner,
    BContentRow
  }
}
</script>
<style lang="scss" scoped>
</style>