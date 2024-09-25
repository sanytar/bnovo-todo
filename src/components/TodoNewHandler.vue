<script setup lang="ts">
import plusIcon from '@/assets/plus-icon.png';
import { useModalsStore } from '@/store/modalsStore';

const modalsStore = useModalsStore();

</script>
<template>
  <div class="new-handler-container">
    <img :src="plusIcon" class="new-handler" @click="modalsStore.openModal('new')" />
  </div>
</template>

<style>
.new-handler-container {
  display: flex;
  align-items: center;
}

.new-handler {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: rgb(182, 177, 177);
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-size: cover;
}

.new-handler:hover {
  background-color: rgb(150, 151, 151);
}
</style>