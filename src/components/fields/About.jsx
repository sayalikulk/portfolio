import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="p-[50px] md:pl-[100px] md:pr-[50px] md:py-[100px]"
    >
      <h2 id="about-title" class="font-bold uppercase pb-[20px] text-[#01e2c7]">About</h2>   
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Working as a Software Developer at 
        <a> </a>
        <a
          class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.jpmorganchase.com/"
          target="_blank"
          rel="noreferrer"
        >
          JPMorgan Chase, 
        </a>
        <a> </a>
        in Accounting and Regulatory reporting team, focused upon accounting of Trades, Valuations and Settlements, followed by generation and transmission of general ledger entries to financial controllers. 
        <a> </a>
      </p>
      <br></br>

      <p class="mb-4 class=mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        My primary focus nowadays revolves around augmenting my knowledge of
        financial products and furthering my grasp of computer science
        fundamentals. In my free time, I also try to contribute to open source.
      </p>
      <br></br>
      <p class="mb-4 class=mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        When I’m not at the computer, I’m usually reading, spending time with
        my friends, or painting.
      </p>
    </div>
  );
};

export default About;
