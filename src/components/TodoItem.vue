<script setup lang="ts">
import TodoTask from './TodoTask.vue';
import editIcon from '@/assets/edit.png'
import deleteIcon from '@/assets/delete.png'
import { useModalsStore } from '@/store/modalsStore';

const modalsStore = useModalsStore()

defineProps(['data']);


</script>
<template>
  <div class="todo-item">
    <div class="todo-item-info">
      <div class="todo-item-description">
      <div 
        :style="{ 'background-color': data.color }"
        class="todo-item__mark"
      >
      </div>
      <div class="todo-item__title">{{ data.title }}</div>
    </div>
    <div class="todo-item__options">
      <img 
        :src="editIcon" 
        class="todo-item__option" 
        @click="modalsStore.openModal('edit', data.id)"
      />
      <img 
        :src="deleteIcon" 
        class="todo-item__option" 
        @click="modalsStore.openModal('delete', data.id)"
      />
    </div>
    </div>
    <div class="todo-item__tasks">
      <TodoTask 
        v-for="item in data.tasks" 
        :task="item"
        :parentId="data.id"
        :key="item.id"
      />
    </div>
  </div>
</template>
<style>
.todo-item {
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: grey;
}

.todo-item:hover {
  border-color: rgb(96, 94, 94);
}

.todo-item__tasks {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.todo-item__task-item {
  display: flex;
  gap: 5px;
}

.todo-item__mark {
  height: 5px;
  width: 5px;
  border-radius: 50%;
}

.todo-item-description {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}

.todo-item__title {
  font-weight: bold;
}

.todo-item__options {
  display: flex;
  gap: 5px;
}

.todo-item__option {
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.todo-item__option:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.todo-item-info {
  display: flex;
  justify-content: space-between;
}
</style>