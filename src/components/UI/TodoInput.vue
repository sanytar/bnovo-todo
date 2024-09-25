<script setup lang="ts">
interface Props {
  placeholder?: string;
  title?: string;
  modelValue?: string;
}

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();


withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: 'Введите текст',
  title: '',
})

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits('update:modelValue', target.value);
};
</script>

<template>
<div class="todo-input-container">
  <div>{{ title }}</div>
  <input :value="modelValue" type="text" :placeholder="placeholder" class="todo-input" @input="onInput">
</div>
</template>
<style>
.todo-input-container {
  display: inline-block;
  width: 100%;
  max-width: 300px;
}

.todo-input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: #333;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}


.todo-input:focus {
  border-color: #999;
  background-color: #e0e0e0;
}

.todo-input::placeholder {
  color: #999;
  opacity: 1;
}


.todo-input:hover {
  background-color: #ececec;
}

.todo-input:disabled {
  background-color: #e0e0e0;
  color: #999;
  border-color: #ccc;
  cursor: not-allowed;
}
</style>