<!--header公共组件-->
<template>
    <div class="header">
        <span class="left">
            <!--真正开发这里应该路由跳转,这里直接写了-->
            <em>注册</em>&nbsp;| <em>登录</em>
        </span>
        <!--这个APP下载会显示到插槽,该样式会覆盖默认样式-->
        <btn  class="btnDownload">APP下载</btn>
    </div>
</template>

<script>
    import btn from "@/view/core/btn";

    export default {
        data() {
            return {
            }
        },
        components: {
            btn,
        }
    }
</script>

<style scoped lang="scss">
    /*header的样式*/
    .header {
        color: #666;
        height: 50px;
        line-height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0; // left和right为0相当于宽度100%
        z-index: 100;
        font-size: 16px;
        background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center no-repeat;
        background-size: auto 50%;

        /*左边注册登录样式*/
        .left {
            font-size: 14px;
            height: 15px;
            line-height: 15px;
            margin-left: 9px;
        }
        /*右侧按钮样式*/
        .btnDownload {
            font-size: 12px;
            float: right;
            border-width: 0;
            height: 28px;
            line-height: 28px;
            min-width: 60px;
            padding: 0;
            border-radius: 2px;
            margin: 14px 12px 0 0;
        }
    }
</style>
