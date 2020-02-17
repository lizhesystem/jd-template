<template>
    <!--神卷-->
    <Panel title="神卷" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270"
                 alt="">
        </section>
    </Panel>
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

<style module lang="scss">
    .panel {
        margin: 0!important;
        padding: 10px 0 10px !important;
        >h4{
            display: none;
        }
        .content {
            img {
                width: 100%;
                display: block;
                height: 115px;
            }
        }
    }
</style>
