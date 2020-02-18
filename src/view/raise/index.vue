<template>
    <div>
        <Header/>
        <Rslider/>
        <Sign/>
        <In/>
        <More/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
    import Header from "../public/header"
    import Footer from "../public/footer";
    import Navbar from "../public/navbar";
    import Rslider from "./rslider";
    import Sign from "./sign";
    import In from "./in";
    import More from "./more";

    export default {
        components: {More, In, Sign, Rslider, Header, Navbar, Footer},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">


</style>
