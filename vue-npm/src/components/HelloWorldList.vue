<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="list">
      <div v-for="item in items" v-bind:key="item.text">
        <HelloWorldListItem
          v-bind:text="item.text"
          v-on:todo-decrement="decrement($event)"
        />
      </div>
      <div>
        {{ count }}
      </div>
      <button v-on:click="increment">Click me!</button>
    </div>
  </div>
</template>
<script>
import HelloWorldListItem from "./HelloWorldListItem.vue";

export default {
  name: "HelloWorldList",
  data: () => {
    return {
      count: 0,
      items: [
        {
          text: "hi you",
        },
        {
          text: "got you",
        },
        {
          text: "goodbye youe",
        },
      ],
    };
  },
  methods: {
    increment: function () {
      this.count += 100;
    },
    decrement: function (amount) {
      this.count -= amount;
    },
  },
  components: {
    HelloWorldListItem,
  },
};
</script>
<style lang="scss" scoped>
.list {
  background: lightgreen;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>