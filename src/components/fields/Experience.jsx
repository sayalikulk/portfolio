import React from 'react'
import ExperienceCard from '../utils/ExperienceCard'

const Experience = () => {
  return (
    <div id="experience" className='p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]'>
      <h2 id="experience-title" class="font-bold uppercase pb-[20px] text-[#01e2c7]">Experience</h2>   
      <ExperienceCard timeline="July 2022 - Present" role="Software Engineer" name="JPMorgan Chase & Co." description=
"Working under ACM, a system responsible for the accounting of Trades, Valuations, Settlements along with Reg-reporting, my work entails contributing towards the migration activities of Equities Derivatives from the legacy upstream system, Pyramid to strategic system, Athena. I interact with the Business Analysts and across the team to understand and meet the development expectations as well as in Scenario Based and Prod-Parallel testing. Apart from development, I built Alteryx workflows to compare the legacy and strategic system output feeds crucial during end-to-end testing."
skills={["Java", "Spring Boot","Optimization","Unit/Integration Testing", "Test Driven Development"
]} href="https://www.jpmorganchase.com/"/>
      <ExperienceCard timeline="May 2021 - July 2021" role="Software Engineer Intern" name="SAP Labs India" description=
          "As an intern at SAP Labs India, I participated in manual testing activities and provided feedback which was incorporated in the test cases. I contributed towards landscape setup and test case documentation of Beta Readiness test, Security Validation and D-gate. I Worked closely with the testers outside the Quality team in setting up landscape and incorporated their feedback in the test cases"
          skills={["Postman","JUnit"]} href="https://www.sap.com/india/about/labs-india.html"/>
       <ExperienceCard timeline="May 2021 - April 2022" role="Undergraduate Research Assistant" name="Veermata Jijabai Technological Institute, Mumbai" description=
          "Implemented DeepFake detection for real-time scenarios under the mentorship of Dr. Faruk Kazi at CoE-CNDS Lab, VJTI. Researched upon bringing down the computational power/resources, substantially, by using an ensemble of low latency algorithms followed by temporal feature extraction using Video Vision Transformers"
          skills={["Python","Tensorflow"]} href="https://vjti.ac.in/"/>


    </div>
  )
}



export default Experience
