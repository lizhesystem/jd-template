<template>
    <panel title="生活服务">
        <ul class="content">
            <!--因为这里的li并不是经常变动的属性属于导航类，没必要从后端请求过来。这里应该使用router跳转这里写成静态了，只是为了演示-->
            <li class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135"
                     alt="">
                <p>惠加油</p>
            </li>
            <li class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132"
                     alt="">
                <p>小白信用</p>
                <p>全新升级</p> <!--注意这里的样式细节-->
            </li>
            <li class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135"
                     alt="">
                <p>信用卡还款</p>
            </li>
            <li class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135"
                     alt="">
                <p>卡转让</p>
            </li>
            <li class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135"
                     alt="">
                <p>定期还款</p>
            </li>
        </ul>

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

<style scoped lang="scss">
    /*
    总结： 生活服务
    - ul>li布局模式,li里放img标签图片还有p
    - flex布局以及定义padding
    - 有个细节使用nth-child(3) 找第三个p标签定义红色的字体。
    */

    @import "../../assets/styles/element";
    .content {
        @include flex(row);
        box-sizing: border-box; // 加padding最好加上box-sizing
        padding-bottom: 20px;

        .item {
            width: 20%;
            text-align: center;

            img {
                height: 45px;
                width: 45px;
            }

            p {
                font-size: 13px;
                color: #666;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-top: 6px;
                /*第三个p标签 就是要红色的这个p*/
                &:nth-child(3) {
                    color: #FF801A;
                }
            }
        }
    }
</style>
