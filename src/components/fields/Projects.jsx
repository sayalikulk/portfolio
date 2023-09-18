import React from 'react'
import ProjectCard from '../utils/ProjectCard'
import AlgoB from '../../images/AlgoB.jpeg'
import FWMS from  '../../images/FWMS.jpeg'
import MovieR from '../../images/MovieR.jpeg'
import SpendShare from '../../images/SpendShare.jpeg'

const Projects = () => {
  return (
  <div  id="projects" className='p-[50px] md:pt-[100px] md:pl-[100px]'>
  <h2 id="project-title" class="font-bold uppercase pb-[40px] text-[#01e2c7]">Projects</h2>   
  <ProjectCard
    project_title="Algo Trading Bot"
    project_description="Developed an automated trading system that harnessed NLP to identify trending stocks and ROCE for filtering, employing trading algorithms for buy/sell decisions. Constructed a trade management system using the Django framework, integrating it with the Alpaca API for mock trades and comprehensive back-testing of trading strategies. This project, while yielding valuable insights, humorously admitted to experiencing losses, serving as a rich learning experience in the world of algo trading."
    project_url="https://github.com/Bhavya-Ahir/Trading-Bot"

    tech_used={["Natural Language Processing (NLP)", "Data Science", "Data Analysis++"]}
    project_image={AlgoB}
/>



<ProjectCard
    project_title="Movie Recommendation System"
    project_description="Created a dynamic movie recommendation system through Collaborative filtering and K-Means clustering, delivering personalized viewing suggestions. Implemented seamless accessibility by deploying this machine learning model as a web application on PythonAnywhere via the Django Framework."
    project_url="https://github.com/Bhavya-Ahir/Movie-Recommendation-System"
    
    tech_used={["Machine Learning", "Django", "Django REST Framework"]}
    project_image={MovieR}
    
/>
<ProjectCard
    project_title="Food Waste Management System"
    project_description="
    Engineered a neural network model using YOLOv3 for real-time identification and classification of waste materials. Acquired a training dataset through Python web scraping and meticulously assigned individual labels using OpenLabelling, yielding a mean average precision of 95.7% and a prediction accuracy of 80%. Additionally, integrated inventory prediction techniques with smart dustbins, leveraging object detection to optimize raw material usage and reduce food waste. Implemented a SARIMAX model for precise inventory forecasting and time series analysis, enhancing inventory management efficiency."    
    project_url="https://github.com/Bhavya-Ahir/Public-Works"
    tech_used={["Deep Learning", "Image Classification"]}
    project_image={FWMS}
/>

<ProjectCard
    project_title="Spend & Share"
    project_description="Designed app to split expenses among friends. Users add bills, members; app calculates owed amounts. Simplifies financial sharing, automating owed calculations for seamless group expenses management."
    project_url="https://github.com/Bhavya-Ahir/SpendandShare"
    tech_used={["Java", "Android App Development", "Android Studio"]}
    project_image={SpendShare}
    
/>








</div>
  )
}

export default Projects