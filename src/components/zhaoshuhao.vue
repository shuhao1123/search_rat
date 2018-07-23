<template>
    <div class="container">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>索引</td>
                    <td>名字</td>
                    <td>爱好</td>
                    <td>特点</td>
                    <td>删除</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key="index">
                    <td>{{index}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.aihao}}</td>
                    <td>{{item.tedian}}</td>
                    <td><button @click="remove(index)">删除</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { index: 1, name: "zhans", aihao: "1", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" }, { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" }, { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" }, { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" }, { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" }, { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
                { index: 3, name: "zhans", aihao: "3打台球", tedian: "piaol" },
                { index: 2, name: "zhans", aihao: "2打台球", tedian: "piaol" },
            ]
        };
    },
    methods:{
        remove(index){
            this.data.splice(index,1)
        }
    }
};
</script>
<style scoped>
</style>
