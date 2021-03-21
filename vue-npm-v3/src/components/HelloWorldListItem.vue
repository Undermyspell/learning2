<template>
  <div class="todo-item">
    <span>{{ text }}</span>
    <span>{{ longText }}</span>
    <button v-on:click="onDecrement">decrement me!</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorldListItem",
  props: {
    text: String,
  },
  setup(props, { emit }) {
    const innerText = ref("");
    const longText = computed(() => `long -- ${innerText.value} -- long`);

    const onDecrement = () => {
      innerText.value = "you decremented me";
      emit("todo-decrement", 25);
    };

    return { longText, onDecrement };
  },
});
</script>

<style lang="scss" scoped>
.todo-item {
  align-items: center;
  display: flex;
  flex-direction: column;

  button {
    transition: 300ms all ease-in-out;
    &:hover {
      color: teal;
      transform: scale(2);
    }
  }
}
</style>