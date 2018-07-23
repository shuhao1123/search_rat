<template>
  <div id="app">
    <header-nav></header-nav>
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
