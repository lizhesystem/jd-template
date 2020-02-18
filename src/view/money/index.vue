<template>
    <div>
        <Heador/>
        <Mslider/>
        <Coupon/>
        <Money/>
        <Lcj/>
        <Lcjx/>
        <Jdzt/>
        <!--通过修改这个组件的样式隐藏一个客户图片-->
        <Footer class="mfooter" />
        <Navbar/>
    </div>
</template>

<script>
    import Heador from '@/view/public/header'
    import Mslider from "@/view/money/mslider";
    import Money from "@/view/money/money";
    import Coupon from "@/view/money/coupon"
    import Lcj from "@/view/money/lcj";
    import Lcjx from "./lcjx";
    import Footer from "../public/footer";
    import Navbar from "../public/navbar";
    import Jdzt from "./jdzt";

    export default {
        components: {Jdzt, Navbar, Footer, Lcjx, Lcj, Money, Mslider, Heador,Coupon},
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    /*由于理财页面没有客服图片，通过这种全局的样式方式单独调整隐藏这个图片*/
    .mfooter{
        ul{
            li:first-child{
                display: none;
            }
        }
    }

</style>
