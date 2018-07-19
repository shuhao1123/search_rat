<template>
    <div>
        <!-- <div><img src="./../assets/ejd9qJo8XP.jpg" style="width:100%"></div> -->

        <div style="width:80%;margin:20px auto">
            <div class="container-fluid">
                <div class="row table table-bordered">
                    <div class="col-xs-6 col-md-3 col-sm-4 col-lg-2" v-for="(item,index) in data" :key="index" style="padding-top:10px">
                        <img :src=item[1] style="width:100%">
                        <p style="height:50px;line-height:25px;">{{item[0]}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div style="width:80%;margin:20px auto;padding-right:30px">

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
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
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
}
.row div {
    line-height: 30px;
}
</style>
