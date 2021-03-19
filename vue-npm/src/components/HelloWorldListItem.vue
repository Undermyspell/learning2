<template>
  <div class="todo-item">
    <span>{{ text }}</span>
    <span>{{ longText }}</span>
    <button v-on:click="onDecrement">decrement me!</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Component
export default class HelloWorldListItem extends Vue {
  @Prop({ default: "" }) readonly text!: string;

  textInner: string = "";

  get longText(): string {
    return `long -- ${this.textInner} -- long`;
  }

  @Emit("todo-decrement")
  onDecrement() {
    this.textInner = "you decremented me";
    return 15;
  }
}
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
