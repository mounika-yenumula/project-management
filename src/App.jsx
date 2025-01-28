//import NewProject from "./Components/NewProject";
import { useState } from "react";
import NoProject from "./Components/NoProject";
import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [startProject, setStartProject] = useState({selectedProjectId: undefined, 
    projects: [],
  tasks: []});

  function handleAddTasks(text){
    setStartProject(prevState=>{
      const taskId=Math.random();
      const newTask={
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTasks(id){
    setStartProject(prevState=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });


  }
  
  function handleSelectProject(id){
    setStartProject(prevState=>{
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });

  }
  function handleStartSelectedProject(){
    setStartProject(prevState=>{
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelAddProject(){
    setStartProject(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData){
    setStartProject(prevState=>{
      const projectId=Math.random();
      const newProject={
        ...projectData,
        id: projectId,
      };
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleDeleteProject(){
    setStartProject(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }
  //console.log(startProject);
  const selectedProject = startProject.projects.find(project => project.id === startProject.selectedProjectId);

  let content = <SelectedProject project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTasks}
  onDeleteTask={handleDeleteTasks}
  tasks={startProject.tasks}/>;
  if(startProject.selectedProjectId === null)
  {
      content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(startProject.selectedProjectId === undefined){
    content = <NoProject onSelect={handleStartSelectedProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onSelect={handleStartSelectedProject} 
      projects={startProject.projects}
      onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
