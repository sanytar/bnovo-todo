import { defineStore } from 'pinia'
import { ref } from 'vue'

type TModalsKeys = 'delete' | 'edit' | 'new';

export const useModalsStore = defineStore('modalsStore', () => {
  const resetModals = () => {
    return {
      delete: false,
      edit: false,
      new: false,
    }
  }

  const modals = ref(resetModals())

  const modalDataId = ref('')

  const closeModals = () => {
    modals.value = resetModals();
    modalDataId.value = '';
  }

  const openModal = (name: TModalsKeys, id: string) => {
    modalDataId.value = id;
    modals.value[name] = true;
  }

  return { closeModals, openModal, modals, modalDataId }
})