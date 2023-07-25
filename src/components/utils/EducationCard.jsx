import React from 'react'
import PropTypes from 'prop-types'

const EducationCard = props => {
     {/* We can make description as courses and we probably dont need courses*/}
    const { timeline, name, description, courses } = props;
    return (
        <div className='py-[20px]'>
            <div class="max-w-sm w-full md:max-w-full md:flex hover:border-[#141f38] hover:rounded hover:bg-[#141f38] transition-colors duration-200">
            <div class="p-4 h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden"> {timeline}
            </div>
            <div class="p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                
                <div class="text-white font-bold text-xl mb-2">{name}</div>   
                <p class="text-gray-700 text-base">{description}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {courses.map((course, index) => {
                        return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course}</span>
                    })}
            
            </div>
            </div>
            </div>
        </div>
    )
}

EducationCard.propTypes = {}

export default EducationCard