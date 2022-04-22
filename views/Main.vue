<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
          <aside-component></aside-component>
        </el-aside>
        <el-container>
            <el-header>
              <header-component></header-component>
            </el-header>
            <tag-component></tag-component>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideComponent from "@/components/AsideComponent";
import HeaderComponent from "@/components/HeaderComponent";
import TagComponent from "@/components/TagComponent";
export default {
    name: 'Home',
    components: {
      AsideComponent,
      HeaderComponent,
      TagComponent
    },
    data(){
        return{}
    }
}
</script>

<style lang="less" scoped>
    .el-header{
        background-color: #333;
    }

    .el-main{
        padding-top: 0px;
    }
</style>
