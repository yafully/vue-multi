<style scoped>
    .index__title {
        font-size: 18px;
        color: #333;
    }

    .index__desc {
        font-size: 14px;
        color: #999;
        margin-top: 2em;
    }
</style>

<template>
    <div class="home-index">
        <h1 class="index__title">home-index</h1>
        <p class="index__desc">i a test Home</p>
        <img src="@img/revpic04.jpg" alt="">
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
          open() {
            this.$alert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
        }
    }
</script>
