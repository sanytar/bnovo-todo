<script setup lang="ts">
import TodoButton from '../UI/TodoButton.vue';
import { useModalsStore } from '@/store/modalsStore';
import { useTodoStore } from '@/store/todoStore';

const modalsStore = useModalsStore();
const todoStore = useTodoStore();

const confirm  = () => {
  const itemId = modalsStore.modalDataId;

  todoStore.deleteItem(itemId)
  modalsStore.closeModals()
}
</script>

<template>
  <div class="todo-confirm">
    <div>Подтверждаете удаление записи ?</div>
    <TodoButton @click="confirm">Подтверждаю</TodoButton>
  </div>
</template>
<style>
.todo-confirm {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  font-size: 15px;
}
</style>