<template>
    <panel title="新品推荐">
        <section class="content">
            <div>更多尖货 ></div>
            <!--引入轮播图组件-->
            <slider :options="options" :items="items" cname="product-slider"></slider>
        </section>
    </panel>

</template>

<script>
    import Panel from "@/view/core/panel";
    import Slider from "@/view/core/slider";

    export default {
        components: {Slider, Panel},
        data() {
            return {
                items: [{
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
                }, {
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
                }, {
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                }, {
                    href: "home",
                    url: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                }],
                options: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                    freeMode: true,
                },
            }
        }
    }
</script>
<!--注意这里去掉scoped,相当于使用全局样式来修改轮播图的样式，相当于是全局作用域
    但是属性在product-slider下的。
-->
<style lang="scss">
    .product-slider {
        /*这个是轮播图的样式*/
        .swiper-container {
            box-sizing: border-box;
            padding: 0 12px;

            .swiper-slide {
                a {
                    display: inline-block;
                    width: 100%;

                    img {
                        width: 100%;
                        display: block;
                        height: 150px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }

</style>
<!--这个style是定义更多尖货的style,作用域只影响当前组件-->
<style lang="scss" scoped>
    /*
总结： 新品推荐
- 使用panel直接套用轮播图实现效果。
- 除了传入slider的属性来控制轮播图的模式外，传入cname的样式product-slider来定义轮播图里面的图片的样式（这里使用全局样式修改）
- 在写个style使scoped 来定义局部样式，主要来控制更多尖货的位置。
     */
    .content {
        padding-bottom: 40px;
        position: relative;
        /*更多尖货使用定位方式实现*/
        & > div {
            position: absolute;
            right: 11px;
            top: -35px;
            font-size: 14px;
            color: #999;
        }
    }
</style>
