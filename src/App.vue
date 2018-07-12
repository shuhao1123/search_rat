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
   var info = {
        name: 'Lee',
        age: {name:55},
        id: '003'
    };
    // sessionStorage.setItem('key', JSON.stringify(info));
    // sessionStorage.setItem('key1', JSON.stringify(info));
    // localStorage.setItem('key', JSON.stringify(info));
    // console.log(JSON.parse(sessionStorage.getItem('key')));
</script>

<style>
</style>
