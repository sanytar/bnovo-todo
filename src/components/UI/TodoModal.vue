<script setup lang="ts">
defineProps(['show'])

const emits = defineEmits<{
  (e: 'show', value: boolean): void;
}>();

const closeModal = () => {
  emits('show', false);
}
</script>
<template>
  <Teleport to="body">
    <div v-if="show" class="modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  z-index: 1001;
  min-width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>