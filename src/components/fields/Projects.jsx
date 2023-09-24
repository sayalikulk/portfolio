import React from 'react'
import ProjectCard from '../utils/ProjectCard'
import AlgoB from '../../images/AlgoB.jpeg'
import FWMS from  '../../images/FWMS.jpeg'
import MovieR from '../../images/MovieR.jpeg'
import SpendShare from '../../images/SpendShare.jpeg'

const Projects = () => {
  return (
  <div  id="projects" className='p-[50px] md:pt-[100px] md:pl-[100px]'>
  <h2 id="project-title" class="font-bold uppercase pb-[40px] text-[#01e2c7]">Projects</h2>   
  <ProjectCard
    project_title="Real Time Deepfake Detection System"
    project_description="Implemented various OpenCV-based Object Trackers for face detection and extraction from the video dataset and performed a comparative analysis to choose the best one for the model. Employed Video Vision Transformer, an attention-based transformer model that extracts Spatio-temporal features from the dataset to gain accuracy of 96.17%. Developed a web application which allows the uploading of a video that will be further authenticated within the application and, at the same time, features the authentication of live meetings"
    project_url="https://ieeexplore.ieee.org/document/10037344"

    tech_used={["Python", "Tensorflow", "Machine Learning", "Video Vision Transformers"]}
    project_image={AlgoB}
/>



<ProjectCard
    project_title="Attendance Management System"
    project_description="Web Application that keeps record of the attendance of employees with the help of Voice Authentication and GPS
    tracking"
    project_url="https://github.com/sayalikulk/Attendance_management_system"
    
    tech_used={["HTML", "Node.js", "Express.js", "MongoDB", "Canvas.js"]}
    project_image={MovieR}
    
/>
<ProjectCard
    project_title="Face Detection and Recognition System"
    project_description="Utilized Haar Cascades for Face detection and implemented LBPH Face recognizer algorithm for Face recognition"    
    project_url="https://github.com/sayalikulk/Facial-Recognition"
    tech_used={["Machine Learning", "Python"]}
    project_image={FWMS}
/>

{/* <ProjectCard
    project_title="Spend & Share"
    project_description="Designed app to split expenses among friends. Users add bills, members; app calculates owed amounts. Simplifies financial sharing, automating owed calculations for seamless group expenses management."
    project_url="https://github.com/Bhavya-Ahir/SpendandShare"
    tech_used={["Java", "Android App Development", "Android Studio"]}
    project_image={SpendShare}
    
/> */}








</div>
  )
}

export default Projects