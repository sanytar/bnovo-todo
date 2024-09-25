<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import TodoNewHandler from './TodoNewHandler.vue';
import TodoModal from './UI/TodoModal.vue';
import TodoConfirm from '@/components/forms/TodoConfirm.vue'
import { useTodoStore } from '@/store/todoStore';
import { useModalsStore } from '@/store/modalsStore';
import { computed } from 'vue';
import NewEditTodo from './forms/NewEditTodo.vue';

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const data = computed(() => {
  return todoStore.todos;
})

</script>

<template>
  <div class="todo-list">
    <TodoItem v-for="item in data" :key="item.id" :data="item"/>
    <TodoNewHandler />
  </div>
  <TodoModal :show="modalsStore.modals.edit" @show="modalsStore.closeModals()">
    <NewEditTodo />
  </TodoModal>
  <TodoModal :show="modalsStore.modals.delete" @show="modalsStore.closeModals()">
    <TodoConfirm/>
  </TodoModal>
  <TodoModal :show="modalsStore.modals.new" @show="modalsStore.closeModals()">
    <NewEditTodo />
  </TodoModal>
</template>

<style>
.todo-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
}
</style>