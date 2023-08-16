import React from 'react'
import ProjectCard from '../utils/ProjectCard'
import algoBotImage from '../../images/algoBotImage.jpg'
import project2 from '../../images/hello.jpeg'


const Projects = () => {
  return (
  <div  id="projects" className='p-[50px] md:pt-[100px] md:pl-[100px]'>
  <h2 class="font-bold uppercase pb-[40px] text-[#01e2c7]">Projects</h2>   
  <ProjectCard
    project_title="Algo Trading Bot"
    project_description={
        <ul>
            <li>&bull; Developed an automated trading system utilizing NLP(Natural language processing) for identifying trending stocks and ROCE (Return on capital employed) for filtering them, employing trading algorithms for buy/sell decisions. </li>
            <li>&bull; Constructed a trade management system utilizing Django framework that integrated with Alpaca API to place mock trades and conduct back-testing for trading strategies.</li>
            
        </ul>
    }
    tech_used={["Natural Language Processing (NLP)", "Data Science", "Data Analysis++"]}
    project_image={algoBotImage}
/>


<ProjectCard
    project_title="Public Works - A Grievance Redressal System"
    project_description={
        <ul>
            <li>&bull;  Developed a social platform where people can report issues like illegal dumping, graffiti, potholes, etc. to the government officials using the android application and the officials can view the issues on the web portal. </li>            
        </ul>
    }
    tech_used={["Natural Language Processing (NLP)", "Data Science", "Data Analysis++"]}
    project_image={"https://lottie.host/c2fc99e0-f162-4a28-ad9c-b7e8e7f9cfa0/MkFluIOnry.lottie"}
/>


</div>
  )
}

export default Projects