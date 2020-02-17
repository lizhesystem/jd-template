<template>
    <!--引入面板组件,这个panel样式用来覆盖添加panel的样式,传给panel的cname-->
    <panel title="新手特权" :class="$style.panel">
        <!--panel下定义了h4下面的内容是h4下面的2个面板-->
        <section :class="$style.content">
            <!--左面板-->
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100"
                     alt="">
            </div>
            <!--右面板-->
            <div :class="$style.item">
                <ul>
                    <li>
                        <!--如果把img放下面，样式就会出现问题无法移到右边，我个人理解先浮动和后浮动的区别！-->
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200"
                             alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100"
                             alt="">
                        <h4 :class="$style.red">打白条<span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享好礼</p>
                    </li>
                </ul>
            </div>
        </section>
    </panel>
</template>

<script>
    import Panel from "@/view/core/panel";

    export default {
        components: {Panel},
        data() {
            return {}
        }
    }
</script>

<style module lang="scss">
/*
总结： 新手特权模块
- 首先是引入公共组件然后传入title和自定义的下边框样式给cname,剩下的内容就是自己的内容solt内容。
- 页面抽象成2大部分，使用语义化标签select，下面分为2个div来展示。
- 第一个div内部结构为h4>span、p、img。
- 第二个div一分为二,使用ul>li*2方式，每个li下再分h4、p、img。
- 很多相同的样式统一使用一个类来定义，第二个div里的img需要放到第一层float到右边的原因,左边的元素靠左,巧用box-sizing
  以及scss的&还有>特殊语意符号,以及css3的伪类选择器first-child。
*/

    @import "../../assets/styles/element";
    // 传入子组件的样式.panel
    .panel {
        > h4 {
            border-bottom: 1px solid #ddd;
        }
        // 面板下插槽内容,也就是自定义内容的样式
        .content {
            @include flex(row);
            .item {
                width: 50%;
                box-sizing: border-box;
                /*item下面第一个div,这个是scss里的语法，表示当前选择的对象也就是上级item*/
                &:first-child{
                    padding: 16px 10px;
                    text-align: center;
                    border-right: 1px solid #ddd;
                    font-size: 10px;
                    img{
                        height:66px;
                        width: 66px;
                        margin: 10px auto 0;
                    }
                }
                h4{
                    font-size: 13px;
                    line-height: 20px;
                }
                .red{
                    color: #f00;
                }
                .gray{
                    color: #999;
                    font-size: 12px;
                }
                p{
                    margin-top: 3px;
                    /*font-size: 12px;*/
                }
                ul{
                    width: 100%;
                    li{
                        height: 72px;
                        width: 100%;
                        padding: 16px 14px;
                        box-sizing: border-box;
                        &:first-child{
                            border-bottom: 1px solid #ddd;
                        }
                        h4{
                            white-space: nowrap;        // 不换行
                            text-overflow: ellipsis;    // 超出...
                            overflow: hidden;           // 超出隐藏 3个一般组合
                            text-align: left;
                        }
                        img{
                            width: 40px;
                            height: 40px;
                            float: right;
                        }

                    }
                }
            }
        }
    }

</style>
