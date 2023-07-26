import './style.css';
import { createProject } from './project';

const projectController = (() => {
    const projectList = [];
    const addProject = (title) => {
        const newProject = createProject(title);
        projectList.push(newProject);

        return newProject;
    }
    const listProjects = () => projectList;
    const removeProject = (proj) => {
        const projIndex = projectList.findIndex(listProj => listProj.name === proj.name)
        projectList.splice(projIndex, 1)
    }
    return {addProject, listProjects, removeProject}
})();

const proj1 = projectController.addProject("Projeto 1");
proj1.addTodo("Tarefa 1", "Desc", "24/07/23", "high", "");
proj1.addTodo("Tarefa 3", "Desc 3", "26/07/23", "low", "");

const proj2 = projectController.addProject("Projeto 2");
proj2.addTodo("Tarefa 2", "Desc 2", "25/07/23", "low", "Duuur");  

const displayController = (() => {
    const projectMenu = document.getElementsByClassName('projectMenu')[0];
    const todoContainer = document.getElementsByClassName('todoContainer')[0];
    const projects = projectController.listProjects()

    projects.forEach(function(project){
        const span = document.createElement('span');
        span.classList.add('projectItem');
        span.textContent = `${project.name}`;
        span.addEventListener('click', () => {
            clearTodos();
            displayTodos(project);
        })
        projectMenu.appendChild(span);
    })
    function displayTodos(project){
        const projectSpan = document.createElement('span');
        projectSpan.textContent = project.name;
        projectSpan.setAttribute('id', 'projectName');
        todoContainer.appendChild(projectSpan);

        const todoList = project.listTodos();
        todoList.forEach(function(todo){
            const todoBtn = document.createElement('button');
            const prioSpan = document.createElement('span');
            const titleSpan = document.createElement('span');
            const dateSpan = document.createElement('span');

            prioSpan.classList.add('prio', `${todo.prio}`);
            prioSpan.textContent = "O";
            titleSpan.classList.add('todoTitle');
            titleSpan.textContent = todo.title;
            dateSpan.classList.add('todoDate');
            dateSpan.textContent = todo.date;
          
            todoBtn.append(prioSpan, titleSpan, dateSpan);
            todoContainer.appendChild(todoBtn);
        })
    }
    function clearTodos(){
        while(todoContainer.firstChild){
            todoContainer.removeChild(todoContainer.lastChild)
        }
    }
})();   