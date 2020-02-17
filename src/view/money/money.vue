<template>
    <panel title="理财精选">
        <section class="content">
            <!--使用dl来定义,这样写样式的时候会很舒服-->
            <dl class="item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.tag}} </span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </panel>
</template>

<script>
    import Panel from "@/view/core/panel";

    export default {
        components: {Panel},
        data() {
            return {
                items: [{
                    title: "定期理财",
                    tag: "理财首选",
                    rate: "5.60%",
                    text: "历史年化回报率"
                }, {
                    title: "小白理财",
                    tag: "理财首选",
                    rate: "4.22%",
                    text: "7日年化收益率"
                }, {
                    title: "月月盈",
                    tag: "养老保障",
                    rate: "5%",
                    text: "七日年化收益率"
                }, {
                    title: "小白基金",
                    tag: "天天赚钱",
                    rate: "4.27%",
                    text: "七日年化收益率"
                }]
            }
        }
    }
</script>

<style scoped lang="scss">
    /*
总结： 理财精选
- 该模块首先从设计上要抽象化，先抛弃横线和竖线，把它先想成四个div来布局。上面2个下面2个。
- 这里的数据肯定需要从后端加载的，不能写死，使用for循环即可。布局的话不用li而考虑用dl dt 这样选择样式的时候可更方便。
- 使用flex布局把四个盒子四等分，一个盒子宽度50%，自动换行，然后根据每个盒子里的内容写样式。
- 中间的横线使用伪类定义，绝对定位到中间位置。右侧的竖线夜视仪伪类，这样不用多些div，并且好控制，结构清晰
- 使用nth-child(2) 来选择标签。
*/
    @import "../../assets/styles/element";

    .content {
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        /*定义伪类实现中间的横线*/
        &:after{
            content: " ";
            display: block;
            width: 100%;
            height: 0;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            position: relative;
            top: -104px;
        }
        .item {
            width: 50%;
            padding: 17px 8px;
            box-sizing: border-box;
            position: relative;
            /*定义一个item的伪类来绝对定位父类*/
            &:after{
                content: " ";
                display: block;
                width: 1px;
                height: 68px;
                border-right: 1px solid #eee;
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -34px;
            }
            /*:nth-child(2n)代表选取偶数标签，把偶数的标签的伪类右标签给去掉*/
            &:nth-child(2n){
                &:after{
                    display: none;
                }
            }
            dt {
                color: #333;
                font-size: 15px;
                line-height: 21px;

                span {
                    font-size: 8px;
                    color: #ff5155;
                    border: 1px solid #ff5155;
                    padding: 0 4px;
                    vertical-align: 0.5px;
                    margin-left: 1px;
                }
            }

            dd {
                /* &:表示当前选择的对象也就是上级dd,nth-child(2)代表该节点下第二个元素  */
                &:nth-child(2) {
                    font-weight: 700;
                    font-size: 22px;
                    height: 29px;
                    line-height: 29px;
                    color: #FF5155;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                &:nth-child(3) {
                    font-size: 12px;
                    height: 17px;
                    line-height: 17px;
                    color: #999;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }


        }
    }

</style>
