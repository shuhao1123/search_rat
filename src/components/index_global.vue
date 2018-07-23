<template>
    <div id="index_global">
        <swiper></swiper>
        <div class="ig_img"><img src="https://img.alicdn.com/tfs/TB1EGNRRVXXXXazXVXXXXXXXXXX-271-123.png"></div>
        <h3>{{caption}}</h3>
        <h4>{{about}}</h4>
        <div class="ig">
            <ul>
                <li v-for="(item,index) in ig" :key="index" @click="tab(index)" :class="{active:index==sy}" class="jt_bot">
                    <p><img :src="item[item[3][0].status]"></p>
                    <span class="list_title">{{item[0]}}</span>
                    <span class="triangle_border_up"></span>
                </li>
            </ul>
        </div>
        <div class="box row">
            <ul v-for="(item,index2) in ig_box" :key="index2" v-show="index2==sy">
                <li v-for="(item_title,index1) in item" :key="index1" class="col-md-4 col-sm-6" @click="get(item_title.title)">
                    <!-- <router-link :to="{path:'/ig_para',params:{id:item_title}}"> -->
                    <p>{{item_title.title}}</p>
                    <p>{{item_title.content}}
                        <span class="jt"></span>
                    </p>
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>
        <index_center></index_center>
        <index_bottom></index_bottom>
        <router-view></router-view>
    </div>
