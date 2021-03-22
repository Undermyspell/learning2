import { Todo } from "@/models/todo";
import { onMounted, Ref, ref } from "vue";

export default function useTodos() {
    const todos: Ref<Todo[]> = ref([]);
    const getTodos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        todos.value = await response.json() as Todo[];
    }

    const completeTodo = (todo: Todo) => {
        todo.completed = true;
    }

    onMounted(getTodos);

    return { todos, getTodos, completeTodo };
}