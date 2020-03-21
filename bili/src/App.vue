<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <BContent :rows="rows"></BContent>
    <BNavSide :options="options"
              v-on:change="isShowMask"></BNavSide>
    <router-view />
  </div>
</template>
<script>
import BNavSide from './components/nav/BNavSide'
import TopContainer from './components/common/TopContainer'
import BContent from './components/content/BContent'
import BHeader from './components/common/BHeader/BHeader'
import { mapGetters } from 'vuex'
export default {
  components: {
    TopContainer,
    BHeader,
    BContent,
    BNavSide
  },
  data () {
    return {
      showMask: false
    }
  },
  mounted () {
    this.$store.dispatch('getContentRows')
  },
  watch: {
    options () {
      console.log('options变化了')
    },
    items () {
      console.log('items变化了')
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    options () {
      let options = {
        offset: 100,//偏移距离  
        items: this.rows,
        offsetTop: 0//距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask () {
      this.showMask = !this.showMask
    }
  }

}
</script>