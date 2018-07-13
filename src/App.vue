<template>
  <div id="app">
    <header-nav></header-nav>
    <!-- <router-view/> -->
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

<style>
</style>
