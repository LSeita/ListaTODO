import './style.css';
import { createProject } from './project';

const projectController = (() => {
    const projectList = [];
    const addProject = (title) => {
        const newProject = createProject(title);
        projectList.push(newProject);
    }
    const listProjects = () => projectList;
    const removeProject = function(proj){
            const projIndex = projectList.findIndex(listProj => {
            return listProj === proj
        })
        projectList.splice(projIndex, 1)
    }
    return {addProject, listProjects, removeProject}
})();

projectController.addProject("Projeto 1");
projectController.addProject("Projeto 2");
projectController.addProject("Projeto 3");

const project = projectController.listProjects();

project[0].addTodo("Estudar para prova de matematica",
              "Materias que vão cair:\nTrigonometria\nCalculo",
              "24/07/23",
              "high",
              "Pode levar calculadora e terá consulta");
project[0].addTodo("Tarefa 3", "Desc 3", "26/07/23", "low", "");

project[1].addTodo("Tarefa 2",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "25/07/23", "low", "Duuur");  

const todoController = (() => {
    function removeTodo(project, todo){
        project.removeTodo(todo);
    }
    function addTodo(project){
        alert(project.getName())
    }
    return {removeTodo, addTodo}
})();

const DOMController = (() => {
    const projectMenu = document.getElementsByClassName('projectMenu')[0];
    const todoContainer = document.getElementsByClassName('todoContainer')[0];
    const projects = projectController.listProjects()

    projects.forEach(function(project){
        const btn = document.createElement('button');
        btn.classList.add('projectItem');
        btn.textContent = `${project.getName()}`;
        btn.addEventListener('click', () => {
            clearTodos();
            displayTodos(project);
        })
        projectMenu.appendChild(btn);
    })
    function displayTodos(project){
        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('id', 'projectDiv');

        const projectSpan = document.createElement('span');
        projectSpan.textContent = project.getName();
        projectSpan.setAttribute('id', 'projectName');

        const addTodoBtn = document.createElement('button');
        addTodoBtn.setAttribute('id', 'addTodoBtn');
        addTodoBtn.textContent = '+';
        addTodoBtn.addEventListener('click', () => createTodoForm(project));


        projectDiv.appendChild(projectSpan);
        projectDiv.appendChild(addTodoBtn);
        todoContainer.appendChild(projectDiv);

        const todoList = project.listTodos();
        todoList.forEach(function(todo){
            //Creates the button that collapses the TODO
            const todoBtn = document.createElement('button');
            const prioBtn = document.createElement('button');
            const titleSpan = document.createElement('span');
            const dateSpan = document.createElement('span');
            const removeBtn = document.createElement('button');

            prioBtn.classList.add('prio', `${todo.prio}`);
            prioBtn.textContent = 'O';
            prioBtn.addEventListener('click', () => alert('Oi'))
            titleSpan.classList.add('todoTitle');
            titleSpan.textContent = todo.title;
            dateSpan.classList.add('todoDate');
            dateSpan.textContent = todo.date;
            removeBtn.classList.add('removeBtn');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () =>{
                if(confirm(`Tem certeza que quer remover a tarefa: "${todo.title}"?`)){
                    todoController.removeTodo(project, todo);
                    clearTodos();
                    displayTodos(project); 
                } 
            }) 

            todoBtn.classList.add('todoBtn');
            todoBtn.append(prioBtn, titleSpan, dateSpan, removeBtn);
            todoContainer.appendChild(todoBtn);

            //Creates the collapsed TODO
            const divTODO = document.createElement('div');
            const descDiv = document.createElement('div');
            const notesDiv = document.createElement('div');

            divTODO.classList.add('todoCollapsible');

            descDiv.classList.add('todoContent');
            const descTitleSpan = document.createElement('span');
            descTitleSpan.classList.add('contentTitle');
            descTitleSpan.textContent = 'Descrição:';
            const descSpan = document.createElement('span');
            descSpan.textContent = todo.desc;
            descDiv.appendChild(descTitleSpan);
            descDiv.appendChild(descSpan);

            notesDiv.classList.add('todoContent');
            const notesTitleSpan = document.createElement('span');
            notesTitleSpan.textContent = 'Notas:';
            notesTitleSpan.classList.add('contentTitle');
            const notesSpan = document.createElement('span');
            notesSpan.textContent = todo.notes;
            notesDiv.appendChild(notesTitleSpan);
            notesDiv.appendChild(notesSpan);

            divTODO.appendChild(descDiv);
            divTODO.appendChild(notesDiv);
            todoContainer.appendChild(divTODO); 

            todoBtn.addEventListener('click', () => {
                if(divTODO.style.maxHeight){
                    divTODO.style.maxHeight = null;
                }else{
                    divTODO.style.maxHeight =  divTODO.scrollHeight + 'px';
                }
            })
        })
    }
    function createTodoForm(project){
        const addContainer = document.getElementById('addTodoContainer');
        
    }
    function clearTodos(){
        while(todoContainer.firstChild){
            todoContainer.removeChild(todoContainer.lastChild)
        }
    }
})();   