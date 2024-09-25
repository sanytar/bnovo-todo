<script setup lang="ts">
interface Props {
  name: string;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Name'
});

const emits = defineEmits<{
  (e: 'change', value: boolean): void;
}>();

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits('change', target.checked);
}
</script>
<template>
  <label class="custom-checkbox">
    <input type="checkbox" :checked="checked" @change="onChange"/>
    <span class="checkmark"></span>
    <div class="checkbox-name">{{ name }}</div>
  </label>
</template>
<style>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
}

.checkbox-name {
  margin-left: 5px;
  color: white;
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox .checkmark {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #e0e0e0;
  border: 2px solid #b3b3b3;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-checkbox input:checked + .checkmark {
  background-color: #6c757d;
  border-color: #6c757d;
}

.custom-checkbox .checkmark::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  display: none;
}

.custom-checkbox input:checked + .checkmark::after {
  display: block;
}
</style>