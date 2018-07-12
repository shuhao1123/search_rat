<template>
    <div style="width:90%;margin:20px auto">
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
            ]
        };
    }
};
</script>
<style>
</style>
