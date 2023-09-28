import { createTodo } from "./todo";

export const createProject = (name, prio) => {
    let todoList = []
    const addTodo = (title, desc, date, prio) => {
        const newTodo = createTodo(title, desc, date, prio);
        todoList.push(newTodo);
    }
    const removeTodo = (todo) => {
        const todoIndex = todoList.findIndex(listTodo => {
             return listTodo === todo
        });
        todoList.splice(todoIndex, 1);
    }
    const editTodo = (todo, title, desc, date, prio) => {
        todo.title = title;
        todo.desc = desc;
        todo.date = date;
        todo.prio = prio;
    }
    const listTodos = () => {
        return todoList;
    }
    const getName = () => name;
    const getPrio = () => prio;
    return{
        getName,
        addTodo,
        removeTodo,
        editTodo,
        listTodos,
        getPrio
    }
}