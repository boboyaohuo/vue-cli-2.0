<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to BTCF'
    };
  },
  created() {

  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="stylus" rel="stylesheet/stylus">
  .hello
    text-align center
    margin-top 60px
</style>
