import styles from './ProjectsStyles.module.css';
import todo from '../../assets/todo.png';
import qrcode from '../../assets/qrcode.jpg';
import card from '../../assets/cardstack.gif';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link="https://123siv.github.io/to-do/"
          h3="TO-DO"
          p="Streaming App"
        />
        <ProjectCard
          src={card}
          link="https://123siv.github.io/card/"
          h3="CARD"
          p="Glasses Shop"
        />
        <ProjectCard
          src={qrcode}
          link="https://123siv.github.io/QRcode-Genarator/"
          h3="QR CODE GENERATOT"
          p="Hamburger Restaurant"
        />
        
      </div>
    </section>
  );
}

export default Projects;
