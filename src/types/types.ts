export interface TodoTask {
  id: number;
  title: string
}

export interface TodoItem {
  id: number;
  title: string;
  color: string;
  tasks: TodoTask[] | [];
}