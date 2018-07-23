<template>
    <div style="margin:20px auto">
        <div class="zhao">
            <div class="container-fluid">
                <div class="row table table-bordered">
                    <div class="col-xs-6 col-md-3 col-sm-4 col-lg-2" v-for="(item,index) in data1" :key="index" style="padding-top:10px">
                        <img :src=item[1] style="width:100%">
                        <p style="height:50px;line-height:25px;" class="row_p">{{item[0]}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
                </li>
                <li role="presentation">
                    <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
                </li>
                <li role="presentation">
                    <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a>
                </li>
                <li role="presentation">
                    <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">CountDownLatch、Semaphore CyclicBarrier、ReentrantLock与锁 Condition、FutureTask Fork/Join框架、BlockingQueue
                </div>
                <div role="tabpanel" class="tab-pane" id="profile">new Thread弊端、线程池的好处 ThreadPoolExecutor、Executor框架接口
                </div>
                <div role="tabpanel" class="tab-pane" id="messages">死锁的产生与预防、多线程并发最佳实践 Spring的线程安全、HashMap和 ConcurrentHashMap深入讲解...
                </div>
                <div role="tabpanel" class="tab-pane" id="settings">安全发布方法、不可变对象 final关键字使用、不可变方法 线程不安全类与写法
                </div>
            </div>

        </div>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名字</th>
                    <th>年龄</th>
                    <th>地址</th>
                    <th>爱好</th>
                    <th>特长</th>
                    <th>学校</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key='index'>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.dizhi}}</td>
                    <td>{{item.aihao}}</td>
                    <td>{{item.techang}}</td>
                    <td>{{item.xuexiao}}</td>
                </tr>
            </tbody>
        </table>
        <ul class="page" id="page"></ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱上海大学上海大学上海大学歌",
                    techang: "打游戏",
                    xuexiao: "上海上海大学上海大学上海大学大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                },
                {
                    id: 0,
                    name: "zhansan",
                    age: 15,
                    dizhi: "山东",
                    aihao: "唱歌",
                    techang: "打游戏",
                    xuexiao: "上海大学"
                }
            ],
            data1: [
                [
                    "Java并发编程与高并发解决方案",
                    "https://img1.mukewang.com/szimg/5aaa55850001a3ef10800600.jpg"
                ],
                [
                    "玩转算法面试 从真题到思维全面提升算法思维",
                    "https://img2.mukewang.com/szimg/5a1f65a900015d1505400300.jpg"
                ],
                [
                    "Java生产环境下性能监控与调优详解",
                    "https://img2.mukewang.com/szimg/5b384772000132c405400300.jpg"
                ],
                [
                    "Spring Cloud微服务实战",
                    "https://img3.mukewang.com/5b20d7dd000124da06000338-240-135.jpg"
                ],
                [
                    "Java生产环境下性能监控与调优详解",
                    "https://img2.mukewang.com/szimg/5b384772000132c405400300.jpg"
                ],
                [
                    "玩转算法面试 从真题到思维全面提升算法思维",
                    "https://img2.mukewang.com/szimg/5a1f65a900015d1505400300.jpg"
                ]
            ]
        };
    }
};
</script>
<style scoped>
.row {
    padding: 10px;
    margin: 0;
}
.row div {
    line-height: 30px;
}
.zhao {
    width: 100%;
    margin: 20px auto;
}
.row_p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tab {
    width: 80%;
    margin: 20px auto;
    /* padding: 0 15px; */
}
.table {
    width: 80%;
    /* padding: 0 15px; */
    margin: auto;
}
.container-fluid{
    padding: 0
}
@media screen and (max-width: 970px) {
    .container-fluid{
        padding: 0
    }
    .zhao {
        width: 95%;
    }
    .tab {
        width: 95%;
        padding: 0
    }
    .table {
        width: 95%;
    }
        .row{
        padding: 0;
        width: 100%;
    }
}
.tab-content {
    padding-top: 15px;
    line-height: 25px;
}
</style>
