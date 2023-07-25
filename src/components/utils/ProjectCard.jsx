import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = props => {
    const { timeline, name, description, skills } = props;
    return (
        <div className='py-[20px]'>
            <div class="max-w-sm w-full lg:max-w-full lg:flex hover:border-[#141f38] hover:rounded hover:bg-[#141f38] transition-colors duration-200">
            <div class="p-4 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"> {timeline}
            </div>
            <div class="p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                
                <div class="text-white font-bold text-xl mb-2">{name}</div>
                <p class="text-gray-700 text-base">{description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {skills.map((skill, index) => {
                        return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
                    })}
            
            </div>
            </div>
            </div>
        </div>
    )
}

ExperienceCard.propTypes = {}

export default ExperienceCard