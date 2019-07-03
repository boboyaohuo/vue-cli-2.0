<!-- 起始页 -->
<template>
  <div class="">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  max-width: 450px
  margin: 0 auto
  background: #ffffff
  overflow: hidden
</style>
