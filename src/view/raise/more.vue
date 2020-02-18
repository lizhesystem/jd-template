<template>
    <Panel title="更多福利">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
                 alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
                 alt="">
            <p>专享福利 ></p>
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
        justify-content: space-around;
        padding-bottom: 60px;
        img {
            display: block;
            height: 140px;
            width: 33.33333%;
        }

        p {
            position: absolute;
            right: 10px;
            top: -56px;
            font-size: 14px;
            color: #999;
            height: 56px;
            line-height: 56px;
        }
    }
</style>
