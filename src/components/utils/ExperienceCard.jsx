import React from 'react'
import PropTypes from 'prop-types'

const ExperienceCard = props => {
    const { timeline, role, name, description, skills } = props;
    return (
        <div className='py-[20px]'>
            {/* <div class="max-w-sm w-full lg:max-w-full lg:flex hover:text-[#01e2c7] hover:border-[#ffffff1a] hover:rounded hover:bg-[#ffffff1a] transition-colors duration-200">
            <div class="p-4 h-48 lg:h-auto lg:w-48 flex-none text-slate-400 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"> {timeline}
            </div>
            <div class="p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                
                <div class=" hover:text-[#01e2c7] font-bold text-xl mb-2">{name}</div>
                <p class="text-gray-500 hover:text-gray-450 text-base">{description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {skills.map((skill, index) => {
                        return <span class="inline-block bg-[#ffffff1a] rounded-full px-3 py-1 text-sm font-semibold hover:text-[#01e2c7] mr-2 mb-2">{skill}</span>
                    })}
            
            </div>
            </div>
            </div> */}
            <div class="mb-12">
      <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#ffffff1a] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">{timeline}</header>
          <div class="z-10 sm:col-span-6">
            <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                      <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        
                        <span class="inline-block">
                            {name}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                      </span>
                  </a>
                </div>
                <div>
                  <div class="text-slate-500" aria-hidden="true">{role}</div>
                </div>
            </h3>
            <p class="mt-2 text-sm leading-normal">{description}</p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map((skill, index) => {
                        return <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}</div>
                      </li>
                    })}
            </ul>
          </div>
      </div>
    </div>
        </div>
    )
}

ExperienceCard.propTypes = {}

export default ExperienceCard


