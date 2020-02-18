<template>
    <Panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
                <swiper-slide>签到领流量，1元500M！<em>></em></swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel";
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {Panel, swiper, swiperSlide},
        data() {
            return {
                options: {
                    autoplay: true,
                    loop: true,
                    direction: "vertical",
                }
            }
        }
    }
</script>

<!--公共样式-针对竖向轮播-->
<style lang="scss">
    .swiper-container-vertical {
        height: 36px;   /*定义轮播的高度只能容纳一行文本*/

        .swiper-slide {
            font-family: PingFangSC-Medium;
            font-size: 14px;    /*轮播字体颜色和大小*/
            color: #333;
            em{
                color: #ddd;    /*小箭头的位置，右浮动*/
                float: right;
                margin-right: 10px;
            }
        }
    }

</style>

<!--私有样式-针对面板-->
<style module lang="scss">
    @import "../../assets/styles/element";
    .panel {
        @include panel;
        margin-top: 60px !important;

        > h4 {
            display: none;
        }

        .content {
            height: 36px;
            line-height: 36px;
            overflow: hidden;
            padding-left: 89px;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
        }
    }

</style>
