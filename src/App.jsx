//import NewProject from "./Components/NewProject";
import { useState } from "react";
import NoProject from "./Components/NoProject";
import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";

function App() {
  const [startProject, setStartProject] = useState({selectedProjectId: undefined, projects: []});
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
      const newProject={
        ...projectData,
        id: Math.random(),
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(startProject);
  let content;
  if(startProject.selectedProjectId === null)
  {
      content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(startProject.selectedProjectId === undefined){
    content = <NoProject onSelect={handleStartSelectedProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onSelect={handleStartSelectedProject} projects={startProject.projects}/>
      {content}
    </main>
  );
}

export default App;
