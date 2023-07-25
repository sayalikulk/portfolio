import React from 'react'
import PropTypes from 'prop-types'

const ExperienceCard = props => {
    const { timeline, name, description, skills } = props;
    return (
        <div className='py-[20px]'>
            <div class="max-w-sm w-full lg:max-w-full lg:flex hover:text-[#01e2c7] hover:border-[#ffffff1a] hover:rounded hover:bg-[#ffffff1a] transition-colors duration-200">
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
            </div>
        </div>
    )
}

ExperienceCard.propTypes = {}

export default ExperienceCard


