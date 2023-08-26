import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="p-[50px] md:pl-[100px] md:pr-[50px] md:py-[100px]"
    >
      <h2 id="about-title" class="font-bold uppercase pb-[20px] text-[#01e2c7]">About</h2>   
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Back in 2020, I worked on a project related to algorithmic trading,
        which introduced me to the fintech field—a passion I've held since. I
        began my career as a software developer for
        <a> </a>
        <a
          class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.jpmorganchase.com/"
          target="_blank"
          rel="noreferrer"
        >
          JPMorgan & Chase's
        </a>
        <a> </a>
        regulatory tech team, expanding my exposure and understanding of
        fintech. Fast-forward to today, I am pursuing a master's in
        <a> </a>
        <a
          class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Computer science
        </a>
        <a> </a>
        with a minor in
        <a> </a>
        <a
          class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          financial mathematics
        </a>
        <a> </a>, a decision driven by my eagerness to delve profoundly into
        this field.
      </p>
      <br></br>

      <p class="mb-4 class=mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        My primary focus nowadays revolves around augmenting my knowledge of
        financial products and furthering my grasp of computer science
        fundamentals. In my free time, I also try to contribute to open source.
      </p>
      <br></br>
      <p class="mb-4 class=mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        When I’m not at the computer, I’m usually trekking, spending time with
        my friends, or watching Formula One.
      </p>
    </div>
  );
};

export default About;
