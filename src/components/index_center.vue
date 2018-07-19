<template>
    <div class="ind_c">
        <h3>{{title}}</h3>
        <h4>{{abstract}}</h4>
        <div class="row">
            <div class="col-md-4 col-sm-6" v-for="(item,index) of list" :key="index">
                <div :style="{background:'url('+item[1]+')',backgroundSize:'75px'}" class="back"></div>
                <h4 class="font_w">{{item[0]}}</h4>
                <table>
                    <tr>
                    <td @click="get(item[2])">{{item[2]}}</td>
                    <td>|</td>
                    <td @click="get(item[3])">{{item[3]}}</td>
                    <td>|</td>
                    <td @click="get(item[4])">{{item[4]}}</td>
                    </tr>
                    <tr>
                    <td @click="get(item[5])">{{item[5]}}</td>
                    <td>|</td>
                    <td @click="get(item[6])">{{item[6]}}</td>
                    <td>|</td>
                    <td @click="get(item[7])">{{item[7]}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "海纳百川，精选全球的高品质软件与服务",
            abstract: "开发者工具、建站、API、企业应用，支撑云端应用服务",
            list: [
                [
                    "基础软件",
                    "https://img.alicdn.com/tps/TB1ceKWLXXXXXaEapXXXXXXXXXX-150-9000.jpg",
                    "预装PHP",
                    "预装JAVA",
                    "预装ASP/.NET",
                    "预装建站系统",
                    "服务器软件",
                    "应用开发工具"
                ],
                [
                    "网站建设",
                    "https://img.alicdn.com/tps/TB1sd_fLXXXXXX2XFXXXXXXXXXX-150-9000.jpg",
                    "网站模板",
                    "企业官网",
                    "电子商务  ",
                    "定制化服务",
                    "推广与营销",
                    "手机网站"
                ],
                [
                    "服务与培训",
                    "https://img.alicdn.com/tps/TB1icTcLXXXXXclXFXXXXXXXXXX-150-9000.jpg",
                    "故障排查",
                    "数据迁移",
                    "环境配置",
                    "云培训与认证",
                    "木马病毒查杀",
                    "专线接入"
                ],
                [
                    "企业应用",
                    "https://img.alicdn.com/tps/TB1l3YmLXXXXXb9XXXXXXXXXXXX-150-9000.jpg",
                    "视频直播",
                    "销售管理",
                    "企业服务",
                    "协同办公",
                    "人事管理",
                    "财务管理"
                ],
                [
                    "安全市场",
                    "https://img.alicdn.com/tps/TB1.1fkLXXXXXXrXpXXXXXXXXXX-150-9000.jpg",
                    "网络安全",
                    "主机安全",
                    "应用安全",
                    "数据安全",
                    "安全管理",
                    "安全服务"
                ],
                [
                    "API市场",
                    "https://img.alicdn.com/tps/TB1heGZLXXXXXaeapXXXXXXXXXX-150-9000.jpg",
                    "API服务",
                    "电子商务",
                    "金融理财",
                    "企业管理 ",
                    "交通地理",
                    "气象水利"
                ]
            ]
        };
    },
    methods:{
             get: function(id) {
            this.$router.push({
                path: "/ig_para",
                query: {
                    id: id
                }
            });
        }
    }
};
</script>
<style scoped>
.ind_c {
    width: 80%;
    float: left;
    margin-left: 10%
}
h3 {
    margin-top: 50px;
}
h4,
h5 {
    line-height: 40px;
}
.back {
    width: 75px;
    height: 75px;
    margin: auto;
}
.font_w {
    font-weight: bold;
}
.row table {
    width: 300px;
    margin: auto;
}
.row table tr td:hover{
    color: #00c1de;
    cursor: pointer;
}
.font_w:hover{
    color: #00c1de;
    cursor: pointer;
}
.col-md-4{
    padding-top: 20px;
}
</style>


