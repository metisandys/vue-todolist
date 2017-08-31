<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-text="item.things" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinished(item)"></li>
    </ul>
  </div>
</template>

<script>

export default {
  data : function () {
    return {
      title: 'Hello Eddie ！This is your todo list 。',
      items: [],
      newItem: ''
    }
  },
  methods: {
    toggleFinished: function(item){
      item.isFinished = !item.isFinished;
    },
    addNew: function(){
      this.items.push({
        things: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  color: red;
  text-decoration: underline;
  
}
#app li{
  cursor: pointer;
}
</style>
