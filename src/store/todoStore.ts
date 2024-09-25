import { ref } from 'vue'
import { defineStore } from 'pinia'
import mock from '@/config/mock'
import { uid } from 'uid'
import { useModalsStore } from './modalsStore'
import type { TodoItem } from '@/types/types'

interface CheckedTask {
  parentId: string;
  id: string;
  value: boolean;
}

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export const useTodoStore = defineStore('todo', () => {

  const modalStore = useModalsStore();
  
  const todos = ref(mock)

  const updateStorage = () => {
    // обновление данных в localStorage
    console.log('Инфа в стораге обновлена')
  }


  const newItemForm = () => {
    return {
      title: '',
      id: uid(),
      color: getRandomColor(),
      tasks: [],
    }
  }


  const findItem = (id: string) => {
    const item = todos.value.find((el) => el.id === id);
    return item;
  }

  const initForm = (action: 'new' | 'edit') => {
    let item;
    if (action === 'new') {
      item = newItemForm();
    } else {
      item = findItem(modalStore.modalDataId)
    }
    return item as TodoItem;
  }

  const currentForm = ref({} as TodoItem)

  const checkTask = (payload: CheckedTask) => {
    todos.value = todos.value.map((item) => {
      if (item.id === payload.parentId) {
        console.log(item)
        const updatedTasks = item.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...task,
              value: payload.value
            }
          } else {
            return task
          }
        })
        return {
          ...item,
          tasks: updatedTasks,
        }
      } else {
        return item
      }
    })
    updateStorage()
  }

  const deleteItem = (id: string) => {
    todos.value = todos.value.filter((el) => el.id !== id)
    updateStorage()
  }

  
  return { todos, checkTask, deleteItem, initForm, currentForm }
})