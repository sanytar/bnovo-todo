<script setup lang="ts">

defineEmits(['click'])
</script>
<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style>
button {
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 
}

button:hover {
  background-color: #bbb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:active {
  background-color: #999;
  box-shadow: none;
}

button:disabled {
  background-color: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
}
</style>