import React from 'react';
import './about.css';
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id='about'>
      <h5>Who am I?</h5>
      <h2>My Story</h2>

      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
<img src="{ME}" alt="About Image" />
</div>
        </div>

        <div className="about__content">
          
        </div>
      </div>
    </section>
  )
}

export default About