<!--业务组件 2部分组成（轮播图+宫格） -->
<template>
    <article class="">
        <!--轮播图,items传入数据 cname传入自定义名称slider传入样式-->
        <Slider :items="items" :cname="$style.slider"/>
        <!--宫格-->
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import Slider from "@/view/core/slider";

    export default {
        components: {Slider},
        data() {
            return {
                // 轮播图的数据
                items: [{
                    href: 'home',
                    url: '//img20.360buyimg.com/mcpageview/jfs/t1/106678/1/12210/92914/5e4535daE1770d4c3/30137746303353c1.jpg'
                }, {
                    href: 'home',
                    url: '//img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg'
                }, {
                    href: 'home',
                    url: '//img20.360buyimg.com/mcpageview/jfs/t1/95208/39/9858/41488/5e11d67eE007e4d4b/c7fe2048ac932c6f.jpg'
                }],
                // 宫格数据
                enters: [{
                    href: 'Home',
                    img: '//img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png',
                    title: '优惠券'
                }, {
                    href: 'Home',
                    img: '//img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png',
                    title: '领钢镚'
                }, {
                    href: 'Home',
                    img: '//img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png',
                    title: '白条提额'
                }, {
                    href: 'Home',
                    img: '//img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png',
                    title: '领京东'
                }, {
                    href: 'Home',
                    img: '//img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png',
                    title: '工资理财'
                }
                ]
            }
        }
    }
</script>

<style module lang="scss">
    @import "../../assets/styles/element";
    /*轮播图cname的样式,传给子组件*/
    /*.hs /deep/ .son{*/
    /*   margin-top: 200px;*/
    /*}*/
    .slider {
        margin-top: 50px;

        img {
            width: 100%;
        }
    }

    /*宫格样式*/
    .list {
        /*导入list传入列，css模块化*/
        @include list(row);
        background: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        /*flex布局两端对齐*/
        justify-content: space-around;

        a {
            text-decoration: none;
        }

        /*列表中的每项*/
        .item {
            text-align: center;
            /*每个item下的图片*/
            img {
                display: inline-block;
                width: 45px;
                height: 45px;
            }

            h4 {
                font-size: 13px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>
