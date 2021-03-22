<template>
  <div>
    <div class="list">
      <div v-for="todo in todos" :key="todo.id">
        <HelloWorldListItem :todo="todo" @todo-decrement="decrement($event)">
          <template #todo-template="{ todo }">
            <span>
              {{ todo.id }}
            </span>
          </template>
        </HelloWorldListItem>
      </div>
    </div>
    <div>
      {{ count }}
    </div>
    <button v-on:click="increment">Click me!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorldListItem from "./HelloWorldListItem.vue";
import useTodos from "../composables/useTodos";

export default defineComponent({
  name: "HelloWorldList",
  setup() {
    const count = ref(0);
    const { todos } = useTodos();

    const increment = () => {
      count.value += 100;
    };

    const decrement = (amount: number) => {
      count.value -= amount;
    };

    return { count, increment, decrement, todos };
  },
  components: {
    HelloWorldListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list {
  overflow: auto;
  height: 500px;
  background: lightgreen;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>