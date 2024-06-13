import  './HeroStyles.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import behance from '../../assets/behance.svg';
import behanceD from '../../assets/behancedark.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const behanceIcon = theme === 'light' ? behance : behanceD;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img
          src={heroImg}
          className="hero"
          alt="Profile picture of Aman Rajput"
        />
        <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          Aman Rajput
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.behance.net/appysinghx8720" target="_blank">
            <img src={behanceIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Amansinghraj" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/aman-rajput99/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume!</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
