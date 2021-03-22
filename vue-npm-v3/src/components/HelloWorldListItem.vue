<template>
  <div class="todo-item">
    <slot name="todo-template" :todo="todo"></slot>
    <button @click="onComplete(todo)">complete me!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "@/models/todo";

export default defineComponent({
  name: "HelloWorldListItem",
  props: {
    todo: { type: Object as PropType<Todo> },
  },
  setup(props, { emit }) {
    const onComplete = (todo: Todo) => {
      emit("todo-complete", todo);
    };

    return { onComplete };
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