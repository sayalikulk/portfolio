import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]'>
      <h2 class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="2018 - PRESENT" role="Software Engineer" name="Google" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
      <ExperienceCard timeline="2016 - 2018" role="Software Engineer" name="Intel" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
      <ExperienceCard timeline="2015 - 2016" role="Software Engineer" name="JPMorgan Chase & Co." description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
          
    </div>
  )
}

export default Experience
