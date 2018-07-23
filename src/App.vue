<template>
  <div id="app">
    <div style="width:100%;height:auto;" id="main">
      <header-nav></header-nav>
    </div>
    <!-- <router-view/> -->
    <div class="bot">
      <ul>
        <li>关于我们</li>
        <li>法律声明及隐私权政策</li>
        <li>廉政举报</li>
        <li>联系我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header_Item from "./components/Header_Item";
export default {
    components: {
        "header-nav": Header_Item
    },
    mounted() {
        var hei = window.innerHeight - 80 + "px";
        $("#main").css("min-height", hei);
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            //移动端
            //TODO
            var hei1 = window.screen.availHeight  - 80 + "px";
            $("#main").css("min-height", hei1);
        }
    }
};
</script>

<style scoped>
.bot {
    width: 100%;
    height: 80px;
    clear: both;
    background: #eee;
    line-height: 80px;
}
.bot ul {
    width: 500px;
    margin: auto;
}
.bot li {
    float: left;
    text-indent: 15px;
}
</style>
