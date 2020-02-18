<template>
    <Panel title="下载APP" :class="$style.panel">
        <section :class="$style.content">
            <div class=""></div>
            <p>立即下载</p>
            <span>copyright</span>
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

<style module lang="scss">
    @import "../../assets/styles/element";


    .panel {
        @include panel;
        margin: 0!important;
        > h4 {
            display: none;
        }

        .content {
            @include flex;
            justify-content: center;
            align-items: center;
            height: 568px;
            width: 100%;

            > div {
                background: url(https://www.dogedoge.com/assets/new_logo.min.png) center center no-repeat;
                width: 100px;
                height: 400px;
                background-size: 100% auto;
                margin-top: -200px;
            }

            > p {
                @include btn;
                height: 50px;
                line-height: 50px;
                width: 230px;
                background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
                box-shadow: 0 6px 16px 0 rgba(255,159,135,.6);
                position: fixed;
                bottom: 65px;
            }
            span{
                position: fixed;
                bottom: 10px;
                font-size: 12px;
                color: #9E9E9E;
            }
        }

    }

</style>
