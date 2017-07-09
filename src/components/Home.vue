<template>
  <div class="home">
		<img src="../../static/img/zb.jpg">
		<h1>{{ msg }}</h1>
		<h2>By:杰少</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '石头快来带我装逼！！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
