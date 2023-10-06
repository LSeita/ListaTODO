import './style.css';
import { createProject } from './project';
import { imageLoader} from './imageLoader';
import {format, parse} from 'date-fns';

const projectController = (() => {
    const projectList = [];
    if(localStorage.length > 0){    
        const a = JSON.parse(localStorage.getItem('JSONprojList'));
        console.log(a)
        for(const [key, value] of Object.entries(a)){
            const proj = createProject(`${key}`,`${value[1]}`);
            proj.addJsonTodoList(JSON.parse(`${value[0]}`));
            projectList.push(proj); 
        }
        console.log(projectList)
    }
    const addProject = (title, prio) => {
        const newProject = createProject(title, prio);
        projectList.push(newProject);
        saveProjects(projectList);
    }
    const listProjects = () => projectList;
    const removeProject = function(proj){
            const projIndex = projectList.findIndex(listProj => {
            return listProj === proj
        })
        projectList.splice(projIndex, 1)
    }
    const saveProjects = (projList) => {
        const JSONprojList = {};
        projList.forEach(function(proj, index){
            JSONprojList[`${proj.getName()}`] = [JSON.stringify(proj.listTodos()), proj.getPrio()];
        });
        localStorage.setItem('JSONprojList', JSON.stringify(JSONprojList));
    }
    return {addProject, listProjects, removeProject, saveProjects}
})();

if(!localStorage.length>0){
    const debug = projectController.listProjects();
projectController.addProject('Meu Projeto', 'high');
debug[0].addTodo('Adicionar mais svgs no site', 'E decidir logo um esquema de cores', '2023-09-22', 'high');
debug[0].addTodo('Tarefa media', 'osakdjfsokdfj','2023-10-02', 'med');
debug[0].addTodo('Tarefa baixa', 'osakdjfsokdfj','2023-05-15', 'low');
localStorage.clear();
projectController.saveProjects(projectController.listProjects())
}

const todoController = (() => {
    const todoTitle = document.getElementById('todoTitle');
    const todoDesc = document.getElementById('todoDesc');
    const todoDate = document.getElementById('todoDate');
    const todoPrio = document.getElementById('todoPrio');

    function removeTodo(project, todo){
        project.removeTodo(todo);
    }
    function addTodo(project){
        project.addTodo(todoTitle.value, todoDesc.value, todoDate.value, todoPrio.value);
        clearTodoForm();
    }
    function editTodo(project, todo){
        project.editTodo(todo, todoTitle.value, todoDesc.value, todoDate.value, todoPrio.value)
        clearTodoForm();
    }
    function checkAsDone(todo){
        todo.done = true;
    }
    function checkAsNotDone(todo){
        todo.done = false;
    }
    function clearTodoForm(){
        todoTitle.value = '';
        todoDesc.value = '';
        todoDate.value ='';
        todoPrio.value = '';
    }
    return {removeTodo, addTodo, editTodo, checkAsDone, checkAsNotDone}
})();

