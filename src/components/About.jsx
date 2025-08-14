// import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import aboutText from '../assets/text';
import { curriculumVitae } from '../assets/links';
import Picture from '../assets/nathanNewAboutMe.jpg';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" style={{ backgroundColor: '#082567' }} 
    // className='jumbotron'
    >
      <div>
        <Fade delay={1e3}>
            <h2 className="section-title">About Me</h2>
        </Fade>
        <div className='aboutMeImageAndDescription' id="aboutSectionParentDiv" 
          style={{ 
            display: 'flex',
             margin: 'auto', 
             justifyContent: 'center', 
          }}
        >
          <div className='about-wrapper__image'>
            <img src={Picture.src} alt="Nathan Ellstrand's profile picture" />
          </div>
          {/* <Fade delay={1e3}> */}
            <div className="about-wrapper__info" >
              <p className="about-wrapper__info-text" style={{ textAlign: 'left', margin: '0 5%', whiteSpace: 'pre-line'}}>
                {aboutText}
              </p>
            </div>
          {/* </Fade> */}
        </div>
        <div style={{height: 100 }}></div>
        <p className='about-cta'>
          <span className="d-flex mt-3" style={{ margin: 'auto', justifyContent: 'center' }}>
            <a className="cta-btn cta-btn--cv" href={curriculumVitae} rel='noopener noreferrer' target='_blank'>
              CV
            </a>
          </span>   
        </p>
      </div>
    </section>
  );
};

export default About;
