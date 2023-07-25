import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll'

const SectionScroll = (props) => {

  const scrollToAnchor = (anchor) => {
    const anchorElement = document.getElementById(anchor);

    if (anchorElement) {
      anchorElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

    const {name , link} = props;

    return (
      <Link className={name} to={link} spy={true} smooth={true} offset={0} duration={500}>
        <div class="group flex items-center py-2 active">
            
              <span class="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-[#01e2c7] group-focus-visible:w-16 group-focus-visible:bg-[#01e2c7]"></span>
              
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#01e2c7] group-focus-visible:text-[#01e2c7]">{name}</span>
              
            

        </div>
        </Link>
    )
}

export default SectionScroll