const DOMController = (() => {
    const projectMenu = document.getElementsByClassName('projectMenu')[0];
    const todoContainer = document.getElementsByClassName('todoContainer')[0];
    const projects = projectController.listProjects();
    const projectHeader = document.getElementById('projectHeader');
    const loadImage = imageLoader();
    const logo = new Image();
    logo.setAttribute('id', 'logoIcon');
    logo.src = loadImage.LogoIcon();
    const addProjBtn = new Image();
    addProjBtn.classList.add('svgIcon','svgIconWhite');
    addProjBtn.src = loadImage.FolderIcon();

    projectHeader.appendChild(addProjBtn);
    
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.insertBefore(logo, navbar.firstChild);

    addProjBtn.onclick = () => displayProjForm();

    projects.forEach(listProjects);
    function listProjects(project){
        const projDiv = document.createElement('div');
        const projSpan = document.createElement('span')
        const rmProjBtn = new Image();
        rmProjBtn.src = loadImage.CloseIcon();

        projDiv.classList.add('projectItem', `${project.getPrio()}`);
        projSpan.textContent = `${project.getName()}`;
        projSpan.classList.add('projSpan');
        rmProjBtn.classList.add('svgIcon', 'svgIconWhite');
    
        projSpan.addEventListener('click', () => {
            changeBGColor(project.getPrio());
            clearTodos();
            displayTodos(project);
        })
        rmProjBtn.addEventListener('click', () => {
            if(confirm(`Tem certeza que quer remover o projeto "${project.getName()}"?`)){
                projectController.removeProject(project);
                clearProjects();
                clearTodos();
                projects.forEach(listProjects);
            }
        })
        projDiv.appendChild(projSpan);
        projDiv.appendChild(rmProjBtn);
        projectMenu.appendChild(projDiv);
    }
    function displayTodos(project){
        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('id', 'projectDiv');
        projectDiv.classList.add('dynamicColor');
        switch(project.getPrio()){
            case 'high':
                projectDiv.style.backgroundColor = '#e93846';
                break;
            case 'med':
                projectDiv.style.backgroundColor = '#ff4500';
                break;
            case 'low':
                projectDiv.style.backgroundColor = '#008000';
                break;
        }

        const projectSpan = document.createElement('span');
        projectSpan.textContent = project.getName();
        projectSpan.setAttribute('id', 'projectName');

        const addTodoBtn = new Image();
        addTodoBtn.classList.add('svgIcon','svgIconWhite');
        addTodoBtn.src = loadImage.AddTaskIcon();
        addTodoBtn.addEventListener('click', (event) => displayTodoForm(project, event.target.id));


        projectDiv.appendChild(projectSpan);
        projectDiv.appendChild(addTodoBtn);
        todoContainer.appendChild(projectDiv);

        const todoList = project.listTodos();
        todoList.forEach(function(todo){
            //Creates the button that collapses the TODO
            const todoDiv = document.createElement('div');
            const prioBtn = new Image();
            prioBtn.src = loadImage.CheckCircle();
            const titleSpan = document.createElement('span');
            const dateSpan = document.createElement('span');
            const removeBtn = new Image();
            removeBtn.src = loadImage.CloseIcon();

            if(todo.done === true){
                todoDiv.classList.toggle('todoDone');
                if(prioBtn.src === loadImage.CheckCircle()){
                    prioBtn.src = loadImage.DoneIcon();
                }else{
                    prioBtn.src = loadImage.CheckCircle();
                }
            }

            prioBtn.classList.add('svgIcon');
            prioBtn.addEventListener('click', () => {
                todoDiv.classList.toggle('todoDone');
                if(todo.done === false){
                    todoController.checkAsDone(todo);
                }else{
                    todoController.checkAsNotDone(todo);
                }
                if(prioBtn.src === loadImage.CheckCircle()){
                    prioBtn.src = loadImage.DoneIcon();
                }else{
                    prioBtn.src = loadImage.CheckCircle();
                }
            })
            titleSpan.classList.add('todoTitle');
            titleSpan.textContent = todo.title;
            dateSpan.classList.add('todoDate');
            const dateString = parse(todo.date, 'yyyy-MM-dd', new Date());
            const date = format(dateString, 'dd/MM/yy');
            dateSpan.textContent = date;
            removeBtn.classList.add('svgIcon');
            removeBtn.addEventListener('click', () =>{
                if(confirm(`Tem certeza que quer remover a tarefa: "${todo.title}"?`)){
                    todoController.removeTodo(project, todo);
                    clearTodos();
                    displayTodos(project); 
                } 
            }) 

            todoDiv.classList.add('todoDiv');
            switch(todo.prio){
                case 'high':
                    todoDiv.classList.toggle('todoHigh');
                    prioBtn.classList.add('svgIconRed');
                    break;
                case 'med':
                    todoDiv.classList.toggle('todoMed');
                    prioBtn.classList.add('svgIconOrange');
                    break;
                case 'low':
                    todoDiv.classList.toggle('todoLow');
                    prioBtn.classList.add('svgIconGreen');
                    break;
            }
            todoDiv.appendChild(prioBtn);
            todoDiv.appendChild(titleSpan);
            todoDiv.appendChild(dateSpan);
            todoDiv.appendChild(removeBtn);
            todoContainer.appendChild(todoDiv);

            //Creates the collapsed TODO
            const divTODO = document.createElement('div');
            const descDiv = document.createElement('div');

            divTODO.classList.add('todoCollapsible');

            descDiv.classList.add('todoContent');
            const descTitleSpan = document.createElement('span');
            descTitleSpan.classList.add('contentTitle');
            descTitleSpan.textContent = 'Descrição:';
            const descSpan = document.createElement('span');
            descSpan.textContent = todo.desc;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.setAttribute('id', 'editBtn');
            switch(todo.prio){
                case 'high':
                    editBtn.style.backgroundColor = '#e93846'
                    break;
                case 'med':
                    editBtn.style.backgroundColor = '#ff4500'
                    break;
                case 'low':
                    editBtn.style.backgroundColor = '#008000'
                    break;
            }
            editBtn.addEventListener('click', (event) => {
                const todoTitle = document.getElementById('todoTitle');
                const todoDesc = document.getElementById('todoDesc');
                const todoDate = document.getElementById('todoDate');
                const todoPrio = document.getElementById('todoPrio');
    
                todoTitle.value = todo.title;
                todoDesc.value = todo.desc;
                todoDate.value = todo.date;
                todoPrio.value = todo.prio;

                displayTodoForm(project, event.target.id, todo)
            })

            descDiv.appendChild(descTitleSpan);
            descDiv.appendChild(descSpan);
            descDiv.appendChild(editBtn);

            divTODO.appendChild(descDiv);
            todoContainer.appendChild(divTODO); 

            titleSpan.addEventListener('click', () => {
                if(divTODO.style.maxHeight){
                    divTODO.style.maxHeight = null;
                    switch(todo.prio){
                        case 'high':
                            todoDiv.classList.toggle('todoActiveH');
                            break;
                        case 'med':
                            todoDiv.classList.toggle('todoActiveM');
                            break;
                        case 'low':
                            todoDiv.classList.toggle('todoActiveL');
                    }
                }else{
                    divTODO.style.maxHeight =  divTODO.scrollHeight + 'px';
                    switch(todo.prio){
                        case 'high':
                            todoDiv.classList.toggle('todoActiveH');
                            break;
                        case 'med':
                            todoDiv.classList.toggle('todoActiveM');
                            break;
                        case 'low':
                            todoDiv.classList.toggle('todoActiveL');
                    }
                }
            })
        })
    }
    function changeBGColor(prio){
        const navbar = document.getElementsByClassName('navbar')[0];
        const projContainer = document.getElementById('projectHeader');
        const footer = document.getElementById('footer');
        const todoContainer = document.getElementsByClassName('todoContainer')[0];

        switch(prio){
            case 'high':
                navbar.style.backgroundColor = '#e93846';
                projContainer.style.backgroundColor = '#e93846';
                projContainer.style.borderTop = 'border-top: 3px solid #e93846';
                footer.style.backgroundColor = '#e93846';
                /* todoContainer.style.backgroundColor = '#e93846'; */
                break;
            case 'med':
                navbar.style.backgroundColor = 'orangered';
                projContainer.style.backgroundColor = 'orangered';
                projContainer.style.borderTop = 'border-top: 1px solid orangered';
                footer.style.backgroundColor = 'orangered';
                break;
            case 'low':
                navbar.style.backgroundColor = 'green';
                projContainer.style.backgroundColor = 'green';
                projContainer.style.borderTop = 'border-top: 1px solid green';
                footer.style.backgroundColor = 'green';
                break;
        }
    }
    function displayTodoForm(project, btn, todo){
        const addContainer = document.getElementById('addTodoContainer');
        const cancelBtn = document.getElementById('cancelBtn');
        const addBtn = document.getElementById('addBtn');
        const confEditBtn = document.getElementById('confEditBtn');
        const projTitle = document.getElementById('projectFormTitle');

        projTitle.textContent = `${project.getName()}`
        addContainer.style.display = 'block';
        if(btn === 'editBtn'){
            confEditBtn.style.display = 'block';
            addBtn.style.display = 'none';
        }else if(btn === 'addTodoBtn'){
            confEditBtn.style.display = 'none';
            addBtn.style.display = 'block';
        }
        confEditBtn.onclick = (event) => {
            todoController.editTodo(project, todo);
            addContainer.style.display = 'none';
            clearTodos();
            displayTodos(project);
            event.preventDefault();
        }
        cancelBtn.onclick = (event) => {
            addContainer.style.display = 'none';
            event.preventDefault();
        }
        addBtn.onclick = (event) => {
            todoController.addTodo(project)
            addContainer.style.display = 'none';
            clearTodos();
            displayTodos(project);
            event.preventDefault();
        }
    }
    function clearTodos(){
        while(todoContainer.firstChild){
            todoContainer.removeChild(todoContainer.lastChild)
        }
    }
    function displayProjForm(){
        const projContainer = document.getElementById('addProjectContainer');
        const cancelBtn = document.getElementById('cancelProjBtn');
        const addBtn = document.getElementById('newProjBtn');
        const projTitle = document.getElementById('projTitle');
        const projPrio = document.getElementById('projPrio');
        
        projContainer.style.display = 'block';
        addBtn.onclick = (event) => {
            projectController.addProject(projTitle.value, projPrio.value);
            projContainer.style.display = 'none';
            clearProjects()
            projects.forEach(listProjects)
            event.preventDefault();
        }
        cancelBtn.onclick = (event) => {
            projContainer.style.display = 'none';
            event.preventDefault();
        }
    }
    function clearProjects(){
        const projMenu = document.getElementsByClassName('projectMenu')[0];
        while(projMenu.firstChild){
            projMenu.removeChild(projMenu.lastChild)
        }
    }
})();   