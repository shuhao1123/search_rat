<template>
    <div class="bottom">
        <h3>架构咨询与服务</h3>
        <div class="row">
            <div class="col-md-4">
                <div class="bot_ltop">
                    <h4>云服务器选购</h4>
                    <img src="./../assets/1532310787(1).jpg">
                    <h5>上云首选0.73元/日</h5>
                    <button><a href="https://www.aliyun.com/notfound/">查看详情</a></button>
                </div>
                <div class="bot_lbot">
                    <h4>电子合同生成</h4>
                    <img src="./../assets/1532310831(1).jpg">
                    <h5>选择订单，生成合同</h5>
                    <button><a href="#">生成合同</a></button>
                </div>
            </div>
            <div class="col-md-8">
                <div class="bot_r">
                    <h4>架构咨询与服务</h4>
                    <div class="bot_r_top">
                        <ul>
                            <li class="col-md-2 col-xs-4" v-for="(item,index) in list.data" :key="index" @click="show_con(index)" :class="{active:index==status}">
                                <p><img :src="item.pic"></p>
                                <h5>{{item.name}}</h5>
                                <h6>{{item.zw}}</h6>
                            </li>
                        </ul>
                        <div v-for="(item,index) in list.data" :key="index" v-show="index==status" class="bot_box">{{item.introduce}}</div>
                    </div>
                    <div class="bot">
                        <ul>
                            <li>
                                <div class="bot1"><img src="https://img.alicdn.com/tps/TB1mEu2KVXXXXbjXFXXXXXXXXXX-50-50.png">
                                </div>
                                <div class="bot2">
                                    <h5>量身定制解决方案</h5>
                                    <h6>1v1咨询，分析上云可行性</h6>
                                </div>
                            </li>
                            <li>
                                <div class="bot1">
                                    <img src="https://img.alicdn.com/tps/TB1ZlCPKVXXXXXwaXXXXXXXXXXX-50-50.png">
                                </div>
                                <div class="bot2">
                                    <h5>成功案例解析</h5>
                                    <h6>架构解析深度解读成功架构</h6>
                                </div>
                            </li>
                            <li>
                                <div class="bot1">
                                    <img src="https://img.alicdn.com/tps/TB1XlaNKVXXXXaHaXXXXXXXXXXX-50-50.png">
                                </div>
                                <div class="bot2">
                                    <h5>成熟架构一键选购</h5>
                                    <h6>多款成熟架构、超值推荐</h6>
                                </div>
                            </li>
                        </ul>
                        <p>
                            <button class="zx"><a href="#">我要咨询</a></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            status: 0,
            list: {
                data: [
                    {
                        pic:
                            "https://img.alicdn.com/tps/TB1P85IKVXXXXc4aXXXXXXXXXXX-150-150.png",
                        name: "余香",
                        zw: "高级架构师",
                        introduce:
                            "阿里云高级专家、阿里云电商行业架构师团队负责人。具有十年以上互联网架构及政府企业信息化项目经验，对云计算、大数据均有精深的理解及丰富的应用经验，现致力于电商行业与云计算、大数据技术的融合发展。"
                    },
                    {
                        pic:
                            "https://img.alicdn.com/tps/TB1PvKVKVXXXXXJXVXXXXXXXXXX-150-150.png",
                        name: "刘正宇",
                        zw: "资深架构师",
                        introduce:
                            "博士，阿里云电商行业、政府行业资深专家。专注于云计算行业解决方案、大数据应用、企业级架构（EA）等领域，在互联网、公安、司法、汽车、金融等行业有深入的理解和丰富的从业经验，擅长行业解决方案的咨询与落地。"
                    },
                    {
                        pic:
                            "https://img.alicdn.com/tps/TB1NteMKVXXXXbMaXXXXXXXXXXX-150-150.png",
                        name: "刘鑫",
                        zw: "资深架构师",
                        introduce:
                            "阿里云电商行业资深专家，华中科技大学硕士研究生。2011年加入阿里后，一直从事数据开发、建模和架构的工作，熟悉业界主流的计算平台和开发工具，专注于电商、互联网金融行业的大数据应用解决方案，对网站高性能架构和音视频技术有深入研究。"
                    },
                    {
                        pic:
                            "https://img.alicdn.com/tps/TB1WL5LKVXXXXbKaXXXXXXXXXXX-150-150.png",
                        name: "叶剑锋",
                        zw: "资深架构师",
                        introduce:
                            "阿里云电商行业、政府行业资深架构师。具有八年以上的一线研发经验，曾带领研发团队多次完成优秀产品交付。专注于电商，政府行业相关业务，对如何通过技术提升业务价值有深刻的理解与实践。"
                    },
                    {
                        pic:
                            "https://img.alicdn.com/tps/TB1rA96KVXXXXbgXpXXXXXXXXXX-150-150.png",
                        name: "贺龙",
                        zw: "资深架构师",
                        introduce:
                            "阿里云资深技术专家，专注于上云、去O、混合云解决方案以及售中业务落地技术。具有五年以上电商、游戏、广告等互联网行业从业经验。专精于数据库领域，擅长海量数据库架构设计与优化，有丰富的数据库运维管理和问题诊断经验，专长于为客户提供云上数据库"
                    }
                ]
            }
        };
    },
    methods: {
        show_con(index) {
            this.status = index;
        }
    }
};
</script>
<style scoped>
.bottom {
    width: 100%;
    clear: both;
    padding-top: 50px;
}
.row {
    width: 80%;
    margin: 50px auto;
}

