<template>
    <Panel title="每日签到">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"
                 alt="">
            <p>不抢白不抢</p>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel";

    export default {
        components: {Panel},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/element";

    .content {
        @include flex(row);
        position: relative;
        padding-bottom: 40px;

        img {
            display: inline-block;
            width: 160px;
            height: 68px
        }

        p {
            position: absolute;
            top: -56px;
            right: 10px;
            color: #999;
            font-size: 14px;
            height: 56px;
            line-height: 56px;
        }
    }
</style>
