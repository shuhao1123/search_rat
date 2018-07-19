<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li :class="{active:index==num}" v-for="(item,index) in tabs" :key='index' @click="tab(index)">{{item}}</li>
            </ul>
        </div>
        <div id="box">
            <div v-for='(itemcon,index) in tabContents' :key='index' v-show="index==num">{{itemcon}}</div>
        </div>
        <!-- <ee></ee> -->
    </div>
</template>
<script>
import echart from "./echarts";
export default {
    components: {
        "ee": echart
    },
    data() {
        return {
            tabs: ["标题一", "标题二", "标题三"],
            tabContents: ["内容一", "内容二", "内容三"],
            num: 2
        };
    },
    methods: {
        tab(index) {
            console.log(index);
            this.num = index;
        }
    }
};
</script>
<style scoped>
#app {
    width: 80%;
    margin: 30px auto;
}
#nav {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
}
#app ul {
    float: left;
    margin-left: 0;
    list-style-type: none;
}
#app ul li {
    float: left;
    padding: 0 10px;
    cursor: pointer;
}
#box {
    width: 100%;
    height: auto;
    padding: 10px 10px;
}
.active {
    color: rebeccapurple;
    font-weight: bold;
}
</style>