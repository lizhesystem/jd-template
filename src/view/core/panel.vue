<!--面板公共组件-->
<template>
    <section :class="[panelClass,cname]">
        <h4>-{{ title }}-</h4>
        <slot/>
    </section>
</template>

<script>
    export default {
        props: {
            // 接收的自定义名
            cname: {
                type: String,
                default: ""
            },
            // 接收的抬头
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                panelClass: "panel"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/element";
    .panel{
        @include panel;
    }

</style>
