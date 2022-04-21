<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
          <aside-component></aside-component>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideComponent from "@/components/AsideComponent";
export default {
    name: 'Home',
    components: {
      AsideComponent
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
