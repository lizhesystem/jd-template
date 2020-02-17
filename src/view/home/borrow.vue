<template>
    <panel title="极速借贷">
        <section class="content">
            <router-link :to="{name:'home'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"
                     alt="">
            </router-link>
        </section>
    </panel>
</template>

<script>
    import Panel from "@/view/core/panel";

    export default {
        components: {Panel},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    /*
总结： 极速借贷模块
- 该模块比较简单,布局使用section加个img就搞定了。
- 需要注意的是img标签需要给个block成块级元素
*/
    .content {
        padding-bottom: 20px;
        img{
            width: 100%;
            display: block;
        }
    }
</style>
