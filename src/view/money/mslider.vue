<template>
    <article>
        <!--轮播图,items传入数据 cname传入自定义名称slider传入样式-->
        <Slider :items="items" :cname="$style.slider"/>
    </article>
</template>

<script>
    import Slider from "@/view/core/slider";

    export default {
        components: {Slider},
        data() {
            return {
                items: [{
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
                }, {
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
                }],
            }
        }
    }
</script>

<style module lang="scss">

        .slider{
            margin-top: 50px;
            img{
                width: 100%;
            }
        }

</style>
