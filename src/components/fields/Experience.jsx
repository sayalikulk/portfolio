import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]'>
      <h2 id="experience-title" class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="July 2021 - July 2023" role="Software Engineer" name="JPMorgan Chase & Co." description=
"Designed and implemented critical financial services using Python based Athena Framework, improved booking efficiency by 80%, and streamlined regulatory reporting. Developed APIs, optimized workflows, and ensured compliance for a range of financial instruments. Contributed to the success of the organization's mission to deliver exceptional financial solutions."
skills={["Python","Optimization","Unit/Integration Testing", "Test Driven Development","Equity Derivatives","Equity Trading"
]}/>
      <ExperienceCard timeline="Jan 2021 - July 2021" role="Software Engineer Intern" name="JPMorgan Chase & Co." description=
          "As an intern at JPMorgan Chase & Co., I constructed an internal reconciliation system managing 1.5 million daily trade life-cycle events, ensuring precise trade data for business continuity. Additionally, I developed a REST API client for pre-trade and post-trade checks on Equities, FX, and Rates trades. These projects demonstrated my dedication to operational efficiency and innovation in financial services."
          skills={["Python","Bottle","RESTful API Web Services"]}/>
          


    </div>
  )
}



export default Experience
