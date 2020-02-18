<template>
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"
                 alt="">
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel";

    export default {
        name: "jdzt",
        components: {Panel}
    }
</script>

<style module lang="scss">
    .panel {
        /*margin-bottom: 0 !important;*/
        > h4 {
            display: none;
        }

        .content {
            height: 51px;
            img {
                width: 100%;
                height: 51px;
            }
        }
    }

</style>
