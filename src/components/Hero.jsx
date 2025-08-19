import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import bg1 from '../assets/1enhanced1.jpg';
import bg2 from '../assets/2enhanced.jpg';
import bg3 from '../assets/4enhanced.jpg';
import bg4 from '../assets/Yucatan-transformed.jpeg';
import bg5 from '../assets/6enhanced1.jpg';
import bg6 from '../assets/CDMX-transformed.jpeg';
import bg7 from '../assets/Riverside-transformed.jpeg';
import bg8 from '../assets/San_Diego.jpg';
import bg9 from '../assets/Wilmette-transformed-enhanced.png';

import { curriculumVitae } from '../assets/links';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [image, setImage] = useState('');
  const [backgroundPosition, setBGp ] = useState('top'); 

  const imageStyle = isMobile? 
    {
      backgroundAttachment: 'initial',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${image.src})`

    }:
    {
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: `${backgroundPosition}`,
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${image.src})`
    };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    const random=Math.floor((Math.random()*9)+1);
    if (random===1) { setImage(bg1) }
    if (random===2) { setImage(bg2) }
    if (random===3) { setImage(bg3) }
    if (random===4) { setImage(bg4); setBGp('center bottom')}
    if (random===5) { setImage(bg5) }
    if (random===6) { setImage(bg6) }
    if (random===7) { setImage(bg7); setBGp('center bottom')}
    if (random===8) { setImage(bg8); setBGp('center bottom')}
    if (random===9) { setImage(bg9); setBGp('center bottom') }
  }, []);



  return (
    <section 
      id="hero" 
      className="jumbotron"
      style={imageStyle}
    >
      <Container style={{ alignItems: 'center' }} >
        {
          isMobile &&
          <header style={{ fontSize: 'calc(5px + 2vmin)', paddingTop: '2em', paddingBottom: 12, fontWeight: '200' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <a href='#about'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >About</p></a>
              <a href={curriculumVitae} rel='noopener noreferrer' target='_blank'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >CV</p></a>
              <a href='#contact'><p style={{ textShadow: '2px 0px 2px white, 0px 2px 2px white, -2px 0px 2px white, 0px -2px 2px white' }} >Contact</p></a>
            </nav>
          </header>
        }
        <Fade delay={700} triggerOnce={true} >
          <div style={{ marginTop: '15%' }}></div>
          <h1 className="hero-title" 
            style={{ 
              marginBottom: '15%', 
              textAlign: 'center' 
            }}
          >
            <span 
              className="text-color-main" 
              style={{ 
                textShadow: '3px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
              }}>
                Nathan Ellstrand
            </span>
            <br />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta" 
            style={{ 
              justifyContent: 'center',  
              color: 'black', 
              textShadow: '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
            }}
          >
            <span className="cta-btn cta-btn--hero"
              style={{ 
                boxShadow: '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
              }}
            >
              <Link to="about" smooth duration={1000}>
                Know more
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;