<template>
    <div>
        <Header/>
        <Islider/>
        <Btfl/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
    import Header from "../public/header"
    import Navbar from "../public/navbar";
    import Footer from "../public/footer";
    import Islider from "./islider";
    import Btfl from "./btfl";
    import Service from "./service";

    export default {
        components: {Service, Btfl, Islider, Footer, Navbar, Header}
    }
</script>

<style scoped>

</style>
