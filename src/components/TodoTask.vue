<script setup lang="ts">
import Checkbox from '@/components/UI/TodoCheckbox.vue'
import { useTodoStore } from '@/store/todoStore';

const todoStore = useTodoStore();

export interface TaskEmit {
  taskId: number;
  value: boolean;
}

const props = defineProps(['task', 'parentId'])

const emits = defineEmits<{
  (e: 'change', value: TaskEmit): void;
}>();

const onChange = (value: boolean, taskId: string) => {
  const data = {
    parentId: props.parentId,
    id: taskId,
    value,
  }
  todoStore.checkTask(data)
}
</script>
<template>
  <div class="todo-item__task-item">
    <Checkbox :name="task.title" :checked="task.value" @change="onChange($event, task.id)"/>
  </div>
</template>
<style>
</style>