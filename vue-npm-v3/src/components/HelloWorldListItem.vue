<template>
  <div class="todo-item">
    <slot name="todo-template" :todo="todo"></slot>
    <span>{{ completedMessage }}</span>
    <button @click="onDecrement">complete me!</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { Todo } from "@/models/todo";

export default defineComponent({
  name: "HelloWorldListItem",
  props: {
    todo: { type: Object as PropType<Todo> },
  },
  setup(props, { emit }) {
    const completed = ref("");
    const completedMessage = computed(() => ` -- ${completed.value} -- `);

    const onDecrement = () => {
      completed.value = "✔";
      emit("todo-decrement", 25);
    };

    return { completedMessage, onDecrement };
  },
});
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;

  button {
    transition: 300ms all ease-in-out;
    &:hover {
      color: teal;
      background-color: lightcoral;
    }
  }
}
</style>