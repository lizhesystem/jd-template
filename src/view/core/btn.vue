<!--按钮抽象组件-->
<template>
    <div :class="[btnClass,cname]">
        <!--按钮里的文本使用插槽的方式-->
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            // 当btn如果默认样式无法满足的话可以从父组件传过来cname来满足该样式
            cname: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                btnClass: 'btn'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/styles/element";
    /*这个样式是默认样式*/
    .btn {
        @include btn;
    }
</style>
