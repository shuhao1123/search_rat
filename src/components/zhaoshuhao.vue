<template>
    <div>
        <p>
            <input type="text" v-model="add"> {{add}}
            <button>Add</button>
        </p>
        <table class="table table-bordered">
            <thead>
                <th>id</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>性别</th>
                <th>省份</th>
                <th>爱好</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in ad" :key="index">
                    <td>{{index}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.sex}}</td>
                    <td>{{item.sf}}</td>
                    <td>
                        <span v-for="(itemah,index) in item.ah" :key="index">{{itemah}}</span>
                    </td>
                    <td>
                        <span @click="xg(index)">修改</span>
                        <span>删除</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="zzc">
            <h3>新增</h3>
            <p>用户名：<input type="text" id="name"></p>
            <p>邮箱：<input type="text"></p>
            <p>性别：<input type="radio" name="sex" id="nan">
                <label for="nan">男</label>
                <input type="radio" name="sex" id="nv">
                <label for="nv">女</label>
            </p>
            <p>省份：
                <select>
                    <option>北京</option>
                    <option>上海</option>
                </select>
            </p>
            <p>爱好：<input type="checkbox" id="lq">
                <label for="lq">篮球</label>
                <input type="checkbox" id="book">
                <label for="book">读书</label>
            </p>
            <button>取消</button>
            <button @click="save()">保存</button>
            {{author}}
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            add: "",
            status: 0,
            z: 0,
            data: [
                {
                    name: "zsh赵",
                    email: "1723433671@qq.com",
                    sex: "男",
                    sf: "北京",
                    ah: ["篮球", "读书"]
                },
                {
                    name: "zsh98721",
                    email: "1723433671@qq.com",
                    sex: "男",
                    sf: "北京",
                    ah: "篮球"
                },
                {
                    name: "55z是大事sh",
                    email: "1723433671@qq.com",
                    sex: "男",
                    sf: "北京",
                    ah: "篮球"
                }
            ]
        };
    },
    mounted(){
        console.log($('#aa').width())
    },
    computed: {
        author() {
            return this.$store.state.author;
        },
        ad() {
            var v = this;
            return this.data.filter(function(item) {
                return item.name.indexOf(v.add) > -1;
            });
        }
    },
    methods: {
        xg(index) {
            $("#name").val(this.data[index].name);
            this.status = index;
            this.z = 1;
        },
        save() {
            if (this.z == 1) {
                this.data.splice(this.status, 1, {
                    name: $("#name").val()
                });
                this.z = 0;
            } else {
                this.data.push({
                    name: $("#name").val()
                });
            }
        }
    }
};
</script>
<style scoped>
</style>


