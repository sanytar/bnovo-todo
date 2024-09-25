<script setup lang="ts">
import TodoCheckbox from '../UI/TodoCheckbox.vue';
import { useTodoStore } from '@/store/todoStore';
import { useModalsStore } from '@/store/modalsStore';
import { type TodoItem, type TodoTask } from '@/types/types';
import TodoInput from '../UI/TodoInput.vue';
import { computed } from 'vue';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const isEdit = computed(() => {
  return modalsStore.modalDataId;
})

const currentForm = ref({} as TodoItem)

const changeTask = (value: string, id: string) => {
  mapTasks.value.set(id, value)
}

const mapTasks = ref(new Map())

const mappingTasks = (tasks: TodoTask[]) => {
  tasks.forEach((el) => {
    if (!mapTasks.value.has(el.id)) {
      mapTasks.value.set(el.id, el.title)
    }
  })
}

const getValue = (id: string) => {
  return mapTasks.value.get(id)
}

onBeforeMount(() => {
  if (isEdit.value) {
    currentForm.value = { ...todoStore.initForm('edit') };
    mappingTasks(currentForm.value.tasks)
  } else {
    currentForm.value = { ...todoStore.initForm('new') }
  }
})
</script>
<template>
  <div class="todo-form">
    <div class="todo-form__header">
      <div class="todo-form__color"></div>
      <div class="todo-form__title">
        <TodoInput v-model="currentForm.title" title="Заголовок"/>
      </div>
    </div>
    <div>Задачи</div>
    <div class="todo-tasks">
      <div v-for="task in currentForm.tasks" :key="task.id" >
        <div class="todo-tasks__input">
          <TodoInput
            :model-value="getValue(String(task.id))" 
            @update:model-value="changeTask($event, String(task.id))"
          />
          <button>удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.todo-form {
  display: flex;
  flex-direction: column;
}

.todo-tasks {
  display: flex;
  gap: 5px;
}

.todo-tasks__input {
  display: flex;
  gap: 5px;
}
</style>