<template>
  <div>
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

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import HelloWorldListItem from "./HelloWorldListItem.vue";

export default defineComponent({
  name: "HelloWorldList",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);
    const items = reactive([
      {
        text: "hi you",
      },
      {
        text: "got you",
      },
      {
        text: "goodbye youe",
      },
    ]);
    const increment = () => {
      count.value += 100;
    };

    const decrement = (amount: number) => {
      count.value -= amount;
    };

    return { count, increment, decrement, items };
  },
  components: {
    HelloWorldListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list {
  background: lightgreen;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>