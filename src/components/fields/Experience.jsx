import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]'>
      <h2 class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="July 2021 - July 2023" role="Software Engineer" name="JPMorgan Chase & Co." description="Designed and implemented a Notional service using Python Bottle framework, serving seven systems and calculating critical intraday and end-of-the-day notional values for approximately 500K daily executed trades" skills={["Python","Optimization","Unit/Integration Testing", "Test Driven Development","Equity Derivatives","Equity Trading"]}/>
      <ExperienceCard timeline="Jan 2021 - July 2021" role="Software Engineer Intern" name="JPMorgan Chase & Co." description="Constructed an internal reconciliation system that generates and transfers daily end-of-day reports for 1.5M trade life-cycle events, ensuring accurate trade state and valuation data is available for business continuity
" skills={["Python","Bottle","RESTful API Web Services"]}/>
          
    </div>
  )
}

export default Experience
