import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='pt-[100px] pl-[100px] pb-[100px]'>
      <h2 class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="2018 - PRESENT" name="Google" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
      <ExperienceCard timeline="2016 - 2018" name="Intel" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
      <ExperienceCard timeline="2015 - 2016" name="JPMorgan Chase & Co." description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." skills={["React", "Java", "C++"]}/>
    </div>
  )
}

export default Experience