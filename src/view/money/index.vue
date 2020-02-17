<template>
    <div>
        <Heador/>
        <Mslider/>
        <Coupon/>
        <Money/>
        <Lcj/>
    </div>
</template>

<script>
    import Heador from '@/view/public/header'
    import Mslider from "@/view/money/mslider";
    import Money from "@/view/money/money";
    import Coupon from "@/view/money/coupon"
    import Lcj from "@/view/money/lcj";

    export default {
        components: {Lcj, Money, Mslider, Heador,Coupon},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">

</style>
