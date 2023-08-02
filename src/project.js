import { createTodo } from "./todo";

export const createProject = (name) => {
    let todoList = []
    const addTodo = (title, desc, date, prio, notes) => {
        const newTodo = createTodo(title, desc, date, prio, notes);
        todoList.push(newTodo);
    }
    const removeTodo = (todo) => {
        const todoIndex = todoList.findIndex(listTodo => {
             return listTodo === todo
        });
        todoList.splice(todoIndex, 1);
    }
    const listTodos = () => {
        return todoList;
    }
    const getName = () => name;
    return{
        getName,
        addTodo,
        removeTodo,
        listTodos
    }
}