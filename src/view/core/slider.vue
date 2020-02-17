<!--轮播图组件-->
<template>
    <section :class="cname">
        <!--传递近来的属性options-->
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <!--每个轮播图的slide-->
            <swiper-slide v-for="item in items" :key="item.url">
                <!--轮播图以及跳转-->
                <router-link :to="{name:item.href}">
                    <img :src="item.url" alt="">
                </router-link>
            </swiper-slide>
            <!--指示器,pagination判断是否有指示器-->
            <div class="swiper-pagination" v-if="options.pagination"  slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    // require styles
    import 'swiper/dist/css/swiper.css'

    export default {
        props: {
            // 接收传过来的样式以及轮播图的参数
            cname: {
                type: String,
                default: '',
            },
            // 可以使用父组件
            options: {
                type: Object,
                default() {
                    return {
                        autoplay: true,  // 自动滚动
                        loop: true,      // 循环
                        pagination: {
                            el: ".swiper-pagination", //官方规定样式
                        },
                        notNextTick: false
                    }

                }
            },
            items: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped lang="scss">
    // ~指向到node_module
    @import "~swiper/dist/css/swiper.css";
</style>
