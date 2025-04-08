import { FaJs, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiFigma,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Serviços</h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              <div className="skill-card">
                <h2>Git</h2>
                <FaGitAlt className="icon" />
              </div>
              <div className="skill-card">
                <h2>JavaScript</h2>
                <FaJs className="icon" />
              </div>
              <div className="skill-card">
                <h2>TypeScript</h2>
                <SiTypescript className="icon" />
              </div>
              <div className="skill-card">
                <h2>React</h2>
                <FaReact className="icon" />
              </div>
              <div className="skill-card">
                <h2>React Native</h2>
                <TbBrandReactNative className="icon" />
              </div>
              <div className="skill-card">
                <h2>Next.js</h2>
                <TbBrandNextjs className="icon" />
              </div>
              <div className="skill-card">
                <h2>Node.js</h2>
                <FaNodeJs className="icon" />
              </div>
              <div className="skill-card">
                <h2>MongoDB</h2>
                <SiMongodb className="icon" />
              </div>
              <div className="skill-card">
                <h2>Postgresql</h2>
                <SiPostgresql className="icon" />
              </div>
              <div className="skill-card">
                <h2>Styled Components</h2>
                <SiStyledcomponents className="icon" />
              </div>
              <div className="skill-card">
                <h2>Tailwindcss</h2>
                <SiTailwindcss className="icon" />
              </div>
              <div className="skill-card">
                <h2>Figma</h2>
                <SiFigma className="icon" />
              </div>
              <div className="skill-card">
                <h2>Firebase</h2>
                <SiFirebase className="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
