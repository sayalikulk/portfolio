import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]'>
      <h2 id="experience-title" class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="July 2021 - July 2023" role="Software Engineer" name="JPMorgan Chase & Co." description=
"As a backend software developer at JPMorgan's Equities Markets technology team within the Corporate Investment Banking Line of Business, my role encompassed designing, developing, testing, and maintaining various trade life cycle functionalities. I was responsible for creating systems that managed booking, execution, confirmation, regulatory reporting, and trade settlement. My focus was on optimizing workflows to ensure time-critical systems operated with minimal delays, addressing bottlenecks proactively. Additionally, I actively participated in code reviews and collaborated with colleagues across different teams and lines of business to promote code reuse and prevent redundancy" skills={["Python","Optimization","Unit/Integration Testing", "Test Driven Development","Equity Derivatives","Equity Trading"]}/>
      <ExperienceCard timeline="Jan 2021 - July 2021" role="Software Engineer Intern" name="JPMorgan Chase & Co." description="Constructed an internal reconciliation system that generates and transfers daily end-of-day reports for 1.5M trade life-cycle events, ensuring accurate trade state and valuation data is available for business continuity
" skills={["Python","Bottle","RESTful API Web Services"]}/>
          
    </div>
  )
}



export default Experience
