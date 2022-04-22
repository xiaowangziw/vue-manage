<template>
  <div class="tabs">
    <el-tag v-for="(tag,index) in tags" :key="tag.name"
            :closable="tag.name !== 'home'"
            :effect="$route.name === tag.name ? 'dark':'plain'"
            @click="changeMenu(tag)"
            @close="handleClose(tag,index)"
            size="mall">
      {{tag.label}}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name:'TagComponent',
  data:{
    return:{

    }
  },
  computed: {
    ...mapState({
      // tags赋值 = tabsList
      tags: state => state.tab.tabsList
    })
  },
  methods:{
    changeMenu(val){
      this.$router.push({
        name:val.name
      })
    },
    handleClose(tag,index){
      const length = this.tags.length -1
      if(tag.name !== this.$route.name){
        return
      }
      if (index === length){
        this.$router.push({
          name:this.tags[index-1].name
        })
      }else{
        this.$router.push({
          name:this.tags[index].name
        })
      }
      this.close(tag)
    },
    ...mapMutations({
      // 将 state的tab的closeTag起别名close使用
      close: 'closeTag'
    })
  }
}
</script>

<style lang="less" scoped>
 .tabs{
   padding: 20px;
   .el-tag{
     margin-right: 15px;
     cursor: pointer;
   }
 }
</style>
