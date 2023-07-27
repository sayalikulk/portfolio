import React from 'react'
import ProjectCard from '../utils/ProjectCard'


const Projects = () => {
  return (
  <div id="projects" className='pt-[100px] pl-[100px]'>
  <h2 class="font-bold uppercase pb-[20px] text-[#01e2c7]">Projects</h2>   
  <ProjectCard project_title="test" project_description="test" tech_used={["React", "Java", "C++"]}/>

    
</div>
  )
}

export default Projects