<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
                     alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 ></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
                     alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 ></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
                     alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.80%</p>
                </div>
                <em>去赚钱 ></em>
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
                    width: 172px;

                    p {
                        color: #ff3232;
                        font-size: 12px;
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
