/* eslint-disable prettier/prettier */
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { academia, email, linkedin, blueSky } from '../assets/links';
import academiaImage from '../assets/academia.svg';
import blueSkyImage from '../assets/Bluesky_Logo.svg';
import linkedinImage from '../assets/linkedin.png'

const Contact = () => {
  const networksArray = [
    {
      id: 1,
      name: blueSkyImage,
      url: blueSky
    },
    {
      id: 2,
      name: linkedinImage,
      url: linkedin
    },
    {
      id: 3,
      name: academiaImage,
      url: academia,
    },
  ];

  return (
    <section id="contact">
      <Container>
        <Fade delay={500} triggerOnce={true} >
            <h2 className="section-title">Contact</h2>
        </Fade>
        <div style={{ height: 100 }} />
        <Fade delay={500} triggerOnce={true} >
          <div className="contact-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--cv"
              href={`mailto:${email}`}
            >
              Email
            </a>
          </div>
        </Fade>

        <div style={{ height: 100 }} />
        <div className="social-links">
          {networksArray.map((network) => {
            const { id, name, url } = network;
            return (
              <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                 {
                  <img src={name.src} height={id==2? "80":"40"} width={id==2? "80":"40"} alt="contact icon" style={{marginRight:250}} />
                }
              </a>
            );
          })}
        </div>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
      </Container>
    </section>
  );
};

export default Contact;