.bot_ltop {
    border: 1px solid #eee;
    padding: 30px 0;
}
.bot_lbot {
    border: 1px solid #eee;
    padding: 30px 0;
    margin-top: 30px;
}
.bot_ltop button,
.bot_lbot button {
    background: #fff;
    color: #00c1de;
    border: 1px solid #00c1de;
    padding: 3px 8px;
    margin-top: 20px;
}
.bot_ltop button a,
.bot_lbot button a{
    color: #00c1de;
    text-decoration: none;
}
.bot_ltop:hover,
.bot_lbot:hover {
    border: 1px solid #00c1de;
}
.bot_r {
    border: 1px solid #eee;
    padding: 30px 0;
    float: left;
    width: 100%;
}
.bot_r:hover {
    border: 1px solid #00c1de;
}
.bot_r h4 {
    line-height: 60px;
}
.bot_r_top ul {
    width: 90%;
    margin: auto;
}
.bot_r_top ul li {
    float: left;
    width: 20%;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}
.bot_r_top ul li img {
    width: 80px;
    border-radius: 40px;
    border: 1px solid #eee;
    margin: 15px 0;
}
.bot_r_top .active {
    border-bottom: 1px solid #00c1de;
}
.bot_r_top .active img {
    border: 1px solid #00c1de;
}
.bot_box {
    width: 90%;
    margin-top: 200px;
    clear: both;
    padding: 20px 0;
    text-align: left;
    margin-left: 5%;
    height: 83px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.bot {
    float: left;
    clear: both;
    width: 100%;
    padding: 10px 5%;
}
.bot ul li {
    float: left;
    width: 33%;
    cursor: pointer;
}
.bot ul li img {
    width: 25px;
}
.bot1 {
    width: 45px;
    float: left;
}
.bot2 {
    width: auto;
    float: left;
    text-align: left;
}
.bot2 h6 {
    color: #999;
}
.bot1 img {
    margin-top: 15px;
}
.zx {
    background: #fff;
    color: #00c1de;
    border: 1px solid #00c1de;
    padding: 3px 8px;
    margin-top: 20px;
}
.zx a{
    color: #00c1de;
    text-decoration: none;
}
@media screen and (max-width: 992px){
    .bot_r{
        margin-top: 30px;
    }
}
@media screen and (max-width: 768px){
    .bot_r_top ul li{
        width: 33%;
    }
    .bot ul li{
        width: 100%;
    }
    .row{
        width: 95%;
    }
}
</style>


