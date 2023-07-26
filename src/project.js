import { createTodo } from "./todo";

export const createProject = (name) => {
    let todoList = []
    const addTodo = (title, desc, date, prio, notes) => {
        const newTodo = createTodo(title, desc, date, prio, notes);
        todoList.push(newTodo);
    }
    const removeTodo = (title) => {
        todoList.slice(1, todoList.indexOf(title))
    }
    const listTodos = () => {
        const list = todoList;
        return list;
    }
    return{
        name: name,
        addTodo,
        removeTodo,
        listTodos
    }
}