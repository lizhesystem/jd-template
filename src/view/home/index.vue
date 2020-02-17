<!--入口组件-->
<template>
    <div>
        <Heador/>
        <Hslider/>
        <novice/>
        <borrow/>
        <money/>
        <product/>
        <life/>
        <footers/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from "@/view/public/header";
    import Hslider from "@/view/home/hslider";
    import Novice from "@/view/home/novice";
    import Borrow from "@/view/home/borrow";
    import Money from "@/view/home/money";
    import Product from "@/view/home/product";
    import Life from "@/view/home/life";
    import footers from "@/view/public/footer";
    import Navbar from "@/view/public/navbar";

    export default {
        components: {
            Navbar,
            footers,
            Life,
            Product,
            Money,
            Borrow,
            Novice,
            Hslider,
            Heador,
        }

    }
</script>

<style scoped lang="scss">

</style>
