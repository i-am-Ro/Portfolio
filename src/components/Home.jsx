import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Hero from './Hero';

const Home = (props) => {
   const { islightmode } = props;

  return (
    <div className="overflow-x-hidden">
      <div id='home'>
        <Hero islightmode={islightmode} />
      </div>
      
      <About islightmode={islightmode} />
      <Projects islightmode={islightmode} />
      <Contact islightmode={islightmode} />
    </div>
  );
}

export default Home;
