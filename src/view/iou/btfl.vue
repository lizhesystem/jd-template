<template>
    <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
                     alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通 ></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
                     alt="">
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
                     alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额 > </em>
            </div>
        </section>
    </Panel>
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
    @import "../../assets/styles/element";

    .panel {
        @include panel;

        > h4 {
            border-bottom: 1px solid #ddd;
        }

        .content {
            @include flex;  /*每个item竖向排序*/

            .item {
                @include flex(row); /*item里的每个元素横向布局*/
                align-items: center;
                height: 70px;
                &:after{
                    content: " ";
                    box-sizing: border-box;
                    height: 0;
                    border-bottom: 1px solid #ddd;
                    width: 100%;
                    margin-left: 75px;
                }
                /*使用last-child定位元素最后一个下边框为背景色*/
                &:last-child:after{
                    border-bottom: #fff;
                }
                > img {
                    height: 44px;
                    width: 44px;
                    display: inline-block;
                    margin: 0 16px;
                }

                > div {
                    font-size: 16px;
                    color: #333;
                    line-height: 1.8;
                    width: 160px;

                    p {
                        color: #999;
                        font-size: 13px;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                >em{
                    color: #FF801A;
                    font-size: 13px;
                }
            }
        }


    }

</style>
