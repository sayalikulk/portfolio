import React from 'react'
import ProjectCard from '../utils/ProjectCard'


const Projects = () => {
  return (
  <div id="projects" className='pt-[100px] pl-[100px]'>
  <h2 class="font-bold uppercase pb-[20px] text-[#01e2c7]">Projects</h2>   
  <ProjectCard project_title="Project Title" project_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." tech_used={["React", "Java", "C++"]}/>

    
</div>
  )
}

export default Projects