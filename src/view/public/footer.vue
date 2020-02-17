<template>
    <panel  title="公司信息" :class="$style.panel">
        <!--页脚-->
        <ul :class="$style.content">
            <!--第一个li是图片-->
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"
                     alt="">
            </li>
            <!--第二个div是3个小图标-->
            <li>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"
                         alt="">
                    <p>客户端</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"
                         alt="">
                    <p>触屏版</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108"
                         alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </panel>

</template>

<script>
    import Panel from "@/view/core/panel";

    export default {
        components: {Panel}
    }
</script>

<style module lang="scss">
    /*
    总结：公司信息
    - 这个组件定义到public里，是因为每个页面都会有这个公共页面。
    - ui>li布局来展示,把ul当前父节点
    - 需要注意的地方，如果只找当前父节点下的子节点使用>来定义，如果找全部相同子节点的话不用>来表示。
    - nth-child(n+3)的使用,大于等于第三个的标签。
    */
    @import "../../assets/styles/element";
    /*这个面板没有h4需要隐藏*/
    .panel {
        /*上10 左右0 下50 覆盖子组件的maring样式*/
        margin: 10px 0 50px;
        & > h4 {
            display: none;
        }

        /*footer的样式*/
        .content {
            @include flex;
            background: #F5F5F5;
            li {
                color: #999;
                font-size: 13px;
                width: 100%;
                text-align: center;
                > img {
                    width: 100%;
                    height: 72px;
                }
                &:nth-child(2){
                    @include flex(row);
                    justify-content: space-around;
                    height: 93px;
                    box-sizing: border-box;
                    >div{
                        text-align: center;
                        box-sizing: border-box;
                        padding-top: 10px;
                        width: 33.3333%;
                        img{
                            height: 45px;
                            width: 45px;
                        }
                        p{
                            font-size: 13px;
                            text-align: center;
                            color: #999;
                            margin-top: 6px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: block;
                        }
                    }
                }
                /*:nth-child(n+3)选取大于等于3标签，“n”表示从整数 */
                &:nth-child(n+3){
                    padding: 12px 0;
                    border-top: 1px solid #ddd;
                    height: 19px;
                    line-height: 19px;
                }
            }
        }

    }

</style>