</template>
<script>
import index_center from "./index_center";
import index_bottom from "./index_bottom";
import swiper from "./swiper";
export default {
    components: {
        index_center,
        swiper,
        index_bottom
    },
    data() {
        return {
            caption: "全球领先、安全、稳定的云计算产品",
            about:
                "计算、存储、网络、安全、大数据、人工智能、惠普科技助您飞跃发展",
            ig: [
                [
                    "弹性计算",
                    "https://img.alicdn.com/tfs/TB1fk0RQVXXXXajXVXXXXXXXXXX-160-160.png",
                    "https://img.alicdn.com/tfs/TB1XhNOQVXXXXXcaXXXXXXXXXXX-160-160.png",
                    [{ status: 2 }]
                ],
                [
                    "存储和CDN",
                    "https://img.alicdn.com/tfs/TB1oCR6QVXXXXXXXFXXXXXXXXXX-160-160.png",
                    "https://img.alicdn.com/tfs/TB1s_xUQVXXXXXiXVXXXXXXXXXX-160-160.png",
                    [{ status: 1 }]
                ],
                [
                    "数据库",
                    "https://img.alicdn.com/tfs/TB1kZRHQVXXXXX.aXXXXXXXXXXX-160-160.png",
                    "https://img.alicdn.com/tfs/TB1AO1pQVXXXXX6XXXXXXXXXXXX-160-160.png",
                    [{ status: 1 }]
                ],
                [
                    "网络",
                    "https://img.alicdn.com/tfs/TB1UeN.QVXXXXX1XFXXXXXXXXXX-160-160.png",
                    "https://img.alicdn.com/tfs/TB1hCRYQVXXXXa7XFXXXXXXXXXX-160-160.png",
                    [{ status: 1 }]
                ],
                [
                    "域名与网站",
                    "https://img.alicdn.com/tfs/TB1Qr4RQVXXXXbvXVXXXXXXXXXX-160-160.png",
                    "https://img.alicdn.com/tfs/TB1Y.p7QVXXXXXHXFXXXXXXXXXX-160-160.png",
                    [{ status: 1 }]
                ]
            ],
            sy: 0,
            ig_box: [
                [
                    {
                        title: "弹性裸金属服务器",
                        content: "具备极限计算、物理隔离、弹性的服务器"
                    },
                    {
                        title: "专有网络 VPC",
                        content: "构建逻辑隔离网络，确保资源安全"
                    },
                    {
                        title: "超级计算集群（公测中）",
                        content: "通过ROMA网络扩展的强大的并行计算能力"
                    },
                    {
                        title: "负载均衡",
                        content: "对多台服务器进行流量分布的负载均衡服务"
                    },
                    {
                        title: "FPGA云服务器",
                        content: "FPGA实例、低时延可编程硬件加速服务"
                    },
                    {
                        title: "弹性高性能计算",
                        content: "提供一站式HPCASS的技术计算云平台"
                    },
                    {
                        title: "GPU 云服务器",
                        content: "GPU实例、强大的计算性能、弹性按需扩展"
                    },
                    {
                        title: "弹性伸缩",
                        content: "自动调整弹性计算资源的管理服务"
                    },
                    {
                        title: "块存储",
                        content: "可弹性扩展、高性能、高可靠的块级随机存储"
                    },
                    {
                        title: "容器服务",
                        content: "支持微服务架构、全生命周期管理的Docker服务"
                    }
                ],
                [
                    {
                        title: "对象存储 OSS",
                        content: "比传统存储成本下降25%~75%的强安全企业级存储"
                    },
                    {
                        title: "文件存储 NAS",
                        content: "支持NFS、CIFS协议的可共享文件存储"
                    },
                    {
                        title: "表格存储 TableStore",
                        content: "适用于社交、金融、物联网百万并发的Nosql"
                    },
                    {
                        title: "块存储",
                        content: "随机访问能力高达2万IOPS的块级存储"
                    },
                    {
                        title: "归档存储 OAS",
                        content: "适用于历史数据归档、强安全、高持久低成本存储"
                    },
                    {
                        title: "云存储网关",
                        content: "云上云下部署、轻松对接云存储、无限空间"
                    },
                    {
                        title: "闪电立方",
                        content: "海量离线数据迁移服务，PB级数据只需要一周"
                    },
                    {
                        title: "混合云阵列",
                        content: "本地部署的高性能存储设备，与云端无缝链接"
                    },
                    {
                        title: "智能云相册（公测中）",
                        content: "为影像类应用提供一站式的解决方案"
                    },
                    {
                        title: "全站加速",
                        content:
                            "适用于动静混合型、纯动态型站点或应用的内容发布加速服务"
                    },
                    {
                        title: "安全加速 SCDN",
                        content: "快速建立分布式的安全加速网络"
                    },
                    {
                        title: "PSDN",
                        content: "适用于点播、直播、大文件的边缘节点分发布"
                    },
                    {
                        title: "CDN",
                        content: "常用于视频、图片、文件加速的跨域网络分布"
                    }
                ],
                [
                    {
                        title: "云数据库 Mongo DB版",
                        content: "三副本集和集群架构文本存储，数据可热迁移"
                    },
                    {
                        title: "云数据库 POLARDB",
                        content: "满足高吞吐在线事务处理，兼容MySQL协议"
                    },
                    {
                        title: " HybridDB for MySQL",
                        content: "同时支持事务和分析的自研HTAP PB级分布式数据库"
                    },
                    {
                        title: " HybridDB for PostgreSQL",
                        content: "基于Greenplum DB的MPP并行处理OLAP数据仓库"
                    },
                    {
                        title: "数据传输 DTS",
                        content: "支持数据迁移、数据同步及订阅的实时数据流服务"
                    },
                    {
                        title: "云数据库 RDS SQL Server 版",
                        content: "企业许可授权，权限更为开放，引擎功能更为强大"
                    },
                    {
                        title: "云数据库 RDS PostgreSQL 版",
                        content: "源码优化，JSON兼容、GIS支持，易于使用扩展"
                    },
                    {
                        title: "云数据库 HBase 版",
                        content: "PB级大数据存储，轻松满足百万QPS随机读写需求"
                    },
                    {
                        title: "云数据库 Memcache 版",
                        content:
                            "高性能、高可靠、可平滑扩容的分布式内存数据库服务"
                    }
                ],
                [
                    {
                        title: "专有网络 VPC",
                        content: "构建逻辑隔离网络，确保资源安全"
                    },
                    {
                        title: "负载均衡",
                        content: "对多台云服务器进行流量分布的负载均衡服务"
                    },
                    {
                        title: "NAR网关",
                        content: "支持NAT转发、共享带宽的VPC网关"
                    },
                    {
                        title: "智能接入网关（邀测中）",
                        content: "一站式接入上云解决方案"
                    },
                    {
                        title: "高速通道",
                        content: "高速稳定的VPC 互动和专线接入服务"
                    },
                    {
                        title: "云企业网",
                        content:
                            "帮助用户打造一张具有企业级规模和通信能力的云上网络"
                    },
                    {
                        title: "弹性公网IP",
                        content: "独立的公网IP资源、灵活绑定云资源"
                    },
                    {
                        title: "VIP网关",
                        content: "支持安全加密数据传输的VPC网关"
                    },
                    {
                        title: "共享流量包",
                        content: "价格实惠。覆盖多个地域，自动抵扣流量费用"
                    },
                    {
                        title: "共享带宽",
                        content:
                            "带宽共享、按实际使用带宽付费、支持增强型95计费"
                    },
                    {
                        title: "云托付",
                        content: "云托付提供机房托管、云专线网络及增值服务"
                    },
                    {
                        title: "PSDN",
                        content: "适用于点播、直播、大文件的边缘节点分发布"
                    },
                    {
                        title: "CDN",
                        content: "常用于视频、图片、文件加速的跨域网络分布"
                    }
                ],
                [
                    {
                        title: "域名注册",
                        content: "超过2000万个域名注册、安全易用"
                    },
                    {
                        title: "域名交易",
                        content: "买家域名、像淘宝一样简单"
                    },
                    {
                        title: "云解析DNS",
                        content: "高性能、高扩展的权威DNS服务和DNS管理服务"
                    },
                    {
                        title: "HTTPDNS",
                        content: "移动域名解析、具有域名防劫持、精确调度的特性"
                    },
                    {
                        title: "云虚拟主机",
                        content: "国内市场No.1、独享资源虚机198元/年起"
                    },
                    {
                        title: "企业邮箱",
                        content: "无线容量，50万企业信任之选"
                    },
                    {
                        title: "网站建设",
                        content: "最低9元，急速建站！为您提供专业的建站服务"
                    },
                    {
                        title: "了解更多万网产品",
                        content: "20年专业品牌"
                    }
                ]
            ]
        };
    },
    methods: {
        tab(index) {
            this.sy = index;
            for (var i = 0; i < this.ig.length; i++) {
                this.ig[i][3][0].status = 1;
                $(".jt_bot")
                    .eq(i)
                    .find(".triangle_border_up")
                    .hide();
            }
            this.ig[index][3][0].status = 2;
            $(".jt_bot")
                .eq(index)
                .find(".triangle_border_up")
                .show();
        },
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
h4 {
    line-height: 40px;
}
.list_title {
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.ig_img {
    margin: 30px auto 15px;
}
.ig_img img {
    width: 150px;
}
#index_global {
    width: 100%;
    text-align: center;
}
.ig {
    margin-top: 30px;
    width: 100%;
}
.ig ul {
    width: 80%;
    list-style-type: none;
    margin: auto;
}
.ig ul li {
    float: left;
    padding: 5px 0;
    width: 20%;
    line-height: 30px;
    cursor: pointer;
}
.ig ul li:hover {
    color: #00c1de;
}
.ig img {
    width: 80px;
}
.box {
    width: 100%;
    text-align: left;
    background: #f5f5f6;
    height: auto;
    min-height: 100px;
    float: left;
    padding: 20px 0 30px 0;
    margin-top: 10px;
}
.box ul {
    width: 75%;
    margin: auto;
}
.box ul li {
    /* float: left; */
    /* margin-left: 30px; */
    cursor: pointer;
    height: 80px;
}
.box ul li p:nth-child(1) {
    line-height: 40px;
}
.box ul li p:nth-child(2) {
    position: relative;
    color: #bbb;
    font-size: 12px;
}
.jt {
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 2px solid #aaa;
    border-right: 2px solid #aaa;
    transform: rotate(45deg);
    right: 0;
    top: -5px;
    display: none;
}
.jt_bot {
    position: relative;
}
.triangle_border_up {
    width: 0;
    height: 0;
    border-width: 0 30px 30px;
    border-style: solid;
    border-color: transparent transparent #f5f5f6; /*透明 透明  灰*/
    /* margin: 40px auto; */
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: -20px;
    display: none;
}
.jt_bot:nth-child(1) .triangle_border_up {
    display: block;
}
.box ul li:hover {
    background: #fff;
    box-shadow: 2px 2px 8px #ccc;
}
.box ul li:hover .jt {
    display: block;
}
.active {
    color: #00c1de;
}
.row {
    margin-left: 0;
    margin-right: 0;
}
@media only screen and (max-width: 992px) {
    .ig ul {
        width: 95%;
    }
    .box ul {
        width: 95%;
    }
    .box ul li {
        height: 60px;
    }
    .box ul li p:nth-child(1) {
        line-height: 30px;
    }
    .jt {
        top: -10px;
    }
    .box ul li:active {
        background: #fff;
        box-shadow: 2px 2px 8px #ccc;
    }
    .box ul li:active .jt {
        display: block;
    }
}
a {
    text-decoration: none;
    color: #373d41;
}
</style>


