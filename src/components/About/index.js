import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id ='about'>Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className='my-2'>
      <p>
        about artist information will go here blah blah cool stuff blah bibbiddy 
        blooby blah stuff yep cool rad up and down jump all around stuff blah words 
        blah blah bah photos pictures cool stuff yep blah blah blah
      </p>
      </div>
    </section>
  )
}

export default About